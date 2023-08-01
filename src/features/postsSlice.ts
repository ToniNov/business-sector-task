import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { jsonplaceholderApi } from '../api/JSONPlaceholder-api';
import { handleAsyncServerNetworkError } from '../helpers/error-utils';
import { IPost } from '../types';

import { appActions } from './Actions';

export const fetchPosts = createAsyncThunk<IPost[], void, { rejectValue: string }>(
  'posts/fetchPosts',
  async (_, thunkAPI): Promise<any> => {
    thunkAPI.dispatch(appActions.setAppStatus({ status: 'loading' }));
    try {
      const response = await jsonplaceholderApi.getPosts();

      thunkAPI.dispatch(appActions.setAppStatus({ status: 'succeeded' }));

      return response;
    } catch (error: any) {
      handleAsyncServerNetworkError(error, thunkAPI);
    }
  },
);

export interface PostsState {
  posts: IPost[];
  originalPosts: IPost[];
}

const initialState: PostsState = {
  posts: [],
  originalPosts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    sortPostsByProperty: (
      state,
      action: PayloadAction<{ key: string; direction: string }>,
    ) => {
      const { key, direction } = action.payload;
      const sign = direction === 'descending' ? -1 : 1;

      const sortedPost = state.posts.sort((a, b) => {
        if (a[key] > b[key]) {
          return sign;
        }
        if (a[key] < b[key]) {
          return -sign;
        }

        return 0;
      });

      state.posts = sortedPost;
    },
    searchString: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      let filteredPosts = [];

      if (query === '') {
        filteredPosts = [...state.originalPosts];
      } else {
        filteredPosts = state.originalPosts.filter((post) =>
          Object.values(post).some(
            (value) => typeof value === 'string' && value.toLowerCase().includes(query),
          ),
        );
      }

      return { ...state, posts: filteredPosts, searchInput: query };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.originalPosts = action.payload;
    });
  },
});

export const { sortPostsByProperty, searchString } = postsSlice.actions;

export default postsSlice.reducer;
