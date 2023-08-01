import { FC, useState } from 'react';

import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

type PropsType = {
  keyTitlePair: { key: string; title: string };
  onClick: (key: string, direction: string) => void;
};

type SortType = 'ascending' | 'descending';

export const TableHeaderTitle: FC<PropsType> = ({ keyTitlePair, onClick }) => {
  const { title, key } = keyTitlePair;
  const [sortDirection, setSortDirection] = useState<SortType>('ascending');

  const clickHandler = (): void => {
    const newSortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';

    setSortDirection(newSortDirection);
    onClick(key, newSortDirection === 'ascending' ? 'ascending' : 'descending');
  };

  return (
    <th
      onClick={clickHandler}
      className={`md:p-6 p-2 cursor-pointer ${
        title === 'ID' ? 'md:w-1/12 w-1/4' : 'w-2/5'
      }`}
      scope="col"
    >
      <div className="flex items-center justify-center ">
        <p className="mr-11">{title}</p>
        <Arrow
          className={sortDirection === 'ascending' ? '' : 'transform rotate-180'}
          style={{ transition: 'transform 0.2s ease-in-out' }}
        />
      </div>
    </th>
  );
};
