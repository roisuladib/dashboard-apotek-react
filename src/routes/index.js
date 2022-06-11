import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { 
   Home, 
   Login, 
   Register, 
   Product, 
   Category, 
   Report, 
   Sale, 
   Transaction, 
   User,
   Assets,
   CobaPagination
 } from '../pages';

export const GlobalRoutes = () => {
   const location = useLocation();
   return (
      <Routes location={location} key={location.pathname}>
         <Route index path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/products" element={<Product />} />
         <Route path="/categories" element={<Category />} />
         <Route path="/reports" element={<Report />} />
         <Route path="/sales" element={<Sale />} />
         <Route path="/transactions" element={<Transaction />} />
         <Route path="/users" element={<User />} />
         <Route path="/assets" element={<Assets />} />
         <Route path="/pagination" element={<CobaPagination />} />
      </Routes>
   )
}
