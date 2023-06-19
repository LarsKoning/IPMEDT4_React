import React from "react";
import '../styles/Tips.css'
import Header from '../components/Header';

const TipCard = () => {
    return (
        <div>
            <Header text="Overzicht" />
            <section className="tiplijst">
                <section className="tips">
                    <h1>Keyless</h1>
                    <p>Met SnappCar keyless hoef je niet meer na te denken over de sleuteloverdracht.
                        Huurders openen je auto volledig beiveiligd met de SnappCar app.
                    </p>
                </section>
                <section className="tips">
                    <h1>Zet direct boeken aan</h1>
                    <p>Bepaal zelf precies welke gebruikers jouw auto direct kunnen boeken.
                        Puur gemak en controle!
                    </p>
                </section>
                <section className="tips">
                    <h1>Houd je calender up to date</h1>
                    <p>Door je calender up-to-date te houden, ontvang je alleen verhuurverzoeken die je uitkomen</p>
                </section>
                <section className="tips">
                    <h1>Verhoog het aantal vrije kilometers</h1>
                    <p>Verhuurders hebben een duidelijke voorkeur voor auto's met een hoger aantal
                        inbegrepen kilometers, zoals 200 of 300 km.
                    </p>
                </section>
            </section>
        </div>

    )
};

export default TipCard;