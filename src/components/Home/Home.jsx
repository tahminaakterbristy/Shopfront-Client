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
       

         {/* <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider> */}
        </div>
    );
};

export default Home;