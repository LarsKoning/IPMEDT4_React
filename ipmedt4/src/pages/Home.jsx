import '../styles/Home.css'
import '../App.css';
import Card from '../components/Card';
import Rating from '../components/Rating';
import Tip from '../components/Tip';
import '../styles/Tip.css';
import { useState, useEffect } from 'react';
import MonthSelect from '../components/MonthSelect';
import '../styles/MonthSelect.css'
import HalfCard from '../components/HalfCard';
import OverzichtCard from '../components/OverzichtCard';

let totaal = '150,00';


function App() {
  // const [reserveringen, setReserveringen] = useState([]);

  // async function getAllReserveringen() {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/reserveringen/")
  //     const jsonData = await response.json()

  //     return jsonData

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function updatePricing(resvs) {
  //   totaal = 0
  //   resvs.map(resv => {
  //     if (resv.owner === 1) {
  //       totaal += resv.bedrag
  //     }
  //   });
  // }

  // useEffect(() => {

  //   getAllReserveringen().then(response => {
  //     setReserveringen(response)
  //     updatePricing(response)
  //   })

  // }, [])

  return (
    <div className="App">
      <section className='content'>
        <MonthSelect month={"Juni 2023"} />
        <Card text="Inkomsten" amount={"$" + totaal} />
        <section className='agenda'>
          <HalfCard text={"U Volgende Afspraak"} appointment={"Woensdag"} date={"24 Mei"} hours={"12:00 - 16:00"} />
          <OverzichtCard text={"Overzicht"} overzicht={"Bekijk hier je agenda"} />
        </section>
        <section className='ratings'>
          <p id='ratingTitle'>Jouw Ratings</p>
          <Rating header={"Gemiddelde"} underText={"4/5"} star1={"blueStar"} star2={"blueStar"} star3={"blueStar"} star4={"blueStar"} star5={"greyStar"} />
          <Rating header={"Meest recente"} underText={"3/5"} star1={"blueStar"} star2={"blueStar"} star3={"blueStar"} star4={"greyStar"} star5={"greyStar"} />
        </section>
        <Tip text="Je laatste ratings zijn lager dan gemiddeld! Klik hier om tips te krijgen" />
      </section>
    </div>
  );
}

export default App;


