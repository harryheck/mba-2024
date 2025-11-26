import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto wählt automatisch den passenden Adapter für Vercel, Netlify etc.
		adapter: adapter()
	},
    // Modernes Preprocessing für Svelte
	preprocess: vitePreprocess()
};

export default config;