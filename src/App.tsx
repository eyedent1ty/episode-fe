import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <header>
        <p>This is a header!</p>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
