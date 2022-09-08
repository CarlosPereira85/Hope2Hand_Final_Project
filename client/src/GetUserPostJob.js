import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./css/ProfileSection.module.css";

const GetUserPostJob = () => {

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
        const response = await API.get("/getuserjob");
        console.log(response.data);
        setDetails(response.data);
       setRequest("GET");
      };

useEffect( () => {
  getRequestHandler();        
},[]);
      

      const removeJob = async (id) => {
        try {
         

const response = await API.delete(`/deleteuserjob/${id}`);
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
       
          {request 
            ? details.map((value) => {
                return (
                  <div className={styles.accommodationMainContainer}>
                
                    <div className={styles.helperContainer}  key={value._id}>
                          <h4 className={styles.title}>Job Offer</h4>  
                    <div  className={styles.detailsContainer}>
                    <div className={styles.accommodationDetails}>
                    <p>Job Title: <span>{value.jobList}</span>  </p>
                    <p>Language: <span> {value.TypeOfLanguageJob}</span></p>
                    <p>Job Location: <span> {value.cityJob} </span></p>
                    <p>Job Provider: <span>{value.jobProvider}</span></p>
                    </div>
                    <div className={styles.accommodationDetails}>
                    <p>Job Type:<span> {value.jobType}</span></p>
                    <p>salary Basis: <span>{value.salaryBasisJob}</span></p>
                    <p>Start Date: <span> {value.startDateJob}</span></p>
                    <p>End Date: <span> {value.endDateJob}</span></p>
                    </div>
                    <div className={styles.accommodationAvailable}>
                    <p>Contact Person: <span>{value.contactPersonJob}</span></p>
                    <p>Contact Number: <span>{value.contactNumberJob}</span></p>
                    <p> Email: <span> {value.contactEmailJob}</span> </p>
                    </div>
                  </div>
               
                  
                  <div style={{ display: "inline" }}>
                    <button onClick={() => removeJob(value._id)} className={styles.submitBtnButton}>
<div className={styles.submitButtonDiv} />
<div className={styles.submitDiv}>Delete</div>
</button>
                      
                    </div>
                  </div>
                  </div>
                );
              })
            : ""}
      
        
        
        </>
      );
    };
export default GetUserPostJob