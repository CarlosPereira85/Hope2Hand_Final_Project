import { useState, useCallback } from "react";
import { LoginSignUpPopUp } from "./LoginSignUpPopUp";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./css/WelcomeSection.module.css";

export const WelcomeSection = () => {
  const [isSignUpPopUp1Open, setSignUpPopUp1Open] = useState(false);
  const navigate = useNavigate();

  const openSignUpPopUp1 = useCallback(() => {
    setSignUpPopUp1Open(true);
  }, []);

  const closeSignUpPopUp1 = useCallback(() => {
    setSignUpPopUp1Open(false);
  }, []);

  const onButton2Click = useCallback(() => {
    navigate("/findsupportpage");
  }, [navigate]);

  return (
    <>
      <section className={styles.welcomeSection}>
        <article className={styles.becomeVolunteerFrameArticle}>
          <h1 className={styles.welcomeH1}>
            <p className={styles.welcomeP}>Welcome,</p>
            <p className={styles.registerHereP}>Register Here!</p>
          </h1>
          <article className={styles.cardBecomeVolunteerArticle}>
            <div className={styles.offerAccommodationAndBecome}>
              <p className={styles.welcomeP}>
                <span className={styles.offerAccommodationAnd}>
                  Offer accommodation and become a host!
                </span>
              </p>
              <p className={styles.registerHereP}>
                <span>
                  Only a few more fields until you are an official volunteer. As
                  soon as you have filled in all the details, we will connect
                  you with help seekers.
                </span>
              </p>
            </div>
            <button className={styles.button} onClick={openSignUpPopUp1}>
              <b className={styles.becomeAVolunteer}>Become A Volunteer</b>
            </button>
          </article>
        </article>
        <article className={styles.getHelpFrameArticle}>
          <div className={styles.frameDiv}>
            <div className={styles.descriptionDiv}>
            Do you need any kind of  at a private volunteer's place in Berlin
              or other kind of help?
            </div>
            <div className={styles.descriptionDiv1}>
              <p className={styles.welcomeP}>
               We will try to find a suitable Help
                for you quickly.
              </p>
            </div>
          </div>
          <button className={styles.button1} onClick={onButton2Click}>
            <b className={styles.becomeAVolunteer}>Get Help</b>
          </button>
        </article>
      </section>
      {isSignUpPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp1}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp1} />
        </PortalPopup>
      )}
    </>
  );
};