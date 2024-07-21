import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './ui/button';

const Navbar: FC = () => {
  const isAuthenticated = true;

  return (
    <nav>
      {isAuthenticated ? (
        <div className="bg-white py-4 px-6 flex justify-between items-center sm:px-10 lg:px-16">
          <Link to="/">
            <h1 className="font-bold text-2xl sm:text-3xl">episode.</h1>
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-event">Create Event</Link>
            </li>
          </ul>
          <div className="rounded-full h-[50px] w-[50px] bg-primary"></div>
        </div>
      ) : (
        <div className="bg-white py-4 px-6 flex justify-between items-center sm:px-10 lg:px-16">
          <Link to="/">
            <h1 className="font-bold text-2xl sm:text-3xl">episode.</h1>
          </Link>
          <Button asChild className="px-10 rounded-full">
            <Link to="/auth/sign-in">Login</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
