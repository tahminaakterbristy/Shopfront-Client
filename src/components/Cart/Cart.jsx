import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://shopfront-server.vercel.app/carts/${user?.email}`)
                .then(res => res.json())
                .then(data => setCartItems(data))
                .catch(error => console.error("Error fetching cart:", error));
        }
    }, [user]);

    const subtotal = cartItems.reduce((total, item) => total + Number(item.price), 0);
    const total = subtotal + deliveryCharge;

  
const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shopfront-server.vercel.app/carts/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: 'Deleted!',
                text: data.message || 'Item has been deleted.',
                icon: 'success',
                confirmButtonColor: '#cc3399',
              });
              setCartItems(cartItems.filter((item) => item._id !== _id));
            } else {
              Swal.fire({
                title: 'Failed!',
                text: data.message || 'Failed to delete item.',
                icon: 'error',
                confirmButtonColor: '#cc3399',
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong while deleting.',
              icon: 'error',
              confirmButtonColor: '#cc3399',
            });
          });
      }
    });
  };

    const handleDeliveryChange = (option) => {
        if (option === "inside") setDeliveryCharge(60);
        else if (option === "outside") setDeliveryCharge(100);
        else setDeliveryCharge(0);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <Helmet>
                                <title>Shopfront | Cart</title>
                              </Helmet>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                🛍 My Cart ({cartItems.length} items)
            </h2>

            {cartItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-lg">🛒 Your cart is empty.</p>
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-xl">
                            <thead className="bg-purple-100 text-gray-700 uppercase text-sm tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 text-left">Image</th>
                                    <th className="px-6 py-4 text-left">Name</th>
                                    <th className="px-6 py-4 text-left">Price</th>
                                    <th className="px-6 py-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item._id} className="border-t hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold">{item.name}</td>
                                        <td className="px-6 py-4 text-green-600 font-medium">${Number(item.price).toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all text-sm"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                <FaTrash />
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-100">
                                    <td colSpan="2" className="px-6 py-4 font-bold text-right text-gray-700">Subtotal:</td>
                                    <td colSpan="2" className="px-6 py-4 font-bold text-green-600">${subtotal.toFixed(2)}</td>
                                </tr>

                                <tr className="bg-white">
                                    <td colSpan="4" className="px-6 py-6 text-center">
                                        <div className="flex justify-center gap-4 flex-wrap">
                                            <button
                                                onClick={() => handleDeliveryChange("inside")}
                                                className={`px-5 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                                                    deliveryCharge === 60
                                                        ? "bg-purple-600 text-white border-purple-600 shadow-md"
                                                        : "bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
                                                }`}
                                            >
                                                Inside Dhaka (+৳60)
                                            </button>
                                            <button
                                                onClick={() => handleDeliveryChange("outside")}
                                                className={`px-5 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                                                    deliveryCharge === 100
                                                        ? "bg-purple-600 text-white border-purple-600 shadow-md"
                                                        : "bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
                                                }`}
                                            >
                                                Outside Dhaka (+৳100)
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="bg-gray-100">
                                    <td colSpan="2" className="px-6 py-4 font-bold text-right text-gray-700">Delivery Charge:</td>
                                    <td colSpan="2" className="px-6 py-4 font-bold text-blue-600">${deliveryCharge.toFixed(2)}</td>
                                </tr>

                                <tr className="bg-gray-200">
                                    <td colSpan="2" className="px-6 py-4 font-bold text-right text-gray-900 text-xl">Total:</td>
                                    <td colSpan="2" className="px-6 py-4 font-bold text-purple-700 text-xl">${total.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </>
            )}

<div className="mt-10 text-center">
    {cartItems.length && deliveryCharge ? (
        <Link to="/place-order">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all text-lg">
                ✅ Place Your Order
            </button>
        </Link>
    ) : (
        <button
            disabled
            className="px-8 py-3 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed text-lg"
        >
            🚫 Place Your Order
        </button>
    )}
</div>
        </div>
    );
};

export default Cart;
