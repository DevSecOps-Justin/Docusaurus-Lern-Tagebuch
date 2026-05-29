// import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';
// import {config as dotenvconfig}  from "dotenv";

// dotenvconfig();

// /* TODO: change to read configuration from environment */
// const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')

// const config: Config = {
//   title: 'DSO Live Demo Docs',
//   tagline: 'Dinosaurs are cool',
//   favicon: 'img/favicon.ico',

//   // Set the production url of your site here
//   url: process.env.DEPLOYMENT_URL ?? "https://devsecops-justin.github.io",
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: process.env.BASE_URL ?? "/",

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: process.env.GITHUB_ORG, // Usually your GitHub org/user name.
//   projectName: process.env.GITHUB_PROJECT, // Usually your repo name.

//   deploymentBranch: process.env.DEPLOYMENT_BRANCH,

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: './sidebars.ts',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           editUrl:
//             'https://github.com/devsecops-justin/dev-blog-template',
//         },
//         blog: blogEnabled ? 
//           {
//             showReadingTime: true,
//             feedOptions: {
//               type: ['rss', 'atom'],
//               xslt: true,
//             },
//             // Please change this to your repo.
//             // Remove this to remove the "edit this page" links.
//             editUrl:
//               'https://github.com/devsecops-justin/dev-blog-template',
//             // Useful options to enforce blogging best practices
//             onInlineTags: 'warn',
//             onInlineAuthors: 'warn',
//             onUntruncatedBlogPosts: 'warn',
//           }
//           : false,
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       } satisfies Preset.Options,
//     ],
//   ],

//   themeConfig: {
//     // Replace with your project's social card
//     image: 'img/docusaurus-social-card.jpg',
//     navbar: {
//       title: 'My Site',
//       logo: {
//         alt: 'My Site Logo',
//         src: 'img/logo.svg',
//       },
//       items: [
//         {
//           type: 'docSidebar',
//           sidebarId: 'tutorialSidebar',
//           position: 'left',
//           label: 'Docs',
//         },
//         {
//           href: 'https://github.com/spmse/dev-blog-template',
//           label: 'Github',
//           position: 'right',
//         },
//       ],
//     },
//     footer: {
//       style: 'dark',
//       links: [
//         {
//           title: 'Docs',
//           items: [
//             {
//               label: 'Tutorial',
//               to: '/docs/guides/intro',
//             },
//           ],
//         },
//         {
//           title: 'Community',
//           items: [
//             {
//               label: 'Stack Overflow',
//               href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//             },
//             {
//               label: 'Discord',
//               href: 'https://discordapp.com/invite/docusaurus',
//             },
//             {
//               label: 'Twitter',
//               href: 'https://twitter.com/docusaurus',
//             },
//           ],
//         },
//         {
//           title: 'More',
//           items: [
//             {
//               label: 'GitHub',
//               href: 'https://github.com/facebook/docusaurus',
//             }
//           ],
//         },
//       ],
//       copyright: `Copyright © ${new Date().getFullYear()} Justin Tasa (devsecops-justin). Built with Docusaurus and 💚.`,
//     },
//     prism: {
//       theme: prismThemes.github,
//       darkTheme: prismThemes.dracula,
//       additionalLanguages: ['powershell', 'hcl'],
//       magicComments: [
//         // Remember to extend the default highlight class name as well!
//         {
//           className: 'theme-code-block-highlighted-line',
//           line: 'highlight-next-line',
//           block: {start: 'highlight-start', end: 'highlight-end'},
//         },
//         {
//           className: 'code-block-error-line',
//           line: 'This will error',
//         },
//       ],
//     },
//   } satisfies Preset.ThemeConfig,
// };


// if (blogEnabled) {
//   (config.themeConfig.navbar as any).items.push({to: '/blog', label: 'Blog', position: 'left'});
//   (
//     config.themeConfig.footer as any
//   ).links[2].items.push({
//     to: '/blog',
//     label: 'Blog',
//   });
// }

// export default config;


import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig}  from "dotenv";
 
dotenvconfig();
 
const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')
 
const config: Config = {
  title: 'Justin Tasa – DevSecOps Blog',
  tagline: 'DevSecOps, Cloud & mehr.',
  favicon: 'img/favicon.ico',
 
  url: process.env.DEPLOYMENT_URL ?? "https://devsecops-justin.github.io",
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
          editUrl: 'https://github.com/devsecops-justin/dev-blog-template',
        },
        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ['rss', 'atom'],
                xslt: true,
              },
              editUrl: 'https://github.com/devsecops-justin/dev-blog-template',
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
          href: 'https://github.com/devsecops-justin/dev-blog-template',
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
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/devsecops-justin',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Source',
              href: 'https://github.com/devsecops-justin/dev-blog-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Justin Tasa. Built with Docusaurus. 💚`,
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
  (config.themeConfig.footer as any).links[2].items.push({
    to: '/blog',
    label: 'Blog',
  });
}
 
export default config;