import React from 'react';

// import assets
import LogoImage from "../../assets/logo-des.svg";

// import components
import Navigation from "./navigation.component";
import SignUp from "./sign-up.component";
import Logo from "./logo.component";

// import css
import "./headerBottom.styles.css";

function HeaderBottom() {
    const image = {"source": LogoImage}
    return(
        <div className="header__bottom">
            <Logo source={image.source} />
            <Navigation />
            <SignUp text="Prijavi se besplatno! NEWSLETTER - SADA" url="https://google.com" />
        </div>
    );
}

export default HeaderBottom;