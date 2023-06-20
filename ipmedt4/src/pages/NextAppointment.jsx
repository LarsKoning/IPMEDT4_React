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




function App() {

  return (
    <div>
      <Header text="Overzicht" />
      <p>profiel</p>
      <p>Volgende afspraak</p>
      <Renter begintijd={"12:00"} eindtijd={"16:00"} startdatum={"20-06-2023"} einddatum={"20-06-2023"} />
      <p>info over afspraak</p>
      <p>dm </p>
    </div>
  );
}

export default App;