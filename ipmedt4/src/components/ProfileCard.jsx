import React from "react";
import '../styles/Profile.css'

const ProfileCard = ({naam, }) => {
    return(
        <section className="profileinfo">
            <img id="profilepic" src="./icons/profile.svg" alt="profilepic" />
            <p id="profielnaam">{naam}</p>
        </section>
    )
  };
  
  export default ProfileCard;