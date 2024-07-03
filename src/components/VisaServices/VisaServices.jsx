import Container from '../Container'
import React from 'react'
import Button from '../Button'
import VisaData from "./VisaData"
import { Link } from 'react-router-dom'


const VisaServies = () => {
  return (
    <section className='bg-[#f8f8f8]'>
        <Container>
            <div className='flex justify-between py-[120px] xs:flex-col gap-5'>
                {/* this is title section */}
                <div className='w-[50%] xs:w-full flex flex-col gap-4 items-start'>
                    <h2 className='h2'>Your Gateway to Global Exploration</h2>
                    <p className='p1 text-Lblack50 w-[80%] xs:w-[90%] sm:w-[90%] md:w-[90%]'>From Application Assistance to Document Preparation, Our Comprehensive Visa Services Ensure a Smooth and Stress-Free Journey for Every Traveler.</p>
                    <Link to="/ContactUs"><Button text="Contact Us"></Button></Link>
                </div>

                {/* this is box section */}

                <div className='w-1/2 xs:w-full md:w-[48%] gridR gap-5 xs:place-content-center xs:grid-cols-my-columns'>
                    {
                    VisaData.map((item)=>{
                      return(
                        
                        <div className='w-full xs:max-w-[350px] flex flex-col items-center gap-2 p-3 shadow-md rounded-md bg-white xs:p-3 ' key={item.id}>
                            <img src={item.img} alt="" className='w-full object-cover'/>
                            <h4 className='h4 xs:text-base'>{item.title}</h4>
                        </div>
                      )
                    })
                    }
                </div>

            </div>
        </Container>
    </section>
  )
}

export default VisaServies