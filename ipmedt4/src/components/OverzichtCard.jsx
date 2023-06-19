import React from 'react';
import '../styles/OverzichtCard.css'

const OverzichtCard = ({ text,  overzicht }) => {
  return (
    
    <div className="overzicht-card">
      <div className="overzicht-card-body">
        <p id="overzichttitel" >{text}</p>
        <img id='agenda' src="./icons/calendar.svg" alt="Agenda" />
        <p id='overzicht'> {overzicht}</p>
      </div>
    </div>
  );
};

export default OverzichtCard;
