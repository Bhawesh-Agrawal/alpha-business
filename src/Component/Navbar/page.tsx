"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200">
                            Alpha Business Pvt Ltd
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                            Blog
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105 active:scale-95">
                            View Product
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-white border-t border-gray-200`}>
                <div className="px-4 pt-2 pb-3 space-y-1">
                    <a href="#" className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium">
                        Home
                    </a>
                    <a href="#" className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium">
                        About
                    </a>
                    <a href="#" className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium">
                        Blog
                    </a>
                    <a href="#" className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium">
                        Contact
                    </a>
                    <div className="pt-2">
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg">
                            View Product
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}