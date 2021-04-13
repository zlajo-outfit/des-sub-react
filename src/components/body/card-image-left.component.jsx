import React from 'react';

// import components
import CardHeading from "./card-heading.component";
import CardParagraph from "./card-paragraph.component";
import CardImage from "./card-image.component";
import CardLink from "./card-link.component";

// import css
import "./card-image-left.styles.css";

function CardImageLeft(props) {
    return(
        <div className="card card--imageLeft">
            <div className="card__imageContainer">
                <CardImage cardImage={props.cardImage} />
            </div>
            <div className="card__content card__content--imageLeft">
            <CardHeading headingText={props.cardHeading} />
            <CardParagraph paragraphText={props.cardParagraph} />
            <CardLink linkText={props.cardLinkText} linkUrl={props.cardLinkHref} />
            </div>
        </div>
    );
}

export default CardImageLeft;