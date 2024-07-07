import React from "react";

const VisaCard = ({ country, image }) => (
  <div className="visa-card relative">
    <img src={image} alt={country} />
    <h3 className=" absolute left-4 bottom-1 z-10 text-white">{country}</h3>
  </div>
);

export default VisaCard;
