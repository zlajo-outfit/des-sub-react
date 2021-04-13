import React from 'react';

// import components
import FooterNavigationItem from './footer-navigation-item.component';

// import css
import "./footer-navigation.styles.css";

function FooterNavigation() {
    return(
        <div className="footerNavigation">
            <FooterNavigationItem text="O nama" />
            <FooterNavigationItem text="Uslovi korišćenja" />
            <FooterNavigationItem text="Obrada" />
            <FooterNavigationItem text="Ecc Net" />
            <FooterNavigationItem text="Kontakt" />
            <FooterNavigationItem text="Isporuka" />
            <FooterNavigationItem text="Kako kupiti" />
        </div>
    )
}

export default FooterNavigation;