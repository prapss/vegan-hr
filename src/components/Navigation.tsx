import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Početna' },
    { path: '/', label: 'O nama' },
    // { path: '/zdravlje', label: 'Zdravlje' },
    // { path: '/okolis', label: 'Okoliš' },
    // { path: '/etika', label: 'Etika' },
    // { path: '/recepti', label: 'Recepti' },
    // { path: '/nutricija', label: 'Nutricija' },
    // { path: '/savjeti', label: 'Savjeti' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-emerald-900 dark:via-green-900 dark:to-lime-900 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-emerald-700 hover:text-emerald-500 transition-colors">
            <Leaf className="h-8 w-8 animate-pulse" />
            <span>
                          <h1 className="font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 dark:from-emerald-400 dark:via-green-400 dark:to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
                Vegan.hr
              </h1>
              </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-emerald-700 bg-emerald-100 scale-105'
                    : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-emerald-700 bg-emerald-100'
                      : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;