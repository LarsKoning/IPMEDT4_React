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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Header.css';

// const Header = ({ text }) => {
//     return (
//         <section id='header'>
//             <Link to="/" className="backButton">
//                 <img id='leftArrowButton' src="./icons/Back-Arrow.svg" alt="Arrow" />
//                 <img id='backIcon' src="./icons/profile.svg" alt="back Icon" />
//             </Link>
//             <p id='headerText'>{text}</p>
//         </section>
//     );
// };

// export default Header;

