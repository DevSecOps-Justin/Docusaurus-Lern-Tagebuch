import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig} from "dotenv";

dotenvconfig();

const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')
const gitRepositoryUrl = process.env.GIT_REPOSITORY_URL ?? "https://github.com/DevSecOps-Justin/Docusaurus-Lern-Tagebuch"

const config: Config = {
  title: 'Justin Tasa – DevSecOps Blog',
  tagline: 'Justin Tasa - DevSecOps Enthusiast with a passion for details and efficiency',
  favicon: 'img/favicon.ico',

  url: process.env.DEPLOYMENT_URL ?? "https://DevSecOps-Justin.github.io",
  baseUrl: process.env.BASE_URL ?? "/",

  organizationName: process.env.GITHUB_ORG,
  projectName: process.env.GITHUB_PROJECT,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: gitRepositoryUrl,
        },
        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ['rss', 'atom'],
                xslt: true,
              },
              editUrl: gitRepositoryUrl,
              onInlineTags: 'warn',
              onInlineAuthors: 'warn',
              onUntruncatedBlogPosts: 'warn',
            }
          : false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Justin Tasa',
      style: 'dark',
      logo: {
        alt: 'Justin Tasa Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: gitRepositoryUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/guides/intro',
            },
            {
              label: 'Projects',
              to: '/docs/projects',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: gitRepositoryUrl,
            },
            {
              label: 'Template',
              href: 'https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Justin Tasa. Built with Docusaurus. 💚 - extended from the developer-akademie-starter`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl', 'bash', 'yaml'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

if (blogEnabled) {
  (config.themeConfig.navbar as any).items.splice(1, 0, {
    to: '/blog',
    label: 'Blog',
    position: 'left',
  });
  (config.themeConfig.footer as any).links[1].items.push({
    to: '/blog',
    label: 'Blog',
  });
}

export default config;
