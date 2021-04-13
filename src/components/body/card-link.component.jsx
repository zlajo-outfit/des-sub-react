import React from 'react';

// import css
import "./card-link.styles.css";

function CardLink(props) {
    return(
        <div className="cardContent__link"><a href={props.linkUrl}>{props.linkText}</a></div>
    )
}

export default CardLink;