import React from 'react';
import '../styles/HalfCard.css'

const HalfCard = ({ text, appointment }) => {
  return (
    
    <div className="next-appointment">
      <div className="next-appointment-body">
        <p>{text}</p>
        <p id='Appointment'> {appointment}</p>
      </div>
    </div>
    
  );
};

export default HalfCard;
