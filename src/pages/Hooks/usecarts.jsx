import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const usecarts = () => {
  const { user } = useAuth();
  console.log("test user", user);
  const token = localStorage.getItem('access-token')
  // const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
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
    // queryFn: async () => {
    //   const res = await axiosSecure.get(`/carts?email=${user?.email}`);
    //   console.log("test res", res);
    //   return res.data;
    // },

  return [cart, refetch];
};

export default usecarts;
