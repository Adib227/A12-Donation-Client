const Navbar = () => {
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex">
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
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <summary>Parent</summary>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn ">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
