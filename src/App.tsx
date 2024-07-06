import { Outlet } from 'react-router';

import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <div className="px-3 sm:px-10 lg:px-16">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
