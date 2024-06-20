import { useState, useRef } from "react";
import ErrorInfo from "./ErrorInfo";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef("");

  // form submit function
  const onSubmitForm = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;

    // check if data is valid
    if (!firstName || !lastName || !email) {
      return setErrorMessage("All input fields are required");
    }

    setFirstName("");
    setLastName("");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h1 className="text-center mt-5 mb-5">Register to get started</h1>

          {errorMessage && <ErrorInfo errorMessage={errorMessage} />}

          <form onSubmit={onSubmitForm}>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                ref={emailRef}
              />
            </div>
            <div className="form-group mb-3">
              <button
                type="submit"
                className={`btn btn-secondary ${classes.submit_btn}`}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default AuthForm;
