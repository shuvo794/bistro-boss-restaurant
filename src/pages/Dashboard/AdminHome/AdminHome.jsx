import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome Back {user?.displayName}</h1>
        </div>
    )
}

export default AdminHome;