

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
      <h2>All User : {users.length}</h2>
    </div>
  );
}

export default AllUsers