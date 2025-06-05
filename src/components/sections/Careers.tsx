// src/components/sections/Careers.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { careerService } from '@/services/career/career_service';
import { CareerStatsDto } from '@/types';

export default function Careers() {
  const [categories, setCategories] = useState<string[]>([]);
  const [stats, setStats] = useState<{
    categoryCount: number;
    jobsCount: number;
  }>({
    categoryCount: 0,
    jobsCount: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    careerService
      .getCareerStatsAndCategories()
      .then((data: CareerStatsDto) => {
        setCategories(data.categories);
        setStats(data.stats);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching career data:', err);
        setError('Failed to load career data. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  // Color palette for rotating category cards
  const colorPalette = [
    'var(--uj-orange)',
    'var(--nmu-blue)',
    'var(--smartQualifyGreen)',
    'var(--smartQualifyNavy)',
  ];

  if (isLoading) {
    return (
      <section className="careers-section" id="careers">
        <div className="container">
          <p className="loading-message">Loading careers...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="careers-section" id="careers">
        <div className="container">
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="careers-section" id="careers">
      <div className="careers-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="careers-title"
        >
          Explore Career Paths
        </motion.h2>
        <div className="careers-stats">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="stat-item"
          >
            <span className="stat-number">
              <CountUp end={stats.categoryCount} duration={2} suffix="+" />
            </span>
            <span className="stat-label">Categories</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="stat-item"
          >
            <span className="stat-number">
              <CountUp end={stats.jobsCount} duration={2} suffix="+" />
            </span>
            <span className="stat-label">Jobs</span>
          </motion.div>
        </div>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="category-card"
              style={
                {
                  '--clr': colorPalette[index % colorPalette.length],
                } as React.CSSProperties
              }
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <h3 className="category-name">{cat}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
