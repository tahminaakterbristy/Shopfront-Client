import { Helmet } from "react-helmet-async";

const Success = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
            <Helmet>
                <title>Shopfront | Payment Success</title>
            </Helmet>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                    alt="Payment Success"
                    className="w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your transaction was completed successfully.
                </p>
                <a
               href="/"
                    className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
};

export default Success;
