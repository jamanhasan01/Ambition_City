import React, { useState } from 'react';
import Container from '../Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const sections = [
  { 
    id: 1, 
    title: 'How to Apply', 
    content: (
      <>
        <p className='p1'>Foreigners who want to travel to the UAE have to possess a passport to their country and a valid UAE visa. From now on, by applying for an e-visa online, you can get your UAE e-visa quickly and simply without having to send your passport to the UAE Embassy.</p>
        <h3 className="text-lg font-semibold my-5 ">Apply online for UAE e-Visa in 3 easy steps:</h3>
        <ul className="flex flex-col gap-7">
          <li className='flex items-start gap-3'>
          <span className='px-4 text-gray-500 py-2 border-2 border-gray-300 rounded-full text-2xl'>1</span>
           <div>
           <h4 className='h5'> Step 1: Fill out the application form</h4>
            <p className='p1 text-Lblack50 font-[700] pt-1'>Filling out the online form by providing: the date of visit, full name, passport number, date of birth, and nationality. You are required to enter personal information that matches the information on your passport.</p>
           </div>
          </li>
          <li className='flex items-start gap-3'>
          <span className='px-4 text-gray-500 py-2 border-2 border-gray-300 rounded-full text-2xl'>2</span>
            <div >
            <h4 className='h5'> Step 2: Make payment & get e-visa</h4>
            <p  className='p1 text-Lblack50 font-[700] pt-1'>Pay the Visa fee and Government fee online with your credit/debit card, PayPal, or wire bank transfer. See Payment Guidelines. After finishing your payment, you will receive a confirmation email and an email to request some documents required to process the visa for you. Then we will process your UAE e-Visa and send it to you by email.</p> 
            </div>
          </li>
          <li className='flex items-start gap-3'>
          <span className='px-4 text-gray-500 py-2 border-2 border-gray-300 rounded-full text-2xl'>3</span>
            <div>
            <h4 className='h5'> Step 3: Print out & Travel to UAE</h4>
            <p  className='p1 text-Lblack50 font-[700] pt-1'>Download the UAE eVisa and print it out. You need to show the e-visa on arrival for checking at the checkpoint in UAE. It takes 5 - 10 minutes to get the e-visa stamped on your passport by UAE Immigration Officers.</p>
            </div>
          </li>
        </ul>
      </>
    )
  },
  { id: 2, title: 'Documentation', content: 'Content for Documentation' },
  { id: 4, title: 'Entering UAE', content: 'Content for Entering UAE' },
  { id: 5, title: 'Extending VISA', content: 'Content for Extending VISA' },
  { id: 6, title: 'Change of status', content: 'Content for Change of status' },
  { id: 7, title: 'Insurance', content: 'Content for Insurance' },
  { id: 8, title: 'On arrival visa', content: 'Content for On arrival visa' }
];

const Accordion = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0].id); // Set the initial state to the first section's id

  const handleSectionClick = (id) => {
    setSelectedSection(id === selectedSection ? null : id);
  };

  return (
    <div className="">
      <Container>
        <div className='flex justify-between py-[120px] xs:flex-col sm:flex-col'>
          <div className="w-1/4 pr-5 xs:w-full sm:w-full">
            <ul className=''>
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={`h5 p-4 flex justify-between cursor-pointer hover:bg-gray-200 ${selectedSection === section.id ? 'bg-gray-100' : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.title}
                  {selectedSection === section.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-4">
            {sections.map((section) =>
              section.id === selectedSection ? (
                <div key={section.id}>
                  <h2 className="h5 text-xl font-bold mb-2">{section.title}</h2>
                  <div>{section.content}</div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Accordion;
