import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Outlet />
    </main>
  );
};
export default AuthLayout;
