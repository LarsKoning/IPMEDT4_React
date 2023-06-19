import React from 'react';
import '../styles/Tip.css';
import { Link } from 'react-router-dom';

const Card = ({ text}) => {
  return (
    
    <Link to="/tips" className="tipcard">
      <div className="card-body">
        <img id='warning-sign' src="./icons/warning.svg" alt="Money" />
        <p>{text}</p>
      </div>
    </Link>
    
  );
};

export default Card;
