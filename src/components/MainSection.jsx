import React from 'react';
import cv from '../assets/cv _sebastian_fernandez.pdf'
import './MainSection.css';
import {InfiniteScroll} from './Stack';

const MainSection = () => {
    return (
        <section className='mainSection'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center'>
                    <h1>Software Developer</h1>
                    <h2>Sebastián Fernández</h2>
                    <p className='mt-4'>Full Stack Student</p>
                    <p>ORT University → Montevideo, Uy </p>
                </div>
                <div className='redes mt-3'>
                    <nav className='mt-4'>
                        <a href="https://www.linkedin.com/in/sebastianfernandezti/" className='p-3' target='_blank'>LinkedIn →</a>
                        <a href="./src/assets/cv _sebastian_fernandez.pdf" download={cv} className='p-3'>CV ↓</a>
                        <a href="https://github.com/Seba113" className='p-3'target='_blank'>GitHub →</a>
                    </nav>
                </div>
                <InfiniteScroll />
            </div>
        </section>
    )
}

export default MainSection