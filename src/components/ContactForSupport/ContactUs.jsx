import React from 'react'
import Container from '../Container'
import img from './image/Container.png'
const ContactForSupport = () => {
  return (
    <section id="contactUs">
        <Container>
            <div className='flex flex-col gap-10 py-[54px]'>
                <div className='text-center flex flex-col gap-3'>
                  <h6 className='h6 text-mainClr'>Contact Us</h6>
                  <h2 className='h2'>We’d love to hear from you</h2>
                  <p className='p1'>We have offices and teams all around the world.</p>
                </div>
              {/* ------------ */}
              <div className='flex flex-col'>
                <img className='w-full object-cover' src={img} alt="" />
                <div className='flex justify-between gap-10 items-center xs:flex-col sm:flex-col'>

                  <div className='flex justify-center items-center flex-col gap-2'>
                    <h6 className='h5'>Support</h6>
                    <p className='p2'>Our friendly team is here to help.</p>
                    <h6 className=' text-base text-mainClr font-normal'>support@untitledui.com</h6>
                  </div>
                 
                  <div className='flex justify-center items-center flex-col gap-2'>
                    <h6 className='h5'>Sales</h6>
                    <p className='p2'>Questions or queries? Get in touch!</p>
                    <h6 className=' text-base text-mainClr font-normal'>sales@untitledui.com</h6>
                  </div>
                  
                  <div className='flex justify-center items-center flex-col gap-2'>
                    <h6 className='h5'>Phone</h6>
                    <p className='p2'>Mon-Fri from 8am to 5pm.</p>
                    <h6 className=' text-base text-mainClr font-normal'>+1 (555) 000-0000</h6>
                  </div>
                
                </div>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactForSupport