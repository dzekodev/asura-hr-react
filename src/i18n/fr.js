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
    title: 'Soil Analysis',
    title_tag: 'Soil Analysis - Al Moutmir',
  },
  provider: {
    name: 'Laboratoires',
    label: 'Laboratoires',
    menu: 'Laboratoires',
    exporterFileName: 'provider_export',
    list: {
      menu: 'Laboratoires',
      title: 'Laboratoires',
    },
    create: {
      success: 'Laboratoire crée avec succès',
    },
    update: {
      success: 'Laboratoire modifé avec succès',
    },
    destroy: {
      success: 'Laboratoire supprimé avec success',
    },
    destroyAll: {
      success: 'Laboratoires supprimés avec succès',
    },
    edit: {
      title: 'Modifier un laboratoire',
    },
    fields: {
      id: 'id',
      code: 'Code',
      name_fr: 'Nom FR',
      name_ar: 'Nom AR',
      email: 'Email',
      phone_number: 'N° Téléphone',
      enabled: 'Activé',
      weekly_analysis_capacity:
        "Capacité d'analyse hebdomadaire",
      available_capacity: 'Capacité disponible (%)',
      administrative_zones: 'Provinces couvertes',
      init_value: "Dernièr numéro d'analyse de sol",
    },
    new: {
      title: 'Nouveau laboratoire',
    },
    view: {
      title: 'Consulter un loboratoire',
    },
    importer: {
      title: 'Importer en masse les laboratoires',
      fileName: 'provider_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  agronomist: {
    name: 'Agronomes',
    label: 'Agronomes',
    menu: 'Agronomes',
    exporterFileName: 'agronomist_export',
    list: {
      menu: 'Agronomes',
      title: 'Agronomes',
    },
    create: {
      success: 'Agronome crée avec succès',
    },
    update: {
      success: 'Agronome modifé avec succès',
    },
    destroy: {
      success: 'Agronome supprimé avec success',
    },
    destroyAll: {
      success: 'Agronomes supprimés avec succès',
    },
    edit: {
      title: 'Modifier un laboratoire',
    },
    fields: {
      id: 'id',
      agri_agent_user_id: 'Agri Agent Id',
      administrative_zones: 'Communes couvertes',
      user: 'Utilisateur',
      first_name_fr: 'Prénom (FR)',
      last_name_fr: 'Nom (FR)',
      az3_name_fr: 'Région',
      az2_name_fr: 'Province',
      az1_name_fr: 'Commune',
      u_first_name: 'Prénom',
      u_last_name: 'Nom',
      ag_phone_number: 'Téléphone',
    },
    new: {
      title: 'Nouveau agronome',
    },
    view: {
      title: 'Consulter un agronome',
    },
    importer: {
      title: 'Importer en masse les agronomes',
      fileName: 'agronomist_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  analysis_request: {
    name: "Demandes d'analyses",
    refuse_selected_row:
      "Êtes vous sur de vouloir refuser les demandes d'analyses sélectionnées ?",
    cancellation_reason: 'Saisissez la raison de refus',
    refuse_selected_row_title:
      "Veuillez saisir la raison de refus des demandes d'analyses pour pouvoir refuser.",
    label: "Demandes d'analyses",
    menu: "Demandes d'analyses",
    sample: 'Echantillon',
    mustSelectARow:
      "Vous devez sélectionner un ensemble d'échantillons prélevés",
    exporterFileName: 'analysis_request_export',
    list: {
      menu: "Demandes d'analyses",
      title: "Demandes d'analyses",
    },
    analysis: {
      success: "Résultat d'analye terminée",
    },
    history: 'Historiques des opérations',
    create: {
      success: "Demande d'analyse crée avec succès",
    },
    update: {
      success: "Demande d'analyse modifée avec succès",
    },
    destroy: {
      success: "Demande d'analyse supprimée avec success",
    },
    destroyAll: {
      success: "Demandes d'analyses supprimées avec succès",
    },
    validateAll: {
      success: "Demandes d'analyses validées avec succès",
    },
    edit: {
      title: "Modifier une demande d'analyse",
    },

    fields: {
      id: 'id',
      uuid: 'Numéro',
      farmer: 'Agriculteur',
      provider: 'Laboratoire',
      plot: 'Parcelle',
      crop: 'Culture objective',
      irrigation_system: "Système d'irrigation",
      user: 'Agronome',
      status: 'Statut',
      status_date: 'Date du statut',
      created_at: 'Demandé le',
      content: 'Rasion de refus',
      yield: 'Rendement objectif',
      density: 'Densite (Hectare)',
      age_plant: 'Age des arbres',
      arbo_distance: 'Ecartement entre arbres (m)',
      arbo_distance_same_line: 'Ecartement entre ligne (m)',
      administrative_zone: 'Commune',
    },
    new: {
      title: "Nouvelle demande d'analyse",
      title_bulk: "Nouvelles demande d'analyses",
      areYouSure:
        "Vous êtes sur de vouloir créer les demandes d'analyses pour parcelles selectionnées",
    },
    view: {
      title: "Consulter une demande d'analyse",
    },
    importer: {
      title: "Importer en masse les demandes d'analyses",
      fileName: 'analysis_request_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  analysis: {
    name: "Résultats d'analyses",
    refuse_selected_row:
      "Êtes vous sur de vouloir refuser les Résultats d'analyses sélectionnées ?",
    cancellation_reason:
      'Saisissez la raison de contestation',
    refuse_selected_row_title:
      "Veuillez saisir la raison de refus des Résultats d'analyses pour pouvoir refuser.",
    label: "Résultats d'analyses",
    menu: "Résultats d'analyses",
    mandatory_params: 'Paramètres obligatoires',
    optional_params: 'Paramètres optionels',
    download_repport: 'Télécharger le rapport',
    areYouSure:
      "Êtes vous sur de vouloir envoyer les Résultats d'analyses sélectionnées à l'EAS?",
    sample: 'Echantillon',
    progress: 'Avancement saisi résultats (%)',
    send_to_ocp: "Envoyer à l'EAS",
    mustSelectARow:
      "Vous devez sélectionner un ensemble d'échantillons prélevés",
    exporterFileName: 'analyse_export',
    list: {
      menu: "Résultats d'analyses",
      title: "Résultats d'analyses",
    },
    common: {
      validate_all: 'Valider les résultats',
      refuse_all: 'Contester les résultats',
      refus: 'Raion de contestation',
    },
    history: 'Historiques des opérations',
    create: {
      success: "Résultat d'analyse crée avec succès",
    },
    update: {
      success: "Résultat d'analyse modifée avec succès",
    },
    send: {
      success:
        "Résultats d'analyses envoyées à L'EAS avec succès",
    },
    destroy: {
      success: "Résultat d'analyse supprimée avec success",
    },
    destroyAll: {
      success:
        "Résultats d'analyses supprimées avec succès",
    },
    validateAll: {
      success: "Résultats d'analyses validées avec succès",
    },
    edit: {
      title: "Modifier une résultat d'analyse",
    },

    fields: {
      id: 'id',
      reference: 'Référence',
      farmer: 'Agriculteur',
      provider: 'Laboratoire',
      plot: 'Nom de la parcelle',
      crop: 'Culture objective',
      administrative_zone: 'Commune',
      agronomist: 'Agronome',
      irrigation_system: "Système d'irrigation",
      plotGeoCode: 'Coordonnées Géographique',
      user: 'Agronome',
      status: 'Statut',
      farmerAr: 'الفلاح',
      farmer_first_name_fr: 'Prenom Agriculteur Fr',
      farmer_last_name_fr: 'Nom Agriculteur Fr',
      farmer_first_name_ar: 'Prenom Agriculteur Ar',
      farmer_last_name_ar: 'Nom Agriculteur Ar',
      farmerCIN: 'CIN Agriculteur',
      farmerPhone: 'Telephone Agriculteur ',

      latitude: 'Latitude',
      longitude: 'Longitude',
      plot_area: 'Superficie',
      plot_code: 'code AGRI AGENT',
      analysis_date: "Date d'analyse",
      administrative_zone_code: 'Code commune',
      province: 'Province',
      created_at: 'Demandé le',
      content: 'Rasion de contestation',
      uuid: 'Code',
      coarse_element: '‫‪Element‬‬‬s grossier‬s',
      sand: 'Sable',
      clay: '‫‪Argile‬‬',
      silt: '‫‪Limon‬‬',
      beat_index: 'Indice de battance',
      ph_water: 'pH eau',
      ph_kcl: 'pH kcl',
      caco3_actif: 'Calcaire‬‬ ‫‪actif‬‬',
      caco3_total: 'Calcaire‬‬ ‫‪total',
      cec: "‫‪‫d'échange‬ ‫Capacité‬‬‪ Cationique‬‬",
      ec: 'EC Ext1/5**',
      nao: 'Na2O',
      cl: 'Cl',
      esp: '‫‪ESP‬‬',
      organic_material: 'Matière organique',
      organic_nitrogen: 'Azote Organique',
      c_n: 'Coefficient C/N',
      p: 'P2O5_échangeable',
      k: 'K2O_échangeable',
      magnesia: 'MgO',
      cao: 'CaO',
      manganese: 'Manganèse',
      iron: 'Fer',
      zinc: 'Zinc',
      copper: 'Cuivre',
      bore: 'Bore',
      ipc: 'IPC',
      texture: 'Texture',
      sample: 'Échantillon',
    },
    new: {
      title: "Nouvel résultat d'analyse",
    },
    view: {
      title: "Consulter une résultat d'analyse",
    },
    importer: {
      title: "Importer en masse les Résultats d'analyses",
      fileName: 'analysis_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  sample: {
    name: 'Échantillons',
    title: 'Échantillon ',
    refuse_selected_row:
      "Êtes vous sur de vouloir refuser l'échnatillon sélectionné ?",
    cancellation_reason: 'Saisissez la raison de refus',
    refuse_selected_row_title:
      'Veuillez saisir la raison de refus et cliquer sur refuser.',
    label: 'Échantillons',
    menu: 'Échantillons',
    sample: 'Echantillon',

    exporterFileName: 'sample_export',
    list: {
      menu: 'Échantillons',
      title: 'Échantillons',
    },
    history: 'Historiques des opérations',
    common: {
      create: 'Créer un echantillon',
      generate: 'Generer une ticket',
      refus: 'Refuser un échantillon',
      refuse: "Refuser l'échantillon",
      validate: "Réceptionner l'échantillon",
      validate_all: 'Réceptionner les échantillons',
      create_series: 'Créer une sérié',
    },
    add_analysis: "Ajouter/Modifer un résultat d'analyse",
    create: {
      success: 'Echantillon crée avec succès',
    },
    affect: {
      success:
        'Echantillon envoyé au laboratoire avec succès',
    },
    validate: {
      success:
        'Les échantillons séléctionnées ont été bien réceptionnés',
    },
    refuse: {
      success: 'Echantillon refuser',
    },
    update: {
      success: 'Echantillon modifé avec succès',
    },
    destroy: {
      success: 'Echantillon supprimé avec success',
    },
    destroyAll: {
      success: 'Echantillon supprimés avec succès',
    },
    validateAll: {
      success: 'Echantillons validés avec succès',
    },
    edit: {
      title: 'Modifier un échantillon',
    },

    fields: {
      id: 'id',
      analysis_request: "Demande d'analyse",
      created_by: 'Prélevé par',
      code: 'Numéro',
      sampling_date: 'Date de prélèvement',
      status: 'Statut',
      status_date: 'Date de statut',
      created_at: 'Crée le',
      horizon: 'Horizon',
      provider: 'Laboratoire',
      content: 'Raison de refus',
      expected_filing_date: 'Date prévu de dépôt',
      receipt_effective_date: 'Date de récéption effective',
      administrative_zone: 'Commune',
      plot: 'Parcelle',
      code_analysis_request: "Numéro demande d'analayse",
      code_sample: "Numéro d'échantillon",
      farmer: 'Agriculteur',
      crop: 'Culture',
    },
    new: {
      title: 'Nouvel échantillon',
    },
    sendToProvider: 'Envoyer au laboratoire',
    view: {
      title: 'Consulter un échnatillon',
    },
    importer: {
      title: 'Importer en masse les échnatillons',
      fileName: 'sample_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  crop_administrative_zone_config: {
    name: 'Quotas',
    label: 'Quotas',
    menu: 'Quotas',
    exporterFileName:
      'crop_administrative_zone_config_export',
    list: {
      menu: 'Quotas',
      title: 'Quotas',
    },
    create: {
      success: 'Quota crée avec succès',
    },
    update: {
      success: 'Quota modifé avec succès',
    },
    destroy: {
      success: 'Quota supprimé avec success',
    },
    destroyAll: {
      success: 'Quota supprimés avec succès',
    },
    edit: {
      title: 'Modifier un quota',
    },
    fields: {
      id: 'id',
      quota: 'Quota',
      administrative_zone: 'Province',
      crop: 'Groupe de culture',
      consumed_quota: 'Quota consommé',
    },
    new: {
      title: 'Nouveau quota',
    },
    view: {
      title: 'Consulter un quota',
    },
    importer: {
      title: 'Importer en masse les quotas',
      fileName:
        'crop_administrative_zone_config_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
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
  expression: {
    fields: {
      id: 'Id',
      label: 'Libellé',
      query: 'Requête SQL',
    },
    name: 'Expressions',
    label: 'Expressions',
    menu: 'Expressions',
    exporterFileName: 'expression_export',
    list: {
      menu: 'Expressions',
      title: 'Expressions',
    },
    create: {
      success: 'Expression crée avec succès',
    },
    update: {
      success: 'Expression modifée avec succès',
    },
    destroy: {
      success: 'Expression supprimée avec success',
    },
    destroyAll: {
      success: 'Expressions supprimées avec succès',
    },
    edit: {
      title: 'Modifier une expression',
    },
    new: {
      title: 'Nouvelle expression',
    },
    view: {
      title: 'Consulter une expression',
    },
    importer: {
      title: 'Importer en masse les Expressions',
      fileName: 'expression_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },
  },
  farmer: {
    fields: {
      id: 'Id',
      email: 'Adresse mail',
      fullName: 'Nom',
      name: "Nom d'Agriculteur",
      first_name_fr: 'Prénom (FR)',
      last_name_fr: 'Nom (FR)',
      first_name_ar: 'Prénom  (AR)',
      last_name_ar: 'Nom  (AR)',
      phone_number: 'Téléphone',
      national_identity_number: 'Numéro de carte nationale',
    },
    name: 'Agriculteurs',
    label: 'Agriculteurs',
    menu: 'Agriculteurs',
    exporterFileName: 'farmer_export',
    list: {
      menu: 'Agriculteurs',
      title: 'Agriculteurs',
    },
    create: {
      success: 'Agriculteur crée avec succès',
    },
    update: {
      success: 'Agriculteur modifé avec succès',
    },
    destroy: {
      success: 'Agriculteur supprimé avec success',
    },
    destroyAll: {
      success: 'Agriculteurs supprimés avec succès',
    },
    edit: {
      title: 'Modifier un agriculteur',
    },
    new: {
      title: 'Nouveau agriculteur',
    },
    view: {
      title: 'Consulter un agriculteur',
    },
    importer: {
      title: 'Importer en masse les Agriculteurs',
      fileName: 'farmer_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
    },
  },
  param: {
    fields: {
      id: 'Id',
      npk_code: 'Code service NPK',
      code: 'Code',
      symbol: 'Symbole',
      unit: 'Unité',
      name_fr: 'Nom fr',
      name_ar: 'Nom ar',
      max_value: 'Valeur maximum',
      min_value: 'Valeur minimum',
      mandatory: 'Obligatoire ?',
      interpolated: 'interpolé ?',
      computed: 'Calculé ?',
    },
    name: "Paramètres d'analyse",
    label: "Paramètres d'analyse",
    menu: "Paramètres d'analyse",
    exporterFileName: 'param_export',
    list: {
      menu: "Paramètres d'analyse",
      title: "Paramètres d'analyse",
    },
    create: {
      success: 'Paramètre crée avec succès',
    },
    update: {
      success: 'Paramètre modifé avec succès',
    },
    destroy: {
      success: 'Paramètre supprimé avec success',
    },
    destroyAll: {
      success: 'Paramètres supprimés avec succès',
    },
    edit: {
      title: 'Modifier un paramètre',
    },
    new: {
      title: 'Nouveau paramètre',
    },
    view: {
      title: "Consulter un paramètre d'analyse",
    },
    importer: {
      title: 'Importer en masse les Paramètres',
      fileName: 'param_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
    },
  },
  param_comment: {
    fields: {
      id: 'Id',
      param: 'Paramètre',
      expression: 'Expression',
      comment: 'Commentaire',
      irrigation_system: "Système d'irrigation",
      horizon: 'Horizon',
      crops: 'Cultures',
    },
    name: 'Lectures de résultat',
    label: 'Lectures de résultat',
    menu: 'Lectures de résultat',
    exporterFileName: 'param_export',
    list: {
      menu: 'Lectures de résultat',
      title: 'Lectures de résultat',
    },
    create: {
      success: 'Lecture de résultat crée avec succès',
    },
    update: {
      success: 'Lecture de résultat modifée avec succès',
    },
    destroy: {
      success: 'Lecture de résultat supprimée avec success',
    },
    destroyAll: {
      success:
        'Lectures de résultat supprimées avec succès',
    },
    edit: {
      title: 'Modifier une lecture de resultat',
    },
    new: {
      title: 'Nouvelle lecture de resultat',
    },
    view: {
      title: 'Consulter une lecture de resultat',
    },
    importer: {
      title: 'Importer en masse les lectures de resultat',
      fileName: 'param_comment_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
    },
  },
  label: {
    fields: {
      id: 'Id',
      name_fr: 'Nom fr',
    },
    name: 'Libellés',
    label: 'Libellés',
    menu: 'Libellés',
    exporterFileName: 'label_export',
    list: {
      menu: 'Libellés',
      title: 'Libellés',
    },
    create: {
      success: 'Libellé crée avec succès',
    },
    update: {
      success: 'Libellé modifé avec succès',
    },
    destroy: {
      success: 'Libellé supprimé avec success',
    },
    destroyAll: {
      success: 'Libellés supprimés avec succès',
    },
    edit: {
      title: 'Modifier un libellé',
    },
    new: {
      title: 'Nouveau libellé',
    },
    view: {
      title: "Consulter un libellé d'analyse",
    },
    importer: {
      title: 'Importer en masse les Libellés',
      fileName: 'label_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
    validations: {
      // eslint-disable-next-line
      email: 'Adresse mail ${value} invalide',
    },
  },
  crop: {
    fields: {
      id: 'Id',
      code: 'Code',
      level: 'Niveau',
      name_fr: 'Nom fr',
      name_ar: 'Nom ar',
      enabled: 'Activée ?',
      slug: 'Code Genarateur PDF',
      crop: 'Groupe de culture',
    },
    name: 'Cultures',
    label: 'Cultures',
    menu: 'Cultures',
    exporterFileName: 'crop_export',
    list: {
      menu: 'Cultures',
      title: 'Cultures',
    },
    create: {
      success: 'Culture crée avec succès',
    },
    update: {
      success: 'Culture modifée avec succès',
    },
    destroy: {
      success: 'Culture supprimée avec success',
    },
    destroyAll: {
      success: 'Cultures supprimées avec succès',
    },
    edit: {
      title: 'Modifier une culture',
    },
    new: {
      title: 'Nouvelle culture',
    },
    view: {
      title: 'Consulter une culture',
    },
    importer: {
      title: 'Importer en masse les Cultures',
      fileName: 'crop_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },
  plot: {
    fields: {
      id: 'Id',
      code: 'Code Agri Agent',
      name: 'Nom',
      latitude: 'Latitude',
      longitude: 'Longitude',
      slug: 'Code Genarateur PDF',
      farmer: 'Agriculteur',
      administrative_zone: 'Commune',
      geocode_values: 'Traçage de la parcelle sur carte',
      area: 'Superficie (Ha)',
      farmer_first_name_fr: 'Prenom Fr',
      farmer_last_name_fr: 'Nom Fr',
      farmer_first_name_ar: 'Prenom Ar',
      farmer_last_name_ar: 'Nom Ar',
      farmer_cin: 'CIN',
      farmer_phone_number: 'Téléphone',
    },
    name: 'Parcelles',
    label: 'Parcelles',
    menu: 'Parcelles',
    exporterFileName: 'plot_export',
    list: {
      menu: 'Parcelles',
      title: 'Parcelles',
    },
    create: {
      success: 'Parcelle crée avec succès',
    },
    update: {
      success: 'Parcelle modifée avec succès',
    },
    destroy: {
      success: 'Parcelle supprimée avec success',
    },
    destroyAll: {
      success: 'Parcelles supprimées avec succès',
    },
    edit: {
      title: 'Modifier une parcelle',
    },
    new: {
      title: 'Nouvelle parcelle',
    },
    view: {
      title: 'Consulter une parcelle',
    },
    importer: {
      title: 'Importer en masse les Parcelles',
      fileName: 'plot_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
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
  administrative_zone: {
    fields: {
      id: 'Id',
      code: 'Code',
      level: 'Niveau',
      name_fr: 'Nom fr',
      name_ar: 'Nom ar',
      enabled: 'Activée ?',
      slug: 'Code Genarateur PDF',
    },
    name: 'Zone administratives',
    label: 'Zone administratives',
    menu: 'Zone administratives',
    exporterFileName: 'administrative_zone_export',
    list: {
      menu: 'Zone administratives',
      title: 'Zone administratives',
    },
    create: {
      success: 'Zone administrative crée avec succès',
    },
    update: {
      success: 'Zone administrative modifée avec succès',
    },
    destroy: {
      success: 'Zone administrative supprimée avec success',
    },
    destroyAll: {
      success:
        'Zone administratives supprimées avec succès',
    },
    edit: {
      title: 'Modifier une zone administrative',
    },
    new: {
      title: 'Nouvelle zone administrative',
    },
    view: {
      title: 'Consulter une zone administrative',
    },
    importer: {
      title: 'Importer en masse les Zone administratives',
      fileName: 'administrative_zone_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },
  horizon: {
    fields: {
      id: 'Id',
      code: 'Code',
      name_fr: 'Nom fr',
      enabled: 'Activée ?',
    },
    name: 'Irrigation_systems',
    label: 'Horizons',
    menu: 'Horizons',
    exporterFileName: 'horizon_export',
    list: {
      menu: 'Horizons',
      title: 'Horizons',
    },
    create: {
      success: 'Horizon crée avec succès',
    },
    update: {
      success: 'Horizon modifé avec succès',
    },
    destroy: {
      success: 'Horizon supprimé avec success',
    },
    destroyAll: {
      success: 'Horizons supprimés avec succès',
    },
    edit: {
      title: 'Modifier un horizon',
    },
    new: {
      title: 'Nouvel horizon',
    },
    view: {
      title: 'Consulter un horizon',
    },
    importer: {
      title: 'Importer en masse les Horizons',
      fileName: 'horizon_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },
  series: {
    fields: {
      id: 'Id',
      uuid: 'Code',
      created_at: 'Crée le',
      status: 'Statut',
      provider: 'Laboratoire',
      content: 'Raison de refus',
    },
    name: 'Séries',
    label: 'Séries',
    menu: 'Séries',
    exporterFileName: 'series_export',
    list: {
      menu: 'Séries',
      title: 'Séries',
    },
    common: {
      refus: 'Refus de la série',
    },
    create: {
      success: 'Echantillon(s) bien reçu ',
    },
    send: {
      success: 'Série envoyé avec succès',
    },
    refuse: {
      success: 'Série contestée avec succès',
    },
    update: {
      success: 'Série modifé avec succès',
    },
    destroy: {
      success: 'Série supprimée avec success',
    },
    destroyAll: {
      success: 'Série supprimées avec succès',
    },
    edit: {
      title: 'Modifier une série',
    },
    new: {
      title: 'Nouvelle série',
      fill_results: 'Saisi de résultat de la série',
    },
    view: {
      title: 'Consulter une série',
    },
    importer: {
      title: 'Importer en masse les Horizons',
      fileName: 'series_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },
  control_sample: {
    fields: {
      id: 'Id',
      uuid: 'Code',
      created_at: "Date d'analyse",
      provider: 'Laboratoires',
    },
    name: 'Échantillons témoins',
    label: 'Échantillons témoins',
    menu: 'Échantillons témoins',
    exporterFileName: 'control_sample_export',
    list: {
      menu: 'Échantillons témoins',
      title: 'Échantillons témoins',
    },
    create: {
      success: 'Échantillon témoin crée avec succès',
    },
    update: {
      success: 'Échantillon témoin modifé avec succès',
    },
    destroy: {
      success: 'Échantillon témoin supprimé avec success',
    },
    destroyAll: {
      success: 'Horizons supprimés avec succès',
    },
    edit: {
      title: 'Modifier un échantillon témoin',
    },
    new: {
      title: 'Nouvel échantillon témoin',
    },
    view: {
      title: 'Consulter un échantillon témoin',
    },
    importer: {
      title: 'Importer en masse les échantillons témoins',
      fileName: 'control_sample_import_template',
      hint: 'Files/Images doivent être les URL des fichiers séparés par un espace.',
    },

    enabled: 'Activé ?',
    disabled: 'Désactivé ?',
  },
  irrigation_system: {
    fields: {
      id: 'Id',
      code: 'Code',
      level: 'Niveau',
      name_fr: 'Nom fr',
      name_ar: 'Nom ar',
      enabled: 'Activée ?',
    },
    name: "Système d'irrigation",
    label: "Système d'irrigation",
    menu: "Système d'irrigation",
    exporterFileName: 'irrigation_system_export',
    list: {
      menu: "Système d'irrigation",
      title: "Système d'irrigation",
    },
    create: {
      success: "Système d'irrigationcrée avec succès",
    },
    update: {
      success: "Système d'irrigationmodifé avec succès",
    },
    destroy: {
      success:
        "Système d'irrigations supprimé avec success",
    },
    destroyAll: {
      success:
        "Système d'irrigations supprimés avec succès",
    },
    edit: {
      title: "Modifier un Système d'irrigation",
    },
    new: {
      title: "Nouvel Système d'irrigation",
    },
    view: {},
    importer: {
      title: "Importer en masse les Systèmes d'irrigation",
      fileName: 'irrigation_system_import_template',
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
