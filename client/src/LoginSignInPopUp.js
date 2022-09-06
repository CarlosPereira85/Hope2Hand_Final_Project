import { useState, useCallback } from "react";
import { LoginSignUpPopUp } from "./LoginSignUpPopUp";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/LoginSignInPopUp.module.css";
import {useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginSignInPopUp = ({ onClose }) => {
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false);

  const openSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);


  const navigate = useNavigate();
    const postRequestLogin = async () => {
        const API = axios.create({ baseURL: "http://localhost:5000" });


    API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).res.tokenId
          }`;
          
        }
        return req;
      });


      const data = {email, password};
        const response = await API.post("/login",
        data);
        
        const token = response.data.token
        console.log("login",response.data.result.userName);
        const userName = response.data.result.userName
        localStorage.setItem("profile", JSON.stringify({ userName,token }));
        
        setMessage(true);
      
      setEmail("");
        setPassword("");
        onClose();
     navigate("/volunteerformspage");
    }
    
    


  return (
    <>
      <div className={styles.signInPopUpDiv}>
        <article className={styles.loginWholeArticle}>
          <div className={styles.loginSignupLinkDiv} >
            <p className={styles.dontHaveAccount}>{`Don’t have account? `}</p>
            <button className={styles.signUpButton} onClick={openSignUpPopUp}>
              Sign up
            </button>
          </div>
          <div className={styles.loginFrameDiv} id="LoginForm">
            <div className={styles.usernameDiv}>
              <div className={styles.passwordDiv}>
                <div className={styles.usernameFillDiv}>
                  <p className={styles.dontHaveAccount}>Email</p>
                  <input onChange={(e) => setEmail(e.target.value)} className={styles.frameInput} type="text" autoFocus />
                </div>
                <div className={styles.usernameFillDiv}>
                  <p className={styles.dontHaveAccount}>Password</p>
                  <input  onChange={(e) => setPassword(e.target.value)} className={styles.frameInput} type="password" />
                </div>
                <div className={styles.rememberMeDiv}>
                  <input
                    className={styles.btnCheckInput}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <p className={styles.rememberMeP}>Remember me</p>
                  <a className={styles.forgotPassword} target="_blank">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button onClick={postRequestLogin} className={styles.buttonLogin} id="Login Button">
                <div className={styles.frameDiv}>
                  <p className={styles.lOGINP}>LOG IN</p>
                </div>
              </button>
              {message ? (
          
         
          <h3 style={{ color: "green" }}>Data inserted successfully!</h3>
        ) : (
          ""
        )}
            </div>
            <p className={styles.oRP}>OR</p>
            <button className={styles.buttonLogin}>
              <button className={styles.frameButton}>
                <div className={styles.groupDiv}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="image-2@2x.png"
                  />
                  <p className={styles.continueWithGoogle}>
                    Continue with Google
                  </p>
                </div>
              </button>
            </button>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <img className={styles.ellipseIcon} alt="" src="ellipse-2251.svg" />
            <img className={styles.lineIcon} alt="" src="line-82.svg" />
            <img className={styles.lineIcon1} alt="" src="line-92.svg" />
          </button>
          <h4 className={styles.loginOrSignup}>{`Login or Signup `}</h4>
        </article>
      </div>
      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(144, 141, 185, 0.6)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
