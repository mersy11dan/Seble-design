import React, { useState } from 'react';
import styles from '../styles/catalog.module.css';
import CatalogFilter from './CatalogFilter';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const Catalog = () => {
  const [category, setCategory] = useState("women");

  // Women Category – 12 products with individual prices
  const womenItems = [
    { id: "women-1", name: "Women Outfit 1", price: "$", img: `/assets/womenCloth1.png` },
    { id: "women-2", name: "Women Outfit 2", price: "$", img: `/assets/womenCloth2.png` },
    { id: "women-3", name: "Women Outfit 3", price: "$", img: `/assets/womenCloth3.png` },
    { id: "women-4", name: "Women Outfit 4", price: "$", img: `/assets/womenCloth4.png` },
    { id: "women-5", name: "Women Outfit 5", price: "$", img: `/assets/womenCloth5.png` },
    { id: "women-6", name: "Women Outfit 6", price: "$", img: `/assets/womenCloth6.png` },
    { id: "women-7", name: "Women Outfit 7", price: "$", img: `/assets/womenCloth7.png` },
    { id: "women-8", name: "Women Outfit 8", price: "$", img: `/assets/womenCloth8.png` },
    { id: "women-9", name: "Women Outfit 9", price: "$", img: `/assets/womenCloth9.png` },
    { id: "women-10", name: "Women Outfit 10", price: "$", img: `/assets/womenCloth10.png` },
    { id: "women-11", name: "Women Outfit 11", price: "$", img: `/assets/womenCloth11.png` },
    { id: "women-12", name: "Women Outfit 12", price: "$", img: `/assets/womenCloth12.png` },
  ];

  // Men Category – 12 products with individual prices
  const menItems = [
    { id: "men-1", name: "Men Outfit 1", price: "$", img: `/assets/menCloth1.png` },
    { id: "men-2", name: "Men Outfit 2", price: "$", img: `/assets/menCloth2.png` },
    { id: "men-3", name: "Men Outfit 3", price: "$", img: `/assets/menCloth3.png` },
    { id: "men-4", name: "Men Outfit 4", price: "$", img: `/assets/menCloth4.png` },
    { id: "men-5", name: "Men Outfit 5", price: "$", img: `/assets/menCloth5.png` },
    { id: "men-6", name: "Men Outfit 6", price: "$", img: `/assets/menCloth6.png` },
    { id: "men-7", name: "Men Outfit 7", price: "$", img: `/assets/menCloth7.png` },
    { id: "men-8", name: "Men Outfit 8", price: "$", img: `/assets/menCloth8.png` },
    { id: "men-9", name: "Men Outfit 9", price: "$", img: `/assets/menCloth9.png` },
    { id: "men-10", name: "Men Outfit 10", price: "$", img: `/assets/menCloth10.png` },
    { id: "men-11", name: "Men Outfit 11", price: "$", img: `/assets/menCloth11.png` },
    { id: "men-12", name: "Men Outfit 12", price: "$", img: `/assets/menCloth12.png` },
  ];

  // Children Category – 12 products with individual prices
  const childrenItems = [
    { id: "children-1", name: "Kids Outfit 1", price: "$", img: `/assets/childrenCloth1.png` },
    { id: "children-2", name: "Kids Outfit 2", price: "$", img: `/assets/childrenCloth2.png` },
    { id: "children-3", name: "Kids Outfit 3", price: "$", img: `/assets/childrenCloth3.png` },
    { id: "children-4", name: "Kids Outfit 4", price: "$", img: `/assets/childrenCloth4.png` },
    { id: "children-5", name: "Kids Outfit 5", price: "$", img: `/assets/childrenCloth5.png` },
    { id: "children-6", name: "Kids Outfit 6", price: "$", img: `/assets/childrenCloth6.png` },
    { id: "children-7", name: "Kids Outfit 7", price: "$", img: `/assets/childrenCloth7.png` },
    { id: "children-8", name: "Kids Outfit 8", price: "$", img: `/assets/childrenCloth8.png` },
    { id: "children-9", name: "Kids Outfit 9", price: "$", img: `/assets/childrenCloth9.png` },
    { id: "children-10", name: "Kids Outfit 10", price: "$", img: `/assets/childrenCloth10.png` },
    { id: "children-11", name: "Kids Outfit 11", price: "$", img: `/assets/childrenCloth11.png` },
    { id: "children-12", name: "Kids Outfit 12", price: "$", img: `/assets/childrenCloth12.png` },
  ];

  // Special Occasions Category – 12 products with individual prices
  const specialOccasionItems = [
    { id: "special-1", name: "Special Occasion 1", price: "$", img: `/assets/specialOccasionCloth1.png` },
    { id: "special-2", name: "Special Occasion 2", price: "$", img: `/assets/specialOccasionCloth2.png` },
    { id: "special-3", name: "Special Occasion 3", price: "$", img: `/assets/specialOccasionCloth3.png` },
    { id: "special-4", name: "Special Occasion 4", price: "$", img: `/assets/specialOccasionCloth4.png` },
    { id: "special-5", name: "Special Occasion 5", price: "$", img: `/assets/specialOccasionCloth5.png` },
    { id: "special-6", name: "Special Occasion 6", price: "$", img: `/assets/specialOccasionCloth6.png` },
    { id: "special-7", name: "Special Occasion 7", price: "$", img: `/assets/specialOccasionCloth7.png` },
    { id: "special-8", name: "Special Occasion 8", price: "$", img: `/assets/specialOccasionCloth8.png` },
    { id: "special-9", name: "Special Occasion 9", price: "$", img: `/assets/specialOccasionCloth9.png` },
    { id: "special-10", name: "Special Occasion 10", price: "$", img: `/assets/specialOccasionCloth10.png` },
    { id: "special-11", name: "Special Occasion 11", price: "$", img: `/assets/specialOccasionCloth11.png` },
    { id: "special-12", name: "Special Occasion 12", price: "$", img: `/assets/specialOccasionCloth12.png` },
  ];

  // Jewelry Category – 12 products with individual prices
  const jewelryItems = [
    { id: 'jewelry-1', name: 'Jewelry 1', price: '$', img: `/assets/jewelry1.png` },
    { id: 'jewelry-2', name: 'Jewelry 2', price: '$', img: `/assets/jewelry2.png` },
    { id: 'jewelry-3', name: 'Jewelry 3', price: '$', img: `/assets/jewelry3.png` },
    { id: 'jewelry-4', name: 'Jewelry 4', price: '$', img: `/assets/jewelry4.png` },
    { id: 'jewelry-5', name: 'Jewelry 5', price: '$', img: `/assets/jewelry5.png` },
    { id: 'jewelry-6', name: 'Jewelry 6', price: '$', img: `/assets/jewelry6.png` },
    { id: 'jewelry-7', name: 'Jewelry 7', price: '$', img: `/assets/jewelry7.png` },
    { id: 'jewelry-8', name: 'Jewelry 8', price: '$', img: `/assets/jewelry8.png` },
    { id: 'jewelry-9', name: 'Jewelry 9', price: '$', img: `/assets/jewelry9.png` },
    { id: 'jewelry-10', name: 'Jewelry 10', price: '$', img: `/assets/jewelry10.png` },
    { id: 'jewelry-11', name: 'Jewelry 11', price: '$', img: `/assets/jewelry11.png` },
    { id: 'jewelry-12', name: 'Jewelry 12', price: '$', img: `/assets/jewelry12.png` },
  ];

  const categories = {
    women: womenItems,
    men: menItems,
    children: childrenItems,
    'special occasions': specialOccasionItems,
    jewelry: jewelryItems
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Catalog</h1>
      <p>
        Discover our exclusive collection that brings style and comfort together. Shop your favorite design now!
      </p>
      <CatalogFilter category={category} setCategory={setCategory} />
      <div className={styles.grid}>
        {categories[category].map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Catalog;
