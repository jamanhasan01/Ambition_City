import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import GoogleLogo from './image/google.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import './style.css';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // You can send 'data' to your server here.
  };

  return (
    <>
      <section id="signup">
        <div className="w-full h-[100%] relative py-[50px] flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-[400px] flex flex-col justify-center items-center gap-5 p-10 shadow-md xs:!shadow-none rounded-md xs:w-full"
          >
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div className="text-center">
              <h3 className="h3">Sign up for an account</h3>
              <p className="p2">Join us! Please fill in your details.</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="w-full outline-none px-3 py-2 rounded-md border"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-full outline-none px-3 py-2 rounded-md border"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2 relative">
              <label htmlFor="password">Password</label>
              <input
                className="w-full outline-none px-3 py-2 rounded-md border"
                type={showPass ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Create a password"
                minLength="8"
                required
              />
              <div
                className="absolute right-[15px] top-[40px] text-Lblack cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              <button
                type="submit"
                className="w-full bg-mainClr h5 text-white px-3 py-2 rounded-md hover:bg-[#CF782B] hover:scale-[1.1] ease-in duration-200"
              >
                Get started
              </button>
              <button className="w-full flex justify-center items-center gap-3 rounded-md border px-3 py-2 hover:scale-[1.1] ease-in duration-200">
                <span>
                  <img src={GoogleLogo} alt="Google Logo" />
                </span>
                <h5 className="h5">Sign up with Google</h5>
              </button>
            </div>
            <div className="mt-2 text-center">
              <Link to="/logIn">
                <span className="text-Lblack50 text-[15px] font-[600] cursor-pointer hover:text-mainClr hover:border-mainClr hover:border-b">
                  Already have an account? Log in
                </span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
