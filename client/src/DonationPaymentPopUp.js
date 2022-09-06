import { useCallback, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./css/DonationPaymentPopUp.module.css";

const DonationPaymentPopUp = ({ onClose }) => {
  const myNavigate = useNavigate();

  // const onLogoContainerClick = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);
  const onLHomeContainerClick = useCallback(() => {
    myNavigate("/");
  }, [myNavigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.donationPaymentPopUpDiv}>
      <div className={styles.donationPopUpDiv}>
        <h3 className={styles.yourDonationH3}>Your Donation</h3>
        <h5 className={styles.selectPaymentMethod}>Select Payment Method</h5>
        <h5 className={styles.personalInfoH5}>Personal info</h5>
        <input className={styles.rectangleInput} type="text" />
        <div className={styles.rectangleDiv} />
        <b className={styles.donationTotalB}>Donation Total:</b>
        <div className={styles.rectangleDiv1} />
        <button className={styles.rectangleButton} data-animate-on-scroll />
        <div className={styles.customAmountDiv}>Custom Amount</div>
        <div className={styles.div}>€</div>
        <div className={styles.groupDiv}>
          <button className={styles.frameButton}>
            <div className={styles.div1}>€10:00</div>
          </button>
          <button className={styles.frameButton1}>
            <div className={styles.div2}>€25:00</div>
          </button>
          <button className={styles.frameButton2}>
            <div className={styles.div2}>€50:00</div>
          </button>
          <button className={styles.frameButton3}>
            <div className={styles.div2}>€100:00</div>
          </button>
          <button className={styles.frameButton4}>
            <div className={styles.div2}>€250:00</div>
          </button>
        </div>
        <div className={styles.groupDiv1}>
          <p className={styles.bankCardP}>Bank Card</p>
          <FormControlLabel
            className={styles.checkFormControlLabel}
            label=""
            control={<Checkbox color="secondary" defaultChecked size="2x" />}
          />
        </div>
        <div className={styles.groupDiv2}>
          <p className={styles.paypalDonation}>Paypal Donation</p>
          <FormControlLabel
            className={styles.checkFormControlLabel}
            label=""
            control={<Checkbox color="secondary" defaultChecked size="2x" />}
          />
        </div>
        <div className={styles.inputComponentsDiv}>
          <input
            className={styles.inputComponent}
            type="text"
            placeholder="Last Name"
          />
          <input
            className={styles.inputComponent1}
            type="text"
            placeholder="First Name"
          />
        </div>
        <input
          className={styles.inputComponent2}
          type="text"
          placeholder="Your email here... "
        />
        <input
          className={styles.inputComponent3}
          type="text"
          placeholder="Write your comments Here..."
        />
        <div className={styles.frameDiv}>
          <div className={styles.div6}>€10.00</div>
        </div>
        <div className={styles.buttonDiv}>
          <b className={styles.makeADonation}>Donate Now!</b>
        </div>
        <FormControlLabel
          className={styles.checkFormControlLabel2}
          label=""
          control={<Checkbox color="secondary" defaultChecked size="2x" />}
        />
        <p className={styles.agreeToTerms}>Agree to Terms?</p>
        <article className={styles.paymentTypeArticle}>
          <div className={styles.paypalDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
            <img
              className={styles.download11}
              alt=""
              src="../download-1-1@2x.png"
            />
          </div>
          {/* <img
            className={styles.visaCardsIcon}
            alt=""
            src="../visacards@2x.png"
          /> */}
        </article>
        <div className={styles.outlineDiv} />
        <button className={styles.closeButton} onClick={onClose}>
          <img
            className={styles.ellipseIcon1}
            alt=""
            src="../ellipse-2251.svg"
          />
          <img className={styles.lineIcon} alt="" src="../line-81.svg" />
          <img className={styles.lineIcon1} alt="" src="../line-91.svg" />
        </button>
        <article className={styles.logoArticle} onClick={onLHomeContainerClick}>
          <b className={styles.logoTitleB}>HOPE2HAND</b>
          <img className={styles.logoMainIcon} alt="" src="../logomain.svg" />
        </article>
      </div>
    </div>
  );
};

export default DonationPaymentPopUp;
