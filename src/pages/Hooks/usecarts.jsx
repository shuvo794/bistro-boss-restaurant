import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const usecarts = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, data: cart = [] } = useQuery({
    queryKey: ["cart", user.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts=${user?.email}`
      );
      return response.json();
    },
  });
  return [cart, isLoading];
};

export default usecarts;
