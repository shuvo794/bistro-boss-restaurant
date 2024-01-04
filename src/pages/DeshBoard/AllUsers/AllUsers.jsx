

import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


function AllUsers() {
    const { refetch, data: users = [] } = useQuery({
       queryKey: ["users"],
       queryFn: async () => {
         const response = await fetch("http://localhost:5000/users");
         return response.json();
       },
    });
  
  const handelClick = user => {
    
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
                      onClick={() => handelClick(user)}
                      className="btn btn-ghost bg-orange-600 text-white "
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handelClick(user)}
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