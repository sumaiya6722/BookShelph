// import React from 'react';
'use client'
// import books from '../../public/data.json'
import { useEffect, useState } from 'react';
import BooksCard from '../components/BooksCard';
import SearchBooks from '../components/SearchBooks';






const AllBooksPage = () => {

  const [books, setBooks]= useState([]);
  const [chosenBooks, setChosenBooks] = useState('all');

  useEffect(()=>{
    const storedBooks = async()=>{
      const data = await fetch('/data.json').then(res=>res.json());
      setBooks(data);
    };
    storedBooks();
  },[])


  const filteredBooks = chosenBooks ==='all'? books : books.filter((c)=>c.category===chosenBooks);



  return (
    <div>
      <div>
        <SearchBooks books={books}></SearchBooks>
      </div>
      <div className="dropdown mb-5">
        <div tabIndex={0} role="button" className="btn m-1 text-gray-600">Select Your Favorite Category </div>
        <select value={chosenBooks} onChange={(e)=>setChosenBooks(e.target.value)} tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <option value='all'>All Category</option>
          <option value='Science'>Science</option>
          <option value='Tech'>Tech</option>
          <option value='Story'>Story</option>
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
        {filteredBooks.map(book => <BooksCard key={book.id} book={book}></BooksCard>)}
      </div>
    </div>
  );
};

export default AllBooksPage;