import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				adieuRegular: ['Adieu-Regular', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
			},
			animation: {
				text: 'text 10s ease infinite',
				slider: 'slider 20s linear infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '300% 300%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '300% 300%',
						'background-position': 'right center',
					},
				},
				slider: {
					from: {
						transform: 'translate3d(0, 0, 0)',
					},
					to: {
						transform: 'translate3d(-100%, 0, 0)',
					},
				},
			},
			colors: {
				primary: '#4F78FF',
				secondary: '#4FADFF',
				textPrimary: '#252930',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
