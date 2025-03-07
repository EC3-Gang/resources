// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CTP Resources',
			social: {
				github: 'https://github.com/EC3-Gang/resources',
				instagram: 'https://www.instagram.com/hci.ctp/'
			},
			// sidebar: [
			// 	{
			// 		label: 'Secondary 4',
			// 		autogenerate: { directory: 's4' },
			// 	},
			// ],
			plugins: [
				starlightThemeRapidePlugin(),
				starlightSidebarTopicsPlugin([
					{
						label: 'Secondary 3',
						link: '/s3',
						items: [],
					},
					{
						label: 'Secondary 4',
						link: '/s4',
						items: [
							{
								label: 'Stack and Queue',
								// autogenerate: { directory: 's4/stack-queue' },
								items: [
									's4/stack-queue/stack',
									's4/stack-queue/queue',
									's4/stack-queue/brackets'
								]
							}
						],
					},
				]),
			],
		}),
	],
});
