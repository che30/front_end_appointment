import React from 'react';
import './404Error.css';
import { Link } from 'react-router-dom';

const FourOFourError = () => (
  <>
    <div className="four__o__four">
      <h4>
        Page not found
      </h4>
      <div>
        {' '}
        <Link to="/">Home </Link>
      </div>
    </div>
  </>
);
export default FourOFourError;
