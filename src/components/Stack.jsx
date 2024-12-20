import React, { useEffect, useState } from 'react';
import html from '../assets/Img/html.png'
import css from '../assets/Img/css.png'
import bootstrap from '../assets/Img/bootrstrap.png'
import reactIcon from '../assets/Img/react.png'
import js from '../assets/Img/js.png'
import nodejs from '../assets/Img/nodejs.png'
import sql from '../assets/Img/sql.png'
import c from '../assets/Img/c.png'
import git from '../assets/Img/git.png'
import github from '../assets/Img/github.png'
import next from '../assets/Img/next.png'
import tailwind from '../assets/Img/tailwind.png'
import postgre from '../assets/Img/postgre.png'
import './Stack.css';


export const InfiniteScroll = () => {
    const logos = [
        { src: html, alt: 'html' },
        { src: css, alt: 'css' },
        { src: bootstrap, alt: 'bootstrap' },
        { src: js, alt: 'js' },
        { src: reactIcon, alt: 'react' },
        { src: nodejs, alt: 'nodejs' },
        { src: c, alt: 'c#' },
        { src: git, alt: 'git' },
        { src: github, alt: 'github' },
        { src: sql, alt: 'sql' },
        { src: next, alt: 'next' },
        { src: tailwind, alt: 'tailwind' },
        { src: postgre, alt: 'postgre' },
      ];

      const [numCopies, setNumCopies] = useState(2);

      useEffect(() => {
        const calculateCopies = () => {
          const containerWidth = window.innerWidth;
          const singleSetWidth = logos.length * (64 + 25); // 64px por logo + 25px de margen
          const copiesNeeded = Math.ceil((containerWidth * 2) / singleSetWidth) + 1;
          setNumCopies(copiesNeeded);
        };
        calculateCopies();
        window.addEventListener('resize', calculateCopies);
        return () => window.removeEventListener('resize', calculateCopies);
    }, [logos.length]);

    return (
        <div className="logos-scroll-container">
          <div className="logos-track">
            {[...Array(numCopies)].map((_, copyIndex) => (
              <div key={`copy-${copyIndex}`} className="logos-group">
                {logos.map((logo, logoIndex) => (
                  <img
                    key={`logo-${copyIndex}-${logoIndex}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="tech-logo"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    };


