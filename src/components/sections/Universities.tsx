// src/components/sections/Universities.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { universityService } from '@/services/university/university_service';
import { UniversityResponseDto } from '@/types';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Stats {
  universities: number;
  courses: number;
}

export default function Universities() {
  const [universities, setUniversities] = useState<UniversityResponseDto[]>([]);
  const [stats, setStats] = useState<Stats>({ universities: 0, courses: 0 });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch universities
    universityService
      .getUniversities()
      .then((data) => {
        setUniversities([...data, ...data]);
        // Placeholder stats (to be updated with real data later)
        setStats({
          universities: data.length,
          courses: 200, // Hardcoded; replace with API call
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching universities:', err);
        setError('Failed to load universities. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <section className="universities-section">
        <div className="container">
          <p className="loading-message">Loading universities...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="universities-section">
        <div className="container">
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="universities-section">
      <div className="universities-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="universities-title"
        >
          Explore Top Universities
        </motion.h2>
        <div className="universities-carousel">
          <Slider {...sliderSettings}>
            {universities.map((uni, index) => (
              <motion.div
                key={`${uni.name}-${index}`} // Unique key for duplicated items
                className="university-item"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={uni.imageUrl}
                  alt={uni.name}
                  width={120}
                  height={120}
                  className="university-logo"
                  priority={index < 3}
                />
                <p className="university-name">{uni.name}</p>
              </motion.div>
            ))}
          </Slider>
        </div>
        <div className="universities-stats">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="stat-item"
          >
            <span className="stat-number">{stats.universities}+</span>
            <span className="stat-label">Universities</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="stat-item"
          >
            <span className="stat-number">{stats.courses}+</span>
            <span className="stat-label">Courses</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
