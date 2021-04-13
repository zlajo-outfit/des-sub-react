import React from 'react';

// import components


// import css
import "./languageToggle.styles.css";

function LanguageToggle(props) {
    return(
        <div className="languageToggle">{props.language}</div>
    );
}

export default LanguageToggle;