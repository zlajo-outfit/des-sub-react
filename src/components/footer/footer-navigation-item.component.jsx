import React from 'react';

// import css
import './footer-navigation-item.styles.css';

function FooterNavigationItem(props) {
    return(
        <div className="footerNavigation__item">
            {props.text}
        </div>
    )
}

export default FooterNavigationItem;