import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// SSR
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});
