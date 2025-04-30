import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Discount from './components/Discount/Discount.jsx';
import DiscountProducts from './components/DiscountProducts/DiscountProducts.jsx';
import FreeShippingSection from './components/FreeShippingSection/FreeShippingSection.jsx';
import SeasonalSale from './components/SeasonalSale/SeasonalSale.jsx';
import ElectronicsSection from './components/ElectronicsSection/ElectronicsSection.jsx';
import FashionProducts from './components/FashionProducts/FashionProducts.jsx';
import Homedecor from './components/HomeDecor/Homedecor.jsx';
import Toys from './components/Toys/Toys.jsx';


import Makeup from './components/Makeup/Makeup.jsx';
import Category from './components/Category/Category.jsx';
import SearchResultPage from './components/SearchResultPage/SearchResultPage.jsx';
import Cart from './components/Cart/Cart.jsx';
// import ProductList from './components/ProductList/ProductList.jsx';
import Authprovider from './components/AuthProvider/AuthProvider.jsx';
import Login from './components/LogIn/Login.jsx';
import Register from './components/Register/REgister.jsx';
import Profile from './components/Profile/Profile.jsx';
import PlaceOrder from './components/PlaceOrderForm/PlaceOrderForm.jsx';
import MyOrders from './components/MyOrder/MyOrder.jsx';

import { CartProvider } from './components/CartContext/CartContext.jsx';
import CreatePayment from './components/CreatePayment/CreatePayment.jsx';
import Success from './components/PaymentUrl/Success.jsx';
import Cancel from './components/PaymentUrl/Cancel.jsx';
import { FaLifeRing } from 'react-icons/fa';
import Failed from './components/PaymentUrl/Failed.jsx';
import Books from './components/Books/Book.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MyOrder from './components/MyOrder/MyOrder.jsx';
import Services from './components/Services/Services.jsx';
import Coverage from './components/Coverage/Coverage.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/discount',
        element: <Discount></Discount>
      },
      {
        path: '/discount-products',
        element: <DiscountProducts></DiscountProducts>
      },
      {
        path: '/freeshipping',
        element: <FreeShippingSection></FreeShippingSection>
      },
      {
        path: '/sale',
        element: <SeasonalSale></SeasonalSale>
      },
      {
        path: '/electronics',
        element: <ElectronicsSection></ElectronicsSection>
      },
      {
        path: '/fashion',
        element: <FashionProducts></FashionProducts>
      },
      {
        path: '/home-decor',
        element: <Homedecor></Homedecor>
      },
      {
        path: '/toys',
        element: <Toys></Toys>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/category',
        element: <Category></Category>
      },
      
     
      {
        path: '/beauty-products',
        element: <Makeup></Makeup>
      },
      {
        path: '/search-results',
        element: <SearchResultPage></SearchResultPage>
      },
      
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/coverage',
        element: <Coverage></Coverage>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update-profile',
        element: <Profile></Profile>
      },
      
      // {
      //   path: '/products',
      //   element: <ProductList></ProductList> 
      // },
      {
        path: '/place-order',
        element: <PlaceOrder></PlaceOrder> 
      },
      {
        path: '/myorder',
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    
      {
        path: '/create-payment',
        element: <CreatePayment></CreatePayment>
      },
      {
        path: '/fail',
        element: <Failed></Failed>
      },
      {
        path: '/success',
        element: <Success></Success>
      },
      {
        path: '/cancel',
        element: <Cancel></Cancel>
      },

     
      
      // {
      //   path: '/productlist',
      //   element: <ProductList></ProductList>
      // },
      
      
      
    ]
  },
]);

      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <Authprovider>
          <CartProvider>
          <HelmetProvider>
        
 
 <RouterProvider router={router}></RouterProvider>

</HelmetProvider>
          </CartProvider>
          </Authprovider>
        </StrictMode>,
      )
