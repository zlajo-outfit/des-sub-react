import React from 'react';

// import css
import "./social-networks.styles.css";

// import components
import YouTube from './youtube.component.jsx';

function SocialNetworks() {
    return(
        <div className="socialNetworks">
            <div class="youTubeContainer">
                <YouTube videoUrl="https://www.youtube.com/embed/ZIP4Fw--wwM" videoDescription="Nagradni konkurs DES kazani" />
                <YouTube videoUrl="https://www.youtube.com/embed/_Wc-YKpComU" videoDescription="DES® Performance Hobby Copper 100 L(26 gallon)" />
                <YouTube videoUrl="https://www.youtube.com/embed/2yYyaeeksGE" videoDescription="DES® DWA 500l Bubble plate columns still VLOG" />
                <YouTube videoUrl="https://www.youtube.com/embed/Zox-YatfIf8" videoDescription="Model STABILAN - DES kazani za rakiju" />
                <YouTube videoUrl="https://www.youtube.com/embed/NHKimNHCnVA" videoDescription="DES® DWEC 120l how distillation column works" />
                <YouTube videoUrl="https://www.youtube.com/embed/lthcQWe505U" videoDescription="DES - Company Presentation" />
            </div>
            <div class="facebookContainer">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKazaniZaRakijuDesSubotica%2F&amp;tabs=timeline&amp;width=300&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" title="des facebook" width="300" height="500" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
}

export default SocialNetworks;