import React from "react";

function PersonalDetails(props) {
  return (
    <>
      <div className="personalDetails">
        <div className="">
          <h1 className="subtitle">Please fill in the following details</h1>
          <div className="container3">
            <label htmlFor="name" className="cartitle">
              Name*
            </label>

            <input
              type="text"
              id="name"
              className="para inputBox"
              required
              value={props.userDetails.name}
              onChange={(e) =>
                props.setUserDetails({
                  ...props.userDetails,
                  name: e.target.value,
                })
              }
            />
            <p className="para">*Please fill your First name and Last name</p>

            <label htmlFor="email" className="cartitle">
              E-Mail*
            </label>

            <input
              type="email"
              id="email"
              className="para inputBox"
              required
              value={props.userDetails.email}
              onChange={(e) =>
                props.setUserDetails({
                  ...props.userDetails,
                  email: e.target.value,
                })
              }
            />
            <p className="para">*Please fill your Email Id</p>

            <label htmlFor="contactNo" className="cartitle">
              Contact No.
            </label>

            <input
              type="number"
              id="contactNo"
              className="para inputBox"
              required
              value={props.userDetails.contactNo}
              onChange={(e) =>
                props.setUserDetails({
                  ...props.userDetails,
                  contactNo: e.target.value,
                })
              }
            />
            <p className="para">
              Please fill your 9-digit Mobile number without Country code
            </p>

            <label htmlFor="message" className="cartitle">
              Specific Requests,if any...
            </label>
            <input
              type="text"
              id="message"
              className="para inputBox"
              value={props.userDetails.message}
              onChange={(e) =>
                props.setUserDetails({
                  ...props.userDetails,
                  message: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalDetails;
