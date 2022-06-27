import React from 'react';
import './ExperiencedDoctors.css';
import about from '../assets/images/about.jpg';

const ExperiencedDoctors = () => (
  <>
    <section className="all__doctors">
      <h4 className="last__header ">Meet Our Experience Dentist </h4>
      <p>
        A small river named Duden flows by their place and
        supplies it with the necessary regelialia.
        It is a paradisematic country, in which
        roasted parts of sentences
      </p>
      <div className="grid">
        <div className="bg-white pt-5 last__columns">
          <img src={about} alt="specialist" />
          <h6 className="Lato-light py-3">Tom Smith</h6>
          <p className="text-primary">Dentist</p>
          <p>
            Far far away, behind the word mountains,
            far from the countries Vokalia
          </p>
        </div>
        <div className="bg-white pt-5 last__columns">
          <img src={about} alt="specialist" />
          <h6 className="Lato-light py-3">Tom Smith</h6>
          <p className="text-primary">Dentist</p>
          <p>
            Far far away, behind the word mountains,
            far from the countries Vokalia
          </p>
        </div>
        <div className="bg-white pt-5 last__columns last__two">
          <img src={about} alt="specialist" />
          <h6 className="Lato-light py-3">Tom Smith</h6>
          <p className="text-primary">Dentist</p>
          <p>
            Far far away, behind the word mountains,
            far from the countries Vokalia
          </p>
        </div>
        <div className="bg-white pt-5 last__columns  last__two">
          <img src={about} alt="specialist" />
          <h6 className="Lato-light py-3">Tom Smith</h6>
          <p className="text-primary w-100">Dentist</p>
          <p>
            Far far away, behind the word mountains,
            far from the countries Vokalia
          </p>
        </div>
      </div>
    </section>
  </>
);
export default ExperiencedDoctors;
