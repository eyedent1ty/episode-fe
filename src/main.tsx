import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { RouterProvider } from 'react-router-dom';

import router from './router/index.tsx';
import StoreProvider from './StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
