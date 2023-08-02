import { FC } from 'react';

import BigLogo from '../../public/logo.png';

export const Loading: FC = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <div className="animate-pulse rounded-full h-32 w-32 bg-gray-400" />
      <div className="mt-4 text-center">
        <img className="animate-pulse" src={BigLogo} alt="Big Logo" />
      </div>
    </div>
  );
};
