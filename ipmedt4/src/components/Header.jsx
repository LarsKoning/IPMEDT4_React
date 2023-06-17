import React from 'react';
import '../styles/Header.css';

const Header = ({ text }) => {
    return (
        <section id='header'>
            <section className="backButton">
                <img id='leftArrowButton' src="./icons/Back-Arrow.svg" alt="Arrow" />
                <img id='backIcon' src="./icons/profile.svg" alt="back Icon" />
            </section>
            <p id='headerText'>{text}</p>

        </section>

    );
};

export default Header;
