// src/components/sections/CTA.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/assets/images/images';

export default function CTA() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 12px rgba(255, 107, 0, 0.5)',
      transition: { duration: 0.3, yoyo: Infinity, ease: 'easeInOut' },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="cta-section" id="cta">
      <div className="parallax-bg" />
      <div className="cta-container">
        <motion.div
          className="cta-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="cta-title" variants={itemVariants}>
            Get the Smart Qualify App!
          </motion.h2>
          <motion.p className="cta-subtitle" variants={itemVariants}>
            Unlock your future with personalized university and career guidance.
            Download the app to start your journey today!
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            {/* <Link
              href="https://www.apple.com/app-store/"
              passHref
              target="_blank"
            >
              <motion.button
                className="cta-button app-store"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Download on the App Store"
              >
                <Image
                  src={images.apple_store}
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  priority
                />
              </motion.button>
            </Link> */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.smartqualify.example"
              passHref
              target="_blank"
            >
              <motion.button
                className="cta-button google-play"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Get it on Google Play"
              >
                <Image
                  src={images.google_play_store}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  priority
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
