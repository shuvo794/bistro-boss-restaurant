import {  useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaWallet } from "react-icons/fa";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { MdAdminPanelSettings } from "react-icons/md";








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
    <h1 className="uppercase text-3xl font-bold bg-[#c23616] text-white p-2 text-center mb-3">Welcome To Admin Home</h1>
<div>
             <div className="card card-side bg-base-100 shadow-xl mt-8">
                <figure className="w-1/3">
                    <MdAdminPanelSettings className="bg-[#c23616] 	text-white" />

                </figure>
                   <div className="card-body w-1/2">
                     <div className="mt-16">
                        <h2 className="uppercase text-lg bg-[#c23616] text-white text-center rounded-lg p-2" >Name : {user?.displayName}</h2>
                        <p className="uppercase text-sm bg-[#c23616] text-white text-center rounded-lg mt-5 p-2">Email : {user?.email}</p>
                    <div className="card-actions justify-end">
            
          <div className="text-2xl mt-3">Total Order : { stats.orders}</div>
  
          
            </div>
         </div>
   </div>
</div>
        </div>
        
         <br />

        <div className="stats shadow">
   <div className="stat">
    <div className="stat-figure text-[#c23616]">
      <FaWallet className="text-3xl" />

    </div>
    <div className="stat-title">Revenue</div>
      <div className="stat-value">{ stats.revinew}</div>
</div>
  
  <div className="stat">
    <div className="stat-figure text-[#c23616]">
      <FaUsers className="text-3xl" />

    </div>
    <div className="stat-title ">Customers</div>
    <div className="stat-value">{ stats.users}</div>
   </div>
  
  <div className="stat">
    <div className="stat-figure text-[#c23616]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Products</div>
    <div className="stat-value">{ stats.products}</div>
  </div>
<div className="stat">
<div className="stat-figure text-[#c23616]">
      <LiaTruckPickupSolid className="text-3xl"/>

    </div>
    <div className="stat-title ">Orders</div>
    <div className="stat-value ">{stats.orders}</div>
   </div>
  
        </div>

        </div>
    )
}

export default AdminHome;