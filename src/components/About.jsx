import PropTypes from 'prop-types';
import './about.css';

const About = ({ language }) => {
    const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js', 'Express', 'C#', '.NET'];
    const content = language === 'en'
        ? {
            section: 'About me',
            paragraphs: [
                'I am a software development student at ORT University in Montevideo, currently pursuing a degree in Information Technology. I am passionate about building useful web products that are clear and perform well.',
                'I currently work with React, Vite, JavaScript, and CSS, and I am deepening my backend skills with Node.js and Express to become a Full Stack Developer.',
                'I also have experience with C# and .NET, focusing on object-oriented programming and MVC architecture. I enjoy learning quickly, solving problems logically, and improving the user experience in every project.',
            ],
            technologies: 'Technologies',
            contact: 'I am open to new challenges and opportunities!',
        }
        : {
            section: 'Sobre mí',
            paragraphs: [
                'Soy estudiante de desarrollo de software en la Universidad ORT de Montevideo, cursando Analista en Tecnologías de la Información. Me apasiona construir productos web útiles, visualmente claros y con buen rendimiento.',
                'Actualmente trabajo con React, Vite, JavaScript y CSS, y estoy profundizando en backend con Node.js y Express para convertirme en desarrollador Full Stack.',
                'También tengo experiencia con C# y .NET, enfocándome en programación orientada a objetos y arquitectura MVC. Me gusta aprender rápido, resolver problemas con lógica y mejorar la experiencia del usuario en cada proyecto.',
            ],
            technologies: 'Tecnologías',
            contact: '¡Estoy abierto a nuevos desafíos y oportunidades!',
        };

    return (
        <section id="about" className="about">
            <div className="about-container">
                <p className="section-label">{content.section}</p>
                <h3>Sebastián Fernández</h3>

                <div className="about-content">
                    {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>

                <div className="skills-list" aria-label={content.technologies}>
                    {skills.map((skill) => (
                        <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                </div>

                <strong className="contact-line">{content.contact}</strong>
            </div>
        </section>
    );
};

About.propTypes = {
    language: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default About;