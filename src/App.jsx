import { Routes,Route } from "react-router";
import  Home from "./pages/Home";
import AirlinesTicket from "./pages/AirlinesTicket";
import TourPlanner from "./pages/TourPlanner"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LogIn from "./components/LogIn/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import TradeLicense from "./pages/TradeLicense"
import CardDetPage from "./pages/CardDetPage";
import UaeVisa from "./pages/UaeVisa";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import SignUp from "./components/SignUp/SignUp";
import UKVisa from "./pages/UKVisa";
import USVisa from "./pages/USVisa";
const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="AirlinesTicket" element={<AirlinesTicket/>}/>
        <Route path="TourPlanner" element={<TourPlanner/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>
        <Route path='ContactUs' element={<ContactUs/>}></Route>
        <Route path="logIn" element={<LogIn/>}></Route>
        <Route path="SignUp" element={<SignUp/>}></Route>
        <Route path="forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="TradeLicense" element={<TradeLicense/>}></Route>
        <Route path="/package/:id" element={<CardDetPage/>}></Route>
        <Route path="/UAEvisa" element={<UaeVisa/>}></Route>
        <Route path="/USVisa" element={<USVisa/>}></Route>
        <Route path="/UKVisa" element={<UKVisa/>}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
      </Routes>
    </>
  );
};

export default App;
