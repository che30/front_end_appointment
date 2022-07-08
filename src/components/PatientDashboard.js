import React, { useEffect, useState } from 'react';
import './PatientDashboard.css';
import bg1 from '../assets/images/bg_1.jpg';
import NavCommon from './NavCommon';

const PatientDashboard = () => {
  const myArr = [1, 2, 3, 4, 5, 6];
  const [book, setBook] = useState(false);
  const [readMsg, setReadMsg] = useState(false);
  useEffect(() => {
    if (book === false) {
      document.getElementById('consult__form').style.display = 'none';
      document.getElementById('del__edit__form').style.display = 'block';
    } else {
      document.getElementById('consult__form').style.display = 'flex';
      document.getElementById('del__edit__form').style.display = 'none';
    }
  });
  useEffect(() => {
    const container = document.createElement('div');
    if (readMsg) {
      document.querySelector('.delete__edit__form').style.display = 'none';
      if (document.querySelector('.full__message').parentNode.lastChild.innerHTML !== '') {
        document.querySelector('.full__message').parentNode.lastChild.remove();
      }
      container.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
      const fullMessage = document.getElementById('full__message__section');
      fullMessage.style.display = 'block';
      fullMessage.appendChild(container);
    } else {
      document.getElementById('full__message__section').style.display = 'none';
      document.querySelector('.delete__edit__form').style.display = 'block';
    }
  });
  const handleClick = () => {
    setBook(!book);
  };
  const handleSubmit = () => {
    console.log('submitted');
  };
  const handleClose = () => {
    setBook(!book);
  };
  const showMessage = () => {
    setReadMsg(!readMsg);
  };
  const handleCloseMessage = () => {
    setReadMsg(!readMsg);
  };
  return (
    <>
      <NavCommon />
      <section>
        <div className="header">
          <h1 className="text-center doctor__header text-white">
            Doctors
          </h1>
          <div className="doctors__contain">
            <div className="single__doctor__details">
              {myArr.map((elt) => (

                <div className="first__padding" key={elt}>
                  <img src={bg1} alt="first doctor" />
                  <h6>Dr. Hatti Key</h6>
                  <p>Neurologist</p>
                  <span>
                    <span className="fa fa-star text-primary" />
                    <span className="fa fa-star text-primary" />
                    <i className="fa-solid fa-star text-grey" />
                    <i className="fa-solid fa-star text-grey" />
                    <i className="fa-solid fa-star text-grey" />
                  </span>
                  <br />
                  <button type="button" className="book__btn" id={elt} onClick={handleClick}>book</button>
                </div>

              ))}
            </div>
          </div>
          <div className="book__appointment">
            <form id="consult__form">
              <div className="book__appointment__first__child text-white">
                <div> New Appointent</div>
                <button type="button" className="close__button" onClick={handleClose}>
                  <i aria-label="text" role="button" className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="d-inline-flex justify-content-around align-items-center">
                <span>To</span>
                <input className="w-75" type="text" value="test value" />
              </div>
              <textarea id="w3review" name="w3review" rows="4" cols="50" value="test" placeholder="message" />
              <button type="button" className="create__button" onClick={handleSubmit}>submit</button>
            </form>
          </div>
        </div>
      </section>
      <div className="message__section" id="del__edit__form">
        <div>
          <form className="delete__edit__form">
            <div
              className="delete__edit__form__child"
            >
              <div className="d-flex align-items-center checkbox__contain">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <div className="doc__info">
                  {' '}
                  <span>Dr. Hatti Key</span>
                  {' '}
                  <span>Neurologist</span>
                  {' '}
                </div>
              </div>
              <div
                role="button"
                tabIndex="0"
                onKeyPress={showMessage}
                onClick={showMessage}
                className="message__doc btn"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti laborum, dolor voluptas blanditiis dicta nostrum!
                Quos dolorem, cupiditate nesciunt fugit
                quis nemo praesentium, ipsam quia molestias ex blanditiis
                dolore sint.
              </div>
            </div>
          </form>
        </div>
        <div className="full__message__section" id="full__message__section">
          <button type="button" className="close__button__two" onClick={handleCloseMessage}>
            <i className="fa-solid fa-xmark" />
          </button>
          <div className="full__message" />
        </div>
      </div>
    </>
  );
}; export default PatientDashboard;
