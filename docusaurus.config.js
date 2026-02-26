// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The World of Concreth',
  tagline: 'The omniscient record of the Third Epoch.',
  favicon: 'img/concreth-d4.svg',

  url: 'https://BootGoblin.github.io',
  baseUrl: '/concreth-bible/',

  organizationName: 'BootGoblin', 
  projectName: 'concreth-bible', 
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Concreth',
        logo: {
          alt: 'Concreth Logo',
          src: 'img/concreth-d4.svg',
        },
        items: [
          // Left intentionally blank to protect your obscured campaign links!
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} The Concreth Master Tome.`,
      },
    }),
};

module.exports = config;