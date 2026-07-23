
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestBooks = () => {
  const newBooks = [
    {
      "id": 1,
      "title": "Special Discount on Memberships: Get 20% off Premium Shelf access this week!"
    },
    {
      "id": 2,
      "title": "Flash Sale: All Technology and Science books are buy one get one free!"
    },
    {
      "id": 3,
      "title": "Community Notice: Join our weekend virtual book club discussion on 'Echoes of the Forgotten Valley'."
    }
  ]
  return (
    <div className='mb-4'>

      <div className='flex gap-2'>
        <button className="btn bg-amber-500">New Arrival!</button>
        <Marquee pauseOnHover className='italic'>
          {newBooks.map((n) => <span className='ml-5' key={n.id}>{n.title}</span>)}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestBooks;