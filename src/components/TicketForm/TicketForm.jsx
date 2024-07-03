import React, { useState } from 'react';
import Container from '../Container';
import PassengerType from '../PassengerTypes/PassengerTypes';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    ticketType: '',
    passengerType: {},
    ticketClass: '',
    from: '',
    to: '',
    departure: '',
    return: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form data submitted:', formData);
    // Handle form submission logic
    // Reset form data
    setFormData({
      ticketType: '',
      passengerType: {},
      ticketClass: '',
      from: '',
      to: '',
      departure: '',
      return: '',
      email: ''
    });
  };

  return (
    <section id='TicketForm'>
      <Container>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 items-center py-[120px]'>
          {/* Options section */}
          <div className='w-full grid grid-cols-3 gap-5 xs:grid-cols-1 sm:grid-cols-2'>
            <div className=' flex flex-col gap-2 relative'>
              <label htmlFor="ticketType" className='h6'>Ticket Type</label>
              <div className='relative r'>
                <select className='w-full  px-4 py-2 border-[1px] outline-none text-base text-Lblack50 appearance-none pr-8 rounded-md' name="ticketType" value={formData.ticketType} onChange={handleChange}>
                  <option value="">Select ticket type</option>
                  <option value="one-way">One Way</option>
                  <option value="return">Return</option>
                  <option value="multi-city">Multi City</option>
                </select>
                <KeyboardArrowDownIcon className='w-5 h-5 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none' />
              </div>
              <p className='p2'>One way, return or multi city air tickets.</p>
            </div>

            <PassengerType formData={formData} setFormData={setFormData} />

            <div className='flex flex-col gap-2 relative rounded-md'>
              <label for="ticketClass" className='h6'>Ticket Class</label>
              <div className='relative'>
                <select className='w-full px-4 py-2 border-[1px] rounded-md outline-none text-base text-Lblack50 appearance-none pr-8' name="ticketClass" value={formData.ticketClass} onChange={handleChange}>
                  <option value="">Select ticket class</option>
                  <option value="economy">Economy</option>
                  <option value="premiumEconomy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
                <KeyboardArrowDownIcon className='w-5 h-5 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none' />
              </div>
              <p className='p2'>Select the class of ticket you want to travel.</p>
            </div>
          </div>

          {/* Range & Date section */}
          <div className='w-full grid grid-cols-5 gap-5 xs:grid-cols-1 sm:grid-cols-2 '>
            <div className='flex flex-col gap-2'>
              <label for="from">
                From
              </label>
                <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="From" className='px-4 py-2 border-[1px] outline-none text-base text-Lblack50 w-full' />
              
              <p className='p2'>This is a hint text to help user.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <label for="to">
                To
                </label>
                <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder="To" className='px-4 py-2 border-[1px] outline-none text-base text-Lblack50 w-full' />
              <p className='p2'>This is a hint text to help user.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <label for="departure">
              Departure
              </label>
                
                <input type="date" name="departure" value={formData.departure} onChange={handleChange} placeholder='setdate' className='px-4 py-2 border-[1px] outline-none text-base !text-Lblack50 w-full' />
              
              <p className='p2'>Select departure date</p>
            </div>

            <div className='flex flex-col gap-2'>
              <label for="return">
              Return
              </label>
                
                <input type="date" name="return" value={formData.return} onChange={handleChange} className='px-4 py-2 border-[1px] outline-none text-base text-Lblack50 w-full' />
             
              <p className='p2'>Save more with Return ticket</p>
            </div>

            <div className='flex flex-col gap-2'>
              <label for="email">
                E-mail
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Write your email" className='px-4 py-2 border-[1px] outline-none text-base text-Lblack50 w-full' />
              
              <p className='p2'>Save more with Return ticket</p>
            </div>
          </div>
          
          <button type="submit" className='mt-4 px-4 py-2 bg-mainClr hover:bg-[#CF782B] text-white h6 rounded-md'>Send Enquiry</button>
        </form>
      </Container>
    </section>
  );
};

export default TicketForm;
