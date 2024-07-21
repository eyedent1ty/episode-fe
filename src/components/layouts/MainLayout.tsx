import { Outlet } from 'react-router';

import Navbar from '../Navbar';

export default function MainLayout() {
  return (
    <main>
      <div className="relative sm:static px-3 sm:px-10 lg:px-16">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </main>
  );
}
