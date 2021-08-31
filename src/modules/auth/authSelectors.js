import { createSelector } from 'reselect';
import UploadFile from '../shared/upload/upload';

const selectRaw = (state) => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  (auth) => auth.authenticationUser,
);

const selectCurrentUser = createSelector(
  [selectRaw],
  (auth) => auth.currentUser,
);

const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.email : null),
);

const selectCurrentUserFullName = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    return currentUser ? currentUser.username : '';
  },
);

const selectSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) => !!currentUser && !!currentUser.id,
);

const selectRoles = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.user_roles[0].role || [] : [],
);
const selectRolesName = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser &&
    Array.isArray(currentUser.user_roles) &&
    currentUser.user_roles.length > 0 &&
    currentUser.user_roles[0].role
      ? currentUser.user_roles[0].roles.name
      : currentUser.default_role,
);

const selectEmptyPermissions = createSelector(
  [selectRoles],
  (roles) => !roles || !roles.length,
);

const selectLoading = createSelector(
  [selectRaw],
  (auth) => !!auth.loading,
);

const selectLoadingInit = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingInit,
);

const selectLoadingEmailConfirmation = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingEmailConfirmation,
);

const selectLoadingPasswordReset = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingPasswordReset,
);

const selectLoadingUpdateProfile = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingUpdateProfile,
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage,
);

const selectCurrentUserNameOrEmailPrefix = createSelector(
  [selectCurrentUser, selectCurrentUserFullName],
  (currentUser) => {
    if (!currentUser) {
      return '';
    }

    return currentUser.first_name;
  },
);

const selectCurrentUserAvatar = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (
      !currentUser ||
      !currentUser.avatar_url ||
      !currentUser.avatar_url.length ||
      !currentUser.avatar_url[0].key
    ) {
      return null;
    }

    return currentUser.avatar_url;
  },
);

const selectShowInputCode = createSelector(
  [selectRaw],
  (auth) => {
    return auth.showInputCode;
  },
);

const selectAgronomistId = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    return Array.isArray(currentUser.agronomists) &&
      currentUser.agronomists.length > 0
      ? currentUser.agronomists[0].id
      : null;
  },
);

const selectors = {
  selectShowInputCode,
  selectLoadingPasswordReset,
  selectLoadingEmailConfirmation,
  selectLoadingInit,
  selectLoadingUpdateProfile,
  selectLoading,
  selectEmptyPermissions,
  selectRoles,
  selectSignedIn,
  selectCurrentUserFullName,
  selectCurrentUserEmail,
  selectCurrentUser,
  selectAuthenticationUser: selectAuthenticationUser,
  selectErrorMessage,
  selectRaw,
  selectCurrentUserNameOrEmailPrefix,
  selectCurrentUserAvatar,
  selectRolesName,
  selectAgronomistId,
};

export default selectors;
