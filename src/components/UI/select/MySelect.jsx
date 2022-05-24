import React from 'react';
// import classes from './MySelect.module.css';
import classes from "./MySelect.module.css";

const MySelect = ({ options, deafultValue, value, onChange }) => {

  return (
    <div >
      <select 
      className={classes.myInput}
      value={value}
      onChange={event => onChange(event.target.value)}
      >
        <option disabled value="">{deafultValue}</option>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default MySelect;