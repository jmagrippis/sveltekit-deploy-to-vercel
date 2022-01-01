const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			primary: colors.rose,
			secondary: colors.emerald,
			prime: '#FF3E00',
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Pushster', 'cursive'],
			code: ['Fira Code', 'monospace'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
