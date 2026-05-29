import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus-Lern-Tagebuch/markdown-page',
    component: ComponentCreator('/Docusaurus-Lern-Tagebuch/markdown-page', '83e'),
    exact: true
  },
  {
    path: '/Docusaurus-Lern-Tagebuch/docs',
    component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs', '260'),
    routes: [
      {
        path: '/Docusaurus-Lern-Tagebuch/docs',
        component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs', '581'),
        routes: [
          {
            path: '/Docusaurus-Lern-Tagebuch/docs',
            component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs', '084'),
            routes: [
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/category/docusaurus---basics',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/category/docusaurus---basics', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/category/docusaurus---extras',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/category/docusaurus---extras', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/category/git',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/category/git', 'fe1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/deploy-docusaurus-with-docker-and-nginx',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/deploy-docusaurus-with-docker-and-nginx', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/congratulations',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/congratulations', 'e47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-blog-post',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-blog-post', 'af6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-document',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-document', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-page',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/create-a-page', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/deploy-your-site',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/deploy-your-site', 'c5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/GithubLinkAdmonition',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/GithubLinkAdmonition', 'd69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/markdown-features',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/docusaurus-basics/markdown-features', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/intro',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/intro', '459'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/some-demo-guide',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/some-demo-guide', '87f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/tutorial-extras/manage-docs-versions', 'f8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/tutorial-extras/translate-your-site', '887'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/guides/use-env-vars-in-node',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/guides/use-env-vars-in-node', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/Container/create-your-first-image',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/Container/create-your-first-image', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/Container/overview',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/Container/overview', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/DevOps/implementing-devops',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/DevOps/implementing-devops', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/DevOps/overview',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/DevOps/overview', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/clone',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/clone', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/git-branch',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/git-branch', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/lifecycle-in-git',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/git/lifecycle-in-git', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/intro',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/intro', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/linux-server-administration',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/linux-server-administration', '343'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/overview',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/overview', 'da7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/the-linux-commandline',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/knowledge-base/linux/the-linux-commandline', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/projects/example-project',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/projects/example-project', '5ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/projects/overview',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/projects/overview', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-Lern-Tagebuch/docs/projects/vserver-setup',
                component: ComponentCreator('/Docusaurus-Lern-Tagebuch/docs/projects/vserver-setup', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Docusaurus-Lern-Tagebuch/',
    component: ComponentCreator('/Docusaurus-Lern-Tagebuch/', '3bb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
