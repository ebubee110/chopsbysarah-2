import { TbSparkles } from 'react-icons/tb';
import { BiHomeAlt } from 'react-icons/bi';
import { MdFoodBank } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconBase } from 'react-icons/lib';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // prevent background scroll on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { href: '#home', label: 'Home ' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-green-100 shadow-md sticky top-0 z-50   px-2.5<TbSparkles />">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 pt-7">
        {/* Logo */}
        <div className="flex flex-row-reverse">
          <h1 className="text-2xl font-bold text-emerald-700 ">ChopsBySarah</h1>
          <MdFoodBank size={30} className="text-emerald-700" />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-emerald-600 font-semibold focus:text-emerald-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Backdrop for mobile */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 transition-opacity duration-300 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 30 }}
      />

      {/* Sidebar for mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="p-4 flex items-center justify-between border-b mt-7">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-4">
            {/* <BiHomeAlt /> */}
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-lg hover:text-emerald-600 font-semibold focus:text-emerald-700"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </nav>
  );
}
