import React from "react";
import { Helmet } from "react-helmet-async";
import usecarts from "../../Hooks/usecarts";
// import SectionTittle from '../../../Components/SectionTittle/SectionTittle';

function MyCart() {
  const [cart] = usecarts();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss/myCart</title>
      </Helmet>

      {/* <SectionTittle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTittle> */}
      <div className="uppercase font-semibold h-[60px]	flex justify-evenly	 items-center">
        <h2 className="text-3xl">Total Orders: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: ${total}</h2>
        <button className="btn btn-warning btn-sm text-white">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row,index) => (
              <tr key={row._id}>
                <td>
                  {index+1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyCart;
