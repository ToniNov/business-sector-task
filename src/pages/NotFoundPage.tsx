import { FC } from 'react';

import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-700 text-gray-extra-lite p-4">
        <h1 className="text-3xl font-bold mb-2">Oops! Page not found</h1>
        <p className="text-gray-lite mb-4">
          We`re sorry, but the page you requested could not be found.
        </p>
        <Link to="/:page" className="text-gray-extra-lite hover:text-gray-400">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
