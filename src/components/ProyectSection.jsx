import PropTypes from 'prop-types';
import ProyectCard from './ProyectCard';
import rick from '../assets/Img/rick.png';
import newage from '../assets/Img/newage.png';
import app from '../assets/Img/ionicapp.png';
import movieSeacrher from '../assets/Img/movieSeacrher.png';
import './ProyectSection.css';

const ProyectSection = ({ language }) => {
    const content = language === 'en'
        ? {
            section: 'Projects',
            heading: 'Featured projects',
            projects: [
                {
                    title: 'Landing page for a landscaping company',
                    description: 'A modern, responsive website for a landscaping services company, focused on clear information, services, and customer inquiries.',
                },
                {
                    title: 'Movie Searcher',
                    description: 'A movie search app with filters, API integration, complex state management, and a responsive experience built for technical challenges.',
                },
                {
                    title: 'Rick & Morty Wiki',
                    description: 'My first React project, using the Rick and Morty API to display characters and their details.',
                },
                {
                    title: 'Baby-tracking mobile app',
                    description: 'A mobile app for parents to track daily events related to sleep, meals, and their baby’s routines.',
                },
            ],
            view: 'View project',
        }
        : {
            section: 'Proyectos',
            heading: 'Mis proyectos destacados',
            projects: [
                {
                    title: 'Landing page para empresa de landscaping',
                    description: 'Diseño responsive y moderno para una empresa de servicios de jardín, con enfoque en claridad, servicios y contacto comercial.',
                },
                {
                    title: 'Movie Searcher',
                    description: 'Buscador de películas con filtros, consumo de API, manejo de estado complejo y experiencia responsive para pruebas técnicas.',
                },
                {
                    title: 'Rick & Morty Wiki',
                    description: 'Mi primer proyecto con React consumiendo la API de Rick and Morty para mostrar personajes y detalles de cada uno.',
                },
                {
                    title: 'App móvil para seguimiento de bebés',
                    description: 'Aplicación móvil pensada para padres con control de eventos diarios relacionados con sueño, comidas y rutinas del bebé.',
                },
            ],
            view: 'Ver proyecto',
        };

    const projects = [
        {
            link: 'https://newagelandscaping.azurewebsites.net/',
            imageSrc: newage,
            tech: 'HTML • CSS • Bootstrap • JS • Azure'
        },
        {
            link: 'https://seba113.github.io/Movie-Searcher-w-React/',
            imageSrc: movieSeacrher,
            tech: 'React • JavaScript • CSS • API REST'
        },
        {
            link: 'https://seba113.github.io/1er-proyecto-api-con-React/',
            imageSrc: rick,
            tech: 'React • Vite • CSS • Bootstrap'
        },
        {
            link: 'https://github.com/Seba113/AppMovilAndroid-CreadorDeEventos',
            imageSrc: app,
            tech: 'Ionic • JavaScript • Android Studio • CSS'
        }
    ];
    const translatedProjects = projects.map((project, index) => ({
        ...project,
        ...content.projects[index],
    }));

    return (
        <section id="proyectos" className="proyectSection">
            <div className="projects-container">
                <div className="section-header">
                    <p className="section-label">{content.section}</p>
                    <h3>{content.heading}</h3>
                </div>

                <div className="projects-grid">
                    {translatedProjects.map((project, index) => (
                        <ProyectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imageSrc={project.imageSrc}
                            tech={project.tech}
                            viewLabel={content.view}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

ProyectSection.propTypes = {
    language: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default ProyectSection;