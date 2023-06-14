import React from 'react';

const OverzichtCard = ({ text, image,  amount }) => {
  return (
    
    <div className="overzicht-card">
      <div className="overziicht-card-body">
        <p>{text}</p>
        <img id='agenda' src="./icons/a.svg" alt="Money" />
        <p id='amount'> {amount}</p>
      </div>
    </div>
    
  );
};

export default OverzichtCard;
