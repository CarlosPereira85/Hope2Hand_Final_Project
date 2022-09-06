import { useState, useCallback } from "react";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/LoginSignUpPopUp.module.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export const LoginSignUpPopUp = ({ onClose }) => {
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(false);

  // const onFrameButtonClick = useCallback(() => {
  //   // Please sync "LoggedInOptionPopUp" to the project
  // }, []);
    const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const postRequestHandler = async () => {
    const data = { userName, email, password, confirm_password,};
   
   
    const response = await axios.post(
      "http://localhost:5000/signup",
      data,
    );
    console.log(data);

    const results = (response.data.token);
    localStorage.setItem("token", results);
   
    
    setMessage(true);
    setUserName("");
    setEmail("");
      setPassword("");
    setConfirmPassword("");
    
   
    
  //   setRepeatPassword("");
  };

  return (
    <>
      <div className={styles.signUpPopUpDiv}>
        <h5 className={styles.signupH5}>{` Signup `}</h5>
        <button className={styles.closeButton} onClick={onClose}>
          <img className={styles.ellipseIcon} alt="" src="ellipse-225.svg" />
          <img className={styles.lineIcon} alt="" src="line-81.svg" />
          <img className={styles.lineIcon1} alt="" src="line-91.svg" />
        </button>
        <div className={styles.signupFrameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <div className={styles.frameDiv2}>
                <p className={styles.usernameP}>Username</p>
                <input
                 onChange={(e) => setUserName(e.target.value)}
                 value={userName}
                  className={styles.rectangleInput}
                  type="text"
                  autoFocus
                />
                   <p className={styles.usernameP}>Email</p>
                <input
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                  className={styles.rectangleInput}
                  type="text"
                  
                />
                   <p className={styles.usernameP}>Password</p>
                <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                  className={styles.rectangleInput}
                  type="password"
                  
                />
                   <p className={styles.usernameP}>Confirm Password</p>
                <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirm_password}
                  className={styles.rectangleInput}
                  type="password"
                  
                />
          
              </div>
             
             
            </div>
            <button  className={styles.frameButton} onClick={postRequestHandler }>
              <div className={styles.frameDiv3}>
                <p className={styles.sIGNUP}>SIGN UP</p>
              </div>
            </button>
            {message ? (

          
          <div>
          <h5 className={styles.titleMsg}>You have successfully Signup</h5>
             <large style={{ color: "#908DB9", marginLeft:"0px" ,fontWeight:"bold", cursor:"pointer", }} onClick={openSignInPopUp}>
          Please Log in
         </large>
         </div>
         ) : (
           ""
         )}
           </div>
           <button className={styles.frameButton1}>
             <button className={styles.frameButton2}>
               <div className={styles.groupDiv}>
                 <img
                   className={styles.image2Icon}
                   alt=""
                   src="image-2@2x.png"
                 />
                 <p className={styles.signUpWithGoogle}>Sign up with Google</p>
               </div>
             </button>
           </button>
         </div>
         <div className={styles.haveAccountLinkDiv}>
         </div>
       </div>
       {isSignInPopUpOpen && (
         <PortalPopup
           overlayColor="rgba(144, 141, 185, 0.5)"
           placement="Centered"
           onOutsideClick={closeSignInPopUp}
         >
           <LoginSignInPopUp onClose={closeSignInPopUp} />
         </PortalPopup>
       )}
     </>
   );
 };

