import { HTTPError } from 'ky';

import { appActions } from '../features/Actions';

type ThunkAPIType = {
  dispatch: (action: any) => any;
  rejectWithValue: Function;
};

export const handleAsyncServerNetworkError = (
  error: HTTPError,
  thunkAPI: ThunkAPIType,
  showError = true,
): any => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error: error.message ? error.message : 'Some error occurred',
      }),
    );
  }
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }));

  return thunkAPI.rejectWithValue({ errors: [error.message], fieldsErrors: undefined });
};
