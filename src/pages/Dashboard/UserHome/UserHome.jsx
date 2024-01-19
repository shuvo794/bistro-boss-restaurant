import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome back User  {user.displayName}</h1>
        </div>
    )
}

export default UserHome;