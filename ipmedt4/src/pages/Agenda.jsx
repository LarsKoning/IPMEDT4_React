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
      <p id='agendaHeader'>Agenda</p>
    <Calendar/>
    <Renter begintijd={"12:00"} eindtijd={"14:00"} startdatum={"Van 06-30"} einddatum={"Tot 06-30"}/>
    </div>
  );
}

export default App;