/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary': '#a0c99e',
			'accent': '#fbb874',
			'body': '#FDF6E3',
			'link': '#72B5CB',
			'container': '#484D59',
			'page': '#55607b',
			'card': '#353A47'
		},
		extend: {
			backgroundColor: '#55607b',
			fontFamily: {
				signika: ['Signika'],
			}
		},
	},

	plugins: [],
}
