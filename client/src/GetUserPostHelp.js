import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./css/ProfileSection.module.css";


const GetUserPostHelp = () => {

    const [request, setRequest] = useState();
    const [details, setDetails] = useState();

    
    const API = axios.create({ baseURL: "https://teamhope2hand.herokuapp.com" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).token
        }`;
      }
      return req;
    });
    
    const user = JSON.parse(localStorage.getItem("profile"));
    
   
    const getRequestHandler = async () => {
        console.log("Clicked!")
        const response = await API.get("/getuserhelp");
        console.log(response.data);
        setDetails(response.data);
       setRequest("GET");
      };

useEffect( () => {
  getRequestHandler();        
},[]);
      

      const removeHelp = async (id) => {
        try {
         

const response = await API.delete(`/deleteuserhelp/${id}`);
          console.log(response);
          getRequestHandler();
        } catch (error) {
          alert(error);
        }
      };
     
      if (!user?.token) {
        return  <div>You are not logged in</div>;
      
     };
      return (
        <>
        
        {/* <PostStatus/> */}
        
        <div className={styles.accommodationMainContainer}>
                  <h4 className={styles.title}>Help</h4>
      
          {request 
            ? details.map((value) => {
                return (
                      
                  <div className={styles.helperContainer} key={value._id}>
                   <div  className={styles.detailsContainer}> 
                    <div className={styles.accommodationDetails}>
                      <p>Cooperation type: <span>{value.helpType}</span>  </p>
                      <p>Cooperation City: <span> {value.cityHelp} </span></p>
                      <p>Organization: <span>{value.orgHelp}</span></p>
                      </div> 
                      <div className={styles.accommodationDetails}>
                      <p>Language: <span> {value.TypeOfLanguageHelp}</span></p>
                      <p>contact Person:<span> {value.contactPersonHelp}</span></p>
                      <p>Phone Number: <span>{value.contactNumberHelp}</span></p>
                      </div>
                      <div className={styles.accommodationAvailable}>
                      <p>Email: <span>{value.contactEmailHelp}</span></p>
                      <p> Valid From: <span> {value.startDateHelp}</span> </p>
                      <p> to: <span>{value.endDateHelp} </span> </p>
                      </div>
                      </div>
                  
                    <div className={styles.bottomDelete}>
                    <button onClick={() => removeHelp(value._id)} className={styles.submitBtnButton}>
<div className={styles.submitButtonDiv} />
<div className={styles.submitDiv}>Delete</div>
</button>
                      
                    </div>
                    
                  </div>




 


                  
                );
              })
            : ""}
       
       </div>
        
        </>
      );
    };
export default GetUserPostHelp