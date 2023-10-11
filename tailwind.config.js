import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: {
      colors: {
        greenBak: {
          50: '#f1fafe',
          100: '#e3f2fb',
          200: '#c0e6f7',
          300: '#89d3f0',
          400: '#4abce6',
          500: '#22a4d5',
          600: '#1484b5',
          700: '#116a93',
          800: '#125776',
          900: '#154b65',
          950: '#0e3043'
        },
        myColo: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd2fc',
          400: '#52c5f9',
          500: '#0ea4e9',
          600: '#0283c7',
          700: '#0368a1',
          800: '#075885',
          900: '#0c4a6e',
          950: '#082f49'
        },
        green: {
          50: '#f0fdf4',
          100: '#dbfde6',
          200: '#b9f9ce',
          300: '#83f2a8',
          400: '#3de175',
          500: '#1dca59',
          600: '#12a746',
          700: '#128339',
          800: '#146731',
          900: '#12552b',
          950: '#042f15'
        }
      },
      fontFamily: {
        black: ['Black Ops One'],
        libre: ['Libre Baskerville']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    skeleton({
      themes: { preset: ['wintry'] }
    })
  ]
};
