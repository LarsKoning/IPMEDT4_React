import React from "react";
import '../styles/Renter.css'
import backarrow from '../icons/Back-Arrow.svg'

const Renter = ({ begintijd, eindtijd, startdatum, einddatum, title }) => {
    return (
        <div className="renter">
            <section className="renterinfo">
                <p id="renterTitle">{title}</p>
                <section className="renterData">
                    <section>
                        <p className="datum">{startdatum}</p>
                        <p>{begintijd}</p>
                    </section>
                    <img src={backarrow} alt="backarrow" />
                    <section>
                        <p className="datum">{einddatum}</p>
                        <p>{eindtijd}</p>
                    </section>
                </section>
            </section>
        </div>
    )
};



export default Renter;