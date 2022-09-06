import axios from "axios";
import { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";
import styles from "./css/ProfileSection.module.css";


const GetUserPost = () => {

    const [request, setRequest] = useState();
    const [details, setDetails] = useState();

    
    const API = axios.create({ baseURL: "http://localhost:5000" });

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
        const response = await API.get("/getuseraccomodations");
        console.log(response.data);
        setDetails(response.data);
       setRequest("GET");
      };

useEffect( () => {
  getRequestHandler();        
},[]);
      

      const removeAccomodation = async (id) => {
        try {
         

const response = await API.delete(`/deleteuseraccommodation/${id}`);
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
        
      
<div className={styles.accommodationMainContainer}>
                  <h4 className={styles.title}> Accommodation List:</h4>
       
  
            {request
              ? details.map((value) => {
                return (        
                  //  <div className="img_card" >
                  //     <div className="main_container" key={value._id}>
                  //       <div className="img_acc" >   
                  <div className={styles.accommodationContainer} key={value._id}>
                    <div className={styles.detailsContainer}>
                      <div className={styles.contactPersonDetails}>
                        <p>Contact Person: {value.contactPerson}</p>
                        <p>Phone Number: {value.contactNumber}</p>
                        <p>Email: {value.contactEmail}</p>
                      </div>
                      <div className={styles.accommodationDetails}>
                        <p>Accommodation Type: {value.accomodationType} </p>
                        <p>Number of Persons: {value.numberOfPersons}</p>
                        <p>Address: {value.address}, {value.city} </p>
                      </div>
                      <div className={styles.accommodationAvailable}>
                     
                        <p> from: {value.startDate} <p className="enddate">to: {value.endDate} </p></p>
                        
                       
                      </div>
                    </div>
                    <div className={styles.accommodationImgContainer}>

                      {

                        value.image.length >= 0 ? (
                          value.image.map((img) =>


                            <img className={styles.accommodationImg} src={img} alt="" />

                          )
                        ) : "No image"


                      }
                       
           <div className="conteiner_img" style={{ display: "inline" }}>
                    <button onClick={() => removeAccomodation(value._id)} className={styles.submitBtnButton}>
<div className={styles.submitButtonDiv} />
<div className={styles.submitDiv}>Delete</div>
</button>

                      
                    </div>
                    

                    </div>
                    <div style={{marginLeft:"80%"}}>
                        <p>Status: <span style={{color:"green"}}> Available</span>  </p>
                        </div>
                  </div>


                );
             })
              : ""}
         
         </div> 
        
     
    );
        
}
    
export default GetUserPost