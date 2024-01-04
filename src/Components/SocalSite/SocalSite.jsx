import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

function SocalSite() {
  const { googleSignInUser } = useContext(AuthContext);
  return (
    <div className="w-full my-4 text-center">
      <div className="divider"></div>
      <button className="btn btn-circle btn-outline">
        <FaGoogle />
      </button>
    </div>
  );
}

export default SocalSite;
