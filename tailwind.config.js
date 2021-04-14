module.exports = {
    purge: {
      content: ["./src/**/*.svelte"],
      options: {
        keyframes: true
      }
    },
    theme: {
      fontFamily: {
        'sans': ['Raleway', 'Helvetica', 'Arial', 'sans-serif']
      },
      rotate: {
        '0': '0',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg',
        '270': '270deg',
      }
    },
    variants: {},
    plugins: [],
  };
