/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-preset-env'),
		require('cssnano'),
	],
};

module.exports = config;
