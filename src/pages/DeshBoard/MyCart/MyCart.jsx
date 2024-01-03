import React from "react";
import { Helmet } from "react-helmet-async";
import usecarts from "../../Hooks/usecarts";
import { FaTrashAlt } from "react-icons/fa";
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
                 
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                 
                </td>
                <td>
                  {row.name}
                  
                </td>
                <td className="text-end">$ {row.price}</td>
                <td>
                  <button className="btn btn-ghost bg-red-600 text-white btn-lg"><FaTrashAlt/></button>
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
