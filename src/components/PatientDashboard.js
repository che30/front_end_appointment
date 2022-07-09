import React, { useEffect, useState } from 'react';
import './PatientDashboard.css';
import jwtDecode from 'jwt-decode';
import bg1 from '../assets/images/bg_1.jpg';
import NavCommon from './NavCommon';
import fetchDoctors from '../ApiRequests/fetchDoctors';
import createAppointment from '../ApiRequests/createAppointment';
import fetchAppointments from '../ApiRequests/fetchAppointments';

const PatientDashboard = () => {
  const [book, setBook] = useState(false);
  const [readMsg, setReadMsg] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [message, setMessage] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [chosenDocId, setChosenDocId] = useState();
  const [appointments, setAppointments] = useState([]);
  const [seeMore, setSeeMore] = useState('');
  const [mycalAppoint, setMyCalAppoint] = useState([]);
  useEffect(() => {
    if (fetching === false) {
      if (book === false) {
        document.getElementById('consult__form').style.display = 'none';
        document.getElementById('del__edit__form').style.display = 'block';
      } else {
        document.getElementById('consult__form').style.display = 'flex';
        document.getElementById('del__edit__form').style.display = 'none';
      }
    }
  });
  useEffect(() => {
    if (fetching === false) {
      const container = document.createElement('div');
      if (readMsg) {
        document.querySelector('.delete__edit__form').style.display = 'none';
        if (document.querySelector('.full__message').parentNode.lastChild.innerHTML !== '') {
          document.querySelector('.full__message').parentNode.lastChild.remove();
        }
        container.innerHTML = seeMore;
        const fullMessage = document.getElementById('full__message__section');
        fullMessage.style.display = 'block';
        fullMessage.appendChild(container);
      } else {
        document.getElementById('full__message__section').style.display = 'none';
        document.querySelector('.delete__edit__form').style.display = 'block';
      }
    }
  });
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth_token'))[0];
    const userId = jwtDecode(token);
    fetchAppointments({
      token,
      userId,
    }).then((response) => {
      setAppointments(response.data);
    }).then(() => {
      fetchDoctors().then((response) => {
        setDoctors(response.data);
        setFetching(false);
      });
    });
  }, [fetching]);
  useEffect(() => {
    if (fetching === false) {
      const myDoctorDetails = [];
      doctors.forEach((doc) => {
        appointments.forEach((apt) => {
          if (apt.doctor_id === doc.id) {
            const temp = {
              id: apt.id,
              first_name: doc.first_name,
              specialty: doc.specialty,
              message: apt.message,
              date: apt.date_of_appointment,
              dateCreated: apt.created_at,
            };
            myDoctorDetails.push(temp);
          }
        });
      });
      setMyCalAppoint(myDoctorDetails);
    }
  }, [fetching]);
  const handleClick = (id) => {
    setBook(!book);
    let chosenDoc;
    doctors.forEach((doc) => {
      if (doc.id === Number(id)) {
        chosenDoc = doc;
        setChosenDocId(doc.id);
      }
    });
    setSelectedDoctor(chosenDoc.email);
  };
  const handleSubmit = () => {
    const token = JSON.parse(localStorage.getItem('auth_token'))[0];
    const userId = jwtDecode(token).user_id;
    createAppointment({
      message,
      meetingDate,
      userId,
      chosenDocId,
      token,

    }).then((response) => {
      setAppointments(response.data);
    });
    setMessage('');
    setMeetingDate('');
    setBook(false);
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth_token'))[0];
    const userId = jwtDecode(token).user_id;
    fetchAppointments({
      token,
      userId,
    }).then((response) => {
      setAppointments(response.data);
    });
  }, []);
  const handleClose = () => {
    setBook(!book);
  };
  const showMessage = (e) => {
    setReadMsg(!readMsg);
    setSeeMore(e.target.innerHTML);
  };
  const handleCloseMessage = () => {
    setReadMsg(!readMsg);
  };
  const handleMessageInput = (value) => {
    setMessage(value);
  };
  const handleDate = (value) => {
    setMeetingDate(value);
  };
  if (fetching) {
    return (
      <>
        <div>
          Fetching data please be patient ...
        </div>
      </>
    );
  }
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
              {doctors.map((elt) => (

                <div className="first__padding" key={elt.id}>
                  <img src={bg1} alt="first doctor" />
                  <h6>
                    <span>{elt.first_name}</span>
                  </h6>
                  <p><span>{elt.specialty}</span></p>
                  <span>
                    <span className="fa fa-star text-primary" />
                    <span className="fa fa-star text-primary" />
                    <i className="fa-solid fa-star text-grey" />
                    <i className="fa-solid fa-star text-grey" />
                    <i className="fa-solid fa-star text-grey" />
                  </span>
                  <br />
                  <button type="button" className="book__btn" id={elt.id} onClick={(e) => handleClick(e.target.id)}>book</button>
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
                <input className="w-75" type="text" defaultValue={selectedDoctor} />
              </div>
              <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => handleMessageInput(e.target.value)} value={message} placeholder="message" />
              <input className="py-1 lato-ligth date_input " type="date" value={meetingDate} onChange={(e) => handleDate(e.target.value)} />
              <button type="button" className="create__button" onClick={handleSubmit}>submit</button>
            </form>
          </div>
        </div>
      </section>
      <div className="message__section" id="del__edit__form">
        <div>
          {appointments
            ? (
              <form className="delete__edit__form">
                { mycalAppoint.map((elt) => (
                  <div
                    className="delete__edit__form__child"
                    key={elt.id}
                  >
                    <div className="d-flex align-items-center checkbox__contain">
                      <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue={elt.id} />
                      <div className="doc__info">
                        {' '}
                        <span className={`text-primary ${elt.first_name}`}>{elt.first_name}</span>
                        {' '}
                        <span>{elt.specialty}</span>
                        {' '}
                      </div>
                    </div>
                    <div
                      role="button"
                      tabIndex="0"
                      onKeyPress={(e) => showMessage(e)}
                      onClick={(e) => showMessage(e)}
                      className="message__doc btn"
                    >
                      {elt.message}
                    </div>
                    <div>{elt.date}</div>

                  </div>
                ))}
              </form>
            ) : <div> </div> }

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
