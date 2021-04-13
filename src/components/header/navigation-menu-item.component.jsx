import React from 'react';

// import css
import "./navigation-menu-item.styles.css";

function NavigationMenuItem(props) {
    return(
        <div className="navigationMenu__item"><a href={props.url}>{props.text}</a></div>
    );
}

export default NavigationMenuItem;