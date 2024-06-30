import React from 'react'
import Container from '../Container'
import accoImg from './image/accommodation.png'
import Button from '../Button'

const Accommodation = () => {
  return (
    <section id='Accommodation'>
        <Container>
            <div className='py-[50px] px-10 shadow-lg'>
                <h2 className='h2'>Hotels and accommodation ideas</h2>
                <div className='flex justify-between gap-5 mt-10 xs:flex-col sm:flex-col
                '>
                    <div>
                        <img src={accoImg} alt="" />
                    </div>
                        {/* ------------ */}
                    <div className='flex flex-col items-start gap-10 '>
                        <div className='w-[70%] xs:w-full'><h3 className='h3 mb-2'>
                        Enjoy summer in Dubai with the best Kids Go Free hotel 
                        </h3>
                        <p className='p2'>There are savings all around, with fantastic rates and great offers for your young ones at Dubai's hotels and attractions this summer.</p></div>
                        <Button text="See More"/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Accommodation