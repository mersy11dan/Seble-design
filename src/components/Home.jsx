import React from 'react';
import styles from '../styles/home.module.css';
import { motion } from 'framer-motion';
// Import the image statically
import WomenCloth1 from '../assets/womenCloth1.png';

const Home = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to the Designer's World</h1>
      <p>
        Meet Seble and Selamawit, a visionary creating unique clothing pieces that blend art with fashion.
      </p>
      <div className={styles.latestDesign}>
        <h2>Latest Design</h2>
        {/* Use the imported image */}
        <img src={WomenCloth1} alt="Latest Design" />
      </div>
    </motion.div>
  );
};

export default Home;
