import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ text, image,  amount }) => {
  return (
    
    <Link to="/goalpage" className="income-card">
      <div className="income-card-body">
        <p>{text}</p>
        <img id='moneybag' src="./icons/money.svg" alt="Money" />
        <p id='amount'> {amount}</p>
      </div>
    </Link>
    
  );
};

export default Card;
