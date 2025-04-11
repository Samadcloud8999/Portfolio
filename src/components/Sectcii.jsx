import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
    { name: 'Фотошоп', level: 90 },
    { name: 'Иллюстратор', level: 85 },
    { name: 'Афтер Эффектс', level: 97 },
    { name: 'Скетч', level: 90 },
    { name: 'HTML 5', level: 90 },
    { name: 'CSS 3 Анимации', level: 85 },
    { name: 'Коммуникация', level: 97 },
    { name: 'Креативность', level: 90 },
];

export const Sectcii = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true     });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const skillVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: { duration: 1.5, ease: 'easeOut' },
        }),
    };

    return (
        <section className="skills-section" ref={ref} style={{marginTop: '5em', marginBottom: '5em',  borderRadius: '4em'}}>
            <div className="skills-wrapper" style={{marginBottom: '3em'}}>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-label">
                                <span>{skill.name.toUpperCase()}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial="hidden"
                                    animate={controls}
                                    custom={skill.level}
                                    variants={skillVariants}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

    
