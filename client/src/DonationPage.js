import {MainHeader} from "./MainHeader";
import {HeroSection} from "./HeroSection";
import DonateNowSection from "./DonateNowSection";
import DonationShopSection from "./DonationShopSection";
import {BlogSection} from "./BlogSection";
import {Newsletter} from "./Newsletter";
import{ Footer }from "./Footer";
import styles from "./css/DonationPage.module.css";

const DonationPage = () => {
  return (
    <main className={styles.donationPageMain}>
      <MainHeader />
      <HeroSection />
      <DonateNowSection />
      <DonationShopSection />
      {/* <BlogSection /> */}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default DonationPage;
