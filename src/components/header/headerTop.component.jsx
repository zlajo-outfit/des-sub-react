import React from 'react';

// import components
import Social from "./social.component";
import LanguageToggle from "./languageToggle.component";
import SignIn from "./signIn.component";
import Shop from "./shop.component";

// import css
import "./headerTop.styles.css";

function HeaderTop() {
    return(
        <div className="header__top">
            <Social />
            <LanguageToggle language="srpski" />
            <SignIn text="Prijavite se" />
            <Shop />
        </div>
    );
}

export default HeaderTop;