import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Multividas',
  description: 'Multividas API documentation',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0f4c81' }],
    // open graph SEO tips
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: 'Multividas API documentation' }],
    ['meta', { property: 'og:title', content: 'Multividas API documentation' }],
    ['meta', { property: 'og:description', content: 'Welcome to the Multividas API documentation, where you can explore the various features and functionalities provided by our powerful API. Whether you\'re a developer or an enthusiast, our API offers seamless integration and access to a range of functionalities.' }],
    ['meta', { property: 'og:image', content: '/images/logo.svg' }],
    ['meta', { property: 'og:url', content: 'developers.multividas.com' }],
    ['meta', { property: 'og:site_name', content: 'Multividas API documentation' }],
  ],
  
  themeConfig: {
    siteTitle: 'Multividas',
    logo: '/images/logo.svg',

    nav: nav(),

    sidebar: {
      '/rest/': sidebarRestApi(),
      '/graphql/': sidebarGraphQL(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/multividas' },
      { icon: 'twitter', link: 'https://twitter.com/multividaseng' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Soulaimane Yahya'
    }
  }
})

function nav() {
  return [
    { text: 'Rest API', link: '/rest/introduction/getting-started', activeMatch: '/rest/' },
    { text: 'GraphQL', link: '/graphql/introduction/getting-started', activeMatch: '/graphql/' },
    {
      text: 'Learn more',
      items: [
        { text: 'Multividas', link: 'https://multividas.com' },
        { text: 'Contributing', link: 'https://github.com/multividas' },
      ]
    }
  ]
}

function sidebarGraphQL() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/graphql/introduction/getting-started' },
      ]
    },
  ]
}

function sidebarRestApi() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/rest/introduction/getting-started' },
        { text: 'API Response Handling', link: '/rest/introduction/api-responser' },
        { text: 'Query Filters', link: '/rest/introduction/query-filters' },
        { text: 'Error Handling', link: '/rest/introduction/errors' },
      ]
    },
    {
      text: 'Entities',
      collapsed: true,
      items: [
        { text: 'User', link: '/rest/entities/user' },
      ]
    },
  ]
}
