import React from 'react';
import { Product } from '../types';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onAddToCart,
  onQuickView,
}) => {
  // Best seller product subset
  const bestSellers = products.slice(0, 4);

  return (
    <section id="best-sellers" className="py-16 bg-[#fff8f6]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        {/* Header with Trending Now badge and horizontal rule lines */}
        <div className="flex flex-col items-center mb-12 relative text-center">
          <div
            className="text-white px-6 py-1 font-semibold text-xs uppercase mb-3 shadow-sm"
            style={{ backgroundColor: '#f14706', borderRadius: '40px 0px' }}
          >
            Trending Now
          </div>
          <div className="w-full flex items-center gap-2 sm:gap-4">
            <div className="flex-1 h-[2px] bg-[#f14706]/80"></div>
            <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#271813] uppercase tracking-tight px-1 sm:px-2 whitespace-nowrap">
              BEST SELLERS
            </h2>
            <div className="flex-1 h-[2px] bg-[#f14706]/80"></div>
          </div>
        </div>

        {/* Product Grid - 2 per row with horizontal scroll on mobile */}
        <div className="flex overflow-x-auto no-scrollbar scrollbar-hide gap-3 sm:gap-6 sm:grid sm:grid-cols-2 md:grid-cols-4 pb-2 sm:pb-0">
          {bestSellers.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onQuickView(prod)}
              className="w-[calc(50%-6px)] shrink-0 sm:w-auto bg-white rounded-xl overflow-hidden border border-[#e5beb3]/40 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Product Image Box */}
              <div className="aspect-square bg-[#f5f5f5] p-3 sm:p-6 relative flex items-center justify-center">
                {prod.onSale && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#f14706] text-white px-2 py-0.5 rounded-lg font-bold text-[9px] sm:text-[10px] uppercase z-10 shadow-sm">
                    On Sale
                  </div>
                )}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between gap-2 sm:gap-3">
                <div>
                  <div className="flex gap-0.5 sm:gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-[8px] sm:text-[10px] ${
                          i < prod.rating ? 'text-[#f14706] fill-1' : 'text-gray-300'
                        }`}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xs sm:text-base text-[#271813] uppercase mt-1 line-clamp-1 sm:line-clamp-none">
                    {prod.name}
                  </h3>
                  <p className="font-extrabold text-xs sm:text-sm text-[#ab2f00] mt-0.5 sm:mt-1">
                    ₹{prod.price.toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(prod);
                  }}
                  className="w-full py-1.5 sm:py-2 border border-[#f14706] text-[#f14706] font-bold rounded-full hover:bg-[#f14706] hover:text-white transition-colors text-[11px] sm:text-xs cursor-pointer shadow-sm active:scale-95 mt-1 sm:mt-2"
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
