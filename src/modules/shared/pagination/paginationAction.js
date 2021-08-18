import Errors from 'modules/shared/error/errors';
import Exporter from 'modules/shared/exporter/exporter';
import Message from 'view/shared/message';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
export default (
  prefix,
  fetchFn,
  selectors,
  exporterFileName,
  exporterFields,
  validateAllFn,
  successMessage,
  errorMessage,
  redirectUrl,
  exportFN,
) => {
  const actions = {
    INIT_FILTER: `${prefix}_INIT_FILTER`,

    FETCH_STARTED: `${prefix}_FETCH_STARTED`,
    FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
    FETCH_ERROR: `${prefix}_FETCH_ERROR`,
    VALIDATE_STARTED: `${prefix}_VALIDATE_STARTED`,
    VALIDATE_SUCCESS: `${prefix}_VALIDATE_SUCCESS`,
    VALIDATE_ERROR: `${prefix}_VALIDATE_ERROR`,
    RESETED: `${prefix}_RESETED`,
    SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,
    SELECTEDS_VALIDATE: `${prefix}SELECTEDS_VALIDATE`,
    ISVALIDATE: `${prefix}SELECTEDS_IS_VALIDATE`,

    PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
    SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

    EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
    EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
    EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

    doChangeSelected(payload) {
      return {
        type: actions.SELECTEDS_CHANGED,
        payload,
      };
    },

    doValideSelected(payload) {
      return {
        type: actions.SELECTEDS_VALIDATE,
        payload,
      };
    },

    doReset: () => async (dispatch) => {
      dispatch({
        type: actions.RESETED,
      });

      dispatch(actions.doFetch({}));
    },

    doExport: () => async (dispatch, getState) => {
      try {
        if (!exporterFields || !exporterFields.length) {
          throw new Error('exporterFields is required');
        }

        dispatch({
          type: actions.EXPORT_STARTED,
        });

        try {
          const filter = selectors.selectFilter(getState());
          var response = null;
          if (exportFN) {
            response = await exportFN();
          } else {
            response = await fetchFn(
              filter,
              selectors.selectOrderBy(getState()),
              null,
              0,
            );
          }
        } catch (e) {
          console.log(e);
        }

        new Exporter(
          exporterFields,
          exporterFileName,
        ).transformAndExportAsExcelFile(response.rows || response);

        dispatch({
          type: actions.EXPORT_SUCCESS,
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.EXPORT_ERROR,
        });
      }
    },

    doChangePaginationAndSort:
      (pagination, sorter) => async (dispatch, getState) => {
        dispatch({
          type: actions.PAGINATION_CHANGED,
          payload: pagination,
        });

        dispatch({
          type: actions.SORTER_CHANGED,
          payload: sorter,
        });

        const filter = selectors.selectFilter(getState());

        dispatch(actions.doFetch(filter, true));
      },

    doFetch:
      (filter, keepPagination = false) =>
      async (dispatch, getState) => {
        try {
          dispatch({
            type: actions.FETCH_STARTED,
            payload: { filter, keepPagination },
          });

          const response = await fetchFn(
            filter,
            selectors.selectOrderBy(getState()),
            selectors.selectLimit(getState()),
            selectors.selectOffset(getState()),
          );
          dispatch({
            type: actions.FETCH_SUCCESS,
            payload: {
              rows: response.rows,
              count: response.count ? response.count : response.length,
            },
          });
        } catch (error) {
          Errors.handle(error);

          dispatch({
            type: actions.FETCH_ERROR,
          });
        }
      },
  };

  return actions;
};
