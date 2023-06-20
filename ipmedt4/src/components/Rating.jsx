import React from 'react';
import '../styles/Rating.css';

const Rating = ({ header, underText, star1, star2, star3, star4, star5 }) => {
    return (
        <div className='rating'>
            <section className="headerRating">
                <p >{header}</p>
            </section>
            <section className="combinedRating">
                <section className='stars'>
                    <img className={star1} id='star' src="./icons/star.svg" alt="Star" />
                    <img className={star2} id='star' src="./icons/star.svg" alt="Star" />
                    <img className={star3} id='star' src="./icons/star.svg" alt="Star" />
                    <img className={star4} id='star' src="./icons/star.svg" alt="Star" />
                    <img className={star5} id='star' src="./icons/star.svg" alt="Star" />
                </section>
                <p id='underText'>{underText}</p>
            </section>
        </div>
    );
};

export default Rating;