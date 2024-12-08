import Main from '../../Layouts/Main';
import Home from '../Home/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Blogs from '../Blogs/Blogs';
import PrivateRoute from './PrivateRoute';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllUsers from '../Dashboard/AllUsers/AllUsers';

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
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      // {
      //   path: '/dashboard',
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard></Dashboard>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/dashboardHome',
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: '/dashboard/allUsers',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
