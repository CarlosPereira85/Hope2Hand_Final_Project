import styles from "./css/RegistrationFormSection.module.css";

export const RegistrationFormSection = () => {
  return (
    <section className={styles.registrationFormSection}>
      <div className={styles.descriptionDiv}>
        <h2 className={styles.findSupportH2}>Find Support</h2>
        <p className={styles.youWantToStayWithPrivate}>
          <p className={styles.youWantTo}>
          Do you need accomodation at a private volunteer's place in Berlin
              or other kind of help?
          </p>
          <p className={styles.youWantTo}>&nbsp;</p>
          <p className={styles.youWantTo}>
          We will try to find you the help needed as soon as possible.
          </p>
          {/* <p className={styles.afterYouRegister}>
          We will try to find you the help needed as soon as possible.
          </p> */}
        </p>
      </div>
    </section>
  );
};
