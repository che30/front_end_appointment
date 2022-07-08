/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  captureUserEmail, captureUserPassword, userCreated, userNotCreated,
} from '../actions';
import loginUser from '../ApiRequests/loginUser';

const Login = ({
  capturePassword,
  capturedCredentials,
  captureEmail,
  error,
  loggedIn,
  usernotcreated,
  userLoggedIn,
  patient,
}) => {
  const dispatch = useDispatch();
  const [userStatus, setUserStatus] = useState(false);
  useEffect(() => {
    let token;
    if (JSON.parse(localStorage.getItem('auth_token'))) {
      token = JSON.parse(localStorage.getItem('auth_token'))[0];

      if (((jwtDecode(token)).exp) > Date.now() / 1000) {
        userLoggedIn(true);
      }
    }
    if (patient === true) {
      setUserStatus(true);
    }
  });
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        captureEmail(e.target.value);
        break;
      case 'password':
        capturePassword(e.target.value);
        break;
      default:
    }
  };
  const handleClick = () => {
    if (capturedCredentials.email !== ''
    && capturedCredentials.password !== '') {
      dispatch(loginUser({
        email: capturedCredentials.email,
        password: capturedCredentials.password,
      }));
    } else {
      usernotcreated('All the fields must be filled');
    }
  };
  if (loggedIn) {
    if (userStatus === true) {
      window.location.replace('/PatientDashboard');
    } else {
      window.location.replace('/DoctorDashboard');
    }
  }
  return (
    <>
      <section className="Signup__section">
        {error ? <div className="error alert bg-danger text-white">{error}</div> : <div /> }
        <form className="sign__up__form login__form ">
          <h1 className="text-center text-white">LOGIN</h1>
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
          <button type="button" className="btn btn-primar" onClick={handleClick}>Submit</button>
          <p className="text-white Lato-bold have__an__account">
            Don&apos;t have an account?
            <Link to="/Signup" className="text-decoration-none text-white verla-round">Signup</Link>
          </p>
        </form>
      </section>
    </>
  );
};
Login.defaultProps = {
  captureEmail() {},
  capturePassword() {},
  usernotcreated() {},
  userLoggedIn() {},
};
Login.propTypes = {
  captureEmail: PropTypes.func,
  capturePassword: PropTypes.func,
  usernotcreated: PropTypes.func,
  userLoggedIn: PropTypes.func,
  error: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  patient: PropTypes.bool.isRequired,
  capturedCredentials: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};
const mapStateProps = (state) => ({
  capturedCredentials: state.captureUserCredentials,
  error: state.creatingUser.message,
  loggedIn: state.creatingUser.loggedIn,
  patient: state.creatingUser.patient,
});
const mapDispatchToProps = (dispatch) => ({
  captureEmail: (email) => dispatch(captureUserEmail(email)),
  capturePassword: (password) => dispatch(captureUserPassword(password)),
  userLoggedIn: (status) => dispatch(userCreated(status)),
  usernotcreated: (reason) => dispatch(userNotCreated(reason)),
});
export default connect(mapStateProps, mapDispatchToProps)(Login);
