import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Plus, Minus, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setAdded(false);
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#e5beb3]/50 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white/80 hover:bg-white text-gray-700 hover:text-[#f14706] rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="w-full md:w-1/2 bg-[#ffe2da]/60 p-6 sm:p-8 flex items-center justify-center relative min-h-[220px] sm:min-h-[280px]">
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.onSale && (
              <span className="bg-[#f14706] text-white px-2.5 py-1 rounded-lg font-bold text-[10px] uppercase shadow-sm">
                On Sale
              </span>
            )}
            {product.isNew && (
              <span className="bg-[#ab2f00] text-white px-2.5 py-1 rounded-lg font-bold text-[10px] uppercase shadow-sm">
                New Arrival
              </span>
            )}
            {product.discountPercentage && (
              <span className="bg-[#a23e1f] text-white px-2.5 py-1 rounded-lg font-bold text-[10px] uppercase shadow-sm">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="max-h-[220px] sm:max-h-[280px] w-full object-contain mix-blend-multiply drop-shadow-lg"
          />
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category */}
            <span className="text-[11px] sm:text-xs font-bold text-[#ab2f00] uppercase tracking-wider block mb-1">
              {product.category}
            </span>

            {/* Product Title */}
            <h2 className="font-extrabold text-lg sm:text-2xl text-[#271813] mb-2 leading-tight">
              {product.name}
            </h2>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`material-symbols-outlined text-xs sm:text-sm ${
                    i < product.rating ? 'text-[#f14706] fill-1' : 'text-gray-300'
                  }`}
                >
                  star
                </span>
              ))}
              <span className="text-xs font-bold text-gray-500 ml-1">
                {product.rating}.0 / 5.0
              </span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-extrabold text-xl sm:text-2xl text-[#ab2f00]">
                ₹{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>


          </div>

          {/* Action Row: Quantity & Add To Cart */}
          <div className="mt-4 pt-4 border-t border-[#e5beb3]/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Quantity</span>
              <div className="flex items-center border border-[#e5beb3] rounded-full p-1 bg-[#fff8f6]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-[#f14706] hover:text-white transition-colors cursor-pointer shadow-sm"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-extrabold text-[#271813]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white text-gray-700 flex items-center justify-center hover:bg-[#f14706] hover:text-white transition-colors cursor-pointer shadow-sm"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-3 px-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-[#f14706] hover:bg-[#d63d00] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Cart (₹{(product.price * quantity).toFixed(2)})
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
