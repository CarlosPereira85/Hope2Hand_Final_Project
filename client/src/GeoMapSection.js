
import styles from "./css/GeoMapSection.module.css";
import {GiMedicalThermometer} from "react-icons/gi";
import {GiFoodTruck} from "react-icons/gi";
import {MdOutlineDriveEta} from "react-icons/md";
import {GiClothes} from "react-icons/gi";
import {FaSchool} from "react-icons/fa";
import {TbOlympics} from "react-icons/tb";
import {FaPeopleCarry} from "react-icons/fa";
import {GoLaw} from "react-icons/go";
import { useState,  useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import MedicalImage from "./pics/bgimage@2x.png";
import FoodImage from "./pics/bgimage1@2x.png"
import IntergrationCourse from "./pics/bgimage2@2x.png"
import CheapCloths from "./pics/bgimage4@2x.png"
import DrivingSchools from "./pics/bgimage3@2x.png"
import SocialService from "./pics/austin-distel-rxpThOwuVgE-unsplash.jpg"
import Law from "./pics/clarisse-meyer-jKU2NneZAbI-unsplash.jpg"
import Sport from "./pics/gabin-vallet-J154nEkpzlQ-unsplash.jpg"
import Park from "./pics/sherry-xu-_jzFIvRMY4U-unsplash.jpg"
import corona from "./pics/mufid-majnun-oI20ehIGNd4-unsplash.jpg"




export const GeoMapSection = () => {

const moveToContainer = useRef()
const [list, setList]=useState("")

const navigateToLists=(e)=>{
  setList(e.target.value);

  // moveToContainer.current.scrollIntoView({behavior: "smooth"});
}

  return (

<div className={styles.geoMapSectionContainer}>
<h1 style={{marginTop:'5%', textAlign:'center',fontFamily: 'Montserrat'
}}>Please select the top left button on the map, and check the boxes in order to view our partners locations!</h1> 
      <section className={styles.geoMapSection}>
      <div  id="geoMap" className={styles.mapSectionDiv1}>
        <iframe className={styles.freeServiceMap} src="https://www.google.com/maps/d/u/0/embed?mid=1JK_78DbC8mjmwDwqA7maE32YHtg33LQ&ehbc=2E312F" width="640" height="480"></iframe>
       
      </div>
      <h1 style={{marginTop:'5%', textAlign:'center',fontFamily: 'Montserrat'
}}> Get some help with finding any free and all kind of medical services and insurances!</h1> 
<div className={styles.listSelect}>


<Card style={{ boxShadow: "#EAD49C 0px 2px 2px 1px", width: '19rem', height:'14rem', backgroundImage:`url(${MedicalImage})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px',  alignSelf: 'stretch'
}}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><GiMedicalThermometer/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="medical" >  Free Medical service</Button>
      </Card.Body>
    </Card>


    <Card style={{  boxShadow: "#EAD49C 0px 2px 2px 1px",width: '19rem', height:'14rem', backgroundImage:`url(${FoodImage})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><GiFoodTruck/></Card.Title>
  
        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="food" >  Free/cheap Food service</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '19rem', height:'14rem',boxShadow: "#EAD49C 0px 2px 2px 1px", backgroundImage:`url(${IntergrationCourse})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><FaSchool/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="intrgration" > Integration Courses</Button>
      </Card.Body>
    </Card>


    <Card style={{boxShadow: "#EAD49C 0px 2px 2px 1px", width: '19rem', height:'14rem', backgroundImage:`url(${CheapCloths})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><GiClothes/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="cloth" > Free/cheap Cloths</Button>
      </Card.Body>
    </Card>

    <Card style={{boxShadow: "#EAD49C 0px 2px 2px 1px", width: '19rem', height:'14rem', backgroundImage:`url(${SocialService})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><FaPeopleCarry/></Card.Title>

        <Button className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="social" > Social Services</Button>
      </Card.Body>
    </Card>

    <Card style={{boxShadow: "#EAD49C 0px 2px 2px 1px", width: '19rem', height:'14rem', backgroundImage:`url(${DrivingSchools})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><MdOutlineDriveEta/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="drivingSchools" >Driving Schools</Button>
      </Card.Body>
    </Card>

    <Card style={{boxShadow: "#EAD49C 0px 2px 2px 1px", width: '19rem', height:'14rem', backgroundImage:`url(${Law})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><GoLaw/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="lawService" >Free Law Service</Button>
      </Card.Body>
    </Card>

    <Card style={{ boxShadow: "#EAD49C 0px 2px 2px 1px",width: '19rem', height:'14rem', backgroundImage:`url(${Sport})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><TbOlympics/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="sport" >Best place to sport</Button>
      </Card.Body>
    </Card>

    <Card style={{ boxShadow: "#EAD49C 0px 2px 2px 1px",width: '19rem', height:'14rem', backgroundImage:`url(${Park})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative'}}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><TbOlympics/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="park" >Parks</Button>
      </Card.Body>
    </Card>

    <Card style={{ boxShadow: "#EAD49C 0px 2px 2px 1px",width: '19rem', height:'14rem', backgroundImage:`url(${corona})`, backgroundPosition:'center', backgroundSize:"cover", fontFamily:'Montserrat', margin: '3px', position: 'relative' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontSize:'30px'}}><TbOlympics/></Card.Title>

        <Button  className={styles.cardBtn} onClick={navigateToLists} variant="primary" value="park" >Corona test centers</Button>
      </Card.Body>
    </Card>


<div className={styles.mapInfo} >
<div>
</div>
</div>
</div>

      </section>


 {/*MedicalServiceParen  */}
{ list=== "medical" ? (
       <div  id="medical" className={styles.MedicalServiceParent}>
       <h1 className={styles.mainHeader}> Free Medical Organizations List in Berlin </h1>
 <div className={styles.medicalService}>

 <div className={styles.CardContainer}>

<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}> Medizinischer Dienst Berlin-Brandenburg</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Lise-Meitner-Straße 1, 10589 Berlin </span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.md-bb.org">www.md-bb.org</a></p>
</div>


<div className={styles.CardContainer2}>

<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>Zentrale Medizinische Gutachtenstelle</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Turmstraße 21, 10559 Berlin </span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.zentrale-medizinische.de">www.zentrale-medizinische.de</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}> Medizinischer Dienst Berlin-Brandenburg</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Schlaatzweg 1, 14473 Potsdam</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.md-bb.org">www.md-bb.org</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>MDK-IT</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Oudenarder Str. 16-20, 13347 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.mdit.de">www.mdit.de</a></p>
</div>


<div className={styles.CardContainer}>

<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}> Medizinischer Dienst Berlin-Brandenburg</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Lise-Meitner-Straße 1, 10589 Berlin </span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.md-bb.org">www.md-bb.org</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>Medibüro Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>2, Aufgang 3, Gneisenaustraße 2A, 10961 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 6946746</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.medibuero.de">www.medibuero.de</a></p>
</div>
<div className={styles.CardContainer}>

<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>Malteser Medizin für Menschen ohne Krankenversicherung</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Aachener Str. 12, 10713 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 82722102</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www. ???.de">www. ???.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>Medizin-mobil-Nord Cedric Macia GmbH Kranken-und Seniorenpflege</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Zobelitzstraße 48, 13403 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 4343023</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.medizin-mobil-nord.de">www.medizin-mobil-nord.de</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>CommitMed GmbH</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Salzufer 11, 10587 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 863235450</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.pflegebox.de">www.pflegebox.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>Medizinischer Dienst Berlin-Brandenburg</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Eisenbahnstraße 39-40, 15517 Fürstenwalde/Spree</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2020231000</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.md-bb.org">www.md-bb.org</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiMedicalThermometer/></h1>
  <p className={styles.cardName}>1A - MED e.K.</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Mendelstraße 19, 13187 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>
   </div>
    </div>
    ) : 

 
list ==="food" ? (
    <div className={styles.freeFoodServiceParent} >
    <h1 className={styles.mainHeader}> Free/cheap Food Provider List in Berlin
</h1>
   
   <div className={styles.foodService}>
<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}> Berliner Tafel e.V.</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Berliner Großmarkt, Beusselstraße 44 N-Q/Gebäude 30a, 10553 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 7827414</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berliner-tafel.de">www.berliner-tafel.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Berliner Tafel</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Pillnitzer Weg 8, 13593 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 7827414</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berliner-tafel.de">www.berliner-tafel.de</a></p>
</div>
   
   <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Haltbar - Berliner Tafel</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Pestalozzistraße 100, 10625 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Tafel Deutschland e.V. – Tafeljugend</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Germaniastraße 18, 12099 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2005976226</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.tafel-jugend.de">www.tafel-jugend.de</a></p>
</div>


<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Die Tafeln Berlin/ Laib und Seele</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>13059, Grevesmühlener Str, 13059 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>


<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Tafel Deutschland e.V. - Zentrale</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Germaniastraße 18, 12099 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 20059760</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.tafel.de">www.tafel.de</a></p>
</div>



<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>LAIB und SEELE Ausgabestelle</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Seestraße 35, 13353 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berliner-tafel.de">www.berliner-tafel.de</a></p>
</div>



<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Tafel Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Achillesstraße 53, 13125 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 94113439</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>



<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Berliner Tafel e.V. Sammelstelle</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Johannisthaler Ch 295, 12351 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>


<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiFoodTruck/></h1>
  <p className={styles.cardName}>Berliner Tafel</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Gallwitzallee 6, 12249 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>
   </div>
   </div>
) :


list==="cloth"? (
   <div className={styles.freeFoodServiceParent} >
    <h1 className={styles.mainHeader}> Free/cheap Cloths Provider List in Berlin
</h1>

<div className={styles.clothsService}>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Pusteblume Kinder + Baby Second Hand</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Paul-Robeson-Straße 3, 10439 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 44715907</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.pusteblume-kindersecondhand.de">www.pusteblume-kindersecondhand.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>SOMETIMES COLORED - Vintage + Second Hand</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Grünberger Str. 87, 10245 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 37587445</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.trollby.com">www.trollby.com</a></p>
</div>
   
   <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Trollby children's second-hand</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Eisenacher Str. 78, 10823 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.1a-med.de">www.1a-med.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>HUMANA Secondhand & Vintage</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Alexanderstraße 7, 10178 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 28476382</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.humana-second-hand.de">www.humana-second-hand.de</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>LILLI & PAUL Second-Hand</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Wegenerstraße 18, 10713 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 8612202</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://lilli-und-paul.de">lilli-und-paul.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Gewandhaus - Secondhandmode in Berlin-Schöneberg</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Pillnitzer Weg 8, 13593 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 7827414</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berliner-tafel.de">www.berliner-tafel.de</a></p>
</div>
   
   <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Caritas Second-Hand-Laden Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Residenzstraße, Eingang, Reginhardstraße 90, 13409 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 666331222</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http:/www.caritas-berlin.de">www.caritas-berlin.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Kilo-Shop</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Schmiljanstraße 19, 12161 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 85102499</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.drk-berlin.de">www.drk-berlin.de</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Bonbon's First & Second Hand Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Albrechtstr. 110, 12167 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 79700486</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://bonbons-secondhand-berlin.business.site">bonbons-secondhand-berlin.business.site</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <GiClothes/></h1>
  <p className={styles.cardName}>Mode aus zweiter Hand Ankauf und Verkauf von Second Hand Bekleidung</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Wilmersdorfer Str. 68, 10629 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 32765122</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.secondhandpartenheimer.sitew.de">www.secondhandpartenheimer.sitew.de</a></p>
</div>


</div>
 
</div>
) :


list==="intrgration" ? (
<div className={styles.intergrationCourseParent}  >
    <h1 className={styles.mainHeader}>Language Courses List in Berlin
</h1>

<div className={styles.integrationCourse}>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Integrationskurse und Sprachkurse in Berlin - FONS Academy GmbH</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Ansbacher Str. 5, 10787 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 22438310</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.fonsakademie.de">www.fonsakademie.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>BW Bildungswelt GmbH, Bildungswerk für Beruf und Sprache</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Waetzoldtstraße 5, 12165 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 84514287</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.bildungswelt.eu">www.bildungswelt.eu</a></p>
</div>
   
   <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>IB Sprachschule Integrationskurse</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Kottbusser Str. 17, 10999 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 91523346</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://+49 30 2061310">+49 30 2061310</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Hartnackschule Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Motzstraße 5, 10777 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2102193</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.hartnackschule-berlin.de">www.hartnackschule-berlin.de</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Europa Spracheninstitut</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Details from Google Maps</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 28474499</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.deutsch-in-berlin.com">www.deutsch-in-berlin.com</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Sprach- und Integrationszentrum</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Braunschweiger Str. 61, 12055 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 162 1764177</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.siz-berlin.de">www.siz-berlin.de</a></p>
</div>
   
   <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Sprachenzentrum Berlinek Dr. Anna Weise e.K.</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Dahlmannstraße 1A, 10629 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 34787266</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http:/www.berlinek.de">www.berlinek.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>Sprach- und Integrationsschule e.V.</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Emser Str. 29, 12051 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 29045800</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.sis-ev.com">www.sis-ev.com</a></p>
</div>

<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>iQ Integrationskurse Berlin-Pankow</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Breite Str. 8, 13187 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 31563698</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.iq-lingua.de">www.iq-lingua.de</a></p>
</div>

<div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaSchool/></h1>
  <p className={styles.cardName}>iQ Integrationskurse Berlin-Tempelhof</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Tempelhofer Damm 226, 12099 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 31563698</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.iq-lingua.de">www.iq-lingua.de</a></p>
</div>


</div>
</div>
): 



list ==="social" ? (
<div className={styles.socialServiceParent} >
    <h1 className={styles.mainHeader}>Social Services List in Berlin</h1>
    <div className={styles.socialService}>


    <div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Soziale Dienste der Justiz</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Salzburger Str. 21, 10825 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Internationaler Sozialdienst</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Michaelkirchstraße 17, 10179 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://issger.de">issger.de</a></p>
</div>
   
<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Sozialdienst Katholischer Frauen e.V. Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Schönhauser Str. 41, 13158 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 4775320</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Bezirksamt Mitte von Berlin - Amt für Soziales</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Müllerstraße 146, 13353 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 901820</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.bildungswelt.eu">www.bildungswelt.eu</a></p>
</div>
<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Schwangerschaftsberatung Lydia - Sozialdienst katholischer Frauen e.V. Berlin</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Selchower Str. 11, 12049 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2814185</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://skf-berlin.de">www.skf-berlin.de</a></p>
</div>
   <div className={styles.CardContainer2}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Sozialdienste der Volkssolidarität Berlin gGmbH</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Scharnweberstraße 23, 10247 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 84514287</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://volkssolidaritaet-berlin.de">volkssolidaritaet-berlin.de</a></p>
</div>
<div className={styles.CardContainer}>
<h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
  <p className={styles.cardName}>Amt für soziale Dienste Friedrichshain-Kreuzberg Eingliederungshilfe für behinderte Menschen</p>
  <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Yorckstraße 4-11, 10965 Berlin</span></p>
  <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 902982370</span></p>
  <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.fonsakademie.de">www.fonsakademie.de</a></p>
</div> 
  
    </div>
</div>):


list ==="drivingSchools" ? (
  <div className={styles.drivingSchools}  >
      <h1 className={styles.mainHeader}>Social Services List in Berlin</h1>
      <div className={styles.socialService}>
  
  
      <div className={styles.CardContainer}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Soziale Dienste der Justiz</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Salzburger Str. 21, 10825 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
  </div>
     <div className={styles.CardContainer2}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Internationaler Sozialdienst</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Michaelkirchstraße 17, 10179 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://issger.de">issger.de</a></p>
  </div>
     
  <div className={styles.CardContainer}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Sozialdienst Katholischer Frauen e.V. Berlin</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Schönhauser Str. 41, 13158 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 4775320</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
  </div>
     <div className={styles.CardContainer2}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Bezirksamt Mitte von Berlin - Amt für Soziales</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Müllerstraße 146, 13353 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 901820</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.bildungswelt.eu">www.bildungswelt.eu</a></p>
  </div>
  <div className={styles.CardContainer}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Schwangerschaftsberatung Lydia - Sozialdienst katholischer Frauen e.V. Berlin</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Selchower Str. 11, 12049 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2814185</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://skf-berlin.de">www.skf-berlin.de</a></p>
  </div>
     <div className={styles.CardContainer2}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Sozialdienste der Volkssolidarität Berlin gGmbH</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Scharnweberstraße 23, 10247 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 84514287</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://volkssolidaritaet-berlin.de">volkssolidaritaet-berlin.de</a></p>
  </div>
  <div className={styles.CardContainer}>
  <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
    <p className={styles.cardName}>Amt für soziale Dienste Friedrichshain-Kreuzberg Eingliederungshilfe für behinderte Menschen</p>
    <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Yorckstraße 4-11, 10965 Berlin</span></p>
    <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 902982370</span></p>
    <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.fonsakademie.de">www.fonsakademie.de</a></p>
  </div> 
    
      </div>
  </div>)
  :


  list ==="Sport" ? (
    <div className={styles.drivingSchools} >
        <h1 className={styles.mainHeader}>Best place to do Sport in Berlin</h1>
        <div className={styles.socialService}>
    
    
        <div className={styles.CardContainer}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Soziale Dienste der Justiz</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Salzburger Str. 21, 10825 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
    </div>
       <div className={styles.CardContainer2}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Internationaler Sozialdienst</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Michaelkirchstraße 17, 10179 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 62980403</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://issger.de">issger.de</a></p>
    </div>
       
    <div className={styles.CardContainer}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Sozialdienst Katholischer Frauen e.V. Berlin</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Schönhauser Str. 41, 13158 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 4775320</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.berlin.de">www.berlin.de</a></p>
    </div>
       <div className={styles.CardContainer2}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Bezirksamt Mitte von Berlin - Amt für Soziales</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Müllerstraße 146, 13353 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 901820</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.bildungswelt.eu">www.bildungswelt.eu</a></p>
    </div>
    <div className={styles.CardContainer}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Schwangerschaftsberatung Lydia - Sozialdienst katholischer Frauen e.V. Berlin</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Selchower Str. 11, 12049 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 2814185</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://skf-berlin.de">www.skf-berlin.de</a></p>
    </div>
       <div className={styles.CardContainer2}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Sozialdienste der Volkssolidarität Berlin gGmbH</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Scharnweberstraße 23, 10247 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 84514287</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://volkssolidaritaet-berlin.de">volkssolidaritaet-berlin.de</a></p>
    </div>
    <div className={styles.CardContainer}>
    <h1 className={styles.Logo}>  <FaPeopleCarry/></h1>
      <p className={styles.cardName}>Amt für soziale Dienste Friedrichshain-Kreuzberg Eingliederungshilfe für behinderte Menschen</p>
      <p className={styles.cardAddress}> Address: <span className={styles.mainAddress}>Yorckstraße 4-11, 10965 Berlin</span></p>
      <p className={styles.cardPhone}> Phone: <span className={styles.mainPhone}>+49 30 902982370</span></p>
      <p className={styles.cardEmail}> Email: <a className={styles.mainEmail} href="http://www.fonsakademie.de">www.fonsakademie.de</a></p>
    </div> 
      
        </div>
    </div>):



list===null}


</div>
    
  );
};
