// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/assets/images/images';
import { HambergerMenu, CloseCircle } from 'iconsax-react';
import { colors } from '@/configuration/colors';
import { sizes } from '@/configuration/sizes';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#careers', label: 'Careers' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  // Handle smooth scrolling
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-web-wrapper">
        <Link href="/" className="nav-logo">
          <Image
            src={images.app_logo}
            alt="Smart Qualify Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span>Smart Qualify</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links hidden md:flex items-center">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }}>
              <a
                className="nav-link"
                onClick={(e) => handleScroll(e, link.href)}
                href={link.href}
              >
                {link.label}
              </a>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#cta"
              className="join-now"
              onClick={(e) => handleScroll(e, '#cta')}
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <HambergerMenu size={sizes.xl} color={colors.smartQualifyBlack} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Close button */}
            <button
              type="button"
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseCircle size={sizes.xl} color={colors.smartQualifyWhite} />
            </button>

            {/* Centered menu items */}
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/join"
                className="join-now mobile"
                onClick={(e) => handleScroll(e, '#cta')}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
