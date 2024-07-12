import Main from '../../Layouts/Main';
import Home from '../Home/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Item from '../Item/Item';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/item',
        element: <Item></Item>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
