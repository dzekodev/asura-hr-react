import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      homePage: {
        id: 'homPage',
        allowedRoles: [],
      },
      parametersPage: {
        id: 'parameters',
        allowedRoles: [roles.admin],
      },
      songsRead: {
        id: 'songsRead',
        allowedRoles: [roles.singer],
      },
      songsCreate: {
        id: 'songsCreate',
        allowedRoles: [roles.singer],
      },
      songsImport: {
        id: 'songsImport',
        allowedRoles: [roles.singer],
      },
      songsEdit: {
        id: 'songsEdit',
        allowedRoles: [roles.singer],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
