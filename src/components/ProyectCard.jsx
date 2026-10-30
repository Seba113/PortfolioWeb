import PropTypes from 'prop-types';

const ProyectCard = ({ title, description, link, imageSrc, tech, viewLabel }) => {
    return (
        <article className="project-card">
            <div className="project-copy">
                <h4>{title}</h4>
                <p>{description}</p>

                <div className="project-meta">
                    <a href={link} target="_blank" rel="noopener noreferrer">{viewLabel}</a>
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

ProyectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    viewLabel: PropTypes.string.isRequired,
};

export default ProyectCard;