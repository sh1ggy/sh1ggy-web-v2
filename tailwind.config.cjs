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
			backgroundColor: '#353A47',
			fontFamily: {
				signika: ['Signika', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
				mukta: ['Mukta', 'sans-serif']
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	plugins:
		[
			require("daisyui"), 
			require('tailwind-scrollbar')({ nocompatible: true }),
			require('@tailwindcss/typography'),
		],
	daisyui: {
		themes: [
			{
				'dark':
				{
					"primary": "#a0c99e",
					"accent": "#fbb874",
					"backgroundColor": '#353A47',
					"link": "#a9dbeb"
				}
			},
			'light',
		]
	}
}
