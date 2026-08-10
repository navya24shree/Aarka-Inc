import React from 'react';
import { REVIEWS } from '../data/products';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 bg-[#fff8f6] overflow-hidden relative group border-b border-[#e5beb3]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 mb-12 flex flex-col items-center text-center">
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#271813] uppercase tracking-tight">
          CUSTOMER <span className="text-[#ab2f00]">REVIEWS</span>
        </h2>
        <div className="w-24 h-1 bg-[#ab2f00] mt-3 rounded-full"></div>
      </div>

      <div className="animate-ticker-reviews flex gap-6 px-4 md:px-16">
        {/* First Set */}
        <div className="flex gap-6 shrink-0">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="w-[280px] sm:w-[360px] bg-white border border-[#e5beb3]/40 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[#ab2f00] text-sm fill-1"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-gray-700 font-medium italic text-sm leading-relaxed">
                {rev.text}
              </p>
              
            </div>
          ))}
        </div>

        {/* Duplicate Set for continuous infinite scroll */}
        <div className="flex gap-6 shrink-0">
          {REVIEWS.map((rev) => (
            <div
              key={`dup-${rev.id}`}
              className="w-[280px] sm:w-[360px] bg-white border border-[#e5beb3]/40 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[#ab2f00] text-sm fill-1"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-gray-700 font-medium italic text-sm leading-relaxed">
                {rev.text}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
