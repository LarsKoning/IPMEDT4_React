import './App.css';
import Calendar from './components/Calender';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {
  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
