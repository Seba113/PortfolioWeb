import React from 'react';
import './Header.css';
import miImagen from '../assets/Img/yo.jpg';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-inner">
                <a href="#home" className="brand">
                    <img src={miImagen} alt="Sebastián Fernández" />
                    <div className="brand-copy">
                        <span className="brand-name">Sebastián Fernández</span>
                        <span className="brand-role">Full Stack Developer</span>
                    </div>
                </a>

                <nav className="main-nav" aria-label="Navegación principal">
                    <a href="#home">Inicio</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;