import React from 'react'
import Container from '../Container'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FormationData from "./FormationData"
const Formation = () => {
  return (
    <section>
        <Container>
            <div className='flex justify-between py-[120px] xs:flex-col xs:gap-10'>

            <div className='w-1/2  flex justify-start items-start flex-col gap-5 sm:w-[45%] xs:w-full'>
                <h2 className='h2'>Steps to Company Formation <br /> in the UAE</h2>
                <button className='font-Inter font-normal !text-[16px] xs:!text-[13px] sm:!text-[14px] flex justify-center items-center bg-[#4BC45C] text-white px-3 py-2 hover:bg-black rounded-md'><WhatsAppIcon className='!text-white mr-1'/>Chat Now</button>
            </div>

            <div className='w-1/2 flex flex-col gap-8 xs:w-full'>
                {FormationData.map((item)=>{
                    return <div className='flex flex-col gap-3 items-start' key={item.id}>
                        <h3 className='h3 text-[#344054] border-[1px] rounded-full  px-5 py-[7px] inline-block'>{item.id}</h3>
                        <h5 className='h5'>{item.title}</h5>
                        <p className='p2'>{item.text}</p>
                    </div>
                })}
            </div>
                
            </div>
        </Container>
    </section>
  )
}

export default Formation