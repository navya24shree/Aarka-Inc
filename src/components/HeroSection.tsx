import React from 'react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[520px] md:h-[500px] bg-[#e4362b] overflow-hidden flex items-center py-12 md:py-0"
    >
      {/* Panel 1 (Top / Left): Light Gray */}
      <div className="absolute inset-0 bg-[#e5e5e5] w-full md:w-[35%] h-[40%] md:h-full transform -skew-y-3 md:skew-y-0 md:-skew-x-12 md:-ml-20 z-0"></div>

      {/* Panel 2 (Middle Band): Red Stripe */}
      <div className="absolute inset-0 bg-[#e4362b] w-full md:w-[45%] h-[40%] md:h-full transform -skew-y-3 md:skew-y-0 md:-skew-x-12 md:ml-[20%] z-10"></div>

      {/* Panel 3 (Bottom / Right): Light Gray */}
      <div className="absolute inset-0 bg-[#e5e5e5] w-full md:w-[50%] h-[50%] md:h-full top-auto bottom-0 md:top-0 transform -skew-y-3 md:skew-y-0 md:-skew-x-12 md:ml-[55%] z-0"></div>

      {/* Hero Content Overlay */}
      <div className="relative max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 gap-8 md:gap-4 z-20 pt-16 md:pt-0">
        {/* Left Text */}
        <div className="text-white text-center md:text-left flex flex-col items-center md:items-start max-w-lg">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-8 uppercase tracking-tight drop-shadow-md">
            MODERN LIGHTING
          </h1>
          <button
            onClick={onShopNow}
            className="border-2 border-white text-white px-7 py-2.5 sm:px-8 sm:py-3 rounded-full font-bold text-sm sm:text-base uppercase hover:bg-white/10 transition duration-300 shadow-md active:scale-95 cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>

        {/* Right Watch Display */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] bg-white rounded-full flex items-center justify-center shadow-2xl relative shrink-0">
          <img
            src="../assets/hero.png"
            alt="Lighting"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};