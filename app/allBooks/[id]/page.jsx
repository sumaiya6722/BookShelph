// import React from 'react';
import Image from 'next/image';
import books from '../../../public/data.json';
import BorrowButton from '../../components/BorrowButton';
// import { toast } from 'react-toastify';

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;
  const filteredBook = books.find((book) => book.id === id);

  const { title, author, description, available_quantity, image_url } = filteredBook;


  return (
    <div className='my-5'>
      <div className="card lg:card-side grid grid-cols-2 bg-base-100 shadow-md">
        <div>
          <Image className='rounded-md' src={image_url} alt='title' height={500} width={600}></Image>
        </div>
        <div className="card-body space-y-3">
          <span className="badge badge-xs badge-warning text-sm">{available_quantity} copies left!</span>
          <h2 className="font-bold text-4xl">{title}</h2>
          <h2 className='text-2xl italic text-stone-800'>{author}</h2>
          <p className='opacity-60 '>{description}</p>

          <div className="card-actions justify-end">
            <BorrowButton></BorrowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;