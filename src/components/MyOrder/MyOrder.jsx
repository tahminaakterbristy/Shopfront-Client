import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const MyOrder = () => {
  const { user } = useContext(AuthContext); 
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://shopfront-server.vercel.app/orders/${user.email}`)
        .then((res) => setOrders(res.data || [])) 
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setOrders([]); 
        });
    }
  }, [user]);

  return (
    <div className="p-6">
      <Helmet>
                              <title> Shopfront | My orders</title>
                              </Helmet>
      <h2 className="text-2xl font-bold mb-4">My Order History</h2>

      {orders.length === 0 ? ( 
        <p>No orders found.</p>
      ) : (
        <div className="grid gap-4">
          {orders?.map((order) => (
            <div key={order?._id} className="border p-4 rounded shadow-md">
              <h3 className="font-semibold">Order ID: {order?._id}</h3>
              <p>Date: {order?.orderDate ? new Date(order.orderDate).toLocaleDateString() : "N/A"}</p>
              <p>Status: {order?.status || "N/A"}</p>
              <p>Payment: {order?.paymentMethod || "N/A"}</p>
              <ul className="list-disc pl-4 mt-2">
                {order?.cartItems?.map((item, index) => ( 
                  <li key={index}>{item?.name || "Unknown Item"} - {item?.quantity || 0}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
