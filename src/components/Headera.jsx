import React, { useState } from 'react';

export const Headera = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className="header">
        <div className="logo">MyPortfolio</div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#projects">Проекты</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
        <div className="burger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </header>
    </>
  );
};
