'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger menu button for mobile - hidden when sidebar is open */}
      <button 
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:sticky md:top-0 md:h-screen
      `}>
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-10 text-red-600">Chrispy Craigslist</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 px-4 rounded hover:bg-red-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/bookings" 
                  className="block py-2 px-4 rounded hover:bg-red-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Bookings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
