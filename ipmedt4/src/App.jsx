import './App.css';
// import Calendar from './components/Calender';
import Modal from './components/Modal';
import { useState } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';


function App() {
  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <TopNavigationBar />
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      {/* <Calendar /> */}
      <BottomNavigationBar />
    </div>
  );
}

export default App;
