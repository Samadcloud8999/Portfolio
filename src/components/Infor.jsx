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
                            Navigating the <br /> digital landscape <br /> for success
                        </h1>
                        <p>
                            Our digital marketing agency helps businesses grow and succeed
                            online through SEO, PPC, social media, and content creation.
                        </p>
                        <button>Book a consultation</button>
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
                                borderRadius: '40px',
                                maxWidth: '280px',
                                marginLeft: '2em',
                            }}
                        />
                    </motion.div>
                </section>
            </main>
        </>
    );
};
