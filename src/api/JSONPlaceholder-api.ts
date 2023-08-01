import ky from 'ky';

import { IPost } from '../types';

const api = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
});

export const jsonplaceholderApi = {
  async getPosts(): Promise<IPost[]> {
    const response = await api.get('posts');

    return response.json();
  },
};
