import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Foorm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.section
    className="contact-wrapper"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    style={{marginTop: '5em', marginBottom: '5em'}}
  >
    <motion.h2
      className="contact-title"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Могу я чем-нибудь помочь?
    </motion.h2>

    <motion.p
      className="contact-subtitle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Пожалуйста, уделите несколько минут, чтобы рассказать мне о себе и своих целях в отношении здоровья, прежде чем мы начнём работать вместе:
    </motion.p>

    <motion.form
      className="contact-form"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <input type="text" placeholder="Enter your Name" required />
      <input type="email" placeholder="Enter a valid email address" required />
      <textarea placeholder="Ваше сообщение" rows="4" />
      <button type="submit">ОТПРАВИТЬ СООБЩЕНИЕ</button>
    </motion.form>
  </motion.section>
  );
};