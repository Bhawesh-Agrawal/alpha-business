'use client';

import React, { useState, useEffect, useMemo } from 'react'; // 1. Import useMemo
import ImageSlider from './ImageSlider';
import { Heart } from 'lucide-react';

// Your ProductCardProps type definition
type ProductCardProps = {
  id: number;
  slug: string;
  title: string;
  category: string;
  inStock: boolean;
  productImages: string[];
  description: string;
  best_product: boolean;
  createdAt: string;
  tags: string[];
};

export default function ProductCard({
  id, slug, title, category, inStock, productImages, createdAt
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  // 2. Add logic to check if the product is new
  const isLatest = useMemo(() => {
    if (!createdAt) return false;
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return new Date(createdAt) > twoMonthsAgo;
  }, [createdAt]);

  useEffect(() => {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    setIsLiked(likedProducts.includes(id));
  }, [id]);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const likedProducts: number[] = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    const updatedLikedProducts = likedProducts.includes(id)
      ? likedProducts.filter(productId => productId !== id)
      : [...likedProducts, id];
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    setIsLiked(!isLiked);
  };
  
  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive]')) {
      e.preventDefault();
      return;
    }
    window.location.href = `/product/${slug}`;
  };

  return (
    <div 
      className="group relative cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <div className="relative bg-slate-100 aspect-square rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <div data-interactive="true">
            <ImageSlider slides={productImages} options={{ loop: true }} />
          </div>
          
          <div className="absolute inset-0 z-30">
              <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
                  {isLatest && inStock && (
                    <span className="text-lg font-semibold bg-green-600 text-white px-6 py-1 rounded">Latest</span>
                  )}
                  {!inStock && (
                    <span className="text-lg font-semibold bg-gray-800 text-white px-6 py-2 rounded">Out of Stock</span>
                  )}
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