'use client';

import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import { Heart } from 'lucide-react';

// Your ProductCardProps type definition
type ProductCardProps = {
  id: number;
  slug: string;
  title: string;
  category: string;
  inStock: boolean;
  promo?: string;
  productImages: string[];
  description: string;
  best_product: boolean;
  createdAt: string;
  tags: string[];
};

export default function ProductCard({
  id, slug, title, category, inStock, promo, productImages
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    setIsLiked(likedProducts.includes(id));
  }, [id]);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    const likedProducts: number[] = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    const updatedLikedProducts = likedProducts.includes(id)
      ? likedProducts.filter(productId => productId !== id)
      : [...likedProducts, id];
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    setIsLiked(!isLiked);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // If the click target is within interactive elements, don't navigate
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive]')) {
      e.preventDefault();
      return;
    }
    // Otherwise, navigate to product page
    window.location.href = `/product/${slug}`;
  };

  return (
    <div 
      className="group relative cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <div className="relative bg-slate-100 aspect-square rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          {/* Add data-interactive for identification */}
          <div data-interactive="true">
            <ImageSlider slides={productImages} options={{ loop: true }} />
          </div>
          
          <div className="absolute inset-0 z-30">
             <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
                 {promo && <span className="text-sm font-semibold bg-red-500 text-white px-2 py-1 rounded">{promo}</span>}
                 {!inStock && <span className="text-sm font-semibold bg-gray-500 text-white px-2 py-1 rounded">Out of Stock</span>}
             </div>
             
             <button
                type="button"
                onClick={handleLikeToggle}
                data-interactive="true"
                className="absolute top-3 right-3 p-1.5 transition rounded-full hover:bg-white/80 cursor-pointer z-40"
                aria-label="Like product"
             >
                <Heart className={`w-6 h-6 transition-colors ${isLiked ? 'fill-red-500 stroke-red-500' : 'fill-transparent stroke-gray-600'}`} />
             </button>
          </div>
        </div>

        <div className="mt-4 px-1 text-start">
          <p className="font-bold text-gray-800 text-2xl">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
}