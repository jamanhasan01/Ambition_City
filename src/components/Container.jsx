import React from 'react'

const Container = ({children}) => {
  return (
    <>
        <div className='w-[90%] max-w-[1240px] mx-auto sm:w-[80%] xs:w-[95%]'>{children}</div>
    </>
  )
}

export default Container