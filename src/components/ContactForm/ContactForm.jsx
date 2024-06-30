import React, { useState } from "react";
import Container from "../Container";
import ContactFormImg from "./image/ContactFormImg.png"
import './style.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phoneNumber: "",
    message: "",
    services: [],
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace this with your submission logic

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "US",
      phoneNumber: "",
      message: "",
      services: [],
    });
  };

  return (
    <section id="ContactForm">
      <Container>
        <div className="py-[50px] flex justify-between gap-6 items-center  xs:flex-col sm:flex-col">
            <div className="w-[50%] xs:w-full sm:w-full">
            <div className="form-container">
            <h3 className="h2 xs:text-center sm:text-center md:text-center">Let’s level up your brand, together</h3>
            <p className="p1 xs:text-center sm:text-center md:text-center mt-3">
              You can reach us anytime via{" "}
              <a className="text-mainClr" href="mailto:hi@untitledui.com">hi@untitledui.com</a>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
              <div className="form-group flex justify-between  gap-4 xs:flex-col sm:flex-col">
                <div className="w-full">
                <label for="firstNmae">First Name</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="py-3 px-5 border mt-2 w-full"
                />
                </div>
               <div className="w-full">
               <label for="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="py-3 px-5 border mt-2 w-full"
                />
               </div>
              </div>
              <div className="form-group">
              <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-3 px-5 border mt-2 w-full"
                />
              </div>
              <div className="form-group ">
              <label for="phoneNumber">Phone Number</label>
                <br />
                <div className=" border flex justify-between m-2 rounded-[8px]">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-[60px] outline-none"
                >
                  <option value="US">US +1</option>
                  <option value="IN">India +91</option>
                  <option value="AE">Dubai (UAE) +971</option>
                  <option value="BD">Bangladesh +880</option>
                  {/* Add other country codes as needed */}
                </select>
                
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="(555) 000-0000"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full h-full py-3 px-5"
                  
                  
                />
                </div>
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 p-4 border w-full outline-none rounded-[8px]"
                />
              </div>
              <div className="form-group">
                <label>Services</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Visa Process"
                    checked={formData.services.includes("Visa Process")}
                    onChange={handleChange}
                    
                  />
                  <label>Visa Process</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Business License"
                    checked={formData.services.includes("Business License")}
                    onChange={handleChange}
                  />
                  <label>Business License</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Air Ticket"
                    checked={formData.services.includes("Air Ticket")}
                    onChange={handleChange}
                  />
                  <label>Air Ticket</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Tour Plan"
                    checked={formData.services.includes("Tour Plan")}
                    onChange={handleChange}
                  />
                  <label>Tour Plan</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Umrah Package"
                    checked={formData.services.includes("Umrah Package")}
                    onChange={handleChange}
                  />
                  <label>Umrah Package</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="services"
                    value="Other"
                    checked={formData.services.includes("Other")}
                    onChange={handleChange}
                  />
                  <label>Other</label>
                </div>
                  </div>
              </div>
              <button type="submit" className="bg-mainClr hover:bg-[#CF782B] text-white py-3 px-3 h5 rounded-md">Submit Message</button>
            </form>
          </div>
            </div>
            <div className="w-[50%] xs:w-full sm:w-full md:w-[100%] ">
                <img src={ContactFormImg} alt=""  />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
