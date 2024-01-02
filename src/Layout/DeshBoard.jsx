
import { Link, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaCalendarAlt, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdOutlinePreview } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";


function DeshBoard() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h1 className="text-center text-base">
            <span className="font-bold">BISTRO BOSS</span> <br />
            <span>Restaurant</span>
          </h1>
          <li className="text-base">
            <Link to="">
              <IoMdHome /> User Home
            </Link>
          </li>

          <li className="text-base">
            <Link to="">
              <FaCalendarAlt /> Reservation
            </Link>
          </li>

          <li className="text-base">
            <Link to="">
              <FaWallet /> Payment History
            </Link>
          </li>
          <li className="text-base">
            <Link to="">
              <FaShoppingCart /> My Cart
            </Link>
          </li>

          <li className="text-base">
            <Link to="">
              <MdOutlinePreview /> Add Review
            </Link>
          </li>
          <li className="text-base">
            <Link to="">
              <IoBagAddSharp /> My Booking
            </Link>
            <div className="divider"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeshBoard