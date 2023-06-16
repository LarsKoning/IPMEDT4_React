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




function App() {

  const [openModal, setOpenModal] = useState(false)
  const [earnings, setEarnings] = useState({
    labels: Earnings.map((data) => data.maand),
    datasets: [{
      label: ["geld verdiend"],
      data: Earnings.map((data) => data.verdiend),
      backgroundColor: ["#5297FF", "#5297FF", "#5297FF", "#5297FF", "#FF5E00"]
    }]
  })

  return (
    <div className="App">
      <TopNavigationBar />
      <section className="content">
        <MonthSelect month={"Juni 2023"} />
        <GoalCard text={"Maand Doel"} amount1="150,00" amount2="200,00" />
        <div style={{ width: 'min(80%, 40em)', paddingTop: '5%' }}>
          <Graph className='graph' chartData={earnings} />
        </div>
      </section>
      <BottomNavigationBar />
    </div>
  );
}

export default App;