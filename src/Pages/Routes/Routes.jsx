import Main from '../../Layouts/Main';
import Home from '../Home/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Blogs from '../Blogs/Blogs';

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
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
