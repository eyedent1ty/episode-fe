import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import EventPage from '../pages/EventPage';

import AuthLayout from '../components/layouts/AuthLayout';
import SignInPage from '../pages/SignIn';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/events/:id',
        element: <EventPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Navigate to="/auth/sign-in" replace /> },
      { path: 'sign-in', element: <SignInPage /> },
    ],
  },
]);

export default router;
