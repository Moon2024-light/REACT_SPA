import React from "react";

const BookList = ({ books, selectedCategory, searchQuery, searchedBooks }) => {

  const localBooks = books[selectedCategory] || [];
  const displayedBooks = searchQuery ? searchedBooks : localBooks;

  return (
    <div className="book-list p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Books`}
      </h2>

      {/* Book Grid */}
      <div className="book-section">
        <div className="book-container">
          {displayedBooks.length > 0 ? (
            displayedBooks.map((book, index) => (
              <div key={index} className="book-card">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold text-white">{book.title}</h3>
              </div>
            ))
          ) : (
            <p className="text-white">No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
