import React from "react";
import Container from "../Container";

const VisitOfficeBanner = () => {
  return (
    <section id="visitOfficeBanner" className="bg-mainClr">
      <Container>
        <div className="py-[50px]">
          <div className="w-full flex justify-between text-start gap-10 xs:text-center sm:text-center xs:flex-col sm:flex-col">
            <div className="text-white flex flex-col gap-3 w-[30%] xs:w-full sm:w-full">
              <h6 className="h6">Our locations</h6>
              <h3 className="h3">Visit our Offices</h3>
              <h5 className="h5 !text-white">Find us at these locations.</h5>
            </div>

            <div className="flex flex-col gap-4 text-white w-[35%] xs:w-full sm:w-full">
              <div>
                <h5 className="h5">Abu Dhabi</h5>
                <p className="p2 !text-white">100 Flinders Street, Abu Dhabi VIC 3000, UAE</p>
              </div>
              <div>
                <h5 className="h5">Dhaka</h5>
                <p className="p2 !text-white">100 Byron Bay, NSW 2481, AU</p>
              </div>
              <div>
                <h5 className="h5">London</h5>
                <p className="p2 !text-white">100 Oxford Street, London W1D 1LL, UK</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white w-[35%] xs:w-full sm:w-full">
                <div>
                  <h5 className="h5">Dubai</h5>
                  <p className="p2 !text-white">100 Glory Dubai StreetDubai NSW 2000 UAE</p>
                </div>
                <div>
                  <h5 className="h5">London</h5>
                  <p className="p2 !text-white" >100 Oxford StreetLondon W1D 1LL UK</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisitOfficeBanner
