"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            $LARRY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/#how-to-buy" className="text-white hover:text-gray-300">
              How to Buy
            </Link>
            <Link href="/#tokenomics" className="text-white hover:text-gray-300">
              Tokenomics
            </Link>
            <Link href="/#roadmap" className="text-white hover:text-gray-300">
              Roadmap
            </Link>
            <Link href="/#community" className="text-white hover:text-gray-300">
              Community
            </Link>
            <a 
              href="https://fun.virtuals.io/agents/0x90F7269fF7b816F9efA0D649191DB17A84ed3939" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium"
            >
              Buy $LARRY
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link href="/#how-to-buy" className="text-white hover:text-gray-300">
                How to Buy
              </Link>
              <Link href="/#tokenomics" className="text-white hover:text-gray-300">
                Tokenomics
              </Link>
              <Link href="/#roadmap" className="text-white hover:text-gray-300">
                Roadmap
              </Link>
              <Link href="/#community" className="text-white hover:text-gray-300">
                Community
              </Link>
              <a 
                href="https://fun.virtuals.io/agents/0x90F7269fF7b816F9efA0D649191DB17A84ed3939" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Buy $LARRY
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
