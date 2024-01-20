import {  useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaWallet } from "react-icons/fa";
import { LiaTruckPickupSolid } from "react-icons/lia";



const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:stats={} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome Back {user?.displayName}</h1>
            <br />

            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaWallet className="text-3xl		" />

    </div>
    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{ stats.revinew}</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUsers className="text-3xl	" />

    </div>
    <div className="stat-title">Customers</div>
                    <div className="stat-value">{ stats.users}</div>
   
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Products</div>
                    <div className="stat-value">{ stats.products}</div>
  
                </div>
                <div className="stat">
    <div className="stat-figure text-secondary">
      <LiaTruckPickupSolid className="text-3xl"/>

    </div>
    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
   
  </div>
  
</div>
        </div>
    )
}

export default AdminHome;