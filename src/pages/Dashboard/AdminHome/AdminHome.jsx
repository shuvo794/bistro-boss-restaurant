import {  useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaWallet } from "react-icons/fa";
import { LiaTruckPickupSolid } from "react-icons/lia";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from 'react-icons/fa';

import { Link } from "react-router-dom";

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
  
  // const { data: chartData = [] } = useQuery({
  //       queryKey: ['order-stats'],
  //       queryFn: async () => {
  //           const res = await axiosSecure.get('/order-stats');
  //           return res?.data;
  //       }
  //   })
  
      //  console.log(chartData)

   // custom shape for the bar chart
    // const getPath = (x, y, width, height) => {
    //     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    //     ${x + width / 2}, ${y}
    //     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    //     Z`;
    // };

  //   const TriangleBar = (props) => {
  //       const { fill, x, y, width, height } = props;

  //       return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  // };
  
   // custom shape for the pie chart
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
    //    return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

  //   const pieChartData = chartData.map(data => {
  //     return { name: data.category, value: data.revenue 
  //     }
      
  //   })
  // console.log(pieChartData);
  
    return (
      <div>
                    <h1 className="text-3xl font-bold bg-[#c23616] text-white p-2 text-center">Welcome Back User Home page</h1>

        <br />
        
<div className="stats shadow">
   <div className="stat">
    <div className="stat-figure text-secondary">
      <FaWallet className="text-3xl" />

    </div>
    <div className="stat-title">Revenue</div>
      <div className="stat-value">{ stats.revinew}</div>
</div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUsers className="text-3xl" />

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
        <br />
        <br />
        <br />
        
        <div className="flex">
          <div className="w-1/2">
{/* <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar
        dataKey="revenue"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
                {chartData.map((entry, index) => {
        return (
           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        )
      })}
      </Bar>
    </BarChart> */}
          </div>
           {/* <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div> */}
        </div>

<div>
             <div className="card card-side bg-base-100 shadow-xl mt-16">
                <figure className="w-1/3">
                    <FaUserCircle className="text-[#c23616] 	" />

                </figure>
                   <div className="card-body w-1/2">
                     <div className="mt-16">
                        <h2 className="uppercase text-lg bg-[#c23616] text-white text-center rounded-lg p-1" >Name : {user?.displayName}</h2>
                        <p className="uppercase text-sm bg-[#c23616] text-white text-center rounded-lg mt-5 p-1">Email : {user?.email}</p>
                    <div className="card-actions justify-end">
                           <Link to="/dashboard/cart">
                <button className="btn bg-[#c23616] mt-6">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    {/* <div className="badge bg-primary">+{cart.length}</div> */}
                </button>
            </Link>
            </div>
         </div>
   </div>
</div>
</div>

        </div>
    )
}

export default AdminHome;