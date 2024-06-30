import React, { useState, useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PassengerType = ({ formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handlePassengerChange = (type, value) => {
    setFormData((prevState) => ({
      ...prevState,
      passengerType: {
        ...prevState.passengerType,
        [type]: value,
      },
    }));
  };

  const passengerTypes = [
    { label: 'Adults', age: '', min: 1 },
    { label: 'Students', age: '18+', min: 0 },
    { label: 'Youths', age: '12-17', min: 0 },
    { label: 'Children', age: '2-11', min: 0 },
    { label: 'Toddlers in own seat', age: 'Under 2', min: 0 },
    { label: 'Infants', age: 'Under 2', min: 0 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative flex flex-col gap-2' ref={dropdownRef}>
      <label htmlFor="passengerType" className='h6'>Passenger Type</label>
      <div className='relative'>
        <button
          type="button"
          className='w-full px-4 py-2 border-[1px] rounded-md outline-none text-base text-Lblack50 appearance-none pr-8 flex justify-between items-center'
          onClick={toggleDropdown}
        >
          Select passenger type
          <KeyboardArrowDownIcon className='w-5 h-5 pointer-events-none absolute right-2 top-[25%]' />
        </button>
        {isOpen && (
          <div className='absolute top-full mt-2 w-full bg-white border-[1px] rounded shadow-lg z-10'>
            {passengerTypes.map((type) => (
              <div key={type.label} className='flex justify-between items-center px-4 py-2'>
                <span>{type.label} {type.age && <span className='text-sm text-gray-500'>({type.age})</span>}</span>
                <div className='flex items-center'>
                  <button
                    type="button"
                    className='px-2 py-1 border rounded bg-gray-200'
                    onClick={() => handlePassengerChange(type.label, Math.max(0, (formData.passengerType[type.label] || 0) - 1))}
                  >
                    -
                  </button>
                  <span className='mx-2'>{formData.passengerType[type.label] || type.min}</span>
                  <button
                    type="button"
                    className='px-2 py-1 border rounded bg-gray-200'
                    onClick={() => handlePassengerChange(type.label, (formData.passengerType[type.label] || 0) + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className='p2'>Select who will travel.</p>
    </div>
  );
};

export default PassengerType;
