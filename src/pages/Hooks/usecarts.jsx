import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const usecarts = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token')
  const axios = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
  //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,
  //       {
  //         headers: {
  //         authorization:`barrer ${token}`
  //       }
  //     }
  //     );
  //     return response.json();
  //   },
  // });
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
          authorization:`barrer ${token}`
        }
      }
      );
      return response.json();
    },
  });
  return [cart, refetch];
};

export default usecarts;
