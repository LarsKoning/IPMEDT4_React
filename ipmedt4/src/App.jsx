import './App.css';
import Calendar from './components/Calender';
import Modal from './components/Modal';
import { useState } from 'react';
import  Card  from './components/Card';
import Rating from './components/Rating';
import Tip from './components/Tip';
import GoalCard from './components/GoalCard';
import MonthSelect from './components/MonthSelect';



function App() {
  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      {/* <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/> */}
      <Calendar />
      <MonthSelect month={"Juni 2023"}/>
      <Card text="Inkomsten" amount="$150,00"/>
      <section className='ratings'>
      <Rating header={"Gemiddelde rating"} underText={"5 van de 5"}/>
      <Rating header={"Laatste rating"} underText={"5 van de 5"}/>
      </section>
      <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>
      <GoalCard text={"Maand Doel"} amount1="150,00" amount2= "200,00"/>
    </div>
  );
}

export default App;
