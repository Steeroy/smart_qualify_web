'use client';

// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/assets/images/images';
import { sizes } from '@/configuration/sizes';

export default function Hero() {
  // Handle smooth scrolling
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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
    <section
      className="hero-section"
      style={{ paddingTop: sizes.appBarHeight }}
    >
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Plan Your Future with Smart Qualify</h1>
          <p>
            Calculate your APS/AS, check which universities and courses you
            qualify for, check university requirements, discover careers, and
            build your CV—all in one place.
          </p>
          <div className="button-group">
            <motion.a
              href="#cta" // Replace with actual App Store link
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
              whileHover="hover"
              whileTap="tap"
              aria-label="Download Smart Qualify App"
              onClick={(e) => handleScroll(e, '#cta')}
            >
              Download App
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <Image
            src={images.heroImageUnis2}
            alt="Smart Qualify App"
            width={280} // Adjust based on actual image dimensions
            height={280}
            priority
          />
          <span className="sparkle" />
          <span className="sparkle" />
          <span className="sparkle" />
        </motion.div>
      </div>
    </section>
  );
}
