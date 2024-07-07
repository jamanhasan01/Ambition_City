import React from "react";
import data from "./FooterLiData";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./style.css";

const Footer = () => {
  return (
    <section className="bgImg xs:!bg-none sm:!bg-none md:!bg-none xs:!h-full sm:!h-full">
      <Container className="xs:!h-full">
        <div className="flex justify-center">
        <div className="w-[70%] flex flex-col justify-center py-[120px] xs:justify-start">
          <div className="text-center flex flex-col gap-3 xs:text-start">
            <h1 className=" font-noto-sans-arabic font-[900] text-[30px] xs:text-[18px] sm:!text-[24px]">
              Happily providing services to our customers
            </h1>
            <p className="p2">
              Everything you need to enjoy luxurious tour and do business in Dubai..
            </p>
          </div>

          <div className="flex justify-center items-center mt-4 gap-3 xs:justify-start">
            <Button text="Get Stared"></Button>
            <button className="flex justify-between items-center font-Inter font-normal !text-[16px] bg-[#4BC45C] text-white px-3 py-2 hover:bg-black rounded-md hover:scale-[1.1] ease-in duration-200"><WhatsAppIcon className='!text-white mr-1 !text-[24px]'/>Chat Now</button>
          </div>

          <div className="footer-links py-10 gap-8 grid grid-cols-5 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
            <div className="">
              <h5 className="h6 !text-xs mb-2 text-Lblack50">Explore</h5>
              {data.Explore.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="text-[16px] xs:text-[14px] sm:text-[14px] font-[600] text-[#101828] md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">About Us</h5>
              {data.AboutUs.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="text-[16px]  xs:text-[14px] sm:text-[14px] font-[600] text-[#101828] md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Customer Support</h5>
              {data.CustomerSupport.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="text-[16px]  xs:text-[14px] sm:text-[14px] font-[600] text-[#101828] md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Stay Connected</h5>
              {data.StayConnected.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="text-[16px]  xs:text-[14px] sm:text-[14px] font-[600] text-[#101828] md:h5">
                    <Link to={item.Link}>{item.name}</Link>
                  </h5>
                </div>
              ))}
            </div>
            <div className="footer-s-box">
              <h5 className="h6 !text-xs mb-3 text-Lblack50">Resources</h5>
              {data.Resources.map((item, i) => (
                <div className="flex flex-col mb-2" key={i}>
                  <h5 className="text-[16px]  xs:text-[14px] sm:text-[14px] font-[600] text-[#101828] md:h5">
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
