import { useState } from "react";
import { TextField, InputAdornment, Icon, Autocomplete } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./css/JobForm.module.css"
const JobForm = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={styles.jobFormSection}>
        <form className={styles.step3Form}>
          <form className={styles.userDataForm} method="post">
            <div className={styles.subheadDiv}>
              <div className={styles.textDiv}>{` `}</div>
            </div>
            <div className={styles.fieldDiv}>
              <TextField
                className={styles.inputTextField}
                sx={{ width: 441 }}
                color="info"
                variant="standard"
                type="text"
                label="Weisestr."
                size="medium"
                margin="none"
              />
            </div>
            <div className={styles.selectDiv}>
              <Autocomplete
                sx={{ width: 438 }}
                disablePortal
                options={["Berlin", "Barndenboug"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="City"
                    variant="standard"
                    placeholder="Select City"
                    helperText=""
                  />
                )}
                size="medium"
              />
            </div>
            <Autocomplete
              className={styles.autocompleteStandard}
              sx={{ width: 438 }}
              disablePortal
              options={["A", "B", "C", "D"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Type of Lanuage"
                  variant="standard"
                  placeholder="Select Lnuage"
                  helperText=""
                />
              )}
              size="medium"
            />
            <Autocomplete
              className={styles.autocompleteStandard1}
              sx={{ width: 438 }}
              disablePortal
              options={["A", "B", "C", "D"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Type of Help"
                  variant="standard"
                  placeholder="Select Help"
                  helperText=""
                />
              )}
              size="medium"
            />
            <div className={styles.fieldsDiv}>
              <div className={styles.datePickerDiv}>
                <DatePicker
                  label="From"
                  value={datePickerDateTimePickerValue}
                  onChange={(newValue) => {
                    setDatePickerDateTimePickerValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="standard"
                      size="medium"
                      renderInput={{ placeholder: "Start Date" }}
                      helperText=""
                    />
                  )}
                />
              </div>
              <div className={styles.datePickerDiv}>
                <DatePicker
                  label="To"
                  value={datePickerDateTimePicker1Value}
                  onChange={(newValue) => {
                    setDatePickerDateTimePicker1Value(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      variant="standard"
                      size="medium"
                      renderInput={{ placeholder: "End Date" }}
                      helperText=""
                    />
                  )}
                />
              </div>
            </div>
            <div className={styles.availabilityDiv}>Availability</div>
            <h6 className={styles.jobInformationForm}>Job Information Form</h6>
            <p className={styles.usedToProposeJobOffersOr}>
              Used to propose job offers or weiterbildung
            </p>
          </form>
          <div className={styles.agreementDiv}>
            <img
              className={styles.buttonIconGhostOff}
              alt=""
              src="../buttoniconghostoff.svg"
            />
            <p className={styles.captionText}>I agree with</p>
            <p className={styles.linkP}>Terms of use</p>
          </div>
        </form>
        <button className={styles.button} autoFocus>
          <b className={styles.sendRequestB}>{`Send Infos.  `}</b>
        </button>
      </section>
    </LocalizationProvider>
  );
};

export default JobForm;
