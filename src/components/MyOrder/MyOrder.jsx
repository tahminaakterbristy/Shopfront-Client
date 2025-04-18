import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const MyOrder = () => {
  const { user } = useContext(AuthContext); 
  const [orders, setOrders] = useState([]); // Ensure default state is an array

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:8000/orders/${user.email}`)
        .then((res) => setOrders(res.data || [])) // Always set as an array
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setOrders([]); // Prevent errors
        });
    }
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Order History</h2>

      {orders.length === 0 ? ( 
        <p>No orders found.</p>
      ) : (
        <div className="grid gap-4">
          {orders?.map((order) => ( // Use optional chaining to avoid errors
            <div key={order?._id} className="border p-4 rounded shadow-md">
              <h3 className="font-semibold">Order ID: {order?._id}</h3>
              <p>Date: {order?.orderDate ? new Date(order.orderDate).toLocaleDateString() : "N/A"}</p>
              <p>Status: {order?.status || "N/A"}</p>
              <p>Payment: {order?.paymentMethod || "N/A"}</p>
              <ul className="list-disc pl-4 mt-2">
                {order?.cartItems?.map((item, index) => ( // Use optional chaining here too
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
