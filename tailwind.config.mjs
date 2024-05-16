import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: '#0C0C0C',
				white: '#F8F8F2',
				gray: {
					900: '#0C0C0C',
					800: '#141414',
					600: '#222222',
					400: '#282828',
					300: '#575757',
					200: '#D9D9D9',
					100: '#ECECEC'
				},
				yellow: {
					200: '#FFFF80'
				},
				pink: {
					400: '#FF80BF'
				},
			}
		},
	},
	plugins: [],
}
