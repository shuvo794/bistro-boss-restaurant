import useAuth from "../../../hooks/useAuth";



const UserHome = () => {
    const { user } = useAuth();
    console.log(user,"test")
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome Back User Home page</h1>
            
            {/* User Profile  */}

            <div className="card card-side bg-base-100 shadow-xl mt-16">
                <figure>
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
                </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {user?.displayName}</h2>
    <p>Email : {user?.email}</p>
   
  </div>
</div>
        </div>
    )
}

export default UserHome;