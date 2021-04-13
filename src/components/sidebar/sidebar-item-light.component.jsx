import React from 'react';

// import css
import "./sidebar-item-light.styles.css";

function SidebarItemLight(props) {
    return(
        <div className="sidebar__item sidebar__item--lightBrown">
            {props.text}
        </div>
    )
}

export default SidebarItemLight;