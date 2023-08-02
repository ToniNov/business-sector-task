import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Loading } from '../components/Loading';
import { Search } from '../components/Search';
import { Table } from '../components/Table/Table';
import { fetchPosts } from '../features/postsSlice';
import { selectPosts, selectStatus } from '../features/selectors';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (status === 'loading') return <Loading />;

  return (
    <main className="w-full md:p-0 md:w-11/12 mx-auto p-2">
      <Search />
      <Table posts={posts} />
    </main>
  );
};
