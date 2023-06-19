import React from "react";
import '../styles/Discription.css'

const Discription = ({titel ,schakeling, vrijekm, brandstof, stoelen, kofferbak, type, jaar}) => {
    return (
    <div className="caroverzicht">
      <section className="titel">
        <img id="carImage" src="./icons/car.svg" alt="car" />
        <p>{titel}</p>
      </section>
      <section className="iconrow">
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {schakeling}</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {vrijekm} per dag</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {brandstof}</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {stoelen}</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {kofferbak} m3</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {type}</p>
        </section>
        <section className="opties">
            <img src="./icons/calendar.svg" alt="" />
            <p id='omschrijving'> {jaar}</p>
        </section>
      </section>
      <section className="overigeinfo">  
        <p>OMSCHRIJVING</p>
        <p>PRIJS</p>
      </section>
    </div>
    )
  };        


  
  export default Discription;