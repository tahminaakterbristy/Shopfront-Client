import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const coverageAreas = ["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna"];

const Coverage = () => {

  const [result, setResult] = useState(null);



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 border border-pink-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Check Our Coverage Area</h2>
       

        {result && (
          <div className="mt-6 text-center text-lg font-medium text-gray-700">
            {result}
          </div>
        )}

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-pink-500" /> Currently Covered Areas:
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600 text-sm">
            {coverageAreas.map((area, index) => (
              <li key={index} className="bg-pink-100 px-3 py-1 rounded-full text-center shadow-sm">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
