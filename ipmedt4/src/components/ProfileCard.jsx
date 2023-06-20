import React from "react";
import '../styles/Profile.css'
import pfp from '../icons/pfp.png'

const ProfileCard = ({ naam, email, }) => {
    return (
        <section className="profileInfo">
            <img id="profilePic" src={pfp} alt="profilepic" />
            <section className="privateInfo">
                <section className="profileText">
                    <p id="profielnaam">{naam}</p>
                    <p>{email}</p>
                </section>
                <p>Bericht</p>
            </section>
        </section>
    )
};

export default ProfileCard;