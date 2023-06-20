import '../App.css';
import GoalCard from '../components/GoalCard';
import '../styles/MonthSelect.css'
import MonthSelect from '../components/MonthSelect';
import TopNavigationBar from '../components/TopNavigationBar';
import BottomNavigationBar from '../components/BottomNavigationBar'
import Graph from '../components/Graph';
import Modal from '../components/Modal';
import { Earnings } from '../Data';
import { useState } from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calender';
import Renter from '../components/Renter';
import ProfileCard from '../components/ProfileCard'
import '../styles/Profile.css'
import Discription from '../components/Discription';




function App() {

  return (
    <div>
      <Header text="Overzicht" />
      <ProfileCard naam="Conscious Carl" email={"Carl@gmail.com"} />
      <br />
      <Renter title={"Moment van de afspraak"} begintijd={"12:00"} eindtijd={"16:00"} startdatum={"20-06-2023"} einddatum={"20-06-2023"} />
      {/* <p>info over afspraak</p> */}
      <Discription model={"OPEL Corsa"} kenteken={"12-34-AB"} vrijekm={"100 Km"} />
      <section id='buttonContainer'>
        <button id='DMButton'>
          Stuur een bericht
        </button>
      </section>
    </div>
  );
}

export default App;