import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut();
    alert('logged out successfully')
      .then(() => console.log('Logged out successfully'))
      .catch(error => console.error(error));
  };

  const navItems = (
    <>
      <li className="font-semibold font-sans text-base">
        <Link to="/">Home </Link>
      </li>
      <li className="font-semibold font-sans text-base">
        <Link to="/about">Parent</Link>
      </li>
      <li className="font-semibold font-sans text-base">
        <Link to="/item">Item</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex  animate__animated animate__fadeIn">
            <p>
              <img
                className="h-16 max-w-screen-2xl md:w-24 "
                src="https://i.ibb.co/XXzwfXq/360-F-274422814-sv23a-GOAILKKk8-Zc-Mg-LKv-HQBTEs-Wh7-WP-removebg-preview.png"
                alt=""
              />
            </p>
            <h2 className="ml-4 md:-ml-6 mt-4 text-2xl font-bold">
              Bloodonors
            </h2>
          </div>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
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
              <tippy
                id="signOut"
                content="Please Sign Out"
                className="text-black font-semibold rounded-lg p-3"
              >
                <button
                  onClick={handleLogOut}
                  className="btn btn-active  animate__animated animate__backInLeft"
                >
                  Sign Out
                </button>
              </tippy>
            </>
          ) : (
            <Link to="/login">
              <tippy
                content="Please Login"
                className="text-black font-bold rounded-lg p-3"
              >
                <button className="btn btn-active  animate__animated animate__fadeIn">
                  Login
                </button>
              </tippy>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
