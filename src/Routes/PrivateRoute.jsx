import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../pages/Hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth;
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}

export default PrivateRoute;
