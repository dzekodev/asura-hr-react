const fr = {
  common: {
    or: 'ou',
    cancel: 'Annuler',
    create: 'Creee',
    reset: 'Réinitialiser',
    save: 'Sauvegarder',
    search: 'Recherche',
    edit: 'Modifier',
    exportdata: 'Exporter',
    editing: 'Editer',
    contest: 'Contester',
    publish: 'Publier',
    closing: 'Clôturer',
    duplicate: 'Dupliquer',
    archive: 'Archiver',
    cancelPub: 'Annuler la publication',
    remove: 'Supprimer',
    send: 'Envoyer',
    new: 'Nouveau',
    items: ' élements',
    export: 'Exporter en Excel',
    noDataToExport: 'Pas de données à exporter',
    import: 'Importer',
    discard: 'Jetez',
    yes: 'Oui',
    no: 'Non',
    all: 'Tout',
    pause: 'Pause',
    areYouSure: 'Êtes-vous sûr ?',
    areYouSureToValidate:
      "êtes vous sur de vouloir valider les demandes d'analyses sélectionnées ?",
    areYouSureToRefuse:
      "êtes vous sur de vouloir refuser les demandes d'analyses sélectionnées ?",
    view: 'Consulter',
    filters: 'Filtres',
    viewing: 'Voir',
    destroy: 'Supprimer',
    validate: 'Valider',
    refuse: 'Refuser',
    destroying: 'Supprimer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
    manager: 'Géstionnaire',
    general_information: 'Informations générales',
  },
  dictionary: {
    day: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
  },
  //App_Title
  app: {
    title: 'ASURA-HR',
    title_tag: 'ASURA - Humaines Ressources',
  },

  auth: {
    accountSeting: {
      title: 'Langue & Fuseau horaire',
    },
    menu: 'Paramétrage',
    profile: {
      title: 'Modifier le profil',
      success: 'Profil mis à jour avec succès',
    },
    editpassword: {
      title: 'Modifier le mot de passe',
      success: 'Mot de passe mis à jour avec succès',
      error: 'Mot de passe incorrect',
      errornewpassword:
        'Les mots de passes ne sont pas identiques',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Souvenez-vous de moi.',
    forgotPassword: 'Mot de passe oublié',
    signin: "S'identifier",
    signup: "S'inscrire",
    signout: 'Se déconnecter',
    alreadyUsed: 'Cette adresse email est déjà utilisée',
    form: {
      username_password_error:
        "Adresse mail ou mot de passe n'est pas correcte",
    },
    alreadyHaveAnAccount:
      'Vous avez déjà un compte ? Connectez-vous.',
    signinWithAnotherAccount:
      'Vous avez déjà un compte ? Connectez-vous.',
    emailUnverified: {
      message: `Veuillez confirmer votre courriel à <strong>{0}</strong> pour continuer.`,
      submit: `Renvoyer la vérification de l'email`,
      sendCode: 'Envoyer le Code',
    },
    emptyPermissions: {
      message: `Vous n'avez pas encore d'autorisations. Attendez que l'administrateur vous accorde des privilèges`,
    },
    passwordReset: {
      message: 'Réinitialiser le mot de passe',
      message1: 'Renvoyer le code',
      error: `Courriel non reconnu`,
      enterCode: 'Saisissez le code',
      errorIdentical:
        'les mots de passe ne sont pas identique',
    },
    emailAddressVerificationEmail: {
      error: `Le code saisi n'est pas valide`,
    },
    verificationEmailSuccess: `Courriel de vérification envoyé avec succès`,
    alreadyActive: 'Le compte est deja activé',
    passwordResetSuccess: `Un mail de réinitialisation du mot de passe envoyé avec succès`,
    passwordResetDoneSuccess: `Le mot de passe a été bien réinitialisé`,
  },

  Home: {},

  roles: {
    user: {
      label: 'utilisateur',
      description: 'Accès complet à toutes les ressources',
    },
    editor: {
      label: 'Rédacteur en chef',
      description:
        "Modifier l'accès à toutes les ressources",
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars_url: 'Avatar',
      email: 'Adresse mail',
      emails: 'Adresses mail(s)',
      fullName: 'Nom',
      name: "Nom d'utilisateur",
      active: 'Activé ?',
      firstName: 'Prénom',
      lastName: 'Nom',
      status: 'Statut',
      disabled: 'Desactivé ?',
      phoneNumber: 'Téléphone',
      role: 'Rôle',
      created_at: 'Crée le',
      updatedAt: 'Mise à jour le',
      roleUser: 'Rôle utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Crée le',
      password: 'Mot de passe',
      newpassword: 'Nouveau mot de passe',
      confirmPassword: 'Confirmation de mot de passe',
      confirm_password: 'Confirmation de mot de passe',
      phone: 'Telephone',
      rememberMe: 'Se souvenir de moi',
      language: 'Langue',
      timezone: 'Fuseau horaire',
      placeholder: {
        timezone: 'Sélectionnez un fuseau horaire',
      },
      provider: 'Laboratoire',
    },
    name: 'Utilisateurs',
    label: 'Utilisateurs',
    menu: 'Utilisateurs',
    exporterFileName: 'user_export',
    list: {
      menu: 'Utilisateurs',
      title: 'Utilisateurs',
    },
    create: {
      success: 'Utilisateur crée avec succès',
    },
    update: {
      success: 'Utilisateur modifé avec succès',
    },
    destroy: {
      success: 'Utilisateur supprimé avec success',
    },
    destroyAll: {
      success: 'Utilisateurs supprimés avec succès',
    },
    edit: {
      title: 'Modifier un utilisateur',
    },
    new: {
      title: 'Nouveau utilisateur',
    },
    view: {
      title: 'Consulter un loboratoire',
    },
    importer: {
      title: 'Importer en masse les utilisateurs',
      fileName: 'provider_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
    },
  },

  color: {
    fields: {
      id: 'Id',
      code: 'Code hexadécimal',
      name: 'Nom',
    },
    name: 'Couleurs',
    label: 'Couleurs',
    menu: 'Couleurs',
    exporterFileName: 'color_export',
    list: {
      menu: 'Couleurs',
      title: 'Couleurs',
    },
    create: {
      success: 'Couleur crée avec succès',
    },
    update: {
      success: 'Couleur modifée avec succès',
    },
    destroy: {
      success: 'Couleur supprimée avec success',
    },
    destroyAll: {
      success: 'Couleurs supprimées avec succès',
    },
    edit: {
      title: 'Modifier une couleur',
    },
    new: {
      title: 'Nouvelle couleur',
    },
    view: {
      title: 'Consulter une couleur',
    },
    importer: {
      title: 'Importer en masse les Couleurs',
      fileName: 'color_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },

  settings: {
    title: 'Réglages',
    menu: 'Réglages',
    save: {
      success:
        'Réglages enregistrés avec succès. La page se rechargera dans {0} secondes pour que les changements prennent effet.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },

  home: {
    menu: 'Accueil',
    dashboard: 'Dashboard',
    parameters: 'Paramétrage',
    message: `Bienvenue sur le dashboard de la plateforme, cette fonctionnalité sera mise en ligne très prochainement`,
    charts: {
      day: 'Journée',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      sales: 'Ventes',
      visitor: 'Visiteurs',
      months: {
        1: 'Janvier',
        2: 'Février',
        3: 'Mars',
        4: 'Avril',
        5: 'Mai',
        6: 'Juin',
        7: 'Juillet',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },

  live: {
    menu: 'Live',
  },

  errors: {
    backToHome: 'Retour à l Accueil',
    403: `Désolé, vous n'avez pas accès à cette page`,
    404: "Désolé, la page que vous avez visitée n'existe pas",
    500: 'Désolé, le serveur signale une erreur',
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: 'Une erreur est survenue',
    },
    defaultErrorMessage: 'Ops, Une erreur est survenue',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} est invalide',
      required: '${path} est exigé',
      oneOf:
        "${path} doit être l'une des valeurs suivantes :  ",
      notOneOf:
        "${path} ne doit pas être l'une des valeurs suivantes : ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} doit être un ${type}`;
      },
    },
    string: {
      length:
        '${path} doivent être exactement des caractères ',
      min: '${path} doit être au moins ${min} characters',
      max: '${path} doit être au maximum ${max} characters',
      matches:
        '${path} doit correspondre à ce qui suit : "${regex}"',
      email: '${path} doit être un email valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une corde coupée',
      lowercase:
        '${path} doit être une chaîne en minuscules',
      uppercase:
        '${path} doit être une chaîne en majuscules',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieure ou égale à ',
      max: '${path} doit être inférieure ou égale à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieure à ${more}',
      notEqual:
        '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} doit être un nombre positif',
      negative: '${path} doit être un nombre négatif',
      integer: '${path} doit être un nombre entier',
    },
    date: {
      min: '${path} Le champ doit être postérieur à ${min}',
      max: '${path}  le champ doit être à une date antérieure à ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} Le champ ne peut pas avoir de clés non spécifiées dans la forme de l'objet",
    },
    array: {
      min: '${path} Le champ doit avoir au moins ${min} items',
      max: "${path} Le champ doit avoir un nombre d'éléments inférieur ou égal à ${max}.",
    },
  },

  /* eslint-disable */
  fileUploader: {
    upload: 'Télécharger',
    image: 'Vous devez télécharger une image',
    size: 'Le dossier est trop gros. La taille maximale autorisée est {0}',
    formats: `Format non valide. Doit être '{0}'.`,
  },

  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'En attente',
    imported: 'Imported',
    error: 'Erreur',
    total: `{0} impo removed successfully',
  },
  roles: {
    label: 'Roles',
    doRemoveAllSelectedSuccess:
      rted, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default fr;
