import React from 'react'
import Container from '../Container'
import TourPlanWithUsImg from './Image/tourPlanWithUs.png'
const TourPlanWithUs = ({title}) => {
  return (
    <section className='TourPlanWithUs'>
        <Container>
            <div className=' flex flex-col gap-10 py-[54px]'>
                {/* title section */}
                <div className='flex justify-center items-center flex-col gap-3'>
                    <h2 className='h2 '>{title || "Tour Plan With Us"}</h2>
                    <p className='p1 text-center w-[55%] text-Lblack50 xs:w-[80%]'>At Ambition City Travel Agency, we're dedicated to simplifying licensing for businesses. With a focus on efficiency and innovation, our team is committed to providing tailored solutions that empower your success</p>
                </div>
                {/* main section  */}

                <div className=' rounded-md overflow-hidden'>
                    <img src={TourPlanWithUsImg} alt="" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default TourPlanWithUs