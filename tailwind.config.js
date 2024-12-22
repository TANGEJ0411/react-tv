/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#14c856',
      negative: '#f65e5e',
      'primary-hover': '#11ad4b',
      'primary-active': '#0f9440',
      enable: '#999',
      disable: '#666',
      divider: '#666',
      'field-error': '#f65e5e',
      'field-focus': '#14c856',
      blue: '#496ce9',
      yellow: '#fc0',
      'shock-pink': '#ff4c77',
      coral: '#f06a6a',
      violet: '#a760ff',
      camellia: '#f44fbb',
      'pale-blue': '#19a9ae',
      'label-grey': '#626262',
      'label-green': '#00ad29',
      black: '#000',
      'black-700': 'rgb(0, 0, 0, 0.7)',
      'black-800': 'rgb(0, 0, 0, 0.8)',
      white: '#fff',
      'white-300': 'rgb(255, 255, 255, 0.3)',
      'grey-100': '#f5f5f5',
      'grey-200': '#ccc',
      'grey-300': '#b2b2b2',
      'grey-400': '#999',
      'grey-500': 'grey',
      'grey-600': '#666',
      'grey-700': '#4c4c4c',
      'grey-800': '#333',
      'grey-900': '#262626',
      background: 'rgb(25, 25, 25)',
    },
    extend: {
      height: {
        'header-height': '60px',
      },
      aspectRatio: {
        '12/5': '12 / 5',
        '18/5': '18 / 5',
      }
    },
  },
  plugins: [],
}

