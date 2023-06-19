import React from 'react';
import '../styles/HalfCard.css'
import { Link } from 'react-router-dom';

const HalfCard = ({ text, appointment, date, hours }) => {
  return (
    
    <Link to="/agenda" className="next-appointment">
      <div className="next-appointment-body">
        <p id='nextCard'>{text}</p>
        <img id='nextIcon' src="./icons/car.svg" alt="Agenda" />
        <section className="comingAppointment">
        <p id='Appointment'> {appointment}</p>
        <p id='Date'> {date}</p>
        <p id='Hours'> {hours}</p>
        </section>
      </div>
    </Link>
    
  );
};

export default HalfCard;
