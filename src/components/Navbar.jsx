import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="#home" className={styles.logo}>
          Designer Logo
        </a>
      </div>
      <div className={styles.center}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#catalog" className={styles.navLink}>
          Catalog
        </a>
        <a href="#ourshop" className={styles.navLink}>
          Our Shop
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </div>
      <div className={styles.right}>
        <span className={styles.phone}>Call: +251913934091</span>
        <span className={styles.phone}>Call: +251912345678</span>
      </div>
    </nav>
  );
};

export default Navbar;

