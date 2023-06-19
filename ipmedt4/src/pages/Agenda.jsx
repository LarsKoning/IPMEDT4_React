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




function App() {

  return (
    <div>
    <Header text="Overzicht" />
      <p id='agendaHeader'>Bekijk hier je komende afspraken</p>
    <Calendar/>
    </div>
  );
}

export default App;