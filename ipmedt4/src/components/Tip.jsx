import React from 'react';
import '../styles/Tip.css';

const Card = ({ text}) => {
  return (
    
    <div className="tipcard">
      <div className="card-body">
        <img id='warning-sign' src="./icons/warning.svg" alt="Money" />
        <p>{text}</p>
      </div>
    </div>
    
  );
};

export default Card;