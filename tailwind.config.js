module.exports = {
    purge: {
      content: ["./src/**/*.svelte"],
      options: {
        keyframes: true
      }
    },
    theme: {
      extend: {
        colors: {
          orange: {
            500: "#ff3e00",
          },
        },
      },
    },
    variants: {},
    plugins: [],
  };
