import React from "react";
import '../styles/Profile.css'
import pfp from '../icons/pfp.png'
import Rating from '../components/Rating';

const ProfileCard = ({ naam, email, }) => {
    return (
        <section className="profileInfo">
            <img id="profilePic" src={pfp} alt="profilepic" />
            <section className="privateInfo">
                <section className="profileText">
                    <p id="profielnaam">{naam}</p>
                    <p>{email}</p>
                </section>
                <Rating id="profileRating" star1={"blueStar"} star2={"blueStar"} star3={"blueStar"} star4={"blueStar"} star5={"greyStar"} />
            </section>
        </section>
    )
};

export default ProfileCard;