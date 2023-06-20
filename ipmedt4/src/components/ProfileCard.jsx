import React from "react";
import '../styles/Profile.css'
import pfp from '../icons/pfp.png'
import Rating from '../components/Rating';

const ProfileCard = ({ naam, email, beoordeling }) => {
    return (
        <section className="profileInfo">
            <img id="profilePic" src={pfp} alt="profilepic" />
            <section className="privateInfo">
                <section className="profileText">
                    <section>
                        <section className="PersonalInfo">
                            <p className="profileTitle">Naam</p>
                            <p id="profielnaam">{naam}</p>
                        </section >
                        <section className="PersonalInfo">
                            <p className="profileTitle">Email</p>
                            <p>{email}</p>
                        </section>
                        <section className="PersonalInfo">
                            <p className="profileTitle">Beoordeling</p>
                            <p>{beoordeling}</p>
                        </section>
                    </section>
                </section>
            </section >
        </section>

    )
};

export default ProfileCard;