import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Avid Novel Reader",
      text: "The catalog system here is amazing! I've found rare biography books that were out of stock everywhere else.",
      rating: 5
    },
    {
      name: "Daniel Lee",
      role: "Software Engineer",
      text: "The web layout is extremely clean and fast. Searching for tech resources and bookmarks takes literally seconds.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Literature Student",
      text: "Highly recommended website for organizing bookshelves and keeping track of books you want to read next.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 my-10 bg-amber-50/40 border-t border-stone-100 rounded-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Community Voice</span>
          <h2 className="text-3xl font-extrabold text-stone-800 mt-2">What Our Readers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={14}
                      className={starIdx < rev.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"}
                    />
                  ))}
                </div>
                <p className="text-stone-600 text-sm italic leading-relaxed">{rev.text}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <h4 className="font-bold text-stone-800 text-sm">{rev.name}</h4>
                <p className="text-stone-400 text-xs">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}