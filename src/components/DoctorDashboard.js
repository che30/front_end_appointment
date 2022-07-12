import React, { useEffect, useState } from 'react';
import './DoctorDashboard.css';
import { useNavigate } from 'react-router-dom';
import NavCommon from './NavCommon';
import fetDoctorAppointments from '../ApiRequests/fetDoctorAppointments';
import fetchSingleUser from '../ApiRequests/fetchSingleUser';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [doctorOrPatient, setDoctorOrPatient] = useState(false);
  const [fetchingDoctorApts, setFetcingDoctorApts] = useState(true);
  const [doctorApts, setDoctorApts] = useState([]);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('auth_token'));
    if (storage === null) {
      navigate('/');
    }
  });
  useEffect(() => {
    fetDoctorAppointments().then((response) => {
      fetchSingleUser().then((responsetwo) => {
        setDoctorApts(response.data);
        setDoctorOrPatient(responsetwo.data.patient);
        setFetcingDoctorApts(false);
      });
    });
  }, []);
  if (doctorOrPatient === true) {
    window.location.replace('/PatientDashboard');
  }
  if (fetchingDoctorApts) {
    return (
      <>

        <div />
      </>
    );
  }
  if ((fetchingDoctorApts === false) && (doctorApts.length === 0) && (doctorOrPatient === false)) {
    return (
      <>
        <NavCommon />
        <h1 className="text-primary text-center">No Appointments yet</h1>
      </>
    );
  }
  return (
    <>
      <NavCommon />
      <div className="header">
        <h1 className="text-center doctor__header text-white">
          Appointement lists
        </h1>
        <div className="doctors__contain">
          <h2 className="Lato-bold">Today</h2>
          <div className="d-grid">
            <div />
            <div />
            <div className="item__3">
              <h6 className="text-center">
                message
              </h6>
            </div>
            <div />
          </div>
          {doctorApts.map((elt, index) => (
            <div
              className="d-flex mb-3 verla-round doc__appointments
         justify-content-between
         align-items-baseline"
              key={elt.id}
            >

              <div className="w-100 pt-3">
                <div className="d-flex align-items-baseline">
                  <h6 className="small__padding">
                    <span className="blue__color">
                      {index}
                      .
                    </span>
                    {' '}
                    Patient Name:
                  </h6>
                  <p className="small__padding">
                    {elt.user.first_name}
                    {' '}
                    {elt.user.last_name}
                  </p>
                </div>
                <div className="d-flex align-items-baseline">
                  <h6 className="small__padding app__date">App date:</h6>
                  <p className="small__padding ">{elt.date_of_appointment}</p>
                </div>
                <div className="msg__on__small__screen">
                  <h5 className="text-center">message</h5>
                </div>
              </div>
              <div className="w-75 padding__on__small__screen">
                <p>
                  {elt.message}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};
export default DoctorDashboard;
