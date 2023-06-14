import './App.css';
import Calendar from './components/Calender';
import Modal from './components/Modal';
import  Card  from './components/Card';
import Rating from './components/Rating';
import './styles/Card.css';
import './styles/Rating.css';
import Tip from './components/Tip';
import './styles/Tip.css';
import { useState, useEffect } from 'react';

let totaal = 0;

function App() {
  const [reserveringen, setReserveringen] = useState([]);

  async function getAllReserveringen(){
    try {
      const response = await fetch("http://127.0.0.1:8000/api/reserveringen/")
      const jsonData = await response.json()

      return jsonData

    } catch (error) {
      console.log(error);
    }
  }

  const updatePricing = (resvs) => {
    totaal = 0
    resvs.map(resv => {
      if(resv.owner === 1){
        totaal += resv.bedrag
      }
    });
  }

  useEffect(() => {
    
    getAllReserveringen().then(response => {
      setReserveringen(response)
      updatePricing(response)
    })
    
  }, [])

  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      <Card text="Inkomsten" 
        amount={'€' + totaal}
      />
      {/* <Calendar reserveringen={reserveringen}/> */}

      <section className='ratings'>
      <Rating header={"Gemiddelde rating"} underText={"5 van de 5"}/>
      <Rating header={"Laatste rating"} underText={"5 van de 5"}/>
      </section>
      <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>

      
    </div>
  );
}

export default App;
