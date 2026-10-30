import PropTypes from 'prop-types';
import cv from '../assets/cv.pdf';
import './MainSection.css';
import { InfiniteScroll } from './Stack';

const MainSection = ({ language }) => {
    const content = language === 'en'
        ? {
            role: 'Full Stack Developer',
            subtitle: 'I build functional, clean web applications focused on user experience.',
            university: 'ORT University',
            projects: 'View projects',
            resume: 'Download resume',
        }
        : {
            role: 'Desarrollador Full Stack',
            subtitle: 'Creo aplicaciones web funcionales, limpias y centradas en la experiencia del usuario.',
            university: 'Universidad ORT',
            projects: 'Ver proyectos',
            resume: 'Descargar CV',
        };

    return (
        <section id="home" className="mainSection">
            <div className="hero-shell">
                <div className="hero-copy">
                    <span className="eyebrow">{content.role}</span>
                    <h1>Sebastián Fernández</h1>
                    <p className="subtitle">
                        {content.subtitle}
                    </p>
                    <p className="meta">{content.university} • Montevideo, Uruguay</p>

                    <div className="hero-actions">
                        <a href="#proyectos" className="primary-btn">{content.projects}</a>
                        <a href={cv} download className="secondary-btn">{content.resume}</a>
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

MainSection.propTypes = {
    language: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MainSection;