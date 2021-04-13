import React from 'react';

// import components
import BrandDescriptionParagraph from "./brand-description-paragraph.component";
import BrandDescriptionHeading from "./brand-description-heading.component";

// import css
import "./brand-description.styles.css";

function BrandDescription() {
    return(
        <div className="brandDescription">
            <BrandDescriptionParagraph text="Kompanija DES Subotica osnovana je davne 1961. godine kada je počela sa poizvodnjom najkvalitetnijih kazana za rakiju, izrađenih od elektrolitičkog bakra DHP kvaliteta. Razvili smo asortiman proizvoda od uređaja malih kapaciteta za hobi proizvođače do profesionalnih instalacija za velike destilerije." />
            <BrandDescriptionHeading text="Eskalacijom na nova tržišta i proširivanjem distributivne mreže činimo naše proizvode dostupnim velikom broju kupaca, na svim kontinentima." />
            <BrandDescriptionParagraph text="Naš brend se zasniva na prepoznatljivim i dugovečnim proizvodima sa besprekornom završnom izradom za koje obezbeđujemo odličan odnos cene, performansi i kvaliteta." />
        </div>
    )
}

export default BrandDescription;