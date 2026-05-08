const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Esto ayuda a que el build no se rompa por falta de memoria
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        minimize: true,
      };
      return webpackConfig;
    },
  },
  // Agregamos la configuración de PostCSS aquí por si Tailwind sigue molestando
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};