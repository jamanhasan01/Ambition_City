import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../components/Packages/PackagesData";
import Container from "./Container";
import SurfingIcon from '@mui/icons-material/Surfing';
import CountertopsIcon from '@mui/icons-material/Countertops';
import WifiIcon from '@mui/icons-material/Wifi';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PoolIcon from '@mui/icons-material/Pool';
import TvIcon from '@mui/icons-material/Tv';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AirIcon from '@mui/icons-material/Air';
import BalconyIcon from '@mui/icons-material/Balcony';
import Calendar from "./Calendar/Calender";

const PackageDetail = () => {
  const [showText, setShowText] = useState(false);
  const { id } = useParams();
  const packageDetail = data.PackgesData.find(
    (item) => item.id === parseInt(id)
  );

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const handleSubmit = () => {
    console.log(selectionRange);
  };

  if (!packageDetail) {
    return <h2>Package not found</h2>;
  }

  return (
    <section id="packageDetails">
      <Container>
        <div className="flex flex-col gap-10 py-[50px]">
          {/* title */}
          <div className="flex flex-col gap-2">
            <h2 className="h2">
              Lovely Studio with Burj Khalifa views from Balcony
            </h2>
            <p className="p1">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>
          </div>
          {/* image section */}
          <div className="flex justify-between gap-7 xs:flex-col">
            <div className="w-[50%] xs:w-full">
              <img className="w-full h-full" src={packageDetail.img} alt="" />
            </div>
            <div className="w-[50%] xs:w-full flex flex-col justify-between gap-7">
              <div className="">
                <img className="w-full" src={packageDetail.subImg.subImg} alt="" />
              </div>
              <div>
                <img className="w-full" src={packageDetail.subImg.subImg} alt="" />
              </div>
            </div>
          </div>

          {/* about & price box */}
          <div className="flex justify-between gap-10 xs:flex-col sm:flex-col">
            <div className="w-[65%] flex flex-col gap-7 xs:w-full sm:w-full md:w-[50%]">
              <div className="flex flex-col gap-3">
                <h2 className="h2">
                  Entire rental unit in Dubai, United Arab Emirates
                </h2>
                <div className="flex gap-3">
                  <span>4 guests</span>
                  <span>Studio</span>
                  <span>1 bath</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="h3">About this space</h4>
                <p className={`p2 ${!showText ? "h-[80px]" : "h-[100%]"} overflow-hidden`}>
                  From our spacious balcony you can enjoy a unique view of Burj
                  Khalifa and the magic fountains. Enjoy breakfast in the
                  morning at our cozy dining table overlooking Dubai's old town
                  or layback at night in our comfortable lounge seats - enjoying
                  Burj Khalifa's video and laser shows! Also from our studio and
                  from the comfortable bed you can enjoy full Burj Khalifa and
                  Dubai skyline views, through our floor to ceiling windows all
                  day long. We're sure you will love your stay as much as we
                  always do!
                </p>
                <button className="h5" onClick={() => setShowText(!showText)}>see more</button>
              </div>
              <div>
                <h3 className="h4">What this place offers</h3>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <SurfingIcon /><p>Waterfront</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <CountertopsIcon /><p>Kitchen</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <WifiIcon /><p>Wi-fi</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <DirectionsCarIcon /><p>Free parking on premises</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <PoolIcon /><p>Pool</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <TvIcon /><p>TV</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <LocalLaundryServiceIcon /><p>Washer</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <AirIcon /><p>Air conditioning</p>
                  </span>
                  <span className="flex text-Lblack50 p2 gap-1 items-center">
                    <BalconyIcon /><p>Patio or balcony</p>
                  </span>
                </div>
              </div>
            </div>
            {/* price card section */}
            <div className="w-[35%] flex flex-col gap-5 shadow-xl xs:w-full sm:w-full md:w-[50%] border items-center p-5 rounded-md">
              <h4 className="h4">$135 night</h4>
              <div className="w-full flex justify-between p-3 border rounded-md">
                <span className="flex flex-col">
                  <h5 className="h5">Check-in</h5>
                  <p className="p2">05/24/2024</p>
                </span>
                <span className="flex flex-col">
                  <h5 className="h5">Check-out</h5>
                  <p className="p2">05/31/2024</p>
                </span>
                <span className="flex flex-col">
                  <h5 className="h5">Guests</h5>
                  <p className="p2">2 Guests</p>
                </span>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full h5 bg-mainClr text-white py-3 hover:scale-[1.1] ease-in duration-200 rounded-md">
                Check Out
              </button>
              <p className="p1">You won't be charged yet</p>
              {/* price details */}
              <div className="w-full flex flex-col border p-3 gap-3 rounded-md">
                <div className="w-full flex justify-between">
                  <p className="p2">$142 x 7 nights</p>
                  <h6 className="h5 text-Lblack50">$995</h6>
                </div>
                <div className="w-full flex justify-between">
                  <p className="p2">Weekly stay discount</p>
                  <h6 className="h5 text-Lblack50">$50</h6>
                </div>
                <div className="w-full flex justify-between border-b">
                  <p className="p2">Cleaning fee</p>
                  <h6 className="h5 text-Lblack50">$50</h6>
                </div>
                <div className="w-full flex justify-between mt-2">
                  <p className="p1">Total before taxes</p>
                  <h6 className="h5">$994</h6>
                </div>
              </div>
            </div>
          </div>
          <Calendar
            selectionRange={selectionRange}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
          />
        </div>
      </Container>
    </section>
  );
};

export default PackageDetail;
