'use client';

import React from 'react';

// Define the structure of a single review object
type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

// Enhanced star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 transition-colors ${
          index < rating ? 'text-yellow-400' : 'text-gray-200'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.24 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
    <span className="ml-2 text-sm font-medium text-gray-700">{rating}.0</span>
  </div>
);

// Google logo component
const GoogleLogo = () => (
  <div className="flex items-center gap-1 text-xs text-gray-500">
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    Google
  </div>
);

export default function ReviewCard({ 
  review, 
  index = 0 
}: { 
  review: Review; 
  index?: number; 
}) {
  return (
    <article 
      className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Header with user info and rating */}
      <header className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={review.profile_photo_url} 
              alt={review.author_name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
              loading="lazy"
            />
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-base truncate">
              {review.author_name}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              {review.relative_time_description}
            </p>
          </div>
        </div>
        <GoogleLogo />
      </header>

      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <blockquote className="text-gray-700 leading-relaxed flex-grow relative">
        <svg 
          className="absolute -top-2 -left-1 w-6 h-6 text-gray-200" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="relative z-10 pl-4 text-sm sm:text-base">
          "{review.text}"
        </p>
      </blockquote>

      {/* Footer with verified badge */}
      <footer className="mt-6 pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-green-600 font-medium">Verified Customer</span>
        </div>
      </footer>
    </article>
  );
}
