import React from 'react';

const ProyectCard = ({ title, description, link, imageSrc, tech }) => {
    return (
        <article className="project-card">
            <div className="project-copy">
                <h4>{title}</h4>
                <p>{description}</p>

                <div className="project-meta">
                    <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                    <span className="stackProyects">{tech}</span>
                </div>
            </div>

            <div className="project-visual">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={imageSrc} alt={title} />
                </a>
            </div>
        </article>
    );
};

export default ProyectCard;