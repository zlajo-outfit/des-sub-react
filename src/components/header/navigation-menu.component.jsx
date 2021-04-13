import React from 'react';

// import components
import NavigationMenuItem from "./navigation-menu-item.component";

// import styles
import "./navigation-menu.styles.css";

function NavigationMenu() {
    return(
        <div className="navigationMenu">
            <NavigationMenuItem url="https://google.com" text="proizvodi" />
            <NavigationMenuItem url="https://google.com" text="o nama" />
            <NavigationMenuItem url="https://google.com" text="uslovi korišćenja" />
            <NavigationMenuItem url="https://google.com" text="des community" />
            <NavigationMenuItem url="https://google.com" text="kontakt" />
        </div>
    );
}

export default NavigationMenu;