import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				adieuRegular: ['Adieu-Regular', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
			},
			colors: {
				textPrimary: '#252930',
			},
		},
	},
	plugins: [],
} satisfies Config;
