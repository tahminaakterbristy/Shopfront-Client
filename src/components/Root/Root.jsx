import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;