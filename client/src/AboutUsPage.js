import { MainHeader } from "./MainHeader";
import { HeroSection } from "./HeroSection";
import { AboutUsSection } from "./AboutUsSection";
import { VolunteerSection1 } from "./VolunteerSection1";
import { ContactFormSection } from "./ContactFormSection";
import { LegalMention } from "./LegalMention";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import AboutTeamSection from "./AboutTeamSection";

import styles from "./css/AboutUsPage.module.css";


export const AboutUsPage = () => {


  return (
    <main className={styles.aboutUsPageMain}>
      <MainHeader />
      <HeroSection />
    <div  id="aboutTeam" > 
      <AboutTeamSection/>
    </div>
      <div className={styles.whatToDo}> 
      <AboutUsSection />
      </div>
   
      <VolunteerSection1 />
         <div id="contactform">
      <ContactFormSection />
      </div>
      <div className={styles.legalInfo}>
   <LegalMention />
      </div>
   
      <Newsletter ellipse18="ellipse-18.svg" phpaperPlane="phpaperplane.svg" />
      <Footer />
    </main>
  );
};
