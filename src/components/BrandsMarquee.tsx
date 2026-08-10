import React from 'react';

const BRAND_LOGOS = [
  '/assets/cmp1.png',
  '/assets/cmp2.png',
  '/assets/cmp3.png',
  '/assets/cmp4.png',
  '/assets/cmp5.png',
  '/assets/cmp6.png',
  '/assets/cmp7.png',
];

export const BrandsMarquee: React.FC = () => {
  return (
    <section className="py-8 bg-[#fff1ed] border-y border-[#e5beb3]/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-xs text-gray-500 uppercase tracking-[0.2em] text-center">
            Trusted by Industry Leaders
          </h3>
          <div className="relative w-full overflow-hidden">
            <div className="animate-ticker flex items-center gap-12 sm:gap-16 py-2">
              {/* First Set */}
              <div className="flex items-center gap-12 sm:gap-16 shrink-0">
                {BRAND_LOGOS.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={`Brand ${idx + 1}`}
                    className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
              {/* Duplicate Set for infinite marquee */}
              <div className="flex items-center gap-12 sm:gap-16 shrink-0">
                {BRAND_LOGOS.map((logo, idx) => (
                  <img
                    key={`dup-${idx}`}
                    src={logo}
                    alt={`Brand ${idx + 1}`}
                    className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
