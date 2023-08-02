import { FC } from 'react';

import { useParams, Link } from 'react-router-dom';

type PropsType = {
  pages: number[];
  handleClick: (page: number) => void;
};

export const Pagination: FC<PropsType> = ({ pages, handleClick }) => {
  const { page } = useParams();
  const handelPageChange = (): void => {
    if (Math.min(...pages) > 0) {
      handleClick(Number(page) - 1);
    }
    if (Math.max(...pages) <= 10) {
      handleClick(Number(page) + 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-11/12 mx-auto py-4 px-4 sm:px-0">
      <Link
        onClick={() => handelPageChange()}
        to={Number(page) - 1 < 0 ? `/${1}` : `/${Number(page) - 1}`}
        className={`text-sm md:text-3xl font-semibold ${
          Number(page) <= Math.min(...pages) ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Назад
      </Link>
      <div className="flex items-center justify-center">
        {pages.map((pageNumber) => {
          return (
            <Link
              onClick={() => {
                handleClick(pageNumber);
              }}
              className={`mr-2  md:mr-4 font-semibold italic text-lg ${
                Number(pageNumber) === Number(page) ? 'text-green ' : 'text-grayLite'
              }`}
              key={pageNumber}
              to={`/${pageNumber}`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>
      <Link
        onClick={() => handelPageChange}
        to={Number(page) + 1 <= 10 ? `/${Number(page) + 1}` : `/${Number(page)}`}
        className={`text-sm-bold md:text-3xl font-semibold ${
          Number(page) >= Math.max(...pages) ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Далее
      </Link>
    </div>
  );
};
