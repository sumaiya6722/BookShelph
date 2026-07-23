import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
      <div className="text-center max-w-md">
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
          </div>
        </div>

        {/* Big 404 */}
        <h1 className="text-7xl font-black text-amber-500 tracking-tight">404</h1>

        {/* Book Themed Messaging */}
        <h2 className="text-2xl font-bold text-stone-800 mt-4">This chapter is missing!</h2>
        <p className="text-stone-500 mt-2 text-sm leading-relaxed">
          The page you are looking for might have been misplaced, checked out permanently, or never written in our library catalog.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md shadow-sm transition duration-150 text-sm text-center"
          >
            Return to Homepage
          </Link>
          <Link
            href="/all-books"
            className="w-full sm:w-auto px-6 py-2.5 border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium rounded-md transition duration-150 text-sm text-center"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    </div>
  );
}