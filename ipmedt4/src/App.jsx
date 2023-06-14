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
import axios from 'axios';

let d;
let totaal = 0;


function App() {

  const [reserveringen, setReserveringen] = useState([]);
  useEffect(() => {
    async function getAllReserveringen(){
      try {
        const reserveringen = await axios.get("http://127.0.0.1:8000/api/reserveringen/")

        d = reserveringen.data;
        setReserveringen(reserveringen.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getAllReserveringen()

    reserveringen.map((reserveringen, i) => {
      if(reserveringen.owner == 1){
        totaal += reserveringen.bedrag
        console.log(totaal);
      }
    })
    
  }, [])
  console.log(d);



  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      {/* <Calendar /> */}
      <Card text="Inkomsten" 
        amount={'€' + totaal}
      />
      <section className='ratings'>
      <Rating header={"Gemiddelde rating"} underText={"5 van de 5"}/>
      <Rating header={"Laatste rating"} underText={"5 van de 5"}/>
      </section>
      <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>

      
    </div>
  );
}

export default App;
