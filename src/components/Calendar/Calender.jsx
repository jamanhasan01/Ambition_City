import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './style.css'; // custom css file

function Calendar({ selectionRange, handleSelect, handleSubmit }) {
  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
     
    </div>
  );
}

export default Calendar;
