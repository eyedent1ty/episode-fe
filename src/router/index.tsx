import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/Home';
import EventPage from '../pages/EventPage';
import CreateEventPage from '../pages/CreateEvent';

import AuthLayout from '../components/layouts/AuthLayout';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/events/:id',
        element: <EventPage />
      },
      {
        path: '/create-event',
        element: <CreateEventPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Navigate to="/auth/sign-in" replace /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-up', element: <SignUpPage /> }
    ]
  }
]);

export default router;
