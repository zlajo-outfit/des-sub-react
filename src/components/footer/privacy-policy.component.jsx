import React from 'react';

// import css
import "./privacy-policy.styles.css";

function PrivacyPolicy(props) {
    return(
        <div className="privacyPolicy">
            {props.privacyText}
        </div>
    )
}

export default PrivacyPolicy;