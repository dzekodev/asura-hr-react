import { getStore } from 'modules/store';
import config from 'config';

export default class UploadFile {
  static validate(file, schema) {
    return true;
  }

  static getRandomString(length) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
    }
    return result;
  }

  static async uploadFromRequest(
    path,
    request,
    schema,
    onSuccess,
    onError,
  ) {
    try {
      this.validate(request.file, schema);
    } catch (error) {
      request.onError(error);
      onError(error);
      return;
    }
    var arabic = /[\u0600-\u06FF]/;

    let token = getStore().getState().auth.jwt_token;
    let user_id = getStore().getState().auth.currentUser.id;

    const files = request.file;
    var fileName = files.name;
    if (arabic.test(files.name)) {
      fileName = this.getRandomString(8);
    }

    const formData = new FormData();
    formData.append('file', files);
    var pathFormater =
      '/' +
      user_id +
      '/' +
      path +
      fileName
        .replace(/\s/g, '')
        .replace(/-/g, '_')
        .toLowerCase();

    let response = await fetch(
      `${config.storageApi}/upload`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          path: pathFormater,
        },
        method: 'POST',

        body: formData,
      },
    );

    let data = await response.json();
    request.onSuccess();

    onSuccess(data);
  }
  static async getPath(avatar) {
    if (avatar == null) {
      return null;
    } else if (avatar.key) {
      let token = getStore().getState().auth.jwt_token;

      let res = await fetch(
        `${config.storageApi}/fn/get-download-url/${avatar.key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      let newToken = await res.json();

      if (avatar && avatar.token) {
        return `${config.storageApi}/file/${avatar.key}?token=${newToken.token}`;
      } else {
        return '';
      }
    }
  }

  static async deleteFile(file) {
    let token = getStore().getState().auth.jwt_token;
    let response = await fetch(
      `${config.storageApi}/file/${file.key}?token=${file.token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      },
    );
  }
}
