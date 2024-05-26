import Container from '../Container';
import React from 'react'
import Logo from "../../assets/images/logo.png"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Button from '../Button';

const Header = () => {
  return (
  <div className='bg-[#FFF4ED]'>
      <Container >
        <div className='flexB py-4 '>
            <img src={Logo} alt="Logo" className='xs:w-[80px]'/>
            
            <div className='h5 !text-[#2c3441] xs:hidden'>
                <PhoneInTalkIcon/>
                <span>+971 58 142 5513</span>
            </div>

            <div className='flex gap-5'>
              <Button className="h5 !text-[#DC893F] hover:!text-red-500" text="Sign In"/>
              <Button text="Book Now"></Button>
            </div>

        </div>
    </Container>
  </div>
  )
}

export default Header