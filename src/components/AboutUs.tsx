import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-10 sm:py-16 bg-[#fff1ed] border-y border-[#e5beb3]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
          <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#271813] uppercase tracking-tight">
            ABOUT <span className="text-[#ab2f00]">US</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#ab2f00] mt-2 sm:mt-3 rounded-full"></div>
        </div>

        {/* 2x2 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Vision */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-[#ab2f00]">
              <span className="material-symbols-outlined text-xl sm:text-2xl">visibility</span>
              <h3 className="font-extrabold text-base sm:text-xl text-[#271813] uppercase">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Our Vision is to provide quality products and timely service. We will strive to become market leaders in the distribution of electrical engineering products in the country and co-exist with our Customers in harmony.
            </p>
          </div>

          {/* Rate Contract */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-[#ab2f00]">
              <span className="material-symbols-outlined text-xl sm:text-2xl">contract</span>
              <h3 className="font-extrabold text-base sm:text-xl text-[#271813] uppercase">Rate Contract</h3>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              For your and our mutual benefit we can enter into rate contract so that you can get same price over a period of time.
            </p>
          </div>

          {/* Delivery */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-[#ab2f00]">
              <span className="material-symbols-outlined text-xl sm:text-2xl">local_shipping</span>
              <h3 className="font-extrabold text-base sm:text-xl text-[#271813] uppercase">On Time Delivery</h3>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              With our own fleet of vehicles, we assure prompt and timely delivery to our esteemed customers, setting the best standards in logistic.
            </p>
          </div>

          {/* Support */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-[#ab2f00]">
              <span className="material-symbols-outlined text-xl sm:text-2xl">support_agent</span>
              <h3 className="font-extrabold text-base sm:text-xl text-[#271813] uppercase">Pre & Post Sales Support</h3>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              With our dedicated team we assure you of best pre and post sales support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
