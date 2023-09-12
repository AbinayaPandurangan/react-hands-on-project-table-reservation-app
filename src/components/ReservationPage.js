import React from "react";
import { fetchAPI, submitAPI } from "../api/api";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import PersonalDetails from "./PersonalDetails";
// import image01 from "../assets/bookingpage/bookingform/image01.jpg";
// import image02 from "../assets/bookingpage/bookingform/image02.jpg";
// import image03 from "../assets/bookingpage/bookingform/image03.jpg";
// import image04 from "../assets/bookingpage/bookingform/image04.jpg";
// import image05 from "../assets/bookingpage/bookingform/image05.jpg";
// import image06 from "../assets/bookingpage/bookingform/image06.jpg";
// import image07 from "../assets/bookingpage/bookingform/image07.jpg";
// import image08 from "../assets/bookingpage/bookingform/image08.jpg";
// import image09 from "../assets/bookingpage/bookingform/image09.jpg";

function BookingPage() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1");
  const [occassion, setOccasion] = useState("Select Occasion");
  const [seatingPreference, setSeatingPreference] = useState("indoor");
  const [time, setTime] = useState("Select Time");
  const [userDetails, setUserDetails] = useState({
    name: "",
    contactNo: "",
    email: "",
    message: "",
  });
  let selectTime;

  let formData = {
    formDate: date,
    formTime: time,
    formGuests: guests,
    formOccassion: occassion,
    formSeatingPreference: seatingPreference,
    formUserDetails: userDetails,
  };

  const noOfGuests = [
    { value: 2, description: "1-2 Persons", id: 1 },
    { value: 4, description: "3-4 Persons", id: 2 },
    { value: 6, description: "5-6 Persons", id: 3 },
    { value: 8, description: "7-8 Persons", id: 4 },
    { value: 10, description: "9-10 Persons", id: 5 },
    { value: "More than 10", description: "More than 10", id: 6 },
  ];

  const navigate = useNavigate();

  function initializeTimes() {
    return { availableTimes: [""] };
  }

  const updateTimes = (state, { description, value }) => {
    if (description === "setDate") {
      const newAvailableTime = [...fetchAPI(value)];
      return {
        availableTimes: (state.availableTimes = [...newAvailableTime]),
      };
    } else if (description === "submitForm") {
      return { availableTimes: [""] };
    }
  };

  function clearForm() {
    setDate("");
    setTime("Select Time");
    setGuests();
    setOccasion("Select Occasion");
    setUserDetails({
      name: "",
      contactNo: "",
      email: "",
      message: "",
    });
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const updatedAvailableTime = [...state.availableTimes];

  function onDateChangeHandler(e) {
    setDate(e.target.value);
    dispatch({ description: "setDate", value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ description: "submitForm", value: "" });
    console.log(formData);
    submitForm(formData);
    clearForm();
    navigate("/booking/confirmationpage");
  }

  function submitForm(formData) {
    submitAPI(formData);
    console.log(submitAPI());
  }

  const getIsFormValid = () => {
    return (
      date &&
      time !== "Select Time" &&
      occassion !== "Select Occasion" &&
      userDetails.name &&
      userDetails.email
    );
  };

  return (
    <>
      <div className="reservations" id="reservations">
        <div className="container">
          <div className="formContainer">
            
            <BookingForm
              date={date}
              setDate={setDate}
              guests={guests}
              setGuests={setGuests}
              occassion={occassion}
              setOccasion={setOccasion}
              selectTime={selectTime}
              seatingPreference={seatingPreference}
              setSeatingPreference={setSeatingPreference}
              onDateChangeHandler={onDateChangeHandler}
              updatedAvailableTime={updatedAvailableTime}
              time={time}
              setTime={setTime}
              noOfGuests={noOfGuests}
            />
            <PersonalDetails
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />

            <div className="buttons">
              <button
                className="button secondary buttontxt"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>

              <button
                className="button primary buttontxt"
                type="submit"
                value="Make Your reservation"
                onClick={handleSubmit}
                disabled={!getIsFormValid()}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="image">
            {/* <img src={image08} alt="food" />
            <img src={image09} className="secondimg" alt="food" />
            <img src={image01} className="oddimg" alt="food" />
            <img src={image02} className="secondimg" alt="food" />
            <img src={image03} className="oddimg" alt="food" />
            <img src={image04} className="secondimg" alt="food" />
            <img src={image05} className="oddimg" alt="food" />
            <img src={image06} className="secondimg" alt="food" />
            <img src={image07} className="oddimg" alt="food" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default BookingPage;
