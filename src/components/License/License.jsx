import { Container } from '@mui/material'
import React from 'react'
import LicenseData from './LicenseData'

const License = () => {
  return (
    <section>
        <Container>
            <div className='flexC flex-col gap-10 py-[54px] '>
                {/* title  */}
                <div className='flex flex-col gap-4 justify-center items-center text-center'>
                    <h2 className='h2'>Seamless Travel and Licensing with Ambition City</h2>
                    <p className='p2 w-[60%] text-center text-Lblack50 sm:w-[80%] md:w-[80%] xs:w-[80%]'>Ambition City revolutionizes travel and licensing with its seamless integration platform, eliminating paperwork and streamlining processes for hassle-free experiences.</p>
                </div>

                {/* main box */}

                <div className='gridR'>
                   {
                    LicenseData.map((item)=>{
                        return (<>
                            <div className='flexC flex-col gap-3 p-4 text-center'>
                                    <img src={item.icon} alt="" />
                                    <h4 className='h4 xs:!text-lg'>{item.title}</h4>
                                    <p className='text-center p1 text-Lblack50 xs:w-[70%]'>{item.desc}</p>
                                </div>
                        </>)
                    })
                   }
                </div>

            </div>
        </Container>
    </section>
  )
}

export default License