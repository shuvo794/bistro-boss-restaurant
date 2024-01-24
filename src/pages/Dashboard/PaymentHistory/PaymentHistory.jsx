import { useQuery } from "@tanstack/react-query";


import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div >
            <h2 className="text-3xl mb-8 font-bold">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra  bg-red-600 w-full">
                    {/* head */}
                    <thead className="bg-red-600">
                        <tr >
                            <th className=" bg-red-600 text-white">#</th>
                            <th className=" bg-red-600 text-white">price</th>
                            <th className=" bg-red-600 text-white">Transaction Id</th>
                            <th className=" bg-red-600 text-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.tranjuctionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;