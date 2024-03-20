/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'jordy-blue': {
				'50': '#f1f5fd',
				'100': '#dfe9fa',
				'200': '#c6d9f7',
				'300': '#8bb4ee',
				'400': '#72a0e8',
				'500': '#507fe1',
				'600': '#3c62d4',
				'700': '#3250c3',
				'800': '#2e429f',
				'900': '#2a3b7e',
				'950': '#1e264d',
			},
			
			
			
		}
	},
	plugins: [
		addVariablesForColors,
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});

  addBase({
    ":root": newVars,
  });
}