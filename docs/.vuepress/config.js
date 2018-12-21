module.exports = {
  base: '/jssak/',
  title: 'JavaScript Swiss Army Knife',
  description: 'A modern JavaScript utility library aiming to collect popular helpers and learn functional programming.',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Documentation', link: '/document/'},
      { text: 'Github', link: 'https://github.com/EdgarAllanzp/jssak' },
    ],
    sidebar: {
      '/document/': [
        '',
        // 'array',
      ]
    }
  }
};
