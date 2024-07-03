import React from 'react'
import Container from '../Container'
import BookedImg from "./image/BookedTour.png"
import One from "./image/One.png"
import Two from "./image/Two.png"
import Three from "./image/three.png"
const BookedTour = ({value1,value2,value3}) => {
  return (
    <section className='BookedTour'>
        <Container>
            <div className='flex justify-between py-[120px] gap-5 xs:flex-col'>
                <div className='w-[50%] xs:w-full'>
                    <img  src={BookedImg} alt="" />
                </div>
                {/* --------- */}
              <div className='flex flex-col w-[50%] p-3 gap-7 xs:w-full'>

              <div className='flex flex-col gap-4'>
                    <h3 className='h3'>How to Booked the Tour</h3>
                    <p className='p2 text-Lblack50'>Lorem Ipsum is simply dummy text of the printing <br/> Lorem Ipsum is simply dummy text</p>
                </div>
                {/* --------- */}
                
              <div>
              <div className='flex justify-start gap-5'>
                    <div>
                        <img className='w-[75%]' src={One} alt="" />
                    </div>
                    <div>
                        <h6 className='h4'>Choose a Package</h6>
                        <p className='p2 text-Lblack50'>Lorem Ipsum is simply dummy text of the printing <br/> Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
                <div className='flex justify-start gap-5'>
                    <div>
                        <img className='w-[75%]'  src={Two} alt="" />
                    </div>
                    <div>
                        <h6 className='h4'>Talk With Our Agent</h6>
                        <p className='p2 text-Lblack50'>Lorem Ipsum is simply dummy text of the printing <br/> Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
                <div className='flex justify-start gap-5'>
                    <div>
                        <img className='w-[75%]'  src={Three} alt="" />
                    </div>
                    <div>
                        <h6 className='h4'>Send Inquiry</h6>
                        <p className='p2 text-Lblack50'>Lorem Ipsum is simply dummy text of the printing <br/> Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
              </div>

              </div>
            </div>
        </Container>
    </section>
  )
}

export default BookedTour