import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const navInfo = (
    <>
      <li>
        <Link to={"/"} className="text-xl mx-2 ">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/"} className="text-xl mx-2">
          Contact
        </Link>
      </li>
      <li>
        <Link to={"/our-shop"} className="text-xl mx-2">
          Shop
        </Link>
      </li>
      <li>
        <Link to={"/dashboard"} className="text-xl mx-2">
          Dashboard
        </Link>
      </li>
    </>
  );

  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl font-semibold ">
          Bikez Zone
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link
              to={"/"}
              onClick={() => logout()}
              className="bg-[#E57255] px-4 py-2 font-semibold text-white rounded-md"
            >
              Log Out
            </Link>

            <div className="avater">
              <img
                src={user?.photoURL}
                alt="user photo"
                className="h-[50px] w-[50px] ml-4 rounded-full"
              />
              {/* <h2>{user?.email}</h2> */}
            </div>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="bg-[#E57255] px-4 py-2 font-semibold text-white mr-3 rounded-md"
            >
              Login
            </Link>
            <Link
              to={"/sign-up"}
              className="bg-[#E57255] px-4 py-2 font-semibold text-white rounded-md"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
