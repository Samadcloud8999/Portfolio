import React from 'react';
import ServiceCard from './ServiceCard'; // Corrected the import path
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'; // Removed FaWind as it's not a valid icon
import { SiTailwindcss } from 'react-icons/si'; // Added Tailwind CSS icon from react-icons

export const Artikl = () => {
    const services = [
        { icon: <FaHtml5 />, title: 'HTML5', description: 'HyperText Markup Language' },
        { icon: <FaCss3Alt />, title: 'CSS3', description: 'Cascading Style Sheets' },
        { icon: <FaJs />, title: 'JavaScript', description: 'Dynamic client-side scripting' },
        { icon: <FaReact />, title: 'React', description: 'Modern JS library' },
        { icon: <SiTailwindcss />, title: 'Tailwind', description: 'Utility-first CSS framework' }, // Corrected Tailwind icon
        { icon: <FaBootstrap />, title: 'Bootstrap', description: 'Popular UI toolkit' },
    ];

    return (
        <div className="app-container">
            <p className="subtitle">Features Services</p>
            <h1 className="title">A wide range of waste disposal services</h1>
            <div className="grid">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};
