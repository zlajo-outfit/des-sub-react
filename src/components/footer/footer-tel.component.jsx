import React from 'react';

// import css
import "./footer-tel.styles.css";

function FooterTel(props) {
    return(
        <div className="footerTel">
            {props.telText}
        </div>
    )
}

export default FooterTel;