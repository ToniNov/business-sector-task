import { FC } from 'react';

import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';
import { Table } from '../components/Table/Table';

const App: FC = () => {
  return (
    <div className="w-full md:p-0 md:w-11/12 mx-auto p-2">
      <Search />
      <Table />
      <Pagination />
    </div>
  );
};

export default App;
