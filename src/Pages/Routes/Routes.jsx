import ErrorPage from '../ErrorPage/ErrorPage';
import Main from '../../Layouts/Main';
import Home from '../Home/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
