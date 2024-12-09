import Main from '../../Layouts/Main';
import Home from '../Home/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Blogs from '../Blogs/Blogs';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllUsers from '../Dashboard/AllUsers/AllUsers';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import DonationRequest from '../Dashboard/DonationRequest/DonationRequest';
import ContentManage from '../Dashboard/ContentManage/ContentManage';
import CreateRequest from '../Dashboard/CreateRequest/CreateRequest';

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
      // admin routes
      {
        path: '/dashboard/dashboardHome',
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: '/dashboard/allUsers',
        element: <AllUsers></AllUsers>,
      },
      {
        path: '/dashboard/myDonationRequests',
        element: <DonationRequest></DonationRequest>,
      },
      {
        path: '/dashboard/allDonationRequest',
        element: <ContentManage></ContentManage>,
      },
      {
        path: '/dashboard/createDonationRequest',
        element: <CreateRequest></CreateRequest>,
      },
    ],
  },
]);

export default router;
