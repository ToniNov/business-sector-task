import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
