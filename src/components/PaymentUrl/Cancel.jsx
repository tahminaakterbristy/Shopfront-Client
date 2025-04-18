import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cancel = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <Helmet>
                <title>Shopfront | Payment Cancelled</title>
            </Helmet>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
                    alt="Payment Cancelled"
                    className="w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-red-600 mb-2">Payment Cancelled</h2>
                <p className="text-gray-600 mb-6">
                    Your payment was not completed. If this was a mistake, please try again or contact support for assistance.
                </p>
                <a
                    href="/"
                    className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default Cancel;
