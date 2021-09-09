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
      
      customersRead: {
        id: 'customersRead',
        allowedRoles: [roles.admin],
      },
      customersCreate: {
        id: 'customersCreate',
        allowedRoles: [roles.admin],
      },
      customersImport: {
        id: 'customersImport',
        allowedRoles: [roles.admin],
      },
      customersEdit: {
        id: 'customersEdit',
        allowedRoles: [roles.admin],
      },
      
      
      needsRead: {
        id: 'needsRead',
        allowedRoles: [roles.admin],
      },
      needsCreate: {
        id: 'needsCreate',
        allowedRoles: [roles.admin],
      },
      needsImport: {
        id: 'needsImport',
        allowedRoles: [roles.admin],
      },
      needsEdit: {
        id: 'needsEdit',
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
