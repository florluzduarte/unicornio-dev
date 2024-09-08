import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"sans": ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
				"mono": ['"Istok Web"', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				black: '#191919',
				white: '#F8F8F2',
				gray: {
					900: '#1E1E1E',
					700: '#292929',
					100: '#CCCCB8',
				},
				yellow: '#FFFAAD',
				orange: '#FFB890',
				red: '#FF9580',
				pink: '#F998E6',
				fuchsia: '#FB36DB',
				purple: '#BB4BFF',
				green: '#73FFE1',
			},
		},
		plugins: [],
	}
}