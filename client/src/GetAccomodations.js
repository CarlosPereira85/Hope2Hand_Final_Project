import axios from "axios";
import { useState } from "react";
import { MainHeader } from "./MainHeader";
import { Footer } from "./Footer";
// import PostStatus from "./PostStatus";
import styles from "./css/GetAccommodation.css";

const GetAccomodations = () => {
  const [request, setRequest] = useState();
  const [details, setDetails] = useState();




  const getRequestHandler = async () => {
    const response = await axios.get("https://teamhope2hand.herokuapp.com/getaccomodations");
    console.log(response.data.data);
    setDetails(response.data.data);
    setRequest("GET");
  };

  // const removeAccomodation = async (id) => {
  //   try {
  //     await axios.delete(`https://hopetohands-wais.herokuapp.com/deleteaccomodations/${id}`);
  //     console.log("USer deleted! ", id);
  //     getRequestHandler();
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <>

      {/* <PostStatus/> */}
    
        {request
          ? details.map((value) => {
            return (
              <div className="main_acc">
              <h1>Click the button to get all users</h1>
              <button onClick={getRequestHandler}>GET</button>
             <div className="img_card" >
                <div className="main_container" key={value._id}>
                  <div className="img_acc" >
                    <img alt="myimage" src={value.image} width="50px" />
                  </div>
                 
                    <div className="">
                      <p>City: {value.city} </p>
                      <p>Address: {value.address}</p>
                      <p>Accomodation Type: {value.accomodationType} </p>
                      <p>Number of Persons: {value.numberOfPersons}</p>
                      <p>Email: {value.contactEmail}</p>
                      <p>contact: {value.contactPerson}</p>
                      <p>Phone Number: {value.contactNumber}</p>
                      <h3>Availability</h3>
                      <span className="date_span">
                      <p> From: {value.startDate}  </p>
                      <p> to: {value.endDate}  </p>
                      </span>
                    </div>
                    {/* <div style={{ display: "inline" }}>
                    <small onClick={() => removeAccomodation(value._id)}>Delete</small>
                  </div> */}
                  </div>
                
                  </div>      </div>
            );
          })
          : ""}


    </>
  );
};

export default GetAccomodations;