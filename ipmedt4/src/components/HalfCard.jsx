import React from 'react';
import '../styles/HalfCard.css'

const HalfCard = ({ text, appointment, date, hours }) => {
  return (
    
    <div className="next-appointment">
      <div className="next-appointment-body">
        <p id='nextCard'>{text}</p>
        <section className="comingAppointment">
        <p id='Appointment'> {appointment}</p>
        <p id='Date'> {date}</p>
        <p id='Hours'> {hours}</p>
        </section>
      </div>
    </div>
    
  );
};

export default HalfCard;
