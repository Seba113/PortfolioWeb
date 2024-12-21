import React from 'react';
import ProyectCard from './ProyectCard';
import rick from '../assets/Img/rick.png'
import newage from '../assets/Img/newage.png'
import app from '../assets/Img/ionicapp.png'
import movieSeacrher from "../assets/Img/movieSeacrher.png"
import './ProyectSection.css';

const ProyectSection = () => {

    const projects = [
        {
            title: 'Web App responsive para empresa de Landscaping',
            description: 'Web app para cliente con empresa dedicada al Landscaping detallando sus servicios, contacto, y descripcion de la empresa.',
            link: 'https://newagelandscaping.azurewebsites.net/',
            imageSrc: newage,
            tech: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT, AZZURE'

        },
        {
            title: 'Movie Searcher',
            description: 'Buscador de peliculas en tiempo real. Uso de Hooks: useState, useEffect, useMemo & customHooks. Fetching de datos, callbacks, debounce y una web responsive, hacen de esta prueba técnica una simple, pero efectiva.',
            link: 'https://seba113.github.io/Movie-Searcher-w-React/',
            imageSrc: movieSeacrher,
            tech: 'REACT, JAVASCRIPT, CSS, REST API'
        },
        {
            title: 'Rick & Morty wiki',
            description: 'Este fue mi primer proyecto con React consumiendo la API de Rick y Morty para crear una wiki de personajes y mostrar su información.',
            link: 'https://seba113.github.io/1er-proyecto-api-con-React/',
            imageSrc: rick,
            tech: 'REACT, JSX(JavaScript Syntax eXtension),VITE, CSS, BOOTSTRAP'
        },
        {
            title: 'App Mobile para Android con IONIC + JS',
            description: 'App pensada para recientes padres, que ofrece un servicio de creacion de eventos del dia a dia relacionados a su bebé y asi poder trackear mejor los eventos, comidas, horas de sueño entre otras cosas. App desarrollada con IONIC + JavaScript, consumiendo APIs y usando LocalStorage.',
            link: 'https://github.com/Seba113/AppMovilAndroid-CreadorDeEventos',
            imageSrc: app,
            tech: 'HTML, IONIC, JAVASCRIPT, ANDROID STUDIO, CSS'

        }  
    ]

    return (
        <section id='proyectos' className='proyectSection'>
            <div className='container'>
                <div className='text-center'>
                    <small><p className='span mb-1'>Proyectos</p></small>
                    <h3 className='mb-4'>Mis proyectos destacados</h3>
                </div>
                <div className= 'row'>

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
    )
}

export default ProyectSection;