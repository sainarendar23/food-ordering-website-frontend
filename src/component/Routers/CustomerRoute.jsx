import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import RestaurantDetils from '../Restaurant/RestaurantDetils';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';

const CustomerRoute = () => {
  return (
    <Routes>
      {/* Redirect default route to login page */}
      <Route path="/" element={<Navigate to="/account/login" />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path="/account/:register" element={<Auth />} />
      <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetils />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-profile/*" element={<Profile />} />
    </Routes>
  );
};

export default CustomerRoute;
