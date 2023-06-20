import React from 'react';
import '../styles/Rating.css';

const Rating = ({ header, underText }) => {
    return (
        <div className='rating'>
            <section className="headerRating">
                <p >{header}</p>
            </section>
            <section className="combinedRating">
                <section className='stars'>
                    <img className='blueStar' id='star' src="./icons/star.svg" alt="Star" />
                    <img className='blueStar' id='star' src="./icons/star.svg" alt="Star" />
                    <img className='blueStar' id='star' src="./icons/star.svg" alt="Star" />
                    <img className='greyStar' id='star' src="./icons/star.svg" alt="Star" />
                    <img className='greyStar' id='star' src="./icons/star.svg" alt="Star" />
                </section>
                <p id='underText'>{underText}</p>
            </section>
        </div>
    );
};

export default Rating;