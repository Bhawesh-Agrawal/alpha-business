'use client';

import React from 'react';

export default function ContactCTA() {
  return (
    <section className="relative h-96 bg-gray-900">
      {/* Background Image */}
      {/* Replace '/map-background.jpg' with an image of your area. */}
      {/* You can get one from Google Maps screenshot or a stock photo site. */}
      <img
        src="/map-background.jpg"
        alt="Map of Lalitpur"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          Have a question or need a quote for materials? Our team in Lalitpur is ready to help you build something great.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}