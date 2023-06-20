import React from 'react';
import '../styles/OverzichtCard.css'
import { Link } from 'react-router-dom';
import agenda from '../icons/calendar.svg'

const OverzichtCard = ({ text,  overzicht }) => {
  return (
    
    <Link to="/agenda" className="overzicht-card">
      <div className="overzicht-card-body">
        <p id="overzichttitel" >{text}</p>
        <img id='agenda' src={agenda} alt="Agenda" />
        <p id='overzicht'> {overzicht}</p>
      </div>
    </Link>
  );
};

export default OverzichtCard;
