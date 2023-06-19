import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = ({ text }) => {
    return (
        <Link to="/" id='header'>
            <section className="backButton">
                <img id='leftArrowButton' src="./icons/Back-Arrow.svg" alt="Arrow" />
                <img id='backIcon' src="./icons/profile.svg" alt="back Icon" />
            </section>
            <p id='headerText'>{text}</p>

        </Link>

    );
};

export default Header;

