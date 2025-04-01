import React, { useState } from "react";
import BookList from "./components/BooksList";  
import logo from "./assets/images/logo.png";  
import { categories } from "./data/book"; 
import "./styles.css";  



export default function LibrarySPA() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <header className="header">
        <img src={logo} alt="Library Logo" className="logo" />
        <h1>Library SPA</h1>
      </header>

      {/*  Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")} className="btn">All Books</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} className="btn">
            {category}
          </button>
        ))}
      </div>

      {/* Scrollable Book Section */}
      <div className="book-section">
        {selectedCategory === "All" 
          ? categories.map(category => <BookList key={category} category={category} />) 
          : <BookList category={selectedCategory} />}
      </div>

        {/* Fixed Footer */}
      <footer className="footer">
        <p>📚 Library SPA | All Rights Reserved © 2025</p>
      </footer>
    </div>
  );
}
