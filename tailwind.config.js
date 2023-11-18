/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)'],
        'raleway': ['var(--font-raleway)'],
      },
      colors: {
        'uni-blue' : '#2968E5',
        'uni-green' : '#00A651',
        pink: {
          '300': '#ff9a8b',
          '500': '#ff6b6b',
        },
        gray: {
          '100': '#f7fafc',
          '200': '#edf2f7',
          '300': '#e2e8f0',
          '400': '#cbd5e0',
          '500': '#a0aec0',
          '600': '#718096',
          '700': '#4a5568',
          '800': '#2d3748',
          '900': '#1a202c',
        },
        red: {
          '600': '#ff6b6b',
          '700': '#ff463d',
        },
      },
      boxShadow: {
        'inner': '0 -2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'avatar': "url('/assets/images/avatarPortfolio.png')", // Adjust the path as needed
        'circuit': "url('/assets/images/circuit.png')", // Adjust the path as needed
      },
      fontSize: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      minHeight: {
        'hero': '80vh',
      },
      extend: {
        boxShadow: {
          'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
  plugins: [],
};
