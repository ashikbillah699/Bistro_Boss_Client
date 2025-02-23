import { useQuery } from "@tanstack/react-query";
import CommonHeader from "../../../sheard/CommonHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);

    const {data: payments= []}= useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })

   
    return (
        <div>
            <CommonHeader heading={'Payment History'}></CommonHeader>
            <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Total Payments: {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="p-3 text-left">EMAIL</th>
              <th className="p-3 text-left">Transaction ID</th>
              <th className="p-3 text-left">TOTAL PRICE</th>
              <th className="p-3 text-left">PAYMENT DATE</th>
              <th className="p-3 text-left">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{payment.email}</td>
                <td className="p-3">{payment.transactionId}</td>
                <td className="p-3">{payment.totalprice}</td>
                <td className="p-3">{payment.paymentDate}</td>
                <td className="p-3">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default PaymentHistory;