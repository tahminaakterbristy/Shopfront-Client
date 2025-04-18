import { Helmet } from "react-helmet-async";

const Failed = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <Helmet>
                <title>Shopfront | Payment Failed</title>
            </Helmet>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
                    alt="Payment Failed"
                    className="w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h2>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your transaction could not be completed. Please check your payment details and try again.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/"
                        className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
                    >
                        Go Home
                    </a>
                    <a
                        href="https://sandbox.sslcommerz.com/EasyCheckOut/testcde480637092c4b655eb550745593bb878d"
                        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Retry Payment
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Failed;
