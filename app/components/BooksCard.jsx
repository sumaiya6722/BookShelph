// import React from 'react';

import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ book }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="relative w-full h-48 bg-stone-100">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
            className="object-cover rounded" /* 2. This forces the image to crop perfectly without stretching */
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="line-clamp-2">{book.description}</p>
          <div className="card-actions justify-end">
            <Link href={`/allBooks/${book.id}`}>
              <button className="btn btn-warning">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;