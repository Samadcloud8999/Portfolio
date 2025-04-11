import React from 'react'
import { motion } from "framer-motion";

export const Scils = () => {
    const skills = [
        {
          icon: "fa-brands fa-css3-alt",
          title: "CSS",
          desc: "Создание адаптивных и красивых интерфейсов с анимациями и сетками.",
        },
        {
          icon: "fa-brands fa-html5",
          title: "HTML",
          desc: "Семантическая разметка и структура веб-страниц.",
        },
        {
          icon: "fa-brands fa-js",
          title: "JavaScript",
          desc: "Динамическая логика, интерактивность и работа с API.",
        },
        {
          icon: "fa-brands fa-react",
          title: "React",
          desc: "Создание компонентов, управление состоянием и маршрутизация.",
        },
        {
          icon: "fa-brands fa-git-alt",
          title: "Git",
          desc: "Контроль версий, ветвление и командная работа.",
        },
        {
          icon: "fa-solid fa-paper-plane",
          title: "Telegram",
          desc: "Интеграция ботов, уведомлений и общения.",
        },
      ];
  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
     <div className="container">
      <h1>Мои навыки</h1>
      <motion.div
        className="grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div className="card" key={index} variants={item}>
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  )
}
