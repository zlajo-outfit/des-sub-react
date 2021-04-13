import React from 'react';

// import css
import "./sponsor-logo.styles.css";

function SponsorLogo(props) {
    return(
        <img className="sponsorLogo" src={props.source} alt="sponsor-logo" />
    )
}

export default SponsorLogo;