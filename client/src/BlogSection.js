import styles from "./css/BlogSection.module.css";
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import MiddleImg from "./pics/middleimage@2x.png"
import leftimg from "./pics/rightimage@2x.png"
import rightimg from  "./pics/leftimage@2x.png"
// import Collapse from 'react-bootstrap/Collapse';

export const BlogSection = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [open, setOpen] = useState(false);


  return (
<section className={styles.blogSection}>


<h3 className={styles.titleH3}>
        <h3
          className={styles.cityGuideEventsTips}
        >{`City Guide, Events & Tips`}</h3>
      </h3>
      <div className={styles.outlineDiv} />

<div className={styles.container}>      
    <div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={leftimg} alt="leftImage" />
     </div>
     
    <div className={styles.content}>
      <h4>Choose the right institution to help you!</h4>
 
        <p>Center for Migration and Integration
      <br /> 
      Address: <span>Stettiner Str. 12, 13357 Berlin
</span>
      <br /> Contact: <span>+49 306664390</span> <br />
        website: <span>https://www.awoberlin.de/</span>
        </p>
         
        <p>Integrationsfachdienst IFD Mitte
      <br /> 
      Address: <span>Schwiebusser Str. 18, 10965 Berlin
</span>
      <br /> Contact: <span>+49 304991880</span> <br />
        website: <span>https://www.ifdmitte.berlin/</span>
        </p>
         
        <p>Beauftragte des Senats von Berlin für Integration und Migration
      <br /> 
      Address: <span>Potsdamer Str. 65, 10785 Berlin
</span>
      <br /> Contact: <span>+49 30901723163</span> <br />
        website: <span>https://www.integrationsbeauftragte.berlin.de/</span>
        </p>
         
        <p>Gesellschaftliche Integration von Menschen mit Beh GIB e.V.
      <br /> 
      Address: <span>Tuchmacherweg 8, 13158 Berlin
</span>
      <br /> Contact: <span>03091207560</span> <br />
        website: <span>https://www.gib-ev.de/</span>
        </p>
         
    </div>
</div>
<div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={MiddleImg} alt="leftImage" />
     </div>

    <div className={styles.content}>
      <h4>Best Place to do Sport in Berlin</h4>

      <p>Outdoor Free Fitness Parc
      <br /> Address: <span>Viktoriapark, 12163 Berlin</span>
      <br /> Contact: <span>Open 24h/24</span></p>

      <p>Berlin Rent a Bike - Free Tours
      <br /> Address: <span>Rathausstraße 4, 10178 Berlin</span>
      <br /> Contact: <span>+49 1635120124</span> <br />
        website: <span>https://www.iloveberlintours.com/</span></p>

        <p>Freeletics Fitness Area - Outdoor Calisthenic
      <br /> Address: <span>Monbijoustraße 3B, 10117 Berlin</span>
      <br /> Contact: <span>Open 24h/24</span></p>

        <p>Adidas Open Playground - Outdoor Parc
      <br /> Address: <span>Brandenburgische Str. 51, 10707 Berlin</span>
      <br /> Contact: <span>+49 17631568519</span></p>

        <p>Calisthenics Park Gleisdreieck - Athletic Parc
      <br /> Address: <span>10963 Berlin</span>
     <br />website: <span>https://www.calisthenics-parks.co/</span>
     <br /> Contact: <span>Open 24h/24</span></p>
        
    </div>
   
</div>
<div className={styles.box}>
      <div className={styles.imgBox}>
         <img  className={styles.imgback} src={rightimg} alt="leftImage" />
     </div>
    <div className={styles.content}>
      <h4>Best City guides at your service</h4>

      <p>Bike & Tour Rental
      <br /> 
      Address: <span>Poststraße 11, 10178 Berlin
</span>
      <br /> Contact: <span>03028704492</span> <br />
        website: <span>www.fahrradtouren-berlin.com</span></p>

        <p>Free Tours by Foot - Visit Agency
      <br /> 
      Address: <span> Berlin
</span>
      <br /> Contact: <span>+49 1747803618</span> <br />
        website: <span>https://freetoursbyfoot.com/</span></p>


        <p>BSANDEMANs - Free Walking Tour
      <br /> 
      Address: <span> Berlin
</span>
      <br /> Contact: <span>+49 3051050030</span> <br />
        website: <span>https://www.neweuropetours.eu/berlin-walking-tours</span></p>

        <p>Original Berlin Tours
      <br /> 
      Address: <span>Alexanderpl. 7, 10178 Berlin
</span>
      <br /> Contact: <span>+49 15783893416</span> <br />
        website: <span>https://www.originalberlintours.com/</span></p>
    </div>
</div>
</div>


      {/* <main className={styles.cardsMain}>
       
        <article className={styles.rightArticle}>
          <img
            className={styles.rightimageIcon}
            alt=""
            src="../rightimage@2x.png"
          />
          <div className={styles.cardbottomDiv}>
         
<Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
            <div className={styles.integrationDiv}>Integration</div>
          </div>
        </article>
        <article className={styles.middleArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="../middleimage@2x.png"
          />
          <div className={styles.cardbottomDiv1}>
            <div className={styles.integrationDiv}>Lifestyle</div>
          </div>
        </article>
        <article className={styles.rightArticle}>
          <img
            className={styles.middleimageIcon}
            alt=""
            src="../leftimage@2x.png"
          />
          <div className={styles.cardbottomDiv2}>
            <b className={styles.chooseTheRightInstitutionT}>
              Best city guides at your services
            </b>
            <div className={styles.integrationDiv}>City Guides in Berlin</div>
          </div>
        </article>
      </main> */}
    </section>
  );
};