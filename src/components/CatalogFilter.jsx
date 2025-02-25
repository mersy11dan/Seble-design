import React from 'react';
import styles from '../styles/catalog.module.css';

const CatalogFilter = ({ category, setCategory }) => {
  const categories = ['men', 'women', 'children', 'special occasions', 'jewelry'];

  return (
    <div className={styles.filter}>
      {categories.map(cat => (
        <label key={cat} className={styles.radioLabel}>
          <input 
            type="radio" 
            name="catalogCategory" 
            value={cat}
            checked={category === cat}
            onChange={() => setCategory(cat)}
          />
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default CatalogFilter;
