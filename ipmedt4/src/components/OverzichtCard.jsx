import React from 'react';
import '../styles/OverzichtCard.css'
import { Link } from 'react-router-dom';

const OverzichtCard = ({ text,  overzicht }) => {
  return (
    
    <Link to="/agenda" className="overzicht-card">
      <div className="overzicht-card-body">
        <p id="overzichttitel" >{text}</p>
        <img id='agenda' src="./icons/calendar.svg" alt="Agenda" />
        <p id='overzicht'> {overzicht}</p>
      </div>
    </Link>
  );
};

export default OverzichtCard;
