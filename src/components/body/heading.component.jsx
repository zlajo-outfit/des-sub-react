import React from 'react';

// import css
import "./heading.styles.css";

function Heading(props) {
    return(
        <div className="heading">{props.text}</div>
    );
}

export default Heading;