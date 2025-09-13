import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet></Outlet>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;