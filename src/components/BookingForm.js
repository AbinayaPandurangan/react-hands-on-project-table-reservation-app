import React from "react";

function BookingForm(props) {
  const selectOccasion = ["Select Occasion", "Birthday", "Anniversary"];

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  return (
    <>
      <div className="container2">
        <form className="bookingpage">
          <h1 className="subtitle">Reserve a Table</h1>
          <label htmlFor="res-date" className="cartitle">
            Choose date*
          </label>
          <input
            data-testid="res-date"
            className="para inputBox"
            type="date"
            id="res-date"
            name="res-date"
            min={minDate()}
            value={props.date}
            onChange={props.onDateChangeHandler}
          />

          <label htmlFor="res-time" className="cartitle">
            Choose time*
          </label>

          <select
            className="para inputBox"
            id="res-time"
            name="res-time"
            value={props.selectTime}
            onChange={(e) => props.setTime(e.target.value)}
          >
            <option
              data-testid="booking-time-option"
              role="option"
              id="res-time-options"
            >
              Select Time
            </option>
            {props.updatedAvailableTime.map((time, index) => (
              <option
                data-testid="booking-time-option"
                role="option"
                id="res-time-options"
                key={index}
              >
                {time}
              </option>
            ))}
          </select>

          <label
            htmlFor="guests"
            className="cartitle"
            id="guests"
            value={props.guests}
          >
            Number of guests*
          </label>

          <div className="guestsRadio">
            {props.noOfGuests.map((item) => (
              <label key={item.id} htmlFor="guests" className="para radio">
                <input
                  type="radio"
                  className="para radio"
                  id={item.value}
                  value={item.value}
                  name="guests"
                  checked={item.checked}
                  onChange={(e) => props.setGuests(e.target.value)}
                />
                {item.description}
              </label>
            ))}
          </div>

          <label htmlFor="occasion" className="cartitle ">
            Occasion
          </label>
          <select
            className="para inputBox dropdown"
            id="occasion"
            value={props.occassion}
            onChange={(e) => props.setOccasion(e.target.value)}
          >
            {selectOccasion.map((occassion, index) => (
              <option key={index}>{occassion}</option>
            ))}
          </select>

          <label
            htmlFor="preference"
            className="cartitle"
            value={props.seatingPreference}
          >
            Seating Preference
          </label>
          <div className="guestsRadio">
            <label htmlFor="Indoor" className="para radio">
              <input
                type="radio"
                className="para radio"
                id="Indoor"
                value="indoor"
                name="seatingpreference"
                checked
                onChange={(e) => props.setSeatingPreference(e.target.value)}
              />
              Indoor
            </label>

            <label htmlFor="Outdoor" className="para radio">
              <input
                type="radio"
                className="para radio"
                id="Outdoor"
                name="seatingpreference"
                value="outdoor"
                onChange={(e) => props.setSeatingPreference(e.target.value)}
              />
              Outdoor
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
export default BookingForm;
