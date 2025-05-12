

import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import image from '/assets/240_F_923236649_CV933hC1Bmta4s7hMZ4TWMyo2skHh1yZ.jpg';



const Banner = () => {
  return (
    <div className="banner-container bg-gray-100 h-[500px] relative">
     
      <img 
        src= {image}
        alt="Ecommerce Banner" 
        className="w-full h-full object-cover"
      />

   
      <div className="banner-content absolute inset-0 flex flex-col items-center justify-center text-center text-white">
   
        <Zoom>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
        </Zoom>

       
        <Fade bottom delay={300}>
          <p className="text-lg md:text-2xl mb-6">
            Shop the latest trends and exclusive products
          </p>
        </Fade>

      
        <Fade bottom delay={600}>
          <a
            href="/category"
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-xl font-semibold"
          >
            Shop Now
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
