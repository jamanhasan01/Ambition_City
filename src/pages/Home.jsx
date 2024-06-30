import React from 'react'

import HeroSection from "../components/HeroSection/HeroSection";
import License from "../components/License/License";
import VisaServies from "../components/VisaServices/VisaServices";
import Register from "../components/Register/Register";
import Packages from "../components/Packages/Packages";
import ContactForHome from "../components/ContactForHome/Contact";
import Formation from "../components/Formation/Formation";
import Support from "../components/Support/Support";
import Post from "../components/Post/Post";
import Questions from "../components/Questions/Questions";
import HappyCustomar from "../components/HappyCustomar/HappyCustomar";

const Home = () => {
  return (
   <>

      <HeroSection />
      <License />
      <VisaServies />
      <Register />
      <Packages showTitle={true}/>
      <ContactForHome />
      <Formation />
      <Support />
      <Post />
      <Questions/>
      <HappyCustomar/>
   </>
  )
}

export default Home