import { useEffect, useState } from 'react';
import Header from './components/header';
import MainSection from './components/MainSection';
import ProyectSection from './components/ProyectSection';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const getPreference = (key, defaultValue, validValues) => {
  const savedValue = window.localStorage.getItem(key);
  return validValues.includes(savedValue) ? savedValue : defaultValue;
};

function App() {
  const [language, setLanguage] = useState(() =>
    getPreference('portfolio-language', 'en', ['en', 'es'])
  );
  const [theme, setTheme] = useState(() =>
    getPreference('portfolio-theme', 'dark', ['dark', 'light'])
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-language', language);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [language, theme]);

  return (
    <>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
      />
      <MainSection language={language} />
      <ProyectSection language={language} />
      <About language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
