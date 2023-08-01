import { RootState } from '../app/store';
import { IPost, RequestStatusType } from '../types';

export const selectStatus = (state: RootState): RequestStatusType => state.app.status;
export const selectPosts = (state: RootState): IPost[] => state.posts.posts;
