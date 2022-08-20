/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['"Bellota"', 'cursive'],
				'body': ['"Bellota Text"'],
			},
			colors: {
				'dark': {
					100: '#1c2128',
					200: '#22272e',
					300: '#2d333b',
				}
			}
		},
	},
	plugins: [],
}
