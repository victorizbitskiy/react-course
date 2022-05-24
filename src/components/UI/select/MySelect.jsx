import React from 'react';
// import classes from './MySelect.module.css';
import classes from "./MySelect.module.css";

const MySelect = ({ options, deafultValue }) => {

  return (
    <div >
      <select className={classes.myInput}>
        <option disabled>{deafultValue}</option>
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