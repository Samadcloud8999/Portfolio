import React from 'react';
import { motion } from 'framer-motion';
import sos from '../assets/soskaaa.png';

const logos = ['brand1', 'brand2', 'brand3']; // Replace with actual brand names

export const Infor = () => {
    return (
        <>
            <main>
                <section className="content">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                              <h1>
                            Привет! Я Samandar <br />Frontend-разработчик <br /> с творческим подходом
                        </h1>
                        <p>
                            Создаю современные веб-приложения используя React, JavaScript и 
                            современные веб-технологии. Мой подход сочетает технические навыки 
                            с креативным мышлением для создания удобных пользовательских интерфейсов.
                        </p>
                        <button>Связаться со мной</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src={sos}
                            alt="Megaphone"
                            style={{
                                width: '100%',
                                borderRadius: '200px',
                                maxWidth: '280px',
                                marginLeft: '0.9em',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '4px solid white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            zIndex: '1',
            background: 'linear-gradient(145deg,rgb(37, 36, 36),rgb(255, 255, 255))',
            padding: '8px',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 15px 40px rgba(59, 130, 246, 0.2)',
            },
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                border: '2px solid #3b82f6',
                borderRadius: '200px',
                zIndex: '-1',
                animation: 'pulse 2s infinite',
            }
                            }}
                        />
                    </motion.div>
                </section>
            </main>
        </>
    );
};
