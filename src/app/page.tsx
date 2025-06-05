// src/app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Universities from '@/components/sections/Universities';
import Careers from '@/components/sections/Careers';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Universities />
        <Careers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
