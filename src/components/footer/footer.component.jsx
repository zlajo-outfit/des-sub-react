import React from 'react';

// import components
import BrandDescription from './brand-description.component';
import FooterNavigation from './footer-navigation.component';
import FooterTel from './footer-tel.component';
import SponsorLogos from './sponsor-logos.component';
import PrivacyPolicy from './privacy-policy.component';


// import css
import "./footer.styles.css";

function Footer() {
    return(
    <div className="footer">
        <div className="inner inner--footer">
            <BrandDescription />
            <FooterNavigation />
            <FooterTel telText="tel: +381 64 821 55 44" />
            <SponsorLogos />
            <PrivacyPolicy privacyText="DES @ 2019 Privacy & Legal" />
        </div>
    </div>
    )
};

export default Footer;