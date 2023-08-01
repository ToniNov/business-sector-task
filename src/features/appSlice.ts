import { createSlice } from '@reduxjs/toolkit';

import { RequestStatusType } from '../types';

import { appActions } from './Actions';

export type InitialStateType = {
  status: RequestStatusType;
  error: string | null;
};

export const appSlice = createSlice({
  name: 'application',
  initialState: {
    status: 'idle',
    error: null,
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appActions.setAppStatus, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(appActions.setAppError, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default appSlice.reducer;
