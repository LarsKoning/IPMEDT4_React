import '../App.css';
import GoalCard from '../components/GoalCard';
import '../styles/MonthSelect.css'
import MonthSelect from '../components/MonthSelect';
import Graph from '../components/Graph';
import { Earnings } from '../Data';
import { useState } from 'react';
import Header from '../components/Header';




function App() {
  const [openModal, setOpenModal] = useState(false);
  const [earnings, setEarnings] = useState({
    labels: Earnings.map((data) => data.maand),
    datasets: [
      {
        label: 'Geld Verdiend',
        data: Earnings.map((data) => data.verdiend),
        backgroundColor: ['#5297FF', '#5297FF', '#5297FF', '#5297FF', '#FF5E00'],

      },
      {
        label: 'Verwachte inkomsten',
        data: Earnings.map((data) => data.otherData),
        backgroundColor: ['#FF5E00', '#5297FF', '#5297FF', '#5297FF', '#5297FF'],
      },
    ],
  });

  return (
    <div className="App">
      <section className="content">
        <Header text="Overzicht" />
        <MonthSelect month="Juni 2023" />
        <GoalCard text="Maand Doel" amount1="150,00" amount2="200,00" />
        <div id="graph">
          <Graph className="graph" chartData={earnings} />
        </div>
      </section>
    </div>
  );
}


export default App;