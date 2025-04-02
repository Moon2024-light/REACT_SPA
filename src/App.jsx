import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BookList from "./components/BooksList";
import Footer from "./components/Footer";
import { books, categories } from "./data/book"; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Action");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]); 

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchedBooks([]); 
      return;
    }

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        );
        const data = await response.json();
        
        // Extract book data
        const apiBooks = data.items?.map((item) => ({
          title: item.volumeInfo.title,
          image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
        })) || [];

        setSearchedBooks(apiBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header 
        categories={categories} 
        setSelectedCategory={setSelectedCategory} 
        setSearchQuery={setSearchQuery} 
      />

      {/* Pass both local books & searched books */}
      <BookList 
        books={books} 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
        searchedBooks={searchedBooks} 
      />

      <Footer />
    </div>
  );
}

export default App;
