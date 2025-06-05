// src/components/sections/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const currentYear = new Date().getFullYear();

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
    <footer className="footer-section" id="contact">
      <div className="wave-bg" />
      <div className="footer-container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="footer-column contact-info">
            <motion.h3 variants={itemVariants}>Contact Us</motion.h3>
            <motion.ul variants={itemVariants}>
              <li>
                <a href="tel:+27793431567" className="contact-link">
                  <span className="contact-icon">
                    <FaPhoneAlt size={18} />
                  </span>
                  +27 79 343 1567
                </a>
              </li>
              <li>
                <a
                  href="mailto:siyanda@smart-qualify.com"
                  className="contact-link"
                >
                  <span className="contact-icon">
                    <IoMdMail size={18} />
                  </span>
                  siyanda@smart-qualify.com
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="footer-column navigation">
            <motion.h3 variants={itemVariants}>Quick Links</motion.h3>
            <motion.ul variants={itemVariants}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#features"')}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#careers"')}
                  href="#careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#testimonials"')}
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
            </motion.ul>
          </div>
          <div className="footer-column social-media">
            <motion.h3 variants={itemVariants}>Follow Us</motion.h3>
            <motion.div className="social-icons" variants={itemVariants}>
              <a
                href="https://facebook.com/SteeroyIV/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <FaFacebook size={28} />
                </motion.div>
              </a>
              <a
                href="https://x.com/Siyanda_Steeroy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <FaTwitter size={28} />
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/siyanda_mvunyiswa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <FaInstagram size={28} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Smart Qualify. All rights reserved. Designed by
            Siyanda Mvunyiswa.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
