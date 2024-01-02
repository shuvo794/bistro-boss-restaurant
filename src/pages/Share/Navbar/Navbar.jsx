import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import usecarts from "../../Hooks/usecarts";


function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = usecarts();

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navoption = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>CONTACT Us</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to="./menu">Our Menu</Link>
      </li>
      <li>
        <Link to="./secret">Secret</Link>
      </li>
      <li>
        <Link to="./order/salad">Our Shop</Link>
      </li>

      <li>
        <Link to="/">
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0 }</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          {/* <span>{ user?.displayName}</span> */}
          <button onClick={handelLogOut} className="btn btn-active btn-ghost">
            LOGOUT
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="./login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto ">
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
              {navoption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get start</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
