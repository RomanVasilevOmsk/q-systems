import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import { PAGES } from '../constants/urls';

export const router = createBrowserRouter([
  {
    path: PAGES.ROOT,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
