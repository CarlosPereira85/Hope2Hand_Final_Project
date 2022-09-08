import styles from "./css/ContactFormSection.module.css";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export const ContactFormSection = () => {
  const [name, setName]=useState("")
  const [phoneNumber, setPhoneNumber]=useState("")
  const [companyName, setCompanyName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")

  const myNavigate = useNavigate();
    
  const onLHomeContainerClick = useCallback(() => {
    myNavigate("/");
  }, [myNavigate]);

  const postRequestHandler = async ()=>{

   const data = {name, phoneNumber, companyName, email, message}
   console.log(data)
   await axios.post("https://teamhope2hand.herokuapp.com/contactform", data)
   setName("");
   setPhoneNumber("");
    setCompanyName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section className={styles.contactFormSection}>
      <form className={styles.contactForm} >
        <div className={styles.frameDiv}>
          <textarea
           onChange={(e)=>setMessage(e.target.value)}
            className={styles.inputComponentTextarea}
            placeholder="Tap Your Message Here..."
          />
          <button onClick={postRequestHandler} className={styles.submitBtnButton}>
            <div className={styles.submitButtonDiv} />
            <div className={styles.submitDiv}>Submit</div>
          </button>
        </div>
        <div className={styles.frameDiv1}>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            className={styles.inputComponent}
            type="text"
            placeholder="Your Email"
          />


          <div className={styles.frameDiv2}>
          <button className={styles.logoMainButton} onClick={onLHomeContainerClick}>
              <img className={styles.vectorIcon} alt="" src="logomain.svg" />
             
              <b className={styles.logoTitleB}>HOPE2HAND</b>
            </button>

            <h3 className={styles.contactFormH3}>Contact Form</h3>
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <p className={styles.pleaseUseContactUsHere}>
              Please Use Contact Us Here!
            </p>
            <input
              onChange={(e)=>setName(e.target.value)}
              className={styles.inputComponent1}
              type="text"
              placeholder="Your Name"
            />
            <input
            onChange={(e)=>setPhoneNumber(e.target.value)}
              className={styles.inputComponent1}
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
          <input
            onChange={(e)=>setCompanyName(e.target.value)}
            className={styles.inputComponentTextarea}
            type="text"
            placeholder="Your Company Name"
          />
        </div>
      </form>
    </section>
  );
};