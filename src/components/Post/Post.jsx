import React from "react";
import Data from "./Data"; // Check if Data is correctly imported
import "./index.css"; // Ensure the CSS file exists and is correctly imported
import Container from "../Container"; // Verify the Container component
import Button from "../Button"; // Verify the Button component
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col gap-7 py-[50px]">
            <div className="flex justify-between items-center xs:flex-col xs:justify-start xs:items-start gap-4">
              <div className="w-[70%] flex flex-col gap-4">
                <h2 className="h2">Latest writings</h2>
                <p className="p1">
                  Discover the newest destinations, innovations, and resources
                  from our team, dedicated to providing services in travel,
                  tourism, and business licensing in the UAE.
                </p>
              </div>
              <Button text="View All Posts" />
            </div>
            <div className="grid grid-cols-3 gap-5 justify-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {Data.cardData.map((i) => (
                <Link to={i.link}>
                  <div
                    className="w-full flex flex-col gap-3 p-5 sm:p2"
                    key={i.id}
                  >
                    <img src={i.img} alt={i.stitle} className="w-full" />
                    <div className="info flex flex-col gap-2">
                      <h5 className="h5">{i.stitle}</h5>
                      <h3 className="h3">{i.title}</h3>
                      <p className="p2">{i.desc}</p>
                      <div className="flex gap-5 items-center">
                        <img
                          src={i.Pimage}
                          alt={i.name}
                          className="w-10 h-10"
                        />
                        <div>
                          <h5 className="h5">{i.name}</h5>
                          <p className="font-semibold text-sm">{i.data}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Post;
