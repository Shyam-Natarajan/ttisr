import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const MENU_ITEMS = [
  { href: '#Header', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#Services', label: 'Services' },
  { href: '#Choose', label: 'Why Choose Us' },
  { href: '#Contact', label: 'Contact' }
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10" role="navigation">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img 
          src="/thulasi-TTISR.webp" 
          alt="TTISR Manpower And Training Consultant Pvt Ltd" 
          className="h-16 w-16 rounded-lg"
        />
        
        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-7 text-white">
          {MENU_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden p-2 text-white"
          onClick={toggleMenu}
          onKeyDown={handleKeyPress}
          aria-expanded={showMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          sm:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out
          ${showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            className="p-2"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          {MENU_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;