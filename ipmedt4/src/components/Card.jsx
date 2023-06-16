import React from 'react';
import '../styles/Card.css';


const Card = ({ text, image,  amount }) => {
  return (
    
    <div className="income-card">
      <div className="income-card-body">
        <p>{text}</p>
        <img id='moneybag' src="./icons/money.svg" alt="Money" />
        <p id='amount'> {amount}</p>
      </div>
    </div>
    
  );
};

export default Card;
