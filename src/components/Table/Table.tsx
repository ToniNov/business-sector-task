import { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { sortPostsByProperty } from '../../features/postsSlice';
import { calculatePageCount } from '../../helpers/calculatePageCount';
import { checkValidPageNumber } from '../../helpers/checkValidPageNumber';
import { IPost } from '../../types';
import { Pagination } from '../Pagination/Pagination';

import { Post } from './Post';
import { tableHeaderKeyPairs } from './tableHeaderKeyPairs';
import { TableHeaderTitle } from './TableHeadTitle';

const POST_PER_PAGE = 10;

type PropsType = {
  posts: IPost[];
};

export const Table: FC<PropsType> = ({ posts }) => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = calculatePageCount(posts, POST_PER_PAGE);
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkValidPageNumber(page)) {
      setCurrentPage(Number(page));
    } else {
      navigate('/1');
    }
  }, [page, navigate]);

  const handleSort = (key: string, direction: string): void => {
    const payload = { key, direction };

    dispatch(sortPostsByProperty(payload));
  };

  const handlePageClick = (newPage: number): void => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const endIndex = startIndex + POST_PER_PAGE;

  const displayPosts = posts.slice(startIndex, endIndex).map((post) => {
    return <Post post={post} key={post.id} />;
  });

  return (
    <>
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
        <tbody>{displayPosts}</tbody>
      </table>
      <Pagination pages={pages} handleClick={handlePageClick} />
    </>
  );
};
