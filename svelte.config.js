import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { plugin as md, Mode } from 'vite-plugin-markdown'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				md({
					mode: Mode.HTML,
					markdownIt: { typography: true },
				}),
			],
		},
	},
}

export default config
