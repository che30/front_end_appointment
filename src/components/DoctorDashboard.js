import React, { useEffect, useState } from 'react';
import './DoctorDashboard.css';
import { useNavigate } from 'react-router-dom';
import NavCommon from './NavCommon';
import fetDoctorAppointments from '../ApiRequests/fetDoctorAppointments';

const DoctorDashboard = () => {
  const navigate = useNavigate();
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
      setDoctorApts(response.data);
      // console.log(response.data);
      setFetcingDoctorApts(false);
    });
  }, []);
  console.log(doctorApts);
  if (fetchingDoctorApts) {
    return (
      <>
        <div>Fetching data be patient</div>
      </>
    );
  }
  if ((fetchingDoctorApts === false) && (doctorApts.length === 0)) {
    return (
      <>
        <div>No Appointments yet</div>
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
          {doctorApts.map((elt) => (
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
                      {elt.id}
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
                  <h6 className="small__padding">App date:</h6>
                  <p className="small__padding ">{elt.date_of_appointment}</p>
                </div>
              </div>
              <div className="w-75">
                {/* <h6 className="small__padding d-block d-lg-none" /> */}
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
