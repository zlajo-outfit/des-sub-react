import React from 'react';

// import assets


// import components
import Heading from "./heading.component";
import SocialNetworks from "./social-networks.component";

// import css
import "./body-bottom.styles.css";

function BodyBottom() {
    return(
        <div className="body__bottom">
            <Heading text="Društvene mreže" />
            <SocialNetworks />
        </div>
    );
}

export default BodyBottom;