import React from "react";
import '../styles/Discription.css'
import image from '../icons/car.svg'
import Licensce from "../icons/Rectangle-3.svg"
import FreeKM from "../icons/extra-km.svg"

const Discription = ({ model, kenteken, vrijekm }) => {
  return (
    <div className="caroverzicht">
      <section className="iconrow">
        <p id="autotitel" >Gekozen auto</p>
        <section className="opties">
          <section className="IconText">
            <img className="carImage" src={image} alt="car" />
            <p>Model</p>
          </section>
          <p id='omschrijving'> {model}</p>
        </section>
        <section className="opties">
          <section className="IconText">
            <img className="carImage" src={Licensce} alt="" />
            <p>Kenteken</p>
          </section>
          <p id='omschrijving'> {kenteken}</p>
        </section>
        <section className="opties">
          <section className="IconText">
            <img className="carImage" src={FreeKM} alt="" />
            <p>Vrije KM</p>
          </section>
          <p id='omschrijving'> {vrijekm}</p>
        </section>
      </section>
      {/* <section className="overigeinfo">
      </section> */}
    </div>
  )
};



export default Discription;