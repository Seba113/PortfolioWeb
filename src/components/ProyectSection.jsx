import React from 'react';
import ProyectCard from './ProyectCard';
import rick from '../assets/Img/rick.png';
import newage from '../assets/Img/newage.png';
import app from '../assets/Img/ionicapp.png';
import movieSeacrher from '../assets/Img/movieSeacrher.png';
import './ProyectSection.css';

const ProyectSection = () => {
    const projects = [
        {
            title: 'Landing page para empresa de landscaping',
            description: 'Diseño responsive y moderno para una empresa de servicios de jardín, con enfoque en claridad, servicios y contacto comercial.',
            link: 'https://newagelandscaping.azurewebsites.net/',
            imageSrc: newage,
            tech: 'HTML • CSS • Bootstrap • JS • Azure'
        },
        {
            title: 'Movie Searcher',
            description: 'Buscador de películas con filtros, consumo de API, manejo de estado complejo y experiencia responsive para pruebas técnicas.',
            link: 'https://seba113.github.io/Movie-Searcher-w-React/',
            imageSrc: movieSeacrher,
            tech: 'React • JavaScript • CSS • API REST'
        },
        {
            title: 'Rick & Morty Wiki',
            description: 'Mi primer proyecto con React consumiendo la API de Rick and Morty para mostrar personajes y detalles de cada uno.',
            link: 'https://seba113.github.io/1er-proyecto-api-con-React/',
            imageSrc: rick,
            tech: 'React • Vite • CSS • Bootstrap'
        },
        {
            title: 'App móvil para seguimiento de bebés',
            description: 'Aplicación móvil pensada para padres con control de eventos diarios relacionados con sueño, comidas y rutinas del bebé.',
            link: 'https://github.com/Seba113/AppMovilAndroid-CreadorDeEventos',
            imageSrc: app,
            tech: 'Ionic • JavaScript • Android Studio • CSS'
        }
    ];

    return (
        <section id="proyectos" className="proyectSection">
            <div className="projects-container">
                <div className="section-header">
                    <p className="section-label">Proyectos</p>
                    <h3>Mis proyectos destacados</h3>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProyectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imageSrc={project.imageSrc}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProyectSection;