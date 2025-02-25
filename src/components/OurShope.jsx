import React from 'react';
import styles from '../styles/ourshope.module.css';
import { motion } from 'framer-motion';

// Import Photos
import ourShopOne from '../assets/OurShopOne.jpg';
import ourShopTwo from '../assets/OurShopTwo.jpg';
import ourShopThree from '../assets/OurShopThree.jpg';
import ourShopFive from '../assets/OurShopFive.jpg';
import ourShopSix from '../assets/OurShopSix.jpg';
import ourShopSeven from '../assets/OurShopSeven.jpg';
import ourShopEight from '../assets/OurShopEight.jpg';
import ourShopNine from '../assets/OurShopNine.jpg';
import ourShopTen from '../assets/OurShopTen.jpg';
import ourShopEleven from '../assets/OurShopEleven.jpg';
import ourShopTwelve from '../assets/OurShopTwelve.jpg';

// Import Videos
import sOne from '../assets/SOne.mp4';
import sTwo from '../assets/STwo.mp4';
import sThree from '../assets/SThree.mp4';
import sFour from '../assets/SFour.mp4';

const OurShope = () => {
  // Create arrays for photos and videos
  const photos = [
    { id: 'photo1', src: ourShopOne },
    { id: 'photo2', src: ourShopTwo },
    { id: 'photo3', src: ourShopThree },
    { id: 'photo5', src: ourShopFive },
    { id: 'photo6', src: ourShopSix },
    { id: 'photo7', src: ourShopSeven },
    { id: 'photo8', src: ourShopEight },
    { id: 'photo9', src: ourShopNine },
    { id: 'photo10', src: ourShopTen },
    { id: 'photo11', src: ourShopEleven },
    { id: 'photo12', src: ourShopTwelve },
  ];

  const videos = [
    { id: 'video1', src: sOne },
    { id: 'video2', src: sTwo },
    { id: 'video3', src: sThree },
    { id: 'video4', src: sFour },
  ];

  return (
    <motion.div
      className={styles.container}
      id="ourshop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Our Shop</h1>
      <p>Take a peek behind the scenes at our designer's creative workspace!</p>
      <div className={styles.ourShopContainer}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.card}>
            <img src={photo.src} alt={photo.id} className={styles.media} />
          </div>
        ))}
        {videos.map(video => (
          <div key={video.id} className={styles.card}>
            <video controls className={styles.media}>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurShope;

