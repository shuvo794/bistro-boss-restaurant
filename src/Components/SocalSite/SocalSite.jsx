import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function SocalSite() {
  const { googleSignInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelGoogle = () => {
    googleSignInUser()
      .then(result => {
        const logInUser = result.user;
        console.log(logInUser);
        navigate(from, { replace: true });
    })
  }
  return (
    <div className="w-full my-4 text-center">
      <div className="divider"></div>
      <button onClick={handelGoogle} className="btn btn-circle btn-outline">
        <FaGoogle />
      </button>
    </div>
  );
}

export default SocalSite;
