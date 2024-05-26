import React from 'react'
import Container from '../Container'

const HappyCustomar = () => {
  return (
    <section>
        <Container>
            <div className='flex flex-col py-[50px] gap-10'>
                <div className='text-center flex flex-col gap-3'>
                    <h2 className='h2'>
                    Happily providing services to our customers
                    </h2>
                    <p className='p1 text-Lblack50'>Everything you need to enjoy luxurious tour and do business in Dubai.</p>
                </div>

        

                <div className='bg-mainClr grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 sm:gap-10 xs:gap-10 p-16 rounded-md'>
                    <div className='flex flex-col gap-3 text-white justify-center items-center'>
                        <h3 className='h2'>2000+</h3>
                        <h6 className='h6'>Awarded Customer</h6>
                    </div>
                    <div className='flex flex-col gap-3 text-white justify-center items-center'>
                        <h3 className='h2'>2000+</h3>
                        <h6 className='h6'>Awarded Customer</h6>
                    </div>
                    <div className='flex flex-col gap-3 text-white justify-center items-center'>
                        <h3 className='h2'>2000+</h3>
                        <h6 className='h6'>Awarded Customer</h6>
                    </div>
                    <div className='flex flex-col gap-3 text-white justify-center items-center'>
                        <h3 className='h2'>2000+</h3>
                        <h6 className='h6'>Awarded Customer</h6>
                    </div>
                </div>

                

            </div>
        </Container>
    </section>
  )
}

export default HappyCustomar