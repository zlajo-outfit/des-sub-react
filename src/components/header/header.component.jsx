import React from 'react';

// import components
import HeaderTop from "./headerTop.component";
import HeaderBottom from "./headerBottom.component";

// import css
import "./header.styles.css";

function Header() {
    return(
    <div className="header">
        <HeaderTop />
        <HeaderBottom />
    </div>
    )
};

export default Header;

