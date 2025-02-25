import React from 'react';
import styles from '../styles/catalog.module.css';
import { motion } from 'framer-motion';

// === Import Images for Women Category ===
import womenCloth1 from '../assets/womenCloth1.png';
import womenCloth2 from '../assets/womenCloth2.png';
import womenCloth3 from '../assets/womenCloth3.png';
import womenCloth4 from '../assets/womenCloth4.png';
import womenCloth5 from '../assets/womenCloth5.png';
import womenCloth6 from '../assets/womenCloth6.png';
import womenCloth7 from '../assets/womenCloth7.png';
import womenCloth8 from '../assets/womenCloth8.png';
import womenCloth9 from '../assets/womenCloth9.png';
import womenCloth10 from '../assets/womenCloth10.png';
import womenCloth11 from '../assets/womenCloth11.png';
import womenCloth12 from '../assets/womenCloth12.png';

// === Import Images for Men Category ===
import menCloth1 from '../assets/menCloth1.png';
import menCloth2 from '../assets/menCloth2.png';
import menCloth3 from '../assets/menCloth3.png';
import menCloth4 from '../assets/menCloth4.png';
import menCloth5 from '../assets/menCloth5.png';
import menCloth6 from '../assets/menCloth6.png';
import menCloth7 from '../assets/menCloth7.png';
import menCloth8 from '../assets/menCloth8.png';
import menCloth9 from '../assets/menCloth9.png';
import menCloth10 from '../assets/menCloth10.png';
import menCloth11 from '../assets/menCloth11.png';
import menCloth12 from '../assets/menCloth12.png';

// === Import Images for Children Category ===
import childrenCloth1 from '../assets/childrenCloth1.png';
import childrenCloth2 from '../assets/childrenCloth2.png';
import childrenCloth3 from '../assets/childrenCloth3.png';
import childrenCloth4 from '../assets/childrenCloth4.png';
import childrenCloth5 from '../assets/childrenCloth5.png';
import childrenCloth6 from '../assets/childrenCloth6.png';
import childrenCloth7 from '../assets/childrenCloth7.png';
import childrenCloth8 from '../assets/childrenCloth8.png';
import childrenCloth9 from '../assets/childrenCloth9.png';
import childrenCloth10 from '../assets/childrenCloth10.png';
import childrenCloth11 from '../assets/childrenCloth11.png';
import childrenCloth12 from '../assets/childrenCloth12.png';

// === Import Images for Special Occasions Category ===
import specialOccasionCloth1 from '../assets/specialOccasionCloth1.png';
import specialOccasionCloth2 from '../assets/specialOccasionCloth2.png';
import specialOccasionCloth3 from '../assets/specialOccasionCloth3.png';
import specialOccasionCloth4 from '../assets/specialOccasionCloth4.png';
import specialOccasionCloth5 from '../assets/specialOccasionCloth5.png';
import specialOccasionCloth6 from '../assets/specialOccasionCloth6.png';
import specialOccasionCloth7 from '../assets/specialOccasionCloth7.png';
import specialOccasionCloth8 from '../assets/specialOccasionCloth8.png';
import specialOccasionCloth9 from '../assets/specialOccasionCloth9.png';
import specialOccasionCloth10 from '../assets/specialOccasionCloth10.png';
import specialOccasionCloth11 from '../assets/specialOccasionCloth11.png';
import specialOccasionCloth12 from '../assets/specialOccasionCloth12.png';

// === Import Images for Jewelry Category ===
import jewelry1 from '../assets/culturalHomeDecorCloth1.png';
import jewelry2 from '../assets/culturalHomeDecorCloth2.png';
import jewelry3 from '../assets/culturalHomeDecorCloth3.png';
import jewelry4 from '../assets/culturalHomeDecorCloth4.png';
import jewelry5 from '../assets/culturalHomeDecorCloth5.png';
import jewelry6 from '../assets/culturalHomeDecorCloth6.png';
import jewelry7 from '../assets/culturalHomeDecorCloth7.png';
import jewelry8 from '../assets/culturalHomeDecorCloth8.png';
import jewelry9 from '../assets/culturalHomeDecorCloth9.png';
import jewelry10 from '../assets/culturalHomeDecorCloth10.png';
import jewelry11 from '../assets/culturalHomeDecorCloth11.png';
import jewelry12 from '../assets/culturalHomeDecorCloth12.png';

// === Mapping Object for All Images ===
const images = {
  // Women
  'womenCloth1.png': womenCloth1,
  'womenCloth2.png': womenCloth2,
  'womenCloth3.png': womenCloth3,
  'womenCloth4.png': womenCloth4,
  'womenCloth5.png': womenCloth5,
  'womenCloth6.png': womenCloth6,
  'womenCloth7.png': womenCloth7,
  'womenCloth8.png': womenCloth8,
  'womenCloth9.png': womenCloth9,
  'womenCloth10.png': womenCloth10,
  'womenCloth11.png': womenCloth11,
  'womenCloth12.png': womenCloth12,
  // Men
  'menCloth1.png': menCloth1,
  'menCloth2.png': menCloth2,
  'menCloth3.png': menCloth3,
  'menCloth4.png': menCloth4,
  'menCloth5.png': menCloth5,
  'menCloth6.png': menCloth6,
  'menCloth7.png': menCloth7,
  'menCloth8.png': menCloth8,
  'menCloth9.png': menCloth9,
  'menCloth10.png': menCloth10,
  'menCloth11.png': menCloth11,
  'menCloth12.png': menCloth12,
  // Children
  'childrenCloth1.png': childrenCloth1,
  'childrenCloth2.png': childrenCloth2,
  'childrenCloth3.png': childrenCloth3,
  'childrenCloth4.png': childrenCloth4,
  'childrenCloth5.png': childrenCloth5,
  'childrenCloth6.png': childrenCloth6,
  'childrenCloth7.png': childrenCloth7,
  'childrenCloth8.png': childrenCloth8,
  'childrenCloth9.png': childrenCloth9,
  'childrenCloth10.png': childrenCloth10,
  'childrenCloth11.png': childrenCloth11,
  'childrenCloth12.png': childrenCloth12,
  // Special Occasions
  'specialOccasionCloth1.png': specialOccasionCloth1,
  'specialOccasionCloth2.png': specialOccasionCloth2,
  'specialOccasionCloth3.png': specialOccasionCloth3,
  'specialOccasionCloth4.png': specialOccasionCloth4,
  'specialOccasionCloth5.png': specialOccasionCloth5,
  'specialOccasionCloth6.png': specialOccasionCloth6,
  'specialOccasionCloth7.png': specialOccasionCloth7,
  'specialOccasionCloth8.png': specialOccasionCloth8,
  'specialOccasionCloth9.png': specialOccasionCloth9,
  'specialOccasionCloth10.png': specialOccasionCloth10,
  'specialOccasionCloth11.png': specialOccasionCloth11,
  'specialOccasionCloth12.png': specialOccasionCloth12,
  // Jewelry
  'jewelry1.png': jewelry1,
  'jewelry2.png': jewelry2,
  'jewelry3.png': jewelry3,
  'jewelry4.png': jewelry4,
  'jewelry5.png': jewelry5,
  'jewelry6.png': jewelry6,
  'jewelry7.png': jewelry7,
  'jewelry8.png': jewelry8,
  'jewelry9.png': jewelry9,
  'jewelry10.png': jewelry10,
  'jewelry11.png': jewelry11,
  'jewelry12.png': jewelry12,
};

const ProductCard = ({ item }) => {
  // Strip any leading '/assets/' from the image key if present
  let imageKey = item.img;
  if (imageKey.startsWith('/assets/')) {
    imageKey = imageKey.replace('/assets/', '');
  }
  
  const imageSrc = images[imageKey] || '';

  return (
    <motion.div 
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={item.name} className={styles.cardImage} />
      ) : (
        <div className={styles.missingImage}>
          Image not found: {item.img}
        </div>
      )}
      <h3 className={styles.cardTitle}>{item.name}</h3>
      <p className={styles.cardPrice}>{item.price}</p>
    </motion.div>
  );
};

export default ProductCard;

