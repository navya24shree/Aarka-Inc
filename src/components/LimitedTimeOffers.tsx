import React from 'react';
import { Product } from '../types';

interface LimitedTimeOffersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const LimitedTimeOffers: React.FC<LimitedTimeOffersProps> = ({
  products,
  onAddToCart,
  onQuickView,
}) => {
  const offerProducts = products.filter((p) => p.onSale).slice(0, 4);

  return (
    <section id="offers" className="py-16 bg-[#fff8f6]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div
            className="text-white px-6 py-1 font-semibold text-xs uppercase mb-3 shadow-sm"
            style={{ backgroundColor: '#f14706', borderRadius: '40px 0px' }}
          >
            Exclusive Deals
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#271813] uppercase tracking-tight">
            LIMITED TIME OFFER
          </h2>
        </div>

        {/* Offset Overlapping Cards Container - 2 per row with horizontal scroll on mobile */}
        <div className="flex overflow-x-auto no-scrollbar scrollbar-hide gap-3 sm:gap-6 lg:gap-16 pb-3 lg:pb-0 justify-start lg:justify-center">
          {offerProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onQuickView(prod)}
              className="w-[calc(50%-6px)] shrink-0 lg:w-full lg:max-w-[620px] flex flex-col lg:flex-row items-center relative my-2 sm:my-4 cursor-pointer group"
            >
              {/* Product Image Frame */}
              <div className="w-full lg:w-2/3 aspect-square bg-[#ffe2da] rounded-xl lg:rounded-2xl relative overflow-hidden p-3 sm:p-4 lg:p-6 shadow-md border border-[#e5beb3]/40">
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#f14706] text-white px-2 py-0.5 rounded-lg font-bold text-[9px] sm:text-[10px] uppercase z-10 shadow-sm">
                  On Sale
                </div>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Info Card */}
              <div className="w-[92%] lg:w-1/2 bg-white p-3 sm:p-5 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl -mt-5 lg:mt-0 lg:-ml-24 z-20 border border-[#e5beb3]/50 flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-[8px] sm:text-[10px] ${
                          i < prod.rating ? 'text-[#a23e1f] fill-1' : 'text-gray-300'
                        }`}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xs sm:text-base lg:text-xl text-[#271813] uppercase mb-1 line-clamp-1">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="font-extrabold text-xs sm:text-base lg:text-lg text-[#ab2f00]">
                      ₹ {prod.price.toFixed(2)}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-gray-400 line-through text-[10px] sm:text-xs lg:text-sm">
                        ₹ {prod.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(prod);
                  }}
                  className="w-full py-1.5 sm:py-2.5 border border-[#f14706] text-[#271813] font-bold rounded-full hover:bg-[#f14706] hover:text-white transition-colors text-[11px] sm:text-xs lg:text-sm cursor-pointer shadow-sm active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
