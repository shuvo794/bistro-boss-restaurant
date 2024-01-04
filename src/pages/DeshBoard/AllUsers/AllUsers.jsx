

import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


function AllUsers() {
    const { refetch, data: users = [] } = useQuery({
       queryKey: ["users"],
       queryFn: async () => {
         const response = await fetch("http://localhost:5000/users");
         return response.json();
       },
    });
  
  const handelMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      
      method:'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
    })
  }
  
  
  const handelDelete = user => {
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
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  }
    
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold	my-4 p-4">
        All User : {users.length}
      </h2>
      <div className="overflow-x-auto p-4">
        <table className="table table-zebra ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-600 text-white "
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(user)}
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

export default AllUsers