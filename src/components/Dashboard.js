import React from 'react';
import './Dashboard.css';
import bg1 from '../assets/images/bg_1.jpg';

const Dashboard = () => (
  <>
    <section>
      <div className="header">
        <h1 className="text-center doctor__header text-white">
          Doctors
        </h1>
        <div className="doctors__contain">
          <div className="single__doctor__details">
            <div>
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
              <button type="button">book</button>
            </div>

            <div>
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
              <button type="button">book</button>
            </div>

            <div>
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
              <button type="button">book</button>
            </div>
            <div>
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
              <button type="button">book</button>
            </div>
            <div>
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
              <button type="button">book</button>
            </div>
            <div>
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
              <button type="button">book</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
); export default Dashboard;
