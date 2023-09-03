import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(process.cwd(), '.svelte-kit/output/client/~partytown')
		})
	]
});
