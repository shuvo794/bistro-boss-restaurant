

import { useQuery } from "@tanstack/react-query";


function AllUsers() {
    const { refetch, data: users = [] } = useQuery({
       queryKey: ["users"],
       queryFn: async () => {
         const response = await fetch("http://localhost:5000/users");
         return response.json();
       },
     });
    
  return (
    <div>
      <h2 className="text-3xl font-semibold	">All User : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers