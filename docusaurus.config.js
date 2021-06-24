/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'tr'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      de: {
        label: 'Deutsch'
      },
      tr: {
        label: 'Türkçe'
      }
    }
  },
  title: 'Novogenia',
  tagline: 'Novogenia Gateway',
  url: 'https://order-gateway.novogenialab.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Novogenia',
      logo: {
        alt: 'Novogenia Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Novogenia GmbH.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
