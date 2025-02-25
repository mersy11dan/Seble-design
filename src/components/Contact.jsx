import React from 'react';
import styles from '../styles/contact.module.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to collaborate, feel free to reach out!</p>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <h3>Instagram</h3>
          <p>@designer_insta</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Telegram</h3>
          <p>@designer_telegram</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Phone</h3>
          <p>+251913934091</p>
          <p>+251924953062</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;