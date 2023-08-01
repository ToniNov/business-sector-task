import { ChangeEvent, FC } from 'react';

import { useAppDispatch } from '../app/hooks';
import { ReactComponent as Loupe } from '../assets/Loupe.svg';
import { searchString } from '../features/postsSlice';

export const Search: FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const newSearchString = event.target.value.trim();

    dispatch(searchString(newSearchString));
  };

  return (
    <div className="bg-grayLite w-full md:w-1/2 my-4 px-7 py-5 flex items-center justify-between">
      <input
        placeholder="Поиск"
        className="bg-grayLite w-11/12 text-white outline-none focus:none"
        onChange={handleSearch}
      />
      <Loupe />
    </div>
  );
};
