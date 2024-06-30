import { Container } from "@mui/material";
import { Carousel } from "@material-tailwind/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeroData from "./HeroData"; // Ensure this import is correct and HeroData is an array of objects

const HeroSection = () => {
  return (
    <section>
      <Container className="h-[90vh] xs:h-[80vh]">
        <Carousel className="rounded-xl w-full h-full xs:pt-[50px]">
          {HeroData.map((item) => (
            <div className="w-full h-full relative" key={item.id}>
              <img
                src={item.img}
                alt={item.title} // Provide a meaningful alt text
                className="h-full w-full object-cover"
              />
              {/* Box info */}
              <div className="w-[80%] m-auto positionC text-white flex flex-col gap-8">
                <h1 className="h1 text-center">{item.title}</h1>

                <p className="text-sm text-white w-[60%] mx-auto text-center xs:w-full xs:text-left">
                  {item.desc}
                </p>

                <form action="" className="position relative w-[80%] mx-auto xs:w-[100%]">
                  <input
                    type="text"
                    className="w-full outline-none px-3 py-4 xs:py-3 text-Lblack font-medium rounded-md" placeholder="Search Here..."
                  />
                  <button className="bg-mainClr text-white h5 rounded-md px-2 py-2 absolute right-[-42px] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <SearchIcon /> Search
                  </button>
                </form>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default HeroSection;
