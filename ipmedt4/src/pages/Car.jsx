import React from "react";
import '../styles/CarPage.css'
import Discription from "../components/Discription";

const Car = ({ omschrijving}) => {
    return (
    <div className="caroverzicht">
      {/* <img src="./icons/car.jpg" alt="car" /> */}
      <Discription titel={'OPEL'} schakeling={'manual'} vrijekm={100} brandstof={'diesel'} 
      stoelen={5} type={'hatchback'} jaar={1997} kofferbak={3.5}/>
    </div>
    )
  };        


  
  export default Car;