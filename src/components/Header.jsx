import React from "react";
import logo from "/images/logo.png";
import styles from "./Header.module.css";

const Header = ({ categories, setSelectedCategory, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      {/* Logo and Title */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Library Logo" className={styles.logo} />
        <h1 className={styles.title}>Library SPA</h1>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        className={styles.searchBar} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      {/* Category Buttons */}
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={styles.btn}
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
