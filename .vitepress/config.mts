import { defineConfig } from 'vitepress';
import cpSidebar from './cp-sidebar.mts';
import miscSidebar from './misc-sidebar.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HCI CTP Resources",
  description: "A curated site of resources made by and for the HCI Computing Talent Programme (and IRS/EC^3)",
	srcDir: 'docs',
	markdown: {
		math: true,
	},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

		search: {
			provider: 'local'
		},

    sidebar: {
      '/competitive-programming/': cpSidebar,
			'/misc/': miscSidebar
		},

		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
		},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EC3-Gang/resources' }
    ]
  }
})
