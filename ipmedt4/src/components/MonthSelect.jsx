import React from 'react';
import '../styles/MonthSelect.css';

const MonthSelect = ({ month }) => {
  return (
    <section id='selection'>
      <img id='leftArrow' src="./icons/Back-Arrow.svg" alt="Arrow" />
      <p>{month}</p>
      <img id='rightArrow' src="./icons/Back-Arrow.svg" alt="Arrow" />
    </section>

  );
};

export default MonthSelect;
