import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FoodCard({ item }) {
  const { name, image, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelAddTocurt = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Order the Food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login')
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handelAddTocurt(item)}
              className="btn btn-outline border-0 border-h bg-slate-100 border-orange-400 border-b-4 mt-4"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
