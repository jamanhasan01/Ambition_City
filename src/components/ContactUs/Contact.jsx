import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import contactImg from "./Image/contact.jpg"
import './style.css'
import Container from '../Container'

const Contact = () => {
  return (
    <>
    <Container>
        <div className='contact w-full flex justify-center items-center py-[50px]'>
            <div className='w-full flex flex-col gap-8'>
                <div className='contactInfo w-full flex justify-between flex-wrap gap-6'>
                    <div className='flex gap-2 flex-col xs:w-full'>
                        <h3 className='h4 !text-[18px] text-mainClr'>Contact us</h3>
                        <h2 className='h3 text-Lblack50'>Chat to our friendly team</h2>
                        <p className='p2 text-Lblack'>We’d love to hear from you! Please get in touch.</p>
                    </div>
                    <div className='flex gap-5 flex-col'>
                        <div className='flex justify-start items-center gap-2'>
                            <span>
                            <LocationOnIcon className='!text-2xl  text-mainClr'/>
                            </span>
                            <span>
                                <h5 className='h5'>Dubai</h5>
                                <p className='p2 text-Lblack50'>100 Mysere Street, Fatah Province, VIC 3000 UAE</p>
                            </span>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <span>
                                < PhoneInTalkIcon className='!text-2xl  text-mainClr'/>
                            </span>
                            <span>
                                <h5 className='h5'>Talk to our Expert team</h5>
                                <p>+971 58 142 5513</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={contactImg} alt="" />
                </div>
            </div>
        </div>
        </Container>
    </>
  )
}

export default Contact