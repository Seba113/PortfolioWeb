import React from 'react';
import './about.css';

const About = () => {
    const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Express', 'C#', '.NET'];

    return (
        <section id="about" className="about">
            <div className="about-container">
                <p className="section-label">Sobre mí</p>
                <h3>Sebastián Fernández</h3>

                <div className="about-content">
                    <p>
                        Soy estudiante de desarrollo de software en la Universidad ORT de Montevideo, cursando
                        Analista en Tecnologías de la Información. Me apasiona construir productos web útiles,
                        visualmente claros y con buen rendimiento.
                    </p>
                    <p>
                        Actualmente trabajo con React, Vite, JavaScript y CSS, y estoy profundizando en backend con
                        Node.js y Express para convertirme en desarrollador Full Stack.
                    </p>
                    <p>
                        También tengo experiencia con C# y .NET, enfocándome en programación orientada a objetos y
                        arquitectura MVC. Me gusta aprender rápido, resolver problemas con lógica y mejorar la
                        experiencia del usuario en cada proyecto.
                    </p>
                </div>

                <div className="skills-list" aria-label="Tecnologías">
                    {skills.map((skill) => (
                        <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                </div>

                <strong className="contact-line">¡Estoy abierto a nuevos desafíos y oportunidades!</strong>
            </div>
        </section>
    );
};

export default About;