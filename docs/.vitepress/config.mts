import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ft_transdoc/",
  title: "ft_transdoc",
  description: "A ft_transcendance documentation ",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ELK',
        items: [
          { text: 'ELK Stack', link: '/elk-stack'},
          { text: 'Elasticsearch', link: '/elasticsearch'},
          { text: 'Logstash', link: '/logstash'},
          { text: 'Kibana', link: '/kibana'}
        ]
      }, 
      {
        text: 'Backend',
        items: [
          { text: 'PostGreSQL', link: '/postgresql'},
          { text: 'PGadmin', link: '/PGadmin'},
          { text: 'Django', link: '/django'},
        ]

      },
      {
        text: 'Frontend',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Axiaaa/ft_transcendance', ariaLabel: 'Link to the repo' }
    ]
  }
})
