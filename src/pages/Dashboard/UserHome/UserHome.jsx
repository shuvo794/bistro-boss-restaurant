import useAuth from "../../../hooks/useAuth";



const UserHome = () => {
    const { user } = useAuth();
    console.log(user,"test")
    return (
        <div>
           <h1 className="text-3xl font-bold">Welcome Back {user?.displayName}</h1>
        </div>
    )
}

export default UserHome;