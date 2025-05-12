import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import brand1 from "/assets/wu-yi-zY3zIOdKXL4-unsplash.jpg";
import brand2 from "/assets/amin-zabardast-Eaz3rz5bf5M-unsplash.jpg";
import brand3 from "/assets/boliviainteligente-s6Z3d1pRa2o-unsplash.jpg";
import brand4 from "/assets/buzzed-buds--M5wsz_xfKQ-unsplash.jpg";
import brand5 from "/assets/caste-V0t_CC_X82A-unsplash.jpg";
import brand6 from "/assets/rubaitul-azad-xtBbVaWTV5Q-unsplash.jpg";

const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6];

const OurBrand = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0, 
    cssEase: "linear",
    pauseOnHover: true, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Brands</h2>
      <Slider {...settings}>
        {brandLogos.map((logo, index) => (
          <div key={index} className="px-4">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-20 mx-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurBrand;
