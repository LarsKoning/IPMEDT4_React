import './App.css';
// import Calendar from './components/Calender';
import Modal from './components/Modal';
import { useState } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import Graph from './components/Graph';
import {Earnings} from './Data';


function App() {
  const [openModal, setOpenModal] = useState(false)
  const [earnings, setEarnings] = useState({
    labels: Earnings.map((data) => data.maand),
    datasets: [{
      label: "geld verdiend",
      data: Earnings.map((data) => data.verdiend),
      backgroundColor: ["blue", "blue", "blue","blue", "red"]
    }]
  })

  return (
    <div className="App">
      <TopNavigationBar />
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      <div style={{width: 700, paddingTop: 200}}>
        <Graph className='graph' chartData={earnings}/>
      </div>
      {/* <Calendar /> */}
      <BottomNavigationBar />
    </div>
  );
}

export default App;
