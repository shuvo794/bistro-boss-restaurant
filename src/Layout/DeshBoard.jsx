import { NavLink, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaBook, FaCalendarAlt, FaEnvelope, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdOutlinePreview } from "react-icons/md";
import { IoBagAddSharp, IoMenu } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import usecarts from '../pages/Hooks/usecarts';
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuAddFill } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";




function DeshBoard() {
  const [cart] = usecarts();
  const isAdmin = true;
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
      <div id="sidebar" className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content">
          <h1 className="text-center text-base">
            <span className="font-bold">BISTRO BOSS</span> <br />
            <span>Restaurant</span>
          </h1>
          <br />

          {isAdmin ? (
            <>
              <li className="text-base">
                <NavLink to="/deshboard/home">
                  <IoMdHome /> User Admin
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/reservation">
                  <ImSpoonKnife /> AddItems
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/history">
                  <RiMenuAddFill /> Manage Items
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/addReview">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/mycart">
                  <FaUsersLine /> All User
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-base">
                <NavLink to="/deshboard/home">
                  <IoMdHome /> User Home
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/reservation">
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/history">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li className="text-base">
                <NavLink to="/deshboard/mycart">
                  <FaShoppingCart /> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>

              <li className="text-base">
                <NavLink to="/deshboard/addReview">
                  <MdOutlinePreview /> Add Review
                </NavLink>
              </li>
              <li className="text-base">
                <NavLink to="/deshboard/myBoking">
                  <IoBagAddSharp /> My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li className="text-base">
            <NavLink to="/">
              <IoMdHome /> Home
            </NavLink>
          </li>

          <li className="text-base">
            <NavLink to="/menu">
              <IoMenu /> Menu
            </NavLink>
          </li>
          <li className="text-base">
            <NavLink to="/order/salad">
              <CiShop /> Our Shop
            </NavLink>
          </li>

          <li className="text-base">
            <NavLink to="./order/salad">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeshBoard