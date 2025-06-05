'use client';

// src/components/sections/Features.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/assets/images/images';

const features = [
  {
    title: 'Eligibility Checker',
    description:
      'Instantly check which universities and courses you qualify for based on your marks.',
    image: images.eligibility2, // Replace with your mockup
  },
  {
    title: 'University Finder',
    description:
      'Explore universities and their programs tailored to your academic profile.',
    image: images.heroImageUnis,
  },
  {
    title: 'Career Explorer',
    description:
      'Discover career paths and the qualifications needed to succeed.',
    image: images.careers,
  },
  {
    title: 'CV Builder',
    description: 'Craft a professional CV effortlessly within the app.',
    image: images.cv,
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="features-title"
        >
          Why Choose Smart Qualify?
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="feature-item"
            >
              <div className="feature-image">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={280}
                  height={560}
                  priority={index === 0} // Prioritize first image
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
