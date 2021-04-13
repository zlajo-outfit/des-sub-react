import React from 'react';

// import components
import BodyTop from "./body-top.component";
import BodyBottom from "./body-bottom.component";

// import css
import "./body.styles.css";

function Body() {
    return(
    <div className="body">
        <div className="inner inner--body">
            <BodyTop />
            <BodyBottom />
        </div>
    </div>
    )
};

export default Body;