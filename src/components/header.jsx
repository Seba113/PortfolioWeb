import PropTypes from 'prop-types';
import './Header.css';
import miImagen from '../assets/Img/yo.jpg';

const Header = ({ language, onLanguageChange, theme, onThemeChange }) => {
    const labels = language === 'en'
        ? { role: 'Full Stack Developer', nav: ['Home', 'Projects', 'About me', 'Contact'], navigation: 'Main navigation', language: 'Language', theme: 'Color theme', light: 'Switch to light theme', dark: 'Switch to dark theme' }
        : { role: 'Desarrollador Full Stack', nav: ['Inicio', 'Proyectos', 'Sobre mí', 'Contacto'], navigation: 'Navegación principal', language: 'Idioma', theme: 'Tema de color', light: 'Cambiar a tema claro', dark: 'Cambiar a tema oscuro' };

    return (
        <header className="site-header">
            <div className="header-inner">
                <a href="#home" className="brand">
                    <img src={miImagen} alt="Sebastián Fernández" />
                    <div className="brand-copy">
                        <span className="brand-name">Sebastián Fernández</span>
                        <span className="brand-role">{labels.role}</span>
                    </div>
                </a>

                <nav className="main-nav" aria-label={labels.navigation}>
                    <a href="#home">{labels.nav[0]}</a>
                    <a href="#proyectos">{labels.nav[1]}</a>
                    <a href="#about">{labels.nav[2]}</a>
                    <a href="#contacto">{labels.nav[3]}</a>
                </nav>

                <div className="display-controls">
                    <div className="control-group" role="group" aria-label={labels.language}>
                        <button type="button" className={language === 'en' ? 'control-option is-active' : 'control-option'} aria-pressed={language === 'en'} onClick={() => onLanguageChange('en')}>EN</button>
                        <button type="button" className={language === 'es' ? 'control-option is-active' : 'control-option'} aria-pressed={language === 'es'} onClick={() => onLanguageChange('es')}>ES</button>
                    </div>
                    <button
                        type="button"
                        className="theme-toggle"
                        aria-label={theme === 'dark' ? labels.light : labels.dark}
                        title={theme === 'dark' ? labels.light : labels.dark}
                        aria-pressed={theme === 'light'}
                        onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    language: PropTypes.oneOf(['en', 'es']).isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['dark', 'light']).isRequired,
    onThemeChange: PropTypes.func.isRequired,
};

export default Header;