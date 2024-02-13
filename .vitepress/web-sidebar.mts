import { text } from "stream/consumers";

export default [
	{
		text: 'Introduction',
		collapsed: true,
		items: [
			{ text: 'Introduction', link: '/web-basics/' },
		],
	},
	{
		text: 'HTML',
		collapsed: false,
		items: [
			{ text: 'Basic Structure', link: '/web-basics/html/basic-structure' },
			{ text: 'Elements', link: '/web-basics/html/elements' },
			{ text: 'Attributes', link: '/web-basics/html/attributes' },
			{ text: 'Headings', link: '/web-basics/html/headings' },
			{ text: 'Text Content', link: '/web-basics/html/text-content' },
			{ text: 'Styles', link: '/web-basics/html/styles' },
			{ text: 'Images/Videos', link: '/web-basics/html/images-videos' },
		],
	},
	{
		text: 'CSS',
		collapsed: false,
		items: [
			{ text: 'Basics', link: '/web-basics/css/basics' },
			{ text: 'Selectors', link: '/web-basics/css/selectors' },
			{ text: 'Box Model', link: '/web-basics/css/box-model' },
			{ text: 'Units', link: '/web-basics/css/units' },
		]
	}
]
