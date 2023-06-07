import React from 'react';

const Card = ({ text, image,  amount }) => {
  return (
    
    <div className="card">
      <div className="card-body">
        <p>{text}</p>
        <img id='moneybag' src="./icons/money.svg" alt="Money" />
        <p id='amount'> {amount}</p>
      </div>
    </div>
    
  );
};

export default Card;
