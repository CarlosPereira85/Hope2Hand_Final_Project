import { useState } from "react";
import {

  Select,
  MenuItem,
  TextField,
  TextareaAutosize,
  Autocomplete,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./css/VolunteerSection.module.css";
import GetUserPostJob from "./GetUserPostJob";

import axios from "axios";
import GetUserPost from "./GetUserPost";

import FileBase64 from "react-file-base64";

import GetUserPostHelp from "./GetUserPostHelp";





export const VolunteerSection = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);
  const [volenForm, setVolenForm] = useState("");


  const [address, setAddress] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  // const [image, setImage] = useState("");
  const [city, setCity] = useState("Berlin");
  const [accomodationType, setAccomodationType] = useState(1);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [message, setMessage] = useState(false);
  const [image, setImage] = useState([]);


//Helps
  const [contactNumberHelp, setContactNumberHelp] = useState("");
  const [contactEmailHelp, setContactEmailHelp] = useState("");
  const [addressHelp, setAddressHelp] = useState("");
  const [contactPersonHelp, setContactPersonHelp] = useState("");
  const [cityHelp, setCityHelp] = useState("Berlin");
  const [TypeOfLanguageHelp, setTypeOfLanguageHelp] = useState("German");
  const [orgHelp, setOrgHelp] = useState("");
  const [startDateHelp, setStartDateHelp] = useState("");
  const [endDateHelp, setEndDateHelp] = useState("");
  const[helpType, setHelpType] = useState("Interpretation");



  //Jobs
  const [ contactNumberJob, setContactNumberJob] = useState("");
  const [contactEmailJob, setContactEmailJob] = useState("");
  const [contactPersonJob, setContactPersonJob] = useState("");
  const [cityJob, setCityJob] = useState("Berlin");
  const [TypeOfLanguageJob, setTypeOfLanguageJob] = useState("German");
  const [jobProvider, setJobProvider] = useState("");
  const [startDateJob, setStartDateJob] = useState("");
  const [endDateJob, setEndDateJob] = useState("");
  const[jobList, setJobList] = useState("Store Greeter");
  const[ salaryBasisJob, setSalaryBasisJob] = useState("Monthly");
  const[ jobType, setJobType] = useState("");

  const createAccomodation = async () => {
    const data = { image,address, contactPerson, contactNumber, contactEmail, accomodationType, numberOfPersons, city, startDate, endDate };

    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token 
          }`;
      }
      return req;
    });


    await API.post("/volunteerformspage/postaccommodation", data);

    setAddress("");
    setContactPerson("");
    setContactNumber("");
    setContactEmail("");
    // setImage("");
    setCity("");
    setAccomodationType("");
    setNumberOfPersons("");
    setStartDate("");
    setEndDate("");
    setImage([]);


    // setMessage(true);

  };
  const createHelp = async () => {
    const data = {contactEmailHelp, addressHelp, contactPersonHelp, cityHelp, TypeOfLanguageHelp, orgHelp, startDateHelp, endDateHelp, helpType, contactNumberHelp };
    

    const API = axios.create({ baseURL: "http://localhost:5000"});

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token 
          }`;
      }
      return req;
    });


    await API.post("/volunteerformspage/posthelp", data);

    setAddressHelp("");
    setContactPersonHelp("");
    setContactNumberHelp("");
    setContactEmailHelp("");
    // setImage("");
    setCityHelp("");
    setTypeOfLanguageHelp("");
    setOrgHelp("");
    setStartDateHelp("");
    setEndDateHelp("");
    setHelpType("");
  };


  const createJob = async () => {
    const data = {
      contactEmailJob,
      contactPersonJob,
      contactNumberJob,
      TypeOfLanguageJob,
      jobType,
      cityJob,
      jobList,
      jobProvider,
      salaryBasisJob,
      startDateJob,
      endDateJob};
    

    const API = axios.create({ baseURL: "http://localhost:5000"});

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token 
          }`;
      }
      return req;
    });


    await API.post("/volunteerformspage/postjob", data);

    setContactNumberJob("");
    setContactEmailJob("");
    
    setContactPersonJob("");
    // setImage("");
    setCityJob("");
    setTypeOfLanguageJob("");
    setJobProvider("");
    setStartDateJob("");
    setEndDateJob("");
    setJobList("");
    setSalaryBasisJob("");
    setJobType("");
  };





  const user = JSON.parse(localStorage.getItem("profile"));

  // console.log("Local storage: ", user.res.token);
  if (!user?.token) {
    return <div>You are not logged in</div>;

  };

const userName =  JSON.parse(localStorage.getItem("profile")).userName;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={styles.volunteerSection}>
        <div className={styles.frameDiv}>
          <article className={styles.userFrameArticle}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.profileSymbolIcon}
                alt=""
                src="profilesymbol3.svg"
              />
              <p className={styles.uploadAPhoto}>Upload a Photo</p>
              <div className={styles.frameDiv2}>
                <p className={styles.loremIpsumDolorSitAmetCo}>
                  <p
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
                  <p className={styles.sedDoEiusmod}>sed do eiusmod tempor.</p>
                </p>
                <h5 className={styles.johnDoeH5}>{userName}</h5>
              </div>
            </div>
            <div className={styles.frameDiv3} />
          </article>
          <article className={styles.userVolunteerAboutSectionArticle}>
            <div className={styles.frameDiv4}>
              <h4 className={styles.helloVolunteerH4}>Hello  <span>{userName}</span></h4>
              <p className={styles.weWelcomeYouInOurEndevour}>
                We welcome you in our endevour and want to thank you for joining
                hands with us and help provide more caring hands in times of
                trouble, together we can change reality much faster.
              </p>
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.skillsDiv}>
                <h6 className={styles.skillsH6}>What would you like to offer?</h6>

                <Select className={styles.dropdownSelect}
                  onChange={(e) => setVolenForm(e.target.value)}
                  color="secondary"
                  size="2x"
                  label="Select Here"
                >
                  <MenuItem value="accommodation">Accommodation</MenuItem>
                  <MenuItem value="Help">Help</MenuItem>
                  <MenuItem value="Job">Job</MenuItem>

                </Select>



              </div>

            </div>



            {volenForm === "accommodation" ? (

              <form className={styles.accommodationForm} >
                <input
                  onChange={(e) => setContactPerson(e.target.value)}
                  className={styles.contactPersonName}
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setContactNumber(e.target.value)}
                  className={styles.contactPersonNumber}
                  type="string"
                  placeholder="Phone Number"
                />
                <input
                  onChange={(e) => setContactEmail(e.target.value)}
                  className={styles.contactPersonEmail}
                  type="email"
                  placeholder=" Email"
                />
                <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}>City</div>
                  <div className={styles.accommodationTitles}>Address</div>
                  <select
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.accommodationSelect}
                  >
                    <option selected className={styles.optionBox}>Berlin</option>
                    <option className={styles.optionBox}>Brandenburg</option>
                  </select>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.accommodationStreet}
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}>Type of Accommodation</div>
                  <div className={styles.accommodationTitles}>Number of Persons</div>
                  <select
                    onChange={(e) => setAccomodationType(e.target.value)}

                    className={styles.accommodationDetails}>
                    <option>Hotel</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Guest House</option>
                    <option>Hostel</option>
                    <option>Chalet</option>
                    <option>Garage</option>
                    <option>Cottages</option>
                  </select>
                  <select
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                    className={styles.accommodationPersonsNumber}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div className={styles.accommodationSelectDiv}>
                  <div className={styles.accommodationTitles}> Available from</div>
                  <div className={styles.accommodationTitles}> to</div>
                  <input
                    
                    onChange={(e) => setStartDate(e.target.value)}
                    className={styles.accommodationStreetDate}
                    type="date"
                    name="date"
                    id="date"
                  />
                  <input
                    
                    onChange={(e) => setEndDate(e.target.value)}
                    className={styles.accommodationStreetEnd}
                    type="date"
                    name="date"
                    id="date"
                  />
                </div>
                {/* <div className={styles.accommodationSelectDiv}>
               <div className={styles.accommodationTitles}> contact person available from</div>
               <div className={styles.accommodationTitles}> to</div>
                 <input
                   className={styles.accommodationStreetDate}
                   type="time"
                   name="time"
                   id="time"
                 />
                 <input
                   className={styles.ContactPersonAvailable}
                   type="time"
                   name="time"
                   id="time"
                 />
               </div>  */}
                <div className={styles.accommodationSelectDiv}>
                  <div>
                    <h6 style={{fontWeight:600}}>Accommodation Photos</h6> 
                <FileBase64
                
        multiple={true}
        onDone={(files ) => {
          setImage(files.map((file) => file.base64));
        }}
      />
      </div>
                </div>
                
                <div  style={{marginLeft:"70%",marginTop:"50px"}} className={styles.accommodationSelectDiv}>
                  <input  className={styles.checkBoxBox} type="checkbox" />{" "}
                  <p  style={{fontSize:"13px",}} className={styles.termsOfUse}>
                      I am agree with terms of use
                    </p>
                 
                </div>
                <div className={styles.accommodationSelectDiv}>
                  <button onClick={createAccomodation} className={styles.formButton}> Submit </button>
                </div>
               
              </form>












            )
              : volenForm === "Job" ? (<form className={styles.jobForm}>
                <input
                onChange={(e) =>  setContactPersonJob(e.target.value)}
                  className={styles.contactPersonName}
                  type="text"
                  placeholder="Contact Person Name"
                />
                <input
                 onChange={(e) =>  setContactNumberJob(e.target.value)}
                  className={styles.contactPersonNumber}
                  type="string"
                  placeholder="Contact Person Number"
                />
                <input
                 onChange={(e) =>   setContactEmailJob(e.target.value)}
                  className={styles.contactPersonEmail}
                  type="email"
                  placeholder="Contact Person Email"
                />
                


                <div className={styles.jobSelectDiv}>
                  <div className={styles.jobTitles}>Job Provider</div>
                  <div className={styles.jobTitles}>
                    Job Provider</div>


                  <select
                    onChange={(e) => setCityJob(e.target.value)}
                    className={styles.jobSelect}
                  >
                    <option className={styles.optionBox}>Berlin</option>
                    <option className={styles.optionBox}>Brandenburg</option>
                  </select>
                  <input
                  onChange={(e) =>   setJobProvider(e.target.value)}
                    className={styles.jobStreet}
                    type="text"
                    placeholder="Person/Company/Organization Name"
                  />
                </div>
                <div className={styles.jobSelectDiv}>
                  <div className={styles.jobTitles}>Language</div>
                  <div className={styles.jobTitles}>Job List</div>
                  <select
                  onChange={(e) =>  setTypeOfLanguageJob(e.target.value)}
                   className={styles.jobDetails}>
                    <option>Germany</option>
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Russian</option>
                    <option>Persian</option>
                  </select>
                  <select 
                     onChange={(e) => setJobList(e.target.value)}
                  className={styles.jobPersonsNumber}>
                    <option>Store </option>
                    <option>Housekeeper</option>
                    <option>Security Guard</option>
                    <option>Housekeeping Technician</option>
                    <option>Gartner</option>
                    <option>Student Work</option>
                    <option>Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.jobSelectDiv}>
                  <div className={styles.jobTitles}>Job Type</div>
                  <div className={styles.jobTitles}>Salary Basis</div>
                  <select
                  onChange={(e) => setJobType(e.target.value)}                  
                  className={styles.jobDetails}>
                    <option>Full time</option>
                    <option>Part Time</option>
                  </select>
                  <select
                   onChange={(e) =>   setSalaryBasisJob(e.target.value)}
                   className={styles.jobPersonsNumber}>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Daily</option>
                    <option>Hourly</option>
                  </select>
                </div>
                <div className={styles.jobSelectDiv}>
                  <div className={styles.jobTitles}> Contract Start Date:</div>
                  <div className={styles.jobTitles}> Contract Finish Date:</div>
                  <input
                  onChange={(e) =>  setStartDateJob(e.target.value)}
                    className={styles.jobStartDate}
                    type="date"
                    name="date"
                    id="date"
                  />
                  <input
                   onChange={(e) =>  setEndDateJob(e.target.value)}
                    className={styles.jobEndDate}
                    type="date"
                    name="date"
                    id="date"
                  />
                </div>

                <div style={{marginLeft:"70%",marginTop:"50px", }} className={styles.accommodationSelectDiv}>
                  <input style={{ marginTop: "2px"}}className={styles.checkBoxBox} type="checkbox" />{" "}
                  <p style={{fontSize:"13px"}} className={styles.termsOfUse}>
                    I am agree with terms of use
                  </p>
                </div>
                <div className={styles.jobSelectDiv}>
                  <button onClick={createJob} className={styles.formButton}> submit</button>
                </div>
              </form>)
                : volenForm === "Help" ? (<form className={styles.helpForm} >
                  <input
                  onChange={(e) => setContactPersonHelp(e.target.value)}
                    className={styles.contactPersonName}
                    type="text"
                    placeholder="Contact Person Name"
                  />
                  <input
                  onChange={(e) => setContactNumberHelp(e.target.value)}
                    className={styles.contactPersonNumber}
                    type="string"
                    placeholder="Contact Person Number"
                  />
                  <input
                  onChange={(e) => setContactEmailHelp(e.target.value)}
                    className={styles.contactPersonEmail}
                    type="email"
                    placeholder="Contact Person Email"
                  />
                  <div className={styles.helpSelectDiv}>
                    <div className={styles.helpTitles}>Activity location</div>
                    <div className={styles.helpTitles}>Helper</div>
                    <select
                      className={styles.helpSelect}
                    >
                      <option className={styles.optionBox}>Berlin</option>
                      <option className={styles.optionBox}>Brandenburg</option>
                    </select>
                    <input
                   onChange={(e) => setOrgHelp(e.target.value)}
                      className={styles.jobStreet}
                      type="text"
                      placeholder="Person/Company/Organization Name"
                    />
                  </div>
                  <div className={styles.helpSelectDiv}>
                    <div className={styles.helpTitles}>Language</div>
                    <div className={styles.helpTitles}>Helping type</div>
                    <select 
                    onChange={(e) =>  setTypeOfLanguageHelp(e.target.value)}
                    className={styles.helpDetails}>
                      <option>German</option>
                      <option>English</option>
                      <option>Arabic</option>
                      <option>Russian</option>
                      <option>Persian</option>
                    </select>
                    <select 
                   onChange={(e) => setHelpType(e.target.value)}
                    className={styles.jobPersonsNumber}>
                      <option>Interpretation</option>
                      <option>Translation</option>
                      <option>finding Integration Course</option>
                      <option>finding nursery school</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className={styles.helpSelectDiv}>
                    <div className={styles.helpTitles}> Cooperation Start Date:</div>
                    <div className={styles.helpTitles}> Cooperation Finish Date:</div>
                    <input
                    
                  
                    onChange={(e) => setStartDateHelp(e.target.value)}
                    className={styles.accommodationStreetDate}
                    type="date"
                    name="date"
                    id="date"
                    
                  />
                  <input
                   
                    onChange={(e) => setEndDateHelp(e.target.value)}
                    className={styles.accommodationStreetEnd}
                    type="date"
                    name="date"
                    id="date"
                    
                  />
                  </div>
               
                   
                  
                    {/* <input
                      className={styles.jobStartDate}
                      type="time"
                      name="time"
                      id="time"
                    />
                    <input
                      className={styles.ContactPersonAvailable}
                      type="time"
                      name="time"
                      id="time"
                    /> */}
                
                  <div style={{marginLeft:"70%",marginTop:"50px", }} className={styles.accommodationSelectDiv}>
                    <input style={{ marginTop: "2px"}} className={styles.checkBoxBox} type="checkbox" />
                    <p  style={{fontSize:"13px",}} className={styles.termsOfUse}>
                      I am agree with terms of use
                    </p>
                  </div>
                  <div className={styles.helpSelectDiv}>
                    <button onClick={createHelp} className={styles.formButton}> submit</button>
                  </div>
                </form>)



                  //  :  volenForm === "Medical_Services" ? ( <div>Medical Services</div>)

                  : (
                    volenForm == null
                  )}

          </article>

        
        </div>
        
        <GetUserPost />
        <GetUserPostHelp />
        <GetUserPostJob />
        
      </section>
      
    </LocalizationProvider>

  );
};
