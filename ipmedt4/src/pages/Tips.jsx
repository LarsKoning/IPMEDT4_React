import React from "react";
import '../styles/Tips.css'
import TipCard from "../components/TipCard";
import Header from "../components/Header";
import Keyless from "../icons/keyless.svg";
import InBook from "../icons/instant-booking.svg";
import Calendar from "../icons/bigCalendar.svg";
import Dashboard from "../icons/bigDashboard.svg";

const Tips = () => {
    return (
        <div>
            <Header text="Overzicht" />
            <TipCard tipImage={Keyless} tipHead={"Keyless"} tipText={"Met SnappCar keyless hoef je niet meer na te denken over de sleuteloverdracht. Huurders openen je auto volledig beiveiligd met de SnappCar app."} />
            <TipCard tipImage={InBook} tipHead={"Zet direct boeken aan"} tipText={"Bepaal zelf precies welke gebruikers jouw auto direct kunnen boeken. Puur gemak en controle!"} />
            <TipCard tipImage={Calendar} tipHead={"Houd je calender up to date"} tipText={"Door je calender up-to-date te houden, ontvang je alleen verhuurverzoeken die je uitkomen"} />
            <TipCard className="bottomCard" tipImage={Dashboard} tipHead={"Verhoog het aantal vrije kilometers"} tipText={"Verhuurders hebben een duidelijke voorkeur voor auto's met een hoger aantal inbegrepen kilometers, zoals 200 of 300 km."} />
        </div>
    )
};

export default Tips;


