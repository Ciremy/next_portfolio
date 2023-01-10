module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/ui/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      title: ['segoeUI'],
      body: ['safran'],
    },
    extend: {
      colors: {
        primary: '#f2e0ff',
        secondary: '#dad6ff',
        thirdColor: '#8f2fd4',
        backgroundColor: '#f9f9f9',
        textColor: '#000000',
        card: '#eb71e7',
        sectionsShadow: '#dce5e5',
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
      },
    },
  },
  safelist: [],
  plugins: [],
};
