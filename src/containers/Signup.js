import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  captureFirstName,
  captureLastName,
  captureUserEmail,
  captureUserPassword,
} from '../actions';

const Signup = ({
  captureFirstName,
  captureLastName,
  capturePassword,
  capturedCredentials,
  captureEmail,
}) => {
  const [passwordC, setPasswordC] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'FN') {
      captureFirstName(e.target.value);
    }
    if (e.target.name === 'LN') {
      captureLastName(e.target.value);
    }
    if (e.target.name === 'email') {
      console.log('test success');
      captureEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      capturePassword(e.target.value);
    }
    if (e.target.name === 'passwordC') {
      setPasswordC(e.target.value);
    }
  };
  return (
    <>
      <section className="Signup__section">
        <form className="sign__up__form">
          <h1 className="text-center text-white pb-3">REGISTER</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleFirstName"
              placeholder="Enter First name"
              name="FN"
              value={capturedCredentials.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Last Name"
              name="LN"
              value={capturedCredentials.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              name="email"
              value={capturedCredentials.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={capturedCredentials.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password confirmation"
              name="passwordC"
              value={passwordC}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primar">Submit</button>
          <p className="text-white Lato-bold have__an__account">
            Already have an account?
            <Link to="/Login" className="text-decoration-none text-white verla-round">Login</Link>
          </p>
        </form>
      </section>
    </>
  );
};
Signup.defaultProps = {
  captureFirstName() {},
  captureLastName() {},
  captureEmail() {},
  capturePassword() {},
};
Signup.propTypes = {
  captureFirstName: PropTypes.func,
  captureLastName: PropTypes.func,
  captureEmail: PropTypes.func,
  capturePassword: PropTypes.func,
  capturedCredentials: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};
const mapStateProps = (state) => ({
  capturedCredentials: state.captureUserCredentials,
});
const mapDispatchToProps = (dispatch) => ({
  captureFirstName: (firstname) => dispatch(captureFirstName(firstname)),
  captureLastName: (lastname) => dispatch(captureLastName(lastname)),
  captureEmail: (email) => dispatch(captureUserEmail(email)),
  capturePassword: (password) => dispatch(captureUserPassword(password)),
});
export default connect(mapStateProps, mapDispatchToProps)(Signup);
