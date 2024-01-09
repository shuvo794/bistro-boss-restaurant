import { useContext } from "react";
import useAuth from "../pages/Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../pages/Hooks/useAdmin";

function AdminRoute({ children }) {
    const { user, loading } = useAuth();
    const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}

export default AdminRoute;
