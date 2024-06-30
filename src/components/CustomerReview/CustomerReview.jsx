import React from "react";
import Container from "../Container";
import RatingStart from "../RatingStar/RatingStart";
import ReviewData from "./Data";
const CustomerReview = () => {
  return (
    <section id="CustomerReview">
      <Container>
        <div className="w-full grid grid-cols-3 gap-5  py-[50px]">
          {ReviewData.map((e) => {
            return (
              <>
                <div className="flex flex-col gap-5  p-3 shadow-md rounded-xl border-b-mainClr border-b-4 border-t">
                  <div className=" flex justify-between">
                    <div className="flex gap-2 items-center">
                      <img src={e.img} alt="" />
                      <span>
                        <h5 className="h5">{e.name}</h5>
                        <RatingStart />
                      </span>
                    </div>
                    <p className="text-4xl font-extrabold">,,</p>
                  </div>
                  <p className="p2 !leading-[25px]">{e.p}</p>
                </div>
              </>
            );
          })}

          {/* ----------- */}
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
