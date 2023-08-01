import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import appReducer from '../features/appSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
