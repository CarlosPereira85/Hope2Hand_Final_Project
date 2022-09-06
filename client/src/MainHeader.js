import { useState, useCallback,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSignUpPopUp } from "./LoginSignUpPopUp";
import { PortalPopup } from "./PortalPopup";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { BurgerMenuPopUp } from "./BurgerMenuPopUp";
import styles from "./css/MainHeader.module.css";

export const MainHeader = () => {
  const navigate = useNavigate();
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [isBurgerMenuPopUpOpen, setBurgerMenuPopUpOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const reference = useRef()


  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFindSupportButtonClick = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  const onPartnersButtonClick = useCallback(() => {
    navigate("/geolocsearchpage");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
    reference.current.scrollIntoView({behavior: "smooth"});
  }, [navigate]);

  const onContactUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);
  const donationUsButtonClick = useCallback(() => {
    navigate("/donationpage");
  }, [navigate]);
  const myProfileButtonClick = useCallback(() => {
    navigate("/volunteerformspage");
  }, [navigate]);

  const openSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const openBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(true);
  }, []);

  const closeBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(false);
  }, []);
  const [Logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
   localStorage.clear();
    navigate("/");
   // setUser(null);
  };

  return (
    <>
      <header className={styles.mainHeader}>
      <article className={styles.logoArticle} onClick={onLogoContainerClick}>
          <img className={styles.logoMainIcon} alt="" src="../logomain.svg" />
          <b className={styles.logoTitleB}>HOPE2HAND</b>
        </article>
        <div className={styles.frameDiv}>
          <a className={styles.headerNavigations}>
            <button
              className={styles.findSupportButton}
              onClick={onFindSupportButtonClick}
            >
              Find Support
            </button>
            <button
              className={styles.partnersButton}
              onClick={onPartnersButtonClick}
            >
              Partners
            </button>
            <button 
              className={styles.aboutUsButton}
              onClick={onAboutUsButtonClick}
            ><a  className={styles.aboutSectionButton} href='#aboutTeam'>     About Us          
            </a>
            </button> 
            <button
              className={styles.contactUsButton}
              onClick={onContactUsButtonClick}
            ><a className={styles.contactSectionButton} href='#contactform'> 
              Contact Us </a>
            </button>
            <button
              className={styles.contactUsButton}
              onClick={donationUsButtonClick}

            >
              Donation
            </button>
            {user ? <button
              className={styles.contactUsButton}
              onClick={myProfileButtonClick}
            >
              My Profile
            </button>: ""}
          </a>
          <div className={styles.mainCTADiv}>
            <button className={styles.button} onClick={openSignUpPopUp}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
            {user ? <button  className={styles.buttonSignIn} onClick={handleLogout}>
              <div className={styles.bxbxsUserCircleDiv}>
                <img className={styles.vectorIcon} alt="" src="vector.svg" />
              </div>
              <label className={styles.signInLabel}>Logout</label>
            </button> : <button className={styles.buttonSignIn} onClick={openSignInPopUp}>
              <div className={styles.bxbxsUserCircleDiv}>
                <img className={styles.vectorIcon} alt="" src="vector.svg" />
              </div>             
              <label className={styles.signInLabel}>
                Sign In
                </label>
            </button> }
            <div className={styles.loginButtonDiv}>
              <button
                className={styles.authBtnButton}
                onClick={openBurgerMenuPopUp}
              >
                <div className={styles.rectangleDiv} />
                <img className={styles.ggmenuIcon} alt="" src="ggmenu.svg" />
              </button>
              
            </div>
          </div>
        </div>
      </header>
     
      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
      {isSignInPopUpOpen && (
        <PortalPopup 
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp} />
        </PortalPopup>
      )}
      {isBurgerMenuPopUpOpen && (
        <PortalPopup 
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBurgerMenuPopUp}
        >
          <BurgerMenuPopUp onClose={closeBurgerMenuPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
