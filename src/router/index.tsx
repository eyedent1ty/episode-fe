import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import EventPage from '../pages/EventPage';
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
    path: '/login',
    element: <SignInPage />
  }
]);

export default router;
