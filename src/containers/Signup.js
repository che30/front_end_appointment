import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  captureFirstName,
  captureLastName,
  captureUserEmail,
  captureUserPassword,
  userCreated,
  userNotCreated,
} from '../actions';
import createUser from '../ApiRequests/createUser';

const Signup = ({
  captureFirstName,
  captureLastName,
  capturePassword,
  capturedCredentials,
  captureEmail,
  error,
  loggedIn,
  usernotcreated,
  userLoggedIn,
}) => {
  const [passwordC, setPasswordC] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth_token'))[0];
    if ((token !== null) && (((jwtDecode(token)).exp) > Date.now() / 1000)) {
      userLoggedIn(true);
    }
  });
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'FN':
        captureFirstName(e.target.value);
        break;
      case 'LN':
        captureLastName(e.target.value);
        break;
      case 'email':
        captureEmail(e.target.value);
        break;
      case 'password':
        capturePassword(e.target.value);
        break;
      case 'passwordC':
        setPasswordC(e.target.value);
        break;
      default:
    }
  };
  const handleClick = () => {
    if (capturedCredentials.firstname !== ''
    && capturedCredentials.lastname !== ''
    && capturedCredentials.email !== ''
    && capturedCredentials.password !== ''
    && passwordC !== '') {
      dispatch(createUser({
        firstName: capturedCredentials.firstname,
        lastName: capturedCredentials.lastname,
        email: capturedCredentials.email,
        password: capturedCredentials.password,
        passwordConfirmation: passwordC,
      }));
    } else {
      usernotcreated('All the fields must be filled');
    }
  };
  if (loggedIn) {
    navigate('/Patientdashboard');
    // return <Navigate replace={true} to="Patientdashboard" />;
  }
  return (
    <>
      <section className="Signup__section">
        {error ? <div className="error alert bg-danger text-white">{error}</div> : <div /> }
        <form className="sign__up__form">
          <h1 className="text-center text-white">REGISTER</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleFirstName"
              placeholder="Enter First name"
              name="FN"
              value={capturedCredentials.firstname}
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
              value={capturedCredentials.lastname}
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
          <button type="button" className="btn btn-primar" onClick={handleClick}>Submit</button>
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
  usernotcreated() {},
  userLoggedIn() {},
};
Signup.propTypes = {
  captureFirstName: PropTypes.func,
  captureLastName: PropTypes.func,
  captureEmail: PropTypes.func,
  capturePassword: PropTypes.func,
  usernotcreated: PropTypes.func,
  userLoggedIn: PropTypes.func,
  error: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  capturedCredentials: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};
const mapStateProps = (state) => ({
  capturedCredentials: state.captureUserCredentials,
  error: state.creatingUser.message,
  loggedIn: state.creatingUser.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  captureFirstName: (firstname) => dispatch(captureFirstName(firstname)),
  captureLastName: (lastname) => dispatch(captureLastName(lastname)),
  captureEmail: (email) => dispatch(captureUserEmail(email)),
  capturePassword: (password) => dispatch(captureUserPassword(password)),
  usernotcreated: (reason) => dispatch(userNotCreated(reason)),
  userLoggedIn: (status) => dispatch(userCreated(status)),
});
export default connect(mapStateProps, mapDispatchToProps)(Signup);
