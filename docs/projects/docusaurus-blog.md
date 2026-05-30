---
title: Docusaurus Blog
description: Setting up and personalizing a Docusaurus blog hosted on GitHub Pages.
---

# Docusaurus Blog

## Overview

This project documents how I set up and personalized a Docusaurus-based developer blog, hosted on GitHub Pages. The blog serves as a portfolio and learning journal for my DevSecOps journey.

The project is based on the [developer-akademie-starter](https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template) template.

## Configuration Steps

### 1. Cloning the Template

I started by forking and cloning the template repository provided by the Developer Akademie:

```bash
git clone https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template
```

### 2. Personalizing `docusaurus.config.ts`

The following changes were made to the configuration file:

- Updated the `title` and `tagline` to reflect my personal blog
- Set the `url` default value to my GitHub Pages URL
- Added a `GIT_REPOSITORY_URL` environment variable and used it for `editUrl` in both the docs and blog sections
- Updated the `navbar` title and GitHub link to point to my repository
- Updated the `footer`: added a Projects link to the Docs column, removed the Community column, and added a Template link in the More column
- Updated the `copyright` message

### 3. Setting up Environment Variables

I created a `.env` file based on `example.env` and filled in the required values:

- `DEPLOYMENT_URL`: My GitHub Pages URL
- `BASE_URL`: The base path of my repository
- `GITHUB_ORG`: My GitHub username
- `GITHUB_PROJECT`: My repository name
- `GIT_REPOSITORY_URL`: The full URL to my GitHub repository

### 4. Adding a `.gitignore`

The template did not include a `.gitignore`. I created one to prevent committing generated files:
exit
cat > docs/projects/docusaurus-blog.md << 'ENDOFFILE'
---
title: Docusaurus Blog
description: Setting up and personalizing a Docusaurus blog hosted on GitHub Pages.
---

# Docusaurus Blog

## Overview

This project documents how I set up and personalized a Docusaurus-based developer blog, hosted on GitHub Pages. The blog serves as a portfolio and learning journal for my DevSecOps journey.

The project is based on the [developer-akademie-starter](https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template) template.

## Configuration Steps

### 1. Cloning the Template

I started by forking and cloning the template repository provided by the Developer Akademie.

### 2. Personalizing docusaurus.config.ts

- Updated the title and tagline to reflect my personal blog
- Set the url default value to my GitHub Pages URL
- Added a GIT_REPOSITORY_URL environment variable and used it for editUrl in both the docs and blog sections
- Updated the navbar title and GitHub link to point to my repository
- Updated the footer: added a Projects link to the Docs column, removed the Community column, and added a Template link in the More column
- Updated the copyright message

### 3. Setting up Environment Variables

I created a .env file based on example.env and filled in the required values: DEPLOYMENT_URL, BASE_URL, GITHUB_ORG, GITHUB_PROJECT, and GIT_REPOSITORY_URL.

### 4. Adding a .gitignore

The template did not include a .gitignore. I created one to prevent committing generated files such as node_modules/, build/, .docusaurus/, and .env.

### 5. Setting up Automatic Deployment

I added a GitHub Actions workflow at .github/workflows/deploy.yml that automatically builds and deploys the site to GitHub Pages on every push to the main branch. In the GitHub repository settings under Pages, I set the source to GitHub Actions.

### 6. Customizing the Design

I updated src/css/custom.css to apply a custom Indigo/Violet color scheme and set the Inter and JetBrains Mono fonts.

## Links

- Live Site: https://DevSecOps-Justin.github.io/Docusaurus-Lern-Tagebuch/
- Repository: https://github.com/DevSecOps-Justin/Docusaurus-Lern-Tagebuch
ENDOFFILE
