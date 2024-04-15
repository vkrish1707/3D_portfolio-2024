import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


import React, { useState } from 'react';
import './BookSearch.css'; // Ensure you have a corresponding CSS file for styling

const BookSearch = ({ books }) => {
  const [filters, setFilters] = useState({
    author: '',
    title: '',
    country: '',
    language: '',
    year: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.trim().toLowerCase(),
    }));
  };

  const filteredBooks = books.filter((book) => {
    return (
      (filters.author ? book.author.toLowerCase().includes(filters.author) : true) &&
      (filters.title ? book.title.toLowerCase().includes(filters.title) : true) &&
      (filters.country ? book.country.toLowerCase().includes(filters.country) : true) &&
      (filters.language ? book.language.toLowerCase().includes(filters.language) : true) &&
      (filters.year ? book.year.toString().includes(filters.year) : true)
    );
  });

  return (
    <div className="book-search-container">
      <div className="search-inputs">
        <input
          data-testid="author"
          name="author"
          placeholder="Author"
          value={filters.author}
          onChange={handleFilterChange}
        />
        <input
          data-testid="title"
          name="title"
          placeholder="Title"
          value={filters.title}
          onChange={handleFilterChange}
        />
        <input
          data-testid="country"
          name="country"
          placeholder="Country"
          value={filters.country}
          onChange={handleFilterChange}
        />
        <input
          data-testid="language"
          name="language"
          placeholder="Language"
          value={filters.language}
          onChange={handleFilterChange}
        />
        <input
          data-testid="year"
          name="year"
          placeholder="Year"
          value={filters.year}
          onChange={handleFilterChange}
        />
      </div>
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} data-testid="book" className="book-entry">
            <div className="book-details">
              <div>Author: {book.author}</div>
              <div>Title: {book.title}</div>
              <div>Country: {book.country}</div>
              <div>Language: {book.language}</div>
              <div>Pages: {book.pages}</div>
              <div>Year: {book.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;