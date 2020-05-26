module.exports = (_ctx) => ({
  base: '/fun-wallet-docs/',
  dest: 'docs/dist',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'FunWallet Documentation',
      description: 'Welcome',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/logo.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    repo: 'funfair-tech/fun-wallet-docs',
    logo: '/logo.svg',
    editLinks: true,
    docsDir: 'packages/docs/dist',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Information', 'Web SDK'),
        },
      },
    },
  },

  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/',
            alternative: '/guide/',
          },
        ],
      },
    ],
  ],

  extraWatchFiles: ['.vuepress/nav/en.js'],
});

function getGuideSidebar(Information, websdk) {
  return [
    {
      title: Information,
      collapsable: false,
      children: [
        '',
        'information/getting-started',
        'information/leader-and-follower',
      ],
    },
    {
      title: websdk,
      collapsable: false,
      children: [
        'web-sdk/installing-sdk',
        'web-sdk/setting-up-the-sdk-with-project',
        'web-sdk/initialising-the-sdk',
        'web-sdk/authentication',
        'web-sdk/wallet-ui',
        'web-sdk/languages',
        'web-sdk/approval-modal',
        'web-sdk/ethereum-provider',
        'web-sdk/sdk-methods',
        'web-sdk/sdk-event-listeners',
      ],
    },
  ];
}
