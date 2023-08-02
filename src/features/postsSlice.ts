import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { jsonplaceholderApi } from '../api/JSONPlaceholder-api';
import { IPost, RequestStatusType } from '../types';

export const fetchPosts = createAsyncThunk<IPost[], void, { rejectValue: string }>(
  'posts/fetchPosts',
  async (): Promise<IPost[]> => {
    try {
      return await jsonplaceholderApi.getPosts();
    } catch (error: any) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }
  },
);

export interface PostsState {
  posts: IPost[];
  originalPosts: IPost[];
  status: RequestStatusType;
  error?: string;
}

const initialState: PostsState = {
  posts: [],
  originalPosts: [],
  status: 'idle',
  error: '',
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

      state.posts = state.posts.sort((a: any, b: any) => {
        if (a[key] > b[key]) {
          return sign;
        }
        if (a[key] < b[key]) {
          return -sign;
        }

        return 0;
      });
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
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.originalPosts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { sortPostsByProperty, searchString } = postsSlice.actions;

export default postsSlice.reducer;
