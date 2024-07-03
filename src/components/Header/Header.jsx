import Container from '../Container';
import React from 'react'
import Logo from "../../assets/images/logo.png"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Button from '../Button';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
  <div className=' border-b'>
      <Container >
        <div className='flexB py-4 '>
           <Link to="/" ><img src={Logo} alt="Logo" className='xs:w-[80px]'/></Link> 
            
            <div className='font-[500] font-Inter !text-[18] !text-[#344054] xs:hidden'>
                <PhoneInTalkIcon/>
                <span>+971 58 142 5513</span>
            </div>

            <div className='flex gap-5 xs:hidden items-center'>
              <Link to="LogIn"><Button className="font-Inter font-[600] !ext-[16px] hover:scale-[1.1] ease-in duration-200 !text-[#DC893F] hover:!text-[#CF782B]" text="Sign In"/></Link>
             <Link to='AirlinesTicket'>  <Button text="Book Now"></Button></Link>
            </div>

        </div>
    </Container>
  </div>
  )
}

export default Header