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


function App() {
  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <TopNavigationBar/>
      <section className='content'>
        <MonthSelect month={"Juni 2023"}/>
        <Card text="Inkomsten" amount="$150,00"/>
        <section className='agenda'>
          <HalfCard text={"volgende afspraak"} appointment={"morgen"}/>
           <OverzichtCard text={"Overzicht"} overzicht={"Bekijk hier je overzicht"} />
        </section>
        <section className='ratings'>
          <Rating header={"Gemiddelde rating"} underText={"5 van de 5"}/>
          <Rating header={"Laatste rating"} underText={"5 van de 5"}/>
        </section>
        <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>
      </section>
      <BottomNavigationBar />
    </div>
  );
}

export default App;
