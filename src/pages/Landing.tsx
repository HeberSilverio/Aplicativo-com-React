import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg';




function Landing() {
    return (
        <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="Happy"/>
          
          
              <main>
                <h1>Leve Felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia <br/>de muitas crianças.</p>
              </main>

              <div className="location">
                <strong>Goiânia </strong> 
                <span> Goiás</span>
              </div>
              
              <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgb(0,0,0)" />
              </Link>
          </div>
    </div>

    );
} 
export default Landing;