import React from 'react';

// import css
import "./card-heading.styles.css";

function CardHeading(props) {
    return(
        <div className="cardContent__heading">{props.headingText}</div>
    )
}

export default CardHeading;