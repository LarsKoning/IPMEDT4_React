import React from 'react';
import '../styles/GoalCard.css'


const GoalCard = ({ text, amount1, amount2 }) => {

  calc(parseInt(amount1), parseInt(amount2));
  myFunction_set(percentage + '%');
  return (

    <div className="goal-income-card">
      <div className="goal-income-card-body">
        <section id='progress'>
          <section className='top-goal-card'>
            <p id='goal'>{text}</p>
          </section>
          <img id='goalmoneybag' src="./icons/money.svg" alt="Money" />
          <p id='goalamount'> ${amount1} / {amount2}</p>
          <div id="myProgress">
            <div id="myBar"></div>
          </div>

        </section>
      </div>
    </div>

  );
};

var percentage = 0;
function calc(amount1, amount2) {
  percentage = (amount1 / amount2) * 100
}
var r = document.querySelector(':root');
function myFunction_set(percentage1) {
  r.style.setProperty('--progress', percentage1);
  console.log(percentage1);
}

export default GoalCard;
