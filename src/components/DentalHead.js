import React from 'react';
// import about from '../assets/images/about.jpg';
import './DentalHead.css';

const DentalHead = () => (
  <>
    <section>
      <div className="container-wrap mt-5">
        <div className="row d-flex no-gutters g-0">
          <div className="col-md-6 img image__2" />
          <div className="col-md-6 d-flex">
            <div className="about-wrap pt-5">
              <div className="heading-section  heading-section-white mb-5 ftco-animate">
                <h2 className="mb-2">Dentacare with a personal touch</h2>
                <p>
                  A small river named Duden flows by their place
                  and supplies it with the necessary regelialia.
                </p>
              </div>
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-check2" />
                </div>
                <div className="text">
                  <h3>Well Experience Dentist</h3>
                  <p>
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                  </p>
                </div>
              </div>
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-check2" />
                </div>
                <div className="text">
                  <h3>High Technology Facilities</h3>
                  <p>
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                  </p>
                </div>
              </div>
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-check2" />
                </div>
                <div className="text">
                  <h3>Comfortable Clinics</h3>
                  <p>
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
);
export default DentalHead;
