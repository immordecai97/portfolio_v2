/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#efefee",	// -> GRIS
				"secondary": "#fffffe",	// -> BLANCO
				"tertiary": "#242424",	// -> NEGRO
			}
		},
	},
	plugins: [],
}

