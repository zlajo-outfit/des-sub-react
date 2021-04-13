import React from 'react';

// import css
import "./card-image.styles.css";

function CardImage(props) {
    return(
        <img src={props.cardImage} alt="card screen" className="card__image" />
    )
}

export default CardImage;