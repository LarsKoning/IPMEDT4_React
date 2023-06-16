import React from 'react';
import '../styles/Rating.css';

const Rating = ({ header, underText }) => {
    return (
        <div className='rating'>
            <p id='header'>{header}</p>
            <section className='stars'>
            <img id='star' src="./icons/star.svg" alt="Star" />
            <img id='star' src="./icons/star.svg" alt="Star" />
            <img id='star' src="./icons/star.svg" alt="Star" />
            <img id='star' src="./icons/star.svg" alt="Star" />
            <img id='star' src="./icons/star.svg" alt="Star" />
            </section>
            <p id='underText'>{underText}</p>
        </div>
    );
};

export default Rating;