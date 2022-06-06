import React from 'react';
import { Link } from 'react-router-dom';

import { Sidebar } from '../components';

import { NumberFormat } from '../utils';

const Home = () => {
  return (
    <>
      <Sidebar />
      <div>Home</div>
      <span>{NumberFormat(1164499)}</span>
      <hr className="my-10" />
      <Link to="/register" className="rounded-xl py-3 px-7 text-base font-medium text-white bg-teal-600">
        Register
      </Link>
      <Link to="/login" className="rounded-xl py-3 px-7 text-base font-medium text-white bg-teal-600">
        Login
      </Link>
    </>
  );
};

export default Home