import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts, sortPostsByProperty } from '../../features/postsSlice';
import { selectPosts } from '../../features/selectors';
import { Post } from '../Post';

import { tableHeaderKeyPairs } from './tableHeaderKeyPairs';
import { TableHeaderTitle } from './TableHeadTitle';

export const Table: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleSort = (key: string, direction: string): void => {
    const payload = { key, direction };

    dispatch(sortPostsByProperty(payload));
  };

  return (
    <table className="w-full table-fixed">
      <thead className="bg-[#474955] text-white w-full">
        <tr className="w-11/12 md:w-full">
          {tableHeaderKeyPairs.map((keyTitlePair) => (
            <TableHeaderTitle
              onClick={handleSort}
              keyTitlePair={keyTitlePair}
              key={keyTitlePair.key}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {posts &&
          posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
      </tbody>
    </table>
  );
};
