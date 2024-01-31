import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import PaymentHistory from "../PaymentHistory/PaymentHistory";



const UserHome = () => {
    const { user ,payments } = useAuth();
    // const { } = PaymentHistory();
    console.log(user,"test")
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome Back User Home page</h1>
            
            {/* User Profile  */}

            <div className="card card-side bg-base-100 shadow-xl mt-16">
                <figure className="w-1/3">
                    <FaUserCircle className="text-[#c23616] 	" />

                </figure>
  <div className="card-body w-1/2">
    
                    <div className="mt-16">
                        <h2 className="uppercase text-lg bg-[#c23616] text-white text-center rounded p-1" >Name : {user?.displayName}</h2>
                        <p className="uppercase text-sm bg-[#c23616] text-white text-center rounded mt-5 p-1">Email : {user?.email}</p>
                    <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-5">Order :{ payments?.length} </button>
    </div>
                    </div>
   
  </div>
</div>
        </div>
    )
}

export default UserHome;