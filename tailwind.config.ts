// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { colors } from '@/configuration/colors';
import { sizes } from '@/configuration/sizes';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      spacing: {
        xs: sizes.xs,
        sm: sizes.sm,
        md: sizes.md,
        lg: sizes.lg,
        xl: sizes.xl,
        spaceBtwItems: sizes.spaceBtwItems,
        spaceBtwSections: sizes.spaceBtwSections,
        gridViewSpacing: sizes.gridViewSpacing,
      },
      fontSize: {
        xs: sizes.fontSizeXs,
        sm: sizes.fontSizeSm,
        md: sizes.fontSizeMd,
        lg: sizes.fontSizeLg,
      },
      borderRadius: {
        sm: sizes.borderRadiusSm,
        md: sizes.borderRadiusMd,
        lg: sizes.borderRadiusLg,
      },
      boxShadow: {
        card: `0 ${sizes.cardElevation} ${sizes.cardElevation} rgba(0, 0, 0, 0.1)`,
        button: `0 ${sizes.buttonElevation} ${sizes.buttonElevation} rgba(0, 0, 0, 0.1)`,
      },
    },
  },
  plugins: [],
};
export default config;
