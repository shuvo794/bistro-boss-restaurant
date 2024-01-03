import React from "react";
import { Helmet } from "react-helmet-async";
import usecarts from "../../Hooks/usecarts";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';

function MyCart() {
  const [cart, refetch] = usecarts();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handelClick = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })

          
        
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss/myCart</title>
      </Helmet>

      <SectionTittle
        
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTittle>
      <br />
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
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handelClick(item)}
                    className="btn btn-ghost bg-red-600 text-white "
                  >
                    <FaTrashAlt />
                  </button>
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
