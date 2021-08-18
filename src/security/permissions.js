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
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
