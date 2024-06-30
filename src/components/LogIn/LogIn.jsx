import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import GoogleLogo from "./image/google.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './style.css'
import { Link } from 'react-router-dom';

const LogIn = () => {

  const [showPass, setShowPass] = useState(false)

  return (
    <>
   
      <section id='login'>
      
          <div className='w-full   h-[100vh] relative'>
            <form className='absolute w-[400px] flex flex-col justify-center items-center gap-5 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-10  shadow-md  xs:!shadow-none rounded-md xs:w-full'>
              <div>
                <img src={Logo} alt="Logo" />
              </div>
              <div className='text-center'>
                <h3 className='h3'>Log in to your account</h3>
                <p className='p2'>Welcome back! Please enter your details.</p>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="username">Username</label>
                <input className='w-full outline-none px-3 py-2 rounded-md border' type="text" id="username" name="username" placeholder='Enter your username ' />
              </div>
              <div className='w-full flex flex-col gap-2 relative'>
                <label htmlFor="password">Password</label>
                <input className='w-full outline-none px-3 py-2 rounded-md border' type={showPass? "text":"password"} id="password" name="password" placeholder='Enter your password ' />
                <div className=' absolute right-[15px] top-[40px] text-Lblack cursor-pointer' onClick={()=>{
                  setShowPass(!showPass)
                }}>
                    {showPass ?  <VisibilityIcon/> : <VisibilityOffIcon/> }
                </div>
              </div>
              <div className='w-full flex justify-between gap-10'>
                <div>
                  <input type="checkbox" name='checkbox'/>
                  <label for="checkbox">Remember Me</label>
                </div>
                <Link to="/forgotPassword">
                <span className='text-Lblack50 text-[15px] font-[600] cursor-pointer hover:text-mainClr hover:border-mainClr hover:border-b'>Forgot password</span>
                </Link>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <button type="submit" className='w-full bg-mainClr h5 text-white px-3 py-2 rounded-md hover:bg-[#CF782B] hover:scale-[1.1] ease-in duration-200'>Sign In</button>

                <button className='w-full flex justify-center items-center gap-3 rounded-md border  px-3 py-2 hover:scale-[1.1] ease-in duration-200'><span><img src={GoogleLogo} alt="" /></span><h5 className='h5 '>Sign In With Google</h5></button>
              </div>
              <div className="mt-2 text-center">
              <Link to="/SignUp">
                <span className="text-Lblack50 text-[15px] font-[600] cursor-pointer hover:text-mainClr hover:border-mainClr hover:border-b">
                  Don't have Any account? Sign Up
                </span>
              </Link>
            </div>
            </form>
          </div>
       
      </section>
    </>
  );
};

export default LogIn;
