import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import License from "./components/License/License";
import VisaServies from "./components/VisaServices/VisaServices";
import Register from "./components/Register/Register";
import Packages from "./components/Packages/Packages";
import ContactUs from "./components/ContactUs/Contact";
import Formation from "./components/Formation/Formation";
import Support from ".//components/Support/Support";
import Post from "./components/Post/Post";
import Questions from "./components/Questions/Questions";
import Footer from './components/Footer/Footer'
import HappyCustomar from "./components/HappyCustomar/HappyCustomar";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <License />
      <VisaServies />
      <Register />
      <Packages />
      <ContactUs />
      <Formation />
      <Support />
      <Post />
      <Questions/>
      <HappyCustomar/>
      <Footer/>
  
    </>
  );
};

export default App;
