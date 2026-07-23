// import React from 'react';
'use client'
import { useState } from "react";
import BooksCard from "./BooksCard";


const SearchBooks = ({ books }) => {


  const [searchBooks, setSearchBooks] = useState('');

  const filteredBooks = books.filter((book) => {
    if (!searchBooks.trim()) {
      return false;
    } else {

      const titleMatch = book.title.toLowerCase().includes(searchBooks.toLowerCase());
      return titleMatch;
    }
  });



  return (
    <div className="max-w-7xl mx-auto px-6 py-6">

      <div className="max-w-2xl mx-auto mb-12">
        <label htmlFor="search" className="sr-only">
          Search Books
        </label>
        <div className="relative flex items-center">
          <input
            id="search"
            type="text"
            placeholder="Search by title or author..."
            value={searchBooks}
            onChange={(e) => setSearchBooks(e.target.value)}
            className="w-full pl-5 pr-12 py-3 bg-stone-50 
              border border-stone-200 rounded-xl 
              focus:outline-none focus:ring-2 
              focus:ring-amber-500/20 focus:border-amber-500 
              text-stone-800 placeholder-stone-400 
              transition shadow-sm"
          />
          <span className="absolute right-4 text-stone-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        {/* Helper match count text */}
        {searchBooks && (
          <p className="text-xs text-stone-500 mt-2 ml-1">
            Found {filteredBooks.length} {' '}
            {filteredBooks.length === 1 ? 'book' : 'books'} {' '}
            matching {searchBooks}
          </p>
        )}
      </div>






      {searchBooks.length > 0 ?
        (filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1
          md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {filteredBooks.map((book) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>
        ) : (<div className="text-center py-16 border-2 
          border-dashed border-stone-100 rounded-2xl 
          bg-stone-50/50"
        >
          <p className="text-stone-400 text-lg">
            No books found matching your search.
          </p>
          <button
            onClick={() => setSearchBooks('')}
            className="mt-3 text-sm text-amber-500 
              hover:text-amber-600 font-semibold transition"
          >
            Clear Search
          </button>
        </div>)) : ('')}

    </div>
  );
};

export default SearchBooks;