import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';

import Discount from '../Discount/Discount';
import SocialMedia from '../SocialMedia/SocialMedia';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import OurBrand from '../OurBrands/OurBrands';

;



const Home = () => {
    return (
        <div>
          <Helmet>
                        <title> Shopfront | Home</title>
                        </Helmet>
       <Navbar></Navbar>
            <Banner></Banner>
         <Category></Category>
        <Discount></Discount>
        <OurBrand></OurBrand>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
       

      
        </div>
    );
};

export default Home;