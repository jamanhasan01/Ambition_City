import React from "react";
import Container from "../Container";
import icon1 from "./image/Icon1.png";
import icon2 from "./image/Icon2.png";
import banner from "./image/banner.png"

const QualityPolicy = () => {
  return (
    <section id="QualityPolicy">
      <Container>
        <div className="flex flex-col py-[54px]">
          <div className="flex flex-col gap-4 text-center py-[50px]">
            <h2 className="h2">Quality Policy</h2>
            <p className="p1 w-[60%] m-auto  xs:w-full">
              At Ambition City Travel Agency, excellence is our standard. With a
              carefully curated team dedicated to exceptional service, we
              guarantee our clients a consistently superior experience.
            </p>
          </div>

          {/* ------- */}
          <div className="flex justify-between  border-[1px] sm:flex-col xs:flex-col">
            <div className="w-[50%] p-5 border-r-[1px] xs:w-full sm:w-full xs:border-r-none xs:border-b-[1px]  sm:border-r-none sm:border-b-[1px]">
              <img src={icon1} alt="" />
              <h5 className="h5 py-4">Mission</h5>
              <ul className="p2 list-disc flex flex-col gap-5 pl-5">
                <li>
                  To Retain Consistency In Our High quality Travel & Business
                  setup services,
                </li>
                <li>
                  To Maintain Standards By Retaining Staff Knowledge &
                  Experience,
                </li>
                <li>
                  Resource Focus on Maintaining Travel &Tourism Standards,
                </li>
                <li>
                  Maintainace Our Existing Clients by Maintaining Excellence in
                  Our Provision of Services and Competitive Pricing.
                </li>
                <li>
                  Training and Development Of Staff Travel & Tourism In The
                  Direction Of Company Growth And Customers Satisfactions.
                </li>
              </ul>
            </div>
            {/* --- */}
            <div className="w-[50%] p-5 border-r-[1px] xs:w-full sm:w-full xs:border-r-none xs:border-b-[1px]  sm:border-r-none sm:border-b-[1px]">
              <img src={icon1} alt="" />
              <h5 className="h5 py-4">Vision</h5>
              <ul className="p2 list-disc flex flex-col gap-5 pl-5">
                <li>
                  Through A Commitment To Excellence And Continual Investment in
                  Our People We Seek To Become The Leading Brand Name With in
                  the Travel & Tourism Industry Nationwide.
                </li>
              </ul>
            </div>
          </div>
          {/* ------------- */}
          {/* ------banner-------- */}
            <div className="mt-16">
                <img src={banner} alt="" />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default QualityPolicy;
