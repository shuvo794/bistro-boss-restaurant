import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const usecarts = () => {
  const { user } = useContext(AuthContext);
};

export default usecarts;
