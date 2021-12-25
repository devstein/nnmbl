const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
				fontSize: 'font-size'
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
