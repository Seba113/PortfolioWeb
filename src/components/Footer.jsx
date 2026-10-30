import React from 'react';
import ig from '../assets/Img/ig.png';
import linkedin from '../assets/Img/linkedin.png';
import git from '../assets/Img/github2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contacto" className="footer">
            <div className="footer-inner">
                <div className="footer-copy">
                    <p className="section-label">Contacto</p>
                    <h3>¡Hablemos!</h3>
                    <a href="mailto:fernandezsolarisebastian@gmail.com" className="email-link">
                        fernandezsolarisebastian@gmail.com
                    </a>
                </div>

                <div className="socials">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sebastianfernandezti/">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Seba113/">
                        <img src={git} alt="GitHub" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sebastian.fernandez113/">
                        <img src={ig} alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;