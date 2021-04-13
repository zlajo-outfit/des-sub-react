import React from 'react';

// import css
import "./brand-description-paragraph.styles.css";

function BrandDescriptionParagraph(props) {
    return(
        <div className="brandDescription__paragraph">
            {props.text}
        </div>
    )
}

export default BrandDescriptionParagraph;