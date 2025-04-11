import React from 'react'
import { motion } from 'framer-motion'

export const Footur = () => {
  return (
    <>
      <footer className="footer">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="footer-grid"
        >
          <div className="footer-section">
            <h2 className="footer-title">Мое Портфолио</h2>
            <p className="footer-text">
              Веб-разработка и дизайн для ваших проектов
            </p>
          </div>
     
     <div className="footer-section">
            <h3 className="footer-subtitle">Навигация</h3>
            <ul className="footer-links">
              <li><a href="#home">Главная</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Связаться со мной</h3>
            <a href="mailto:your@email.com" className="footer-link">
              samandartolybaev2@gmail.com
            </a>
            <div className="footer-button-container">
              <button className="footer-button">Написать мне</button>
            </div>
          </div>

          <div className="footer-section">
            <p className="footer-text">
              Создаю современные веб-решения для вашего бизнеса
            </p>
            <button className="footer-button">Скачать резюме</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="footer-bottom"
        >
          © {new Date().getFullYear()} Все права защищены
        </motion.div>
      </footer>
    </>
  )
}
