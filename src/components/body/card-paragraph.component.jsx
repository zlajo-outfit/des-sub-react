import React from 'react';

// import css
import "./card-paragraph.styles.css";

function CardParagraph(props) {
    return(
        <div className="cardContent__paragraph">{props.paragraphText}</div>
    );
}

export default CardParagraph;