import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryNav } from './components/CategoryNav';
import { LimitedTimeOffers } from './components/LimitedTimeOffers';
import { BrandsMarquee } from './components/BrandsMarquee';
import { BestSellers } from './components/BestSellers';
import { AboutUs } from './components/AboutUs';
import { CustomerReviews } from './components/CustomerReviews';
import { ShopView } from './components/ShopView';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'shop'>('home');
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Initial sample items in cart for demonstration
    { product: INITIAL_PRODUCTS[0], quantity: 1 },
    { product: INITIAL_PRODUCTS[2], quantity: 2 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [initialShopCategory, setInitialShopCategory] = useState<string | undefined>();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCategorySelect = (category: string) => {
    setInitialShopCategory(category);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-['Sora',sans-serif] bg-[#fff8f6] text-[#271813] relative selection:bg-[#d63d00] selection:text-white">
      {/* Background Radial Dots Pattern */}
      <div className="fixed inset-0 hero-pattern z-[-1] pointer-events-none"></div>

      {/* Global Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <HeroSection
              onShopNow={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Horizontal Category Nav */}
            <CategoryNav onSelectCategory={handleCategorySelect} />

            {/* Limited Time Offers */}
            <LimitedTimeOffers
              products={products}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* Industry Leaders Marquee */}
            <BrandsMarquee />

            {/* Best Sellers */}
            <BestSellers
              products={products}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* About Us */}
            <AboutUs />

            {/* Customer Reviews Ticker */}
            <CustomerReviews />
          </>
        ) : (
          <ShopView
            products={products}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onQuickView={(p) => setQuickViewProduct(p)}
            initialCategory={initialShopCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
