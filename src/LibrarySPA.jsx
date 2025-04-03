import React, { useState } from "react";
import BookList from "./components/BooksList";  
import { categories, books } from "./data/book"; 
import "./styles.css";  

export default function LibrarySPA() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <header className="header">
        <img src="/images/logo.png" alt="Library Logo" className="logo" /> {/* ✅ Fixed Path */}
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
          ? categories.map(category => <BookList key={category} books={books} selectedCategory={category} />) 
          : <BookList books={books} selectedCategory={selectedCategory} />}
      </div>

      {/* Fixed Footer */}
      <footer className="footer">
        <p>📚 Library SPA | All Rights Reserved © 2025</p>
      </footer>
    </div>
  );
}
