import React from 'react';
import '../styles/HalfCard.css'
import { Link } from 'react-router-dom';
import Road from '../icons/road.svg'

const HalfCard = ({ text, appointment, date, hours }) => {
  return (

    <Link to="/agenda" className="next-appointment">
      <div className="next-appointment-body">
        <p id='nextCard'>{text}</p>
        <img id='nextIcon' src={Road} alt="Agenda" />
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
