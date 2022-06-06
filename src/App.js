import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages';
import { Login, Register } from './pages/auth';
import Sales from './pages/sales';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </>
  );
}

export default App;
