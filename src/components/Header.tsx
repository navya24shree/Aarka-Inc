import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'shop';
  setActiveTab: (tab: 'home' | 'shop') => void;
  cartCount: number;
  onOpenCart: () => void;
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'scrolled-nav shadow-lg'
          : activeTab === 'shop'
          ? 'bg-[#fff8f6]/95 backdrop-blur-md border-b border-[#e5beb3]/40 shadow-xs'
          : 'bg-transparent text-[#271813]'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-[1440px] mx-auto">
        {/* Brand Name */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-extrabold text-2xl tracking-tighter text-left cursor-pointer focus:outline-none transition-colors"
          >
            <img src="/assets/logo.png" alt="Aarka Inc" className="h-10 sm:h-14 w-auto" />          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'shop'
                ? 'text-[#d63d00] hover:text-[#ab2f00]'
                : activeTab === 'home'
                ? 'text-[#d63d00]'
                : 'text-white hover:text-[#e5beb3]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'shop'
                ? 'text-[#d63d00] font-bold border-b-2 border-[#d63d00] pb-0.5'
                : 'text-white hover:text-[#e5beb3]'
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => scrollToSection('offers')}
            className={`font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'shop'
                ? 'text-[#d63d00] hover:text-[#ab2f00]'
                : 'text-white hover:text-[#e5beb3]'
            }`}
          >
            Offers
          </button>
          <button
            onClick={() => scrollToSection('best-sellers')}
            className={`font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'shop'
                ? 'text-[#d63d00] hover:text-[#ab2f00]'
                : 'text-white hover:text-[#e5beb3]'
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            className={`font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'shop'
                ? 'text-[#d63d00] hover:text-[#ab2f00]'
                : 'text-white hover:text-[#e5beb3]'
            }`}
          >
            About Us
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className={`relative p-2 rounded-lg transition-all cursor-pointer active:scale-95 ${
              activeTab === 'shop' ? 'text-[#d63d00] hover:bg-[#d63d00]/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d63d00] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'shop' ? 'text-[#d63d00]' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#000000] text-white px-6 py-6 border-b border-white/10 shadow-xl flex flex-col gap-4 animate-fadeIn">
          <button
            onClick={() => {
              setActiveTab('home');
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-left font-semibold text-lg py-1 ${
              activeTab === 'shop' ? 'text-[#d63d00]' : activeTab === 'home' ? 'text-[#d63d00]' : 'text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setActiveTab('shop');
              setIsMobileMenuOpen(false);
            }}
            className="text-left font-semibold text-lg py-1 text-[#d63d00]"
          >
            Shop Electrical Gear
          </button>
          <button
            onClick={() => scrollToSection('offers')}
            className={`text-left font-semibold text-lg py-1 ${
              activeTab === 'shop' ? 'text-[#d63d00]' : 'text-white hover:text-[#d63d00]'
            }`}
          >
            Offers & Discounts
          </button>
          <button
            onClick={() => scrollToSection('best-sellers')}
            className={`text-left font-semibold text-lg py-1 ${
              activeTab === 'shop' ? 'text-[#d63d00]' : 'text-white hover:text-[#d63d00]'
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            className={`text-left font-semibold text-lg py-1 ${
              activeTab === 'shop' ? 'text-[#d63d00]' : 'text-white hover:text-[#d63d00]'
            }`}
          >
            About Us
          </button>
        </div>
      )}
    </header>
  );
};
