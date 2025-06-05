// src/components/sections/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { testimonialService } from '@/services/testimonial/testimonial_service';
import { TestimonialResponseDto } from '@/types';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialResponseDto[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    testimonialService
      .getTestimonials()
      .then((data: TestimonialResponseDto[]) => {
        setTestimonials(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Color palette for testimonial cards
  const colorPalette = [
    'var(--uj-orange)',
    'var(--nmu-blue)',
    'var(--smartQualifyGreen)',
    'var(--smartQualifyNavy)',
  ];

  if (isLoading) {
    return (
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <p className="loading-message">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonials-title"
        >
          What Our Users Say
        </motion.h2>
        <div className="testimonials-carousel">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                style={
                  {
                    '--clr': colorPalette[index % colorPalette.length],
                  } as React.CSSProperties
                }
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="testimonial-quote">
                  {testimonial.testimony}
                </blockquote>
                <div className="testimonial-author">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
