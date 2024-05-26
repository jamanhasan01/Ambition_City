import React from "react";
import data from "./FooterLiData";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./style.css";

const Footer = () => {
  return (
    <section className="bgImg xs:!bg-none sm:!bg-none md:!bg-none">
      <Container>
        <div className="flex justify-center">
        <div className="w-[70%] flex flex-col justify-center py-[50px] xs:justify-start">
          <div className="text-center flex flex-col gap-3 xs:text-start">
            <h1 className="h3">
              Happily providing services to our customers
            </h1>
            <p className="p2">
              Everything you need to enjoy luxurious tour and do business in Dubai..
            </p>
          </div>

          <div className="flex justify-center items-center mt-4 gap-3 xs:justify-start">
            <Button text="Get Stared"></Button>
            <button className="h6 bg-[#4BC45C] text-white px-3 py-2 hover:bg-black rounded-md"><WhatsAppIcon className='!text-white mr-1'/>Chat Now</button>
          </div>

          <div className="footer-links py-10 gap-8 grid grid-cols-5 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
            <div className="">
              <h5 className="h6 !text-xs mb-2 text-Lblack50">Explore</h5>
              {data.Explore.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="h6 md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">About Us</h5>
              {data.AboutUs.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="h6 md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Customer Support</h5>
              {data.CustomerSupport.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="h6 md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Stay Connected</h5>
              {data.StayConnected.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="h6 md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Resources</h5>
              {data.Resources.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="h6 md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-center pt-10 border-gray-500 border-t-2">
            <p>@ 2024 Ambition Travel & Tourism UI. All right reserved</p>
          </div>
        </div>
        </div>
        </Container>
    </section>
  );
};

export default Footer;
