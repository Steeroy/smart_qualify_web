import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Smart Qualify',
  description:
    'Discover personalized university and career guidance with Smart Qualify. Download our app to explore top South African universities and career paths tailored to you.',
  keywords: [
    'Smart Qualify',
    'Siyanda Mvunyiswa',
    'university guidance',
    'career planning',
    'South African universities',
    'education app',
    'career paths',
    'personalized education',
    'career exploration',
    'South African education',
    'career development',
    'career guidance',
  ],
  viewport: 'width=device-width, initial-scale=1',

  icons: {
    icon: [
      {
        url: '/images/smart_qualify_logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/smart_qualify_logo.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/smart_qualify_logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Smart Qualify - Unlock Your Future',
    description:
      'Personalized university and career guidance at your fingertips. Download the Smart Qualify app today!',
    url: 'https://www.smart-qualify.com', // Replace with your domain
    siteName: 'Smart Qualify',
    images: [
      {
        url: '/images/smart_qualify_logo.png', // Add OG image to public/images/
        width: 1200,
        height: 630,
        alt: 'Smart Qualify App',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Qualify - Unlock Your Future',
    description:
      'Explore universities and careers with Smart Qualify. Download now!',
    images: ['/images/smart_qualify_logo.png'], // Same as OG image
    creator: '@Siyanda_Steeroy',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
