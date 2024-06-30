import React from "react";
import Container from "../Container";
import Button from "../Button";
import imgReg from "./images/register.png";
const Register = () => {
  return (
    <>
      <section>
        <Container className="">
          <div className="flex justify-between py-[50px] gap-10 items-center sm:flex-col xs:flex-col">
            <div className="w-[50%] flex flex-col gap-4 py xs:w-[80%] sm:w-[80%]">
              <h2 className="h2">Annual client Appreciation Award</h2>
              <p className="p1">
                Registrar for annual client appreciation award. Three lucky
                winners will get free round air trip tickets.
              </p>

              <div className="flex gap-3">
                <Button text="Register" />
                <Button
                  className="h6 bg-transparent border-[1px] border-Lblack text-Lblack50 hover:bg-mainClr hover:text-white py-[5px] hover:border-mainClr px-4 rounded-md hover:scale-[1.1] ease-in duration-200"
                  text="Learn more"
                />
              </div>
            </div>
            <div className="w-[50%] xs:w-[80%] sm:w-[80%]">
              <img src={imgReg} alt="" className="w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
