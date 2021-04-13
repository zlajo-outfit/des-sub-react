import React from 'react';

// import assets
import ornamentLeft from "../../assets/ornament_levi.svg";
import ornamentRight from "../../assets/ornament_desni.svg";

// import components
import NavigationMenu from "./navigation-menu.component";

// import styles
import "./navigation.styles.css";

function Navigation() {
    return(
        <div className="navigation">
            <img src={ornamentLeft} alt="ornament left" className="navigationImage navigationImage--left" />
            <NavigationMenu />
            <img src={ornamentRight} alt="ornament right" className="navigationImage navigationImage--right" />
        </div>
    );
}

export default Navigation;