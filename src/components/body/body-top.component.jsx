import React from 'react';

// import assets


// import components
import Heading from "./heading.component";
import CardImageRight from "./card-image-right.component";
import CardImageLeft from "./card-image-left.component";


// import css
import "./body-top.styles.css";

function BodyTop() {
    return(
        <div className="body__top">
            <Heading text="Preporuke i saveti" />
            <div className="card__container">
                <CardImageRight cardHeading="Šljivovica" cardParagraph="RAKIJA OD ŠLJIVE (šljivovica) - Rakija od šljive, šljivovica, zauzima prvo mesto. Najzastupljenija je požegača (oko 50%), a široko su rasprostranjene čisto rakijske sorte: crvena ranka, metlaš" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616858259900_sljiva.jpg" />
                <CardImageLeft cardHeading="Kajsijevača" cardParagraph="RAKIJA OD KAJSIJE (kajsijevača) je voćna rakija dobijena destilacijom i/ili rektifikacijom fermentisanog kljuka svežih plodova kajsije, sa ili bez koštica, do najviše 86% v/v sadržaja etanola, tako da" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616857887562_kajsija.png" />
                <CardImageRight cardHeading="Viljamovka" cardParagraph="RAKIJA OD KRUŠKE (viljamovka) - Plod kruške viljamovke sadrži 8-15% šećera, veoma malo kiselina ( 0,10-0,59 %), ali zato sadrži mnogo aromatičnih materija. Prerada plodova u rakiju obuhvata nekol" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616857505272_viljamovka.png" />
                <CardImageLeft cardHeading="Jabukovača" cardParagraph="RAKIJA OD JABUKE (jabukovača) je voćna rakija dobijena destilacijom i/ili rektifikacijom profermentisanog kljuka svežih plodova jabuka, sa ili bez semenki, do najviše 86% v/v sadržaja etanola, tako da" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616856186848_jabuka.png" />
                <CardImageRight cardHeading="Kupinovača" cardParagraph="RAKIJA OD KUPINA (kupinovača) је voćna rakija dobijena destilacijom i/i1i rektifikacijom profermentisanog kljuka svežih plodova kupina, do najviše 86%v/v sadržaja etanola, tаkо da miris i aroma d" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616855567025_kupina.jpg" />
                <CardImageLeft cardHeading="Vinjak" cardParagraph="Vinjak je jako alkoholno piće koje se proizvodi destilacijom vina i starenjem vinskog destilata. Na kvalitet vinjaka utiču sledeći faktori: sorta vinove loze, klima, zemljište,način uzgoja vinove loze" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616855283901_vinjak.png" />
                <CardImageRight cardHeading="Džin" cardParagraph="Džin je piće koje svoj dominantan ukus dobija od bobica kleke i on je jedan od glavnih sastojaka popularnih koktela. Za pravljenje džina, potrebno je da alkohol jačine 96%vol razblažite destilovanom v" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616854413902_dzin.jpg" />
                <CardImageLeft cardHeading="Jednostruka destilacija" cardParagraph="Provođenjem postupka jednokratne destilacije želi se dobiti rakija za piće jednostrukom destilacijom tj. bez potrebe provođenja druge destilacije. Jednokratna destilacija voćnih komina primenjuje se" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616853876582_jednostruka%20destilacija.jpg" />
                <CardImageRight cardHeading="Dvostruka destilacija" cardParagraph="Sastoji se od: • prve destilacije • ponovljene destilacije. Osnovni cilj prve destilacije je odvojiti poželjne od nepoželjnih stvari. Zagrejavanjem komine, isparavanjem, para prelazi u cev i dal" cardLinkText="Pročitaj više" cardLinkHref="https://google.com" cardImage="https://api.des-kazani.rs/images/1616853737305_dvostruka%20destilacija.jpg" />
            </div>
        </div>
    );
}

export default BodyTop;