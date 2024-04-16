/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js'],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		require('preline/plugin'),
		require('tailwindcss-animated')
	],
}
