import React from 'react';
import cv from '../assets/cv.pdf';
import './MainSection.css';
import { InfiniteScroll } from './Stack';

const MainSection = () => {
    return (
        <section id="home" className="mainSection">
            <div className="hero-shell">
                <div className="hero-copy">
                    <span className="eyebrow">Desarrollador Full Stack</span>
                    <h1>Sebastián Fernández</h1>
                    <p className="subtitle">
                        Creo aplicaciones web funcionales, limpias y centradas en la experiencia del usuario.
                    </p>
                    <p className="meta">ORT University • Montevideo, Uruguay</p>

                    <div className="hero-actions">
                        <a href="#proyectos" className="primary-btn">Ver proyectos</a>
                        <a href={cv} download className="secondary-btn">Descargar CV</a>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sebastianfernandezti/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/Seba113" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="mailto:fernandezsolarisebastian@gmail.com">Email</a>
                    </div>
                </div>

                <InfiniteScroll />
            </div>
        </section>
    );
};

export default MainSection;