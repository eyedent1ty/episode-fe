import { Outlet } from 'react-router';

import Navbar from './components/Navbar';
import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
