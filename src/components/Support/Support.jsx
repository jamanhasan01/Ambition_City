import React from 'react';
import CustomCarousel from '../CustomCarousel/CustomCarousel';
import supportVedio from './vedio/supportVedio.mp4';
import StarRateIcon from '@mui/icons-material/StarRate';
import Container from '../Container';
import './style.css';

const Support = () => {
  return (
    <Container>
      <div className="support w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-between items-center xs:w-full sm:w-full xs:flex-col sm:flex-col ">
          <CustomCarousel showArrows={false}>
            <div key={0} className="info w-full h-full flex justify-center flex-col py-20 gap-5 xs:p-10">
              <span className="flex gap-2 text-mainClr">

                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />

              </span>
              <h1 className="h2  leading-10 ">
                Love the simplicity of the service <br /> and prompt customer support.
              </h1>
              <h4 className="h5">— Renee Wells</h4>
              <p className="p2">Service provider, Dubai</p>
            </div>

            <div key={1} className="info w-full h-full flex justify-center flex-col py-20 gap-5 xs:p-10">
              <span className="flex gap-2 text-mainClr">
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
              </span>
              <h1 className="h2  leading-10 ">
                Love the simplicity of the service <br /> and prompt customer support.
              </h1>
              <h4 className="h5">— Test User</h4>
              <p className="p2">Service provider, Location</p>
            </div>

            <div key={2} className="info w-full h-full flex justify-center flex-col py-20 gap-5 xs:p-10">
              <span className="flex gap-2 text-mainClr">
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
                <StarRateIcon className="text-lg" />
              </span>
              <h1 className="h2  leading-10 ">
                Love the simplicity of the service <br /> and prompt customer support.
              </h1>
              <h4 className="h5">— Renee Wells</h4>
              <p className="p2">Service provider, Dubai</p>
            </div>
          </CustomCarousel>

          {/* Video Section */}
          <div className="flex flex-col justify-center w-[80%] h-full xs:w-full sm:w-full md:w-full rounded-sm overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-[12px] overflow-hidden"
              controls
              autoPlay
              muted
            >
              <source src={supportVedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
