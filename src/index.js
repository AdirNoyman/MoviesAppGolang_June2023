import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  Genres,
  Catalogue,
  EditMovie,
  ErrorPage,
  GraphQL,
  Home,
  Login,
  Movies,
} from './components/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/genres', element: <Genres /> },
      { path: '/manage-catalogue', element: <Catalogue /> },
      { path: '/admin/movie/0', element: <EditMovie /> },
      { path: '/graphql', element: <GraphQL /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
