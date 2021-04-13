import React from 'react';

// import css
import "./brand-description-heading.styles.css";

function BrandDescriptionHeading(props) {
    return(
        <div className="brandDescription__heading">
            {props.text}
        </div>
    )
}

export default BrandDescriptionHeading;