import React from 'react';
import { FaTruck, FaUndo, FaLock, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck size={30} className="text-pink-500" />,
    title: "Fast Delivery",
    description: "Get your products delivered quickly and safely at your doorstep.",
  },
  {
    icon: <FaUndo size={30} className="text-pink-500" />,
    title: "Easy Return",
    description: "7-day hassle-free return policy for all eligible products.",
  },
  {
    icon: <FaLock size={30} className="text-pink-500" />,
    title: "Secure Payment",
    description: "Your payments are encrypted and completely safe with us.",
  },
  {
    icon: <FaHeadset size={30} className="text-pink-500" />,
    title: "24/7 Support",
    description: "Our support team is available round-the-clock to help you.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-[#f3d8ec] flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 text-center transition duration-300 border-t-4 border-pink-500"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
