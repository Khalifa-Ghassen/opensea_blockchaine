/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
    // ... other Next.js configurations
    webpack: (config) => {
      config.module.rules.push({
        test: /postcss.config.js$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              // optional: add plugins like autoprefixer here
              plugins: () => [require('autoprefixer')],
            },
          },
        ],
      });
  
      return config;
    },
}
