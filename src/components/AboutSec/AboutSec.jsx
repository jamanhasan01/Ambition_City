import React from 'react'
import Container from '../Container'
import AboutImg from "./image/AboutUs.png"
Container
const AboutSec = () => {
  return (
    <section id='AboutSec'>
      <Container>
          <div className='flex justify-between py-[120px] xs:flex-col sm:flex-col gap-10'>
              <div className='w-[40%] xs:w-full sm:w-full'>
                  <img src={AboutImg} alt="" />
              </div>
                {/* ------- */}
              <div className='w-[60%] flex flex-col gap-5 px-10 xs:w-full sm:w-full'>
                <div>
                <h6 className='h6'>About Us</h6>
                <h3 className='h3'>Ambition City Travel Agency</h3>
                </div>
                
                <ul className='p2 list-disc flex flex-col gap-5 !leading-relaxed text-Lblack50 '>
                <li>Create Clean, Peaceful Environment and Build Long term Relationship with Our  Customers, By Understanding There Needs and Meetings Them With the Highest Level Of  Integrity And Professionalism In The Travel & Tourism Industry.</li>
                  <li>Ambitions City Travel Agency Services is One Of The Fastest Growing companies In  Dubai, UAE,With An Office Staffed By Highly Qualified And Trained Personal. Our  Services Of Travel & tourism & Business Setup Experience Across a Range Of  Multinational Companies, Business Group And Travel & tourism In The UAE </li>
                  <li>All Our Staff Come from Travel and Tourism and Business Facility Management  Backgrounds And Have Previously Worked For Many Multinational Travel Agency Companies In UAE. </li>
                  <li>We are Committed To Providing High Quality, Value For Travel & tourism, & Professional  Business Setup Services. </li>
                  <li>New Innovation & Digitaliation of Easy the Life Of Customers</li>
                </ul>
                
              </div>
          </div>
      </Container>
    </section>
  )
}

export default AboutSec