import React from 'react';

// import assets
import SponsorLogo1Image from '../../assets/sponsor-logo-1.png';
import SponsorLogo2Image from '../../assets/sponsor-logo-2.png';
import SponsorLogo3Image from '../../assets/sponsor-logo-3.png';
import SponsorLogo4Image from '../../assets/sponsor-logo-4.png';
import SponsorLogo5Image from '../../assets/sponsor-logo-5.png';

// import components
import SponsorLogo from "./sponsor-logo.component";

// import css
import "./sponsor-logos.styles.css";

function SponsorLogos() {
    let logos = { "logo1": SponsorLogo1Image, "logo2": SponsorLogo2Image, "logo3": SponsorLogo3Image, "logo4": SponsorLogo4Image, "logo5": SponsorLogo5Image }
    return(
        <div className="sponsorLogos">
            <SponsorLogo source={logos.logo1} />
            <SponsorLogo source={logos.logo2} />
            <SponsorLogo source={logos.logo3} />
            <SponsorLogo source={logos.logo4} />
            <SponsorLogo source={logos.logo5} />
        </div>
    )
}

export default SponsorLogos;