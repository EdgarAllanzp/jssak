module.exports = {
  base: '/jssak/',
  title: 'JavaScript Swiss Army Knife',
  description: 'Slight and elegant functional utils for modern JavaScript.',
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
        ''
      ]
    }
  }
};
