import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Home } from "./Home";
import { GeoLocSearchPage } from "./GeoLocSearchPage";
import  DonationPage  from "./DonationPage";
import JobForm  from "./JobForm";
import { AccomodationForm } from "./AccomodationForm";
import  VolunteerForms  from "./VolunteerForms";
import { AboutUsPage } from "./AboutUsPage";
import { FindSupportPage } from "./FindSupportPage";
import { useEffect } from "react";
import GetAccomodations from "./GetAccomodations";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/geolocsearchpage":
        title = "";
        metaDescription = "";
        break;
      case "/donationpage":
        title = "";
        metaDescription = "";
        break;
      case "/jobform":
        title = "";
        metaDescription = "";
        break;
      case "/accomodationform":
        title = "";
        metaDescription = "";
        break;
      case "/volunteerprofilepage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutuspage":
        title = "";
        metaDescription = "";
        break;
      case "/findsupportpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/geolocsearchpage" element={<GeoLocSearchPage />} />

      <Route path="/donationpage" element={<DonationPage />} />

      <Route path="/jobform" element={<JobForm />} />

      <Route path="/accomodationform/postaccommodation" element={<AccomodationForm />} />
    
      <Route path="/volunteerformspage" element={<VolunteerForms />} />
    
      <Route path="/aboutuspage" element={<AboutUsPage />} />

      <Route path="/findsupportpage" element={<FindSupportPage />} />
      <Route path="/getaccomodations" element={<GetAccomodations />} />

      
      <Route path="/donationpage" element={<DonationPage />} />
    </Routes>
  );
}
export default App;
