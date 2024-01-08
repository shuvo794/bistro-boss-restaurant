import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";

const usecarts = () => {
  const { user } = useAuth();

  const token = localStorage.getItem("access-token");
  // const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `barrer ${token}`,
          },
        }
      );
      return response.json();
    },
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `barrer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
  });

  return [cart, refetch];
};

export default usecarts;
