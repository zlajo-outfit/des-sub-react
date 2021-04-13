import React from 'react';

// import components
import SidebarItemDark from "./sidebar-item-dark.component";
import SidebarItemLight from "./sidebar-item-light.component";

// import css
import "./sidebar.styles.css";

function Sidebar() {
    return(
    <div className="sidebar">
        <SidebarItemDark text="Zasto DES" />
        <SidebarItemDark text="BESPLATNA isporuka" />
        <SidebarItemLight text="Vesti" />
        <SidebarItemLight text="Kalkulator" />
    </div>
    )
};

export default Sidebar;