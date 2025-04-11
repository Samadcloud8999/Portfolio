import React from 'react'
import { motion } from "framer-motion";
import gacha from '../assets/icons/gacha.svg'

export const Obut = () => {
  const faqItems = [
    {
      question: "Мой опыт в веб-разработке?",
      answer: "Активно занимаюсь веб-разработкой, специализируясь на создании пользовательских интерфейсов. Имею практический опыт работы с современными фреймворками и библиотеками, особенно с React.",
    },
    {
      question: "Какие проекты в моем портфолио?",
      answer: "В моем портфолио представлены различные проекты: от одностраничных приложений до полноценных веб-сервисов. Каждый проект демонстрирует мои навыки в создании удобных и современных интерфейсов.",
    },
    {
      question: "Как я подхожу к работе над проектами?",
      answer: "Я уделяю особое внимание деталям и качеству кода. Следую современным практикам разработки, использую компонентный подход и обеспечиваю адаптивность для всех устройств.",
    },
    {
      question: "Какие мои цели в разработке?",
      answer: "Моя цель - постоянно развиваться как специалист, изучать новые технологии и создавать качественные веб-приложения. Стремлюсь к работе над интересными проектами, где могу применить свои навыки и креативность.",
    },
  ];

  return (
    <>
      <motion.div
      className="faq-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.div
        className="faq-left"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <p className="faq-sub">
        Здесь собраны ответы на популярные вопросы о моем опыте и подходе к разработке. <span>Давайте познакомимся ближе</span>
        </p>

        <div className="faq-items">
          {faqItems.map((item, idx) => (
            <div key={idx} className="faq-item">
              <details>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="faq-right"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <img src={gacha} alt="Business meeting" />
      </motion.div>
    </motion.div>
    </>
  )
}
