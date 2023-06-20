// import React from "react";
// import "../styles/Tips.css";


// const TipCard = ({ tipText, tipHead, tipImage }) => {
//     return (
//         <div>

//             <section className="tiplijst">
//                 <section className="tips">
//                     <img id="tipImage" src={tipImage} alt="Icon" />
//                     <section>
//                         <h1>{tipHead}</h1>
//                         <p>{tipText}</p>
//                     </section>
//                 </section>
//             </section>
//         </div>
//     );
// };

// export default TipCard;

import React from "react";
import "../styles/Tips.css";
import PropTypes from "prop-types";

const TipCard = ({ tipText, tipHead, tipImage, className }) => {
    return (
        <div className={`tipCard ${className}`}>
            <section className="tiplijst">
                <section className="tips">
                    <img id="tipImage" src={tipImage} alt="Icon" />
                    <section>
                        <h1>{tipHead}</h1>
                        <p>{tipText}</p>
                    </section>
                </section>
            </section>
        </div>
    );
};

TipCard.propTypes = {
    tipText: PropTypes.string.isRequired,
    tipHead: PropTypes.string.isRequired,
    tipImage: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default TipCard;
