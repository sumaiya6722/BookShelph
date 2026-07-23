import { notFound } from 'next/navigation';
import books from '../../../public/data.json';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBooks = () => {
  const featuredList = [...books].slice(0, 6);

  if (!featuredList || featuredList.length === 0) {
    return notFound();
  }

  return (
    <div className='my-10 pt-16 container mx-auto px-4'>
      <h3 className='font-semibold text-4xl mb-6'>Featured Books</h3>

      {/* Horizontal Scroll Wrapper */}
      <div className='flex gap-6 overflow-x-auto pb-6 scrollbar-thin scroll-smooth'>
        {featuredList.map((book) => (
          <div key={book.id} className='w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0'>
            <div className="card bg-base-100 shadow-md border border-stone-200 h-full flex flex-col justify-between">
              <div className="relative w-full h-56 bg-stone-100">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-t"
                />
              </div>

              <div className="card-body flex flex-col justify-between p-5">
                <div>
                  <h2 className="card-title text-xl font-bold line-clamp-1">{book.title}</h2>
                  <p className="line-clamp-2 text-sm text-stone-600 mt-2">{book.description}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/allBooks/${book.id}`}>
                    <button className="btn btn-warning">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;