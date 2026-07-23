"use client";

import { toast } from 'react-toastify';

export default function BorrowButton() {
  const borrowBook = () => {
    toast.success('This book is ready for further process!');
  };

  return (
    <button onClick={borrowBook} className="btn btn-soft btn-warning text-lg">
      Borrow this book..
    </button>
  );
}