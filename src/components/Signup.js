import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => (
  <>
    <section className="Signup__section">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFirstName"
            placeholder="Enter First name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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
export default Signup;
