import React, { useState, useEffect } from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const [open, setopen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleClick = () => {
    if (open === false) {
      setopen(true);
    } else {
      setopen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    if (width >= 1024) {
      setopen(false);
    }
  });
  useEffect(() => {
    if (open === false) {
      document.getElementById('open-menu').style.display = 'none';
    }
  });
  useEffect(() => {
    if (open === true) {
      document.getElementById('open-menu').style.display = 'block';
    }
  });

  return (
    <>
      <section className="welcome">
        <div className="">
          <nav>
            <div className="appointment__header">
              <span className="appoint_font_weight">Appoint</span>
              <span>ment</span>
            </div>
            <div className="dropdown__contain">
              <button
                type="button"
                className="btn dropdown__contain__child_one"
                onClick={handleClick}
              >
                <div><i className="fa fa-bars" /></div>
                <div><span>MENU</span></div>
                {' '}

              </button>

            </div>

            <ul className="list-unstyled navbar__list align-items-center">
              <li className="home">Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Contact</li>
              <li className="btn text-white login">Login</li>
              <li className="btn text-white signup">Sign up</li>
            </ul>

          </nav>
          <div className="bg-dark" id="bg-dark">
            <ul className="list-unstyled" id="open-menu">
              <li className="home">Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Contact</li>
              <li className="text-white d__login">Login</li>
              <li className="text-white d__signup">Sign up</li>
            </ul>
          </div>
          <div className="text__container">
            <h1>
              Modern Dentistry in a Calm and Relaxed Environment
            </h1>
            <p>
              A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
            <button type="button" className=" bg-primary text-white">
              Make an Appointment
            </button>
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="d-flex justify-content-center">
          <div className="emergency">
            <h3>Emergency Cases</h3>
            <p>A small river named Duden flows by their place and supplies</p>
            <p>(+237) 670 639 019</p>
          </div>
          <div className="opening__hours">
            <h3>Opening hours</h3>
            <p>Monday-Friday 8:00-19:00</p>
            <p>Saturday 10:00-17:00</p>
            <p>Sunday 10:00-16:00</p>
          </div>
        </div>

      </section>
    </>
  );
};
export default IntroSection;
