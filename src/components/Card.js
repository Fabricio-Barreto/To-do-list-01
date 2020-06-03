import React from "react";
import "./Card.css";
import retrato from '../img/retrato.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faInstagram, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = () => (
    <div className='carde centered'>
        <div className='content_grid'>
            <div className='box01'>
                <h1>Fabricio Barreto</h1>
                <h2>Are necessary too many years of work to succeed overnight.</h2>
                <ul className='social'>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faGithub} /></li></a>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faFacebook} /></li></a>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faSteam} /></li></a>
                    <a href='http://google.com'><li><FontAwesomeIcon icon={faGamepad} /></li></a>
                </ul>   
                
                <Link to="/todo" className="Link">TO DO LIST</Link>
            </div>

            <div className='box02'>
                <img className='retrato' src={retrato} alt='retrato' />
            </div>
        </div>
    </div>
);

export default Card