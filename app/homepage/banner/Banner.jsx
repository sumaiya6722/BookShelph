import Image from 'next/image';
import LatestBooks from '../latestBooks/LatestBooks'
import banner from '../../../public/assets/49c4fe31ee4efaf34f4261f842c95fdc.webp';
import Link from 'next/link';

const Banner = () => {
  return (

    <div>
      <LatestBooks></LatestBooks>
      <div className="w-full bg-[#fdfbf7] border border-stone-100 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-95 items-center">

        {/* Left side: Text Content */}
        <div className="p-8 sm:p-12 md:col-span-7 flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 tracking-tight leading-tight">
            Find Your <br />Next<span className="text-amber-500"> Read</span>
          </h1>
          <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed max-w-md">
            Your digital reading sanctuary. Explore thousands of cataloged titles, discover hidden gems, and organize your personal reading shelves all in one place.
          </p>
          <Link href={'/allBooks'}>
            <button className="mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm rounded-md shadow-sm transition duration-150">
              Browse Now....
            </button>
          </Link>
        </div>

        {/* Right side: Your illustration perfectly placed without weird cropping */}
        <div className="relative w-full h-full min-h-75 md:col-span-5 bg-amber-50/30">
          <Image
            src={banner}
            alt="reading illustration"
            fill
            priority
            className="object-contain object-center p-4 mr-4"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;