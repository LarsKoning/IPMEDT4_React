import Calendar from '../components/Calender'
import Modal from '../components/Modal';
import { useState } from 'react';
import  Card  from '../components/Card';
import Rating from '../components/Rating';
import TopNavigationBar from '../components/TopNavigationBar';
import Tip from '../components/Tip';
import GoalCard from '../components/GoalCard';
import MonthSelect from '../components/MonthSelect';
import '../styles/MonthSelect.css'
import HalfCard from '../components/HalfCard';
import OverzichtCard from '../components/OverzichtCard';
import BottomNavigationBar from '../components/BottomNavigationBar';
import '../styles/Home.css'
import { Link } from 'react-router-dom';


function App() {
  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <section className='content'>
        <MonthSelect month={"Juni 2023"}/>
        <Card text="Inkomsten" amount="$150,00"/>
        <section className='agenda'>
          <HalfCard text={"Volgende"} appointment={"Woensdag "}  date={"24 Mei"} hours={"12:00 - 16:00"}/>
           <OverzichtCard text={"Overzicht"} overzicht={"Bekijk hier je agenda"} />
        </section>
        <section className='ratings'>
          <Rating header={""} underText={"5 van de 5"}/>
          <Rating header={""} underText={"5 van de 5"}/>
        </section>
        <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>
      </section>
    </div>
  );
}

export default App;

 
