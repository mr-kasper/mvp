import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      public: ['"Public Sans"', 'sans-serif'],
      tourney: ['"Tourney"', 'sans-serif'],
      remix: ['remixicon'],
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        sm: '0.8125rem',
        base: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        'vertical-menu-item-font-size': '0.875rem',
      },
      colors: {
        body: colors.slate[800],
        'body-bg': colors.slate[100],
        'body-bordered': colors.white,
        'vertical-menu': colors.white,
        'vertical-menu-border': colors.slate[200],
        'vertical-menu-item': colors.slate[400],
        'vertical-menu-item-hover': colors.blue[500],
        'vertical-menu-item-bg-hover': colors.blue[50],
        'vertical-menu-item-active': colors.blue[500],
        'vertical-menu-item-bg-active': colors.blue[50],
        'vertical-menu-dark': colors.slate[900],
        'vertical-menu-border-dark': colors.slate[900],
        'vertical-menu-item-dark': colors.slate[500],
        'vertical-menu-item-hover-dark': colors.blue[500],
        'vertical-menu-item-bg-hover-dark': colors.slate[800],
        'vertical-menu-item-active-dark': colors.blue[500],
        'vertical-menu-item-bg-active-dark': colors.slate[800],
        topbar: colors.white,
        'topbar-border': colors.slate[200],
        'topbar-item': colors.slate[700],
        'topbar-item-hover': colors.slate[800],
        'topbar-item-bg-hover': colors.slate[100],
        custom: colors.blue,
        red: colors.red,
        green: {
          50: '#EAFAF7',
          100: '#D2F4EE',
          200: '#A0E8DB',
          300: '#56D7BF',
          400: '#2DBDA3',
          500: '#249782',
          600: '#208875',
          700: '#1C7767',
          800: '#186355',
          900: '#11463C',
          950: '#0B2D27',
        },
        yellow: colors.yellow,
        orange: colors.orange,
        sky: colors.sky,
        purple: colors.purple,
        zink: {
          50: '#E2EAF3',
          100: '#C8D7E9',
          200: '#92AFD3',
          300: '#5885BC',
          400: '#395F8E',
          500: '#233A57',
          600: '#1C2E45',
          700: '#132337',
          800: '#0F1824',
          900: '#070C12',
          950: '#030507',
        },
      },
      spacing: {
        header: '4.375rem',
        'vertical-menu': '16.25rem',
        'vertical-menu-md': '10.3125rem',
        'vertical-menu-sm': '4.375rem',
      },
      maxWidth: {
        boxed: '87.5rem',
      },
      minHeight: {
        sm: '1650px',
      },
      zIndex: {
        drawer: '1050',
      },
      backgroundImage: {
        'auth-pattern': "url('/auth-bg.jpg')",
        'auth-pattern-dark': "url('/auth-bg-dark.jpg')",
      },
      animation: {
        icons: 'iconsAnimation 50s',
        progress: 'progressAnimation 2s',
      },
      keyframes: {
        iconsAnimation: {
          to: { strokeDashoffset: '500' },
        },
        progressAnimation: {
          '0%': { width: '0' },
        },
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      clipPath: {
        triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
    },
  },
  plugins: [
    require('./plugins/headings.js'),
    require('./plugins/buttons.js'),
    require('./plugins/forms.js'),
    require('./plugins/card.js'),
    require('./plugins/drawer.js'),
    //third party libraries
    require('./plugins/flatpicker.js'),
    require('./plugins/simplebar.js'),
    require('./plugins/sweetalert2.js'),
    require('./plugins/swiper.js'),
    require('./plugins/tippy.js'),
    require('./plugins/toastify.js'),
    require('./plugins/choices.js'),
    require('./plugins/dropzone.js'),
    require('./plugins/colorpicker.js'),
    require('./plugins/ckeditor.js'),
    require('./plugins/datatable.js'),
    require('./plugins/apexcharts.js'),
    require('./plugins/maps.js'),
    require('./plugins/listjs.js'),
    require('./plugins/scroll-hint.js'),
    require('./plugins/multijs.js'),
    require('./plugins/fullcalendar.js'),
    require('./plugins/lightbox.js'),
    require('./plugins/prismjs.js'),
    require('./plugins/vanilla-calendar.js'),
    //apps pages
    require('./plugins/apps.js'),
  ],
};

export default config;
