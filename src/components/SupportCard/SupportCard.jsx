import { Carousel } from "@material-tailwind/react";
import supportImg from "./image/support.jpg";
import StarRateIcon from "@mui/icons-material/StarRate";
import Container from "../Container";
import "./style.css";
const SupportCard = () => {
  return (
    <>
    <section className="supportCard">
      <Container>
        <div className="w-full  flex justify-center items-center ">
          <div className="w-[90%]  flex justify-between items-center xs:w-full ">
            <Carousel className="Carousel w-[60%] h-full xs:w-[100%] sm:w-[100%] ">
              <div className="info w-full h-full flex justify-center  flex-col p-20 gap-5  xs:p-10 ">
                <span className="flex gap-2 text-mainClr">
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                </span>
                <h1 className="h3 xs:!text-sm w-![120%] ">
                  Love the simplicity of the service and prompt customer
                  support.{" "}
                </h1>
                <h4 className="h5">— Renee Wells</h4>
                <p className="p2">Service provider,Dubai</p>
              </div>

              <div className="info w-full h-full flex justify-center  flex-col p-20 gap-5  xs:p-10 ">
                <span className="flex gap-2 text-mainClr">
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                </span>
                <h1 className="h3 xs:!text-sm w-![120%] ">
                  Love the simplicity of the service and prompt customer
                  support.{" "}
                </h1>
                <h4 className="h5">— Renee Wells</h4>
                <p className="p2">Service provider,Dubai</p>
              </div>

              <div className="info w-full h-full flex justify-center  flex-col p-20 gap-5  xs:p-10 ">
                <span className="flex gap-2 text-mainClr">
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                  <StarRateIcon className=" !text-lg" />
                </span>
                <h1 className="h3 xs:!text-sm w-![120%] ">
                  Love the simplicity of the service and prompt customer
                  support.{" "}
                </h1>
                <h4 className="h5">— Renee Wells</h4>
                <p className="p2">Service provider,Dubai</p>
              </div>
            </Carousel>

            <div className="w-[60%] h-full flex justify-center  flex-col p-20 xs:hidden sm:hidden">
              <img
                src={supportImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
};

export default SupportCard;
