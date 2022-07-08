import React, { useEffect } from 'react';
import './DoctorDashboard.css';
import { useNavigate } from 'react-router-dom';
import NavCommon from './NavCommon';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('auth_token'));
    if (storage === null) {
      navigate('/');
    }
  });
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
          <div className="d-flex verla-round doc__appointments
         justify-content-between
         align-items-baseline"
          >

            <div className="w-100 pt-3">
              <div className="d-flex align-items-baseline">
                <h6 className="small__padding">
                  <span className="blue__color">1.</span>
                  {' '}
                  Patient Name:
                </h6>
                <p className="small__padding">test name</p>
              </div>
              <div className="d-flex align-items-baseline">
                <h6 className="small__padding">App date:</h6>
                <p className="small__padding ">test date</p>
              </div>
            </div>
            <div>
              <h6 className="small__padding d-block d-lg-none">
                message
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ex distinctio rerum adipisci sunt porro, id ullam
                soluta atque cumque
                ipsam rem. Molestiae odio itaque enim
                quidem aperiam fugit, adipisci ratione!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorDashboard;
