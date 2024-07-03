import React from 'react'
import Container from '../Container'
import ChooseImg from "./image/chooseUs.png"
import icon1 from "./image/icon1.png"
const ChooseUs = () => {
  return (
    <section id='ChooseUs'>
        <Container>
            <div className='flex justify-between gap-10  py-[120px] xs:flex-col sm:flex-col md:flex-col'>
                <div className='w-[40%] flex flex-col gap-5 sm:w-full xs:w-full md:w-full'>
                   <div> 
                    <h2 className='h2 mb-3'>Why Choose Us?</h2>
                    <p className='p1'>Experience simplicity with our streamlined licensing platform. Tailored processes ensure hassle-free license acquisition, letting you focus on your business.</p></div>
                    <img src={ChooseImg} alt="" />
                </div>
                {/* ---- */}
                <div className='w-[55%] gap-10 grid grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xs:w-full sm:w-full md:w-full'>
                    <div className='p-5 flex justify-start items-start gap-3 flex-col shadow-md'>
                    <img src={icon1} alt="" />
                    <h4 className='h4'>Expertise:</h4>
                    <p className='p2'>Our adept team provides expert support in business consulting, company formation, and trade license services, empowering your entrepreneurial path.</p>
                    </div>
                    <div className='p-5 flex justify-start items-start gap-3 flex-col shadow-md'>
                    <img src={icon1} alt="" />
                    <h4 className='h4'>Expertise:</h4>
                    <p className='p2'>Our adept team provides expert support in business consulting, company formation, and trade license services, empowering your entrepreneurial path.</p>
                    </div>
                    <div className='p-5 flex justify-start items-start gap-3 flex-col shadow-md'>
                    <img src={icon1} alt="" />
                    <h4 className='h4'>Expertise:</h4>
                    <p className='p2'>Our adept team provides expert support in business consulting, company formation, and trade license services, empowering your entrepreneurial path.</p>
                    </div>
                    <div className='p-5 flex justify-start items-start gap-3 flex-col shadow-md'>
                    <img src={icon1} alt="" />
                    <h4 className='h4'>Expertise:</h4>
                    <p className='p2'>Our adept team provides expert support in business consulting, company formation, and trade license services, empowering your entrepreneurial path.</p>
                    </div>

                </div>
            </div>
        </Container>
    </section>
  )
}

export default ChooseUs