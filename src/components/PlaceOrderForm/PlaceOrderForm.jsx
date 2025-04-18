import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const PlaceOrder = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCreatePayment = () => {
    axios.post('http://localhost:8000/add-payment', {
      amount: 1000,
      currency: 'BDT',
      product_name: 'Membership',
    
    })
    .then((response) => {
      console.log(response);

const redirerctUrl = response.data.paymentUrl;
 if (redirerctUrl) {
  window.location.replace(redirerctUrl);
 }
    });
  };

  //     if (response.data && response.data.success_url) {
  //       window.location.href = response.data.success_url;
  //     } else {
  //       alert("Failed to initiate payment.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Payment Error:", error);
  //     alert("Something went wrong.");
  //   });
  // };
  

  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });

// redirecting online payment page
if (e.target.name === "paymentMethod" && e.target.value === "Online Payment") {
  handleCreatePayment(); 
}


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderDetails = { ...orderData, cartItems, orderDate: new Date(), status: "Pending" };

    try {
      const response = await axios.post("http://localhost:8000/orders", orderDetails);
      if (response.status === 200) {
        alert("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="p-4 border rounded shadow-lg max-w-md mx-auto">
      <Helmet>
                          <title>Shopfront | Placce Order</title>
                        </Helmet>
      <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={orderData.name}
          onChange={handleChange}
          className="input input-bordered w-full mb-3"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={orderData.phone}
          onChange={handleChange}
          className="input input-bordered w-full mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={orderData.email}
          onChange={handleChange}
          className="input input-bordered w-full mb-3"
          required
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={orderData.address}
          onChange={handleChange}
          className="textarea textarea-bordered w-full mb-3"
          required
        ></textarea>

        <select
          name="paymentMethod"
          value={orderData.paymentMethod}
          onChange={handleChange}
          className="select select-bordered w-full mb-3"
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Online Payment" onClick={handleCreatePayment}>Online Payment</option>
        </select>
      

        <button type="submit" className="btn btn-primary w-full">
          Submit Order
        </button>
      </form>
      {/* <button type="button" onClick={handleCreatePayment} className="btn btn-primary w-full">
          Payment
        </button> */}
    </div>
  );
};

export default PlaceOrder;
