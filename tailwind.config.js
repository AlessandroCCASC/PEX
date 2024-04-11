const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"accent": {
					50: "#FBEEF8",
					100: "#F6DAF0",
					200: "#EEB5E0",
					300: "#E48BCF",
					400: "#DA62BE",
					500: "#D13DAF",
					600: "#B22A92",
					700: "#8C2173",
					800: "#631751",
					900: "#3A0E2F",
					950: "#290A22"
				}
			},
			fontSize: {
				"2xs": ['0.6875rem', '0.875rem'],   /* 11px */
				"3xs": ['0.625rem', '0.75rem'],     /* 10px */
				"4xs": ['0.5625rem', '0.625rem'],   /* 9px */
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'192': '48rem'
			}
		}
	},
	plugins: [],
});

