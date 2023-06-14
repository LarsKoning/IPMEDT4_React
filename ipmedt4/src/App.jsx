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


function App() {

  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    async function getAllRoutes(){
      try {
        const routes = await axios.get("http://127.0.0.1:8001/api/routes/")

        d = routes.data;
        setRoutes(routes.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getAllRoutes()
    
  }, [])
  console.log(d);



  const [openModal, setOpenModal] = useState(false) 

  return (
    <div className="App">
      <button className='modalBtn' onClick={() => setOpenModal(true)}>Tips For More Money</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      {/* <Calendar /> */}
      <Card text="Inkomsten" amount="$150,00"/>
      <section className='ratings'>
      <Rating header={"Gemiddelde rating"} underText={"5 van de 5"}/>
      <Rating header={"Laatste rating"} underText={"5 van de 5"}/>
      </section>
      <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen"/>

      {routes.map((reserveringen, i) => {
        return(
          <p key={i}>{reserveringen.bedrag}</p>
        );
      })}
    </div>
  );
}

export default App;
