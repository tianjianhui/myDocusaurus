
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/myDocusaurus/blog',
    component: ComponentCreator('/myDocusaurus/blog','da3'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/archive',
    component: ComponentCreator('/myDocusaurus/blog/archive','08d'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/first-blog-post',
    component: ComponentCreator('/myDocusaurus/blog/first-blog-post','c62'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/long-blog-post',
    component: ComponentCreator('/myDocusaurus/blog/long-blog-post','a3f'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/myDocusaurus/blog/mdx-blog-post','7c7'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/tags',
    component: ComponentCreator('/myDocusaurus/blog/tags','8c4'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/myDocusaurus/blog/tags/docusaurus','03b'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/tags/facebook',
    component: ComponentCreator('/myDocusaurus/blog/tags/facebook','60b'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/tags/hello',
    component: ComponentCreator('/myDocusaurus/blog/tags/hello','be5'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/tags/hola',
    component: ComponentCreator('/myDocusaurus/blog/tags/hola','2fe'),
    exact: true
  },
  {
    path: '/myDocusaurus/blog/welcome',
    component: ComponentCreator('/myDocusaurus/blog/welcome','511'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags',
    component: ComponentCreator('/myDocusaurus/docs/tags','cca'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/版本控制',
    component: ComponentCreator('/myDocusaurus/docs/tags/版本控制','074'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/代码规范',
    component: ComponentCreator('/myDocusaurus/docs/tags/代码规范','d8a'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/代码托管',
    component: ComponentCreator('/myDocusaurus/docs/tags/代码托管','993'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/代码样式',
    component: ComponentCreator('/myDocusaurus/docs/tags/代码样式','c62'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/单元测试',
    component: ComponentCreator('/myDocusaurus/docs/tags/单元测试','831'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/工具',
    component: ComponentCreator('/myDocusaurus/docs/tags/工具','a54'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/流程',
    component: ComponentCreator('/myDocusaurus/docs/tags/流程','dd1'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/前端',
    component: ComponentCreator('/myDocusaurus/docs/tags/前端','a1e'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/协作办公',
    component: ComponentCreator('/myDocusaurus/docs/tags/协作办公','0f0'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/code',
    component: ComponentCreator('/myDocusaurus/docs/tags/code','b7a'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/css',
    component: ComponentCreator('/myDocusaurus/docs/tags/css','6b6'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/flow',
    component: ComponentCreator('/myDocusaurus/docs/tags/flow','f7f'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/git',
    component: ComponentCreator('/myDocusaurus/docs/tags/git','e03'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/node',
    component: ComponentCreator('/myDocusaurus/docs/tags/node','5d3'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/nvm',
    component: ComponentCreator('/myDocusaurus/docs/tags/nvm','0ff'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/sass',
    component: ComponentCreator('/myDocusaurus/docs/tags/sass','042'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/ts',
    component: ComponentCreator('/myDocusaurus/docs/tags/ts','4c2'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs/tags/vscode',
    component: ComponentCreator('/myDocusaurus/docs/tags/vscode','709'),
    exact: true
  },
  {
    path: '/myDocusaurus/markdown-page',
    component: ComponentCreator('/myDocusaurus/markdown-page','89f'),
    exact: true
  },
  {
    path: '/myDocusaurus/search',
    component: ComponentCreator('/myDocusaurus/search','bc0'),
    exact: true
  },
  {
    path: '/myDocusaurus/write',
    component: ComponentCreator('/myDocusaurus/write','3be'),
    exact: true
  },
  {
    path: '/myDocusaurus/docs',
    component: ComponentCreator('/myDocusaurus/docs','721'),
    routes: [
      {
        path: '/myDocusaurus/docs/development-process/code-standards/CSS',
        component: ComponentCreator('/myDocusaurus/docs/development-process/code-standards/CSS','7df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/development-process/code-standards/JavaScript',
        component: ComponentCreator('/myDocusaurus/docs/development-process/code-standards/JavaScript','334'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/development-process/code-standards/React',
        component: ComponentCreator('/myDocusaurus/docs/development-process/code-standards/React','f3e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/development-process/flow',
        component: ComponentCreator('/myDocusaurus/docs/development-process/flow','2c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/git',
        component: ComponentCreator('/myDocusaurus/docs/git','744'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/jest',
        component: ComponentCreator('/myDocusaurus/docs/jest','65e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/notes/sass',
        component: ComponentCreator('/myDocusaurus/docs/notes/sass','fb0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/nvm',
        component: ComponentCreator('/myDocusaurus/docs/nvm','b16'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/ts',
        component: ComponentCreator('/myDocusaurus/docs/ts','e1b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/congratulations','416'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/create-a-blog-post','1d5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/create-a-document','3c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/create-a-page','ba6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/deploy-your-site','c2b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-basics/markdown-features','317'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-extras/manage-docs-versions','b2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/myDocusaurus/docs/tutorial-extras/translate-your-site','246'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myDocusaurus/docs/vscode',
        component: ComponentCreator('/myDocusaurus/docs/vscode','41a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/myDocusaurus/',
    component: ComponentCreator('/myDocusaurus/','d54'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
