import {MainHeader} from "./MainHeader";
import {HeroSection} from "./HeroSection";
import {VolunteerSection} from "./VolunteerSection";
import{SeekerCardsSection} from "./SeekerCardsSection";
import {Newsletter} from "./Newsletter";
import {Footer} from "./Footer";
import styles from "../src/css/VolunteerForms.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";

const VolunteerForms = () => {
  
  return (
    <>
    <main className={styles.volunteerFormsPageMain}>
      
      <MainHeader />
      <HeroSection />
      <VolunteerSection />
      
      <Newsletter />
      <Footer />
    </main>
    </>
  );
};

export default VolunteerForms;
