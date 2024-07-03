import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Header from "./Header/Header"
const MainContainer = ({ children }) => {
  const location = useLocation();
  const isLogin = location.pathname.includes('LogIn');
  const SignUp = location.pathname.includes('SignUp');

  const shouldShowLayout = !(isLogin || SignUp);
  return (
    <>
    {shouldShowLayout && <Header /> }
      {shouldShowLayout && <Navbar />}
        {children}
      {shouldShowLayout && <Footer />}
    </>
  );
};

export default MainContainer;
