import React from 'react';
import '../styles/OverzichtCard.css'

const OverzichtCard = ({ text,  overzicht }) => {
  return (
    
    <div className="overzicht-card">
      <div className="overzicht-card-body">
        <p>{text}</p>
        <img id='agenda' src="./icons/warnings.svg" alt="Agenda" />
        <p id='overzicht'> {overzicht}</p>
      </div>
    </div>
  );
};

export default OverzichtCard;
