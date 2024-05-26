import React from 'react';

const Button = ({ text, className, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={className ? className : 'h6 bg-mainClr px-4 py-2 text-white hover:bg-[#CF782B] rounded-md'}
    >
      {text}
    </button>
  );
}

export default Button;
