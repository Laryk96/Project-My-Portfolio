import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import resume from 'download/Lary_Aguebor_Frontend-Dev.pdf';
import './AboutMy.css';
import { Link } from 'react-router-dom';

const AboutMy = () => {
  const componentRef = useRef(resume);

  const handleClick = useReactToPrint({ content: () => componentRef.current });
  return (
    <section className="aboutMy">
      <div className="aboutMy__wrapper">
        <h1 className="aboutMy__title">
          <strong>
            Hi, my name is <em>Lary</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="aboutMy__text">
          <p>with passion for learning and creating.</p>
        </div>
        <Link to={resume} download={resume} className="btn" onClick={handleClick}>
          Download CV
        </Link>
      </div>
    </section>
  );
};

export default AboutMy;
