import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <section className="Signup__section">
      <form className="sign__up__form login__form ">

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
          Don&apos;t have an account?
          <Link to="/Signup" className="text-decoration-none text-white verla-round">Signup</Link>
        </p>
      </form>
    </section>
  </>
);
export default Login;
