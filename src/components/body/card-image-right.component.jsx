import React from 'react';

// import components
import CardHeading from "./card-heading.component";
import CardParagraph from "./card-paragraph.component";
import CardImage from "./card-image.component";
import CardLink from "./card-link.component";

// import css
import "./card-image-right.styles.css";

function CardImageRight(props) {
    return(
        <div className="card card--imageRight">
            <div className="card__content card__content--imageRight">
            <CardHeading headingText={props.cardHeading} />
            <CardParagraph paragraphText={props.cardParagraph} />
            <CardLink linkText={props.cardLinkText} linkUrl={props.cardLinkHref} />
            </div>
            <div className="card__imageContainer">
                <CardImage cardImage={props.cardImage} />
            </div>
        </div>
    );
}

export default CardImageRight;