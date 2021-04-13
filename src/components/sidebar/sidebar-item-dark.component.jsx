import React from 'react';

// import css
import "./sidebar-item-dark.styles.css";

function SidebarItemDark(props) {
    return(
        <div className="sidebar__item sidebar__item--brown">
            {props.text}
        </div>
    )
}

export default SidebarItemDark;