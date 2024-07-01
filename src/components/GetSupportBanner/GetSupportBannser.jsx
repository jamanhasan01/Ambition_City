import React from 'react'
import Container from '../Container'

const GetSupportBannser = () => {
  return (
    <section id='GetSupportBannser'>
        <Container>
          <div className='py-[54px]'>
          <div className="flex flex-col  bg-mainClr py-16 px-14 text-center gap-6 text-white rounded-lg">
                <h3 className='h2'>Get Support to Our Expert team by call or Chating </h3>
                <p className='w-[40%] m-auto  xs:w-full sm:w-full md:w-[60%] p2 !text-white'>Get expert support via call or chat for tailored assistance. Connect with us today for prompt help.</p>
                <div className='flex gap-3 justify-center xs:flex-col'>
                    <button className='h5 px-2 py-2 text-white border-[1px] border-white rounded-md hover:bg-black hover:text-white hover:border-black'>Call-+971 50 989 0689</button>
                    <button className='h5 bg-white px-2 py-2 text-black text rounded-md hover:bg-black hover:text-white'>Chat by Whatsapp</button>
                </div>
            </div>
          </div>
        </Container>        
    </section>
  )
}

export default GetSupportBannser