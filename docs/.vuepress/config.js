module.exports = {
  title: 'JavaScript Swiss Army Knife',
  description: 'A modern JavaScript utility library aiming to collect popular helpers and learn functional programming.',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Github', link: 'https://github.com/EdgarAllanzp/jssak' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'array',
        'function'
      ]
    }
  }
};
