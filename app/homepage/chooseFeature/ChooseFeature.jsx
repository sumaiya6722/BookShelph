import React from 'react';
import { BookOpen, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      title: "Extensive Library",
      desc: "Access thousands of curations ranging from timeless classics to modern bestsellers."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Trusted Reviews",
      desc: "Honest and detailed ratings from our active community of passionate readers."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Instant Access",
      desc: "Instantly check out, bookmark, or request digital copies directly from your dashboard."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Smart Recommendations",
      desc: "Discover personalized handpicked suggestions matched to your favorite genres."
    }
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Our Core Pillars</span>
        <h2 className="text-3xl font-extrabold text-stone-800 mt-2">Why Readers Love BookNest</h2>
        <p className="text-sm text-stone-500 mt-2">We focus on delivering the ultimate modern digital reading experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div key={idx} className="p-6 bg-white border border-stone-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-stone-800 mb-1">{item.title}</h3>
            <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}