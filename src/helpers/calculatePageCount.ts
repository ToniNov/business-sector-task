import { IPost } from '../types';

export const calculatePageCount = (posts: IPost[], postsPerPage: number): number[] => {
  const pageCount = Math.ceil(posts.length / postsPerPage);

  return Array.from({ length: pageCount }, (_, i) => i + 1);
};
