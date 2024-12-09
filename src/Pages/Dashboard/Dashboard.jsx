import { Link, NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Tooltip } from 'react-tooltip';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  // const [newUser, setNewUser] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/UserCollection`)
  //     .then(res => res.json())
  //     .then(data => setNewUser(data));
  // }, []);
  // console.log(newUser);

  return (
    <>
      <div className="flex ">
        <div className="navbar ">
          <img
            className="h-16 max-w-screen-2xl md:w-24 "
            src="https://i.ibb.co/XXzwfXq/360-F-274422814-sv23a-GOAILKKk8-Zc-Mg-LKv-HQBTEs-Wh7-WP-removebg-preview.png"
            alt=""
          />
          <Link to="/" className="btn btn-ghost  text-xl">
            Bloodonors
          </Link>
        </div>
        <div>
          <tippy className=" text-black font-semibold p-4 rounded-lg">
            <div className="flex">
              <div>
                {' '}
                <img
                  className="w-10 rounded-full"
                  alt=""
                  src={user.photoURL}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${user.displayName} || ${user.email}`}
                />
                <Tooltip id="my-tooltip"></Tooltip>
              </div>
            </div>
          </tippy>
        </div>
      </div>
      <div className="flex">
        <div className=" ">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                <GiHamburgerMenu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-screen text-base font-medium w-80 p-4">
                {/* Sidebar content here  */}
                {/* {newUser.role === 'admin' && ( */}
                <>
                  <li>
                    <NavLink to="/dashboard/dashboardHome">My Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myDonationRequests">
                      Donation Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allDonationRequest">
                      Manage Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/createDonationRequest">
                      Create Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allUsers">All Users</NavLink>
                  </li>
                </>
                {/* )} */}
                {/* {newUser.role === 'donor' && (
                  <>
                    <li>
                      <NavLink to="/dashboard/dashboardHome">My Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myDonationRequests">
                        Donation Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/createDonationRequest">
                        Create Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/allUsers">All Users</NavLink>
                    </li>
                  </>
                )}
                {newUser.role === 'volunteer' && (
                  <>
                    <li>
                      <NavLink to="/dashboard/dashboardHome">My Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myDonationRequests">
                        Donation Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/createDonationRequest">
                        Create Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/allUsers">All Users</NavLink>
                    </li>
                  </>
                )} */}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
