// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The World of Concreth',
  tagline: 'A D&D 5E World Bible',
  favicon: 'img/favicon.ico',

  // IMPORTANT: Before you publish to GitHub, replace 'BootGoblin' 
  // with your actual GitHub username below.
  url: 'https://your-github-username.github.io',
  baseUrl: '/concreth-bible/',
  organizationName: 'BootGoblin', 
  projectName: 'concreth-bible', 

  onBrokenLinks: 'throw',
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
          sidebarPath: './sidebars.js',
          // Edit URL is removed here so players don't see a link to your raw GitHub repository
        },
        blog: false, // Disabled to keep the site functioning purely as a reference wiki
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', 
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Concreth',
        items: [
          // Public link to the completed legacy campaign
          {
            type: 'docSidebar',
            sidebarId: 'legacySidebar',
            position: 'left',
            label: 'The Shattered Balance (Legacy)',
          },
          // Notice: We purposefully DO NOT put links to the Wagonwood or Tormalon 
          // sidebars here. That is how we maintain Security Through Obscurity.
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Andrew J. Lenz. Built with Docusaurus.`,
      },
    }),
};

export default config;