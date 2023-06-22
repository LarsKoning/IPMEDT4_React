import '../App.css';
import '../styles/MonthSelect.css'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calender';
import Renter from '../components/Renter';


let isTaken = []

function App() {
  const [reserveringen, setReserveringen] = useState([]);

  async function getAllReserveringen() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/reserveringen/")
      const jsonData = await response.json()

      return jsonData

    } catch (error) {
      console.log(error);
    }
  }

  function getDates(resvs){
    isTaken = [];
    resvs.map(resv =>{
      if(resv.owner === 1){
        isTaken.push(resv.reservering)
      }     
    })
  }

  // function getDates(resvs) {
  //   if (Array.isArray(resvs)) {
  //     const isTaken = [];
  //     resvs.map(resv => {
  //       if (resv.owner === 1) {
  //         isTaken.push(resv.reservering);
  //       }
  //     });
  //     return isTaken;
  //   } else {
  //     // Handle the case when resvs is undefined or not an array
  //     return []; // Return an empty array or any other appropriate value
  //   }
  // }


  useEffect(() => {

    getAllReserveringen().then(response => {
      setReserveringen(response)
      getDates(response)
    })

  }, [])


  return (
    <div>
      <Header text="Overzicht" />
      <p id='agendaHeader'>Agenda</p>
      <Calendar isTaken={isTaken} />
      <Renter begintijd={"12:00"} eindtijd={"14:00"} startdatum={"Van 06-30"} einddatum={"Tot 06-30"} />
    </div>
  );
}

export default App;