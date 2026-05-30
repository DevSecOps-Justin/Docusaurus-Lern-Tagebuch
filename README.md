# Justin Tasa – DevSecOps Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts a developer blog built with Docusaurus. It includes tools and scripts for creating, managing, and deploying static web content. The software supports rapid local development, customizable theming, and seamless deployment to GitHub Pages.

## Table of Contents

- [Quickstart](#quickstart)
- [Repository Structure](#repository-structure)
- [Deployment](#deployment)

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (package manager for faster and more efficient dependency handling)
- [Docker](https://www.docker.com/products/docker-desktop) (only required if deploying using NGINX)

### 1. Installation

```bash
pnpm install
```

### 2. Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 3. Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Repository Structure

The repository is organized as follows:

- `blog/`: Contains markdown files for blog posts.
- `docs/`: Contains markdown files for documentation.
- `src/`: Contains custom React components, CSS, and JavaScript for additional functionality or theming.
- `static/`: Stores static assets (e.g., images, icons) served directly without processing.
- `sidebars.ts`: Configures the structure of sidebars in the documentation section.
- `docusaurus.config.ts`: Main configuration file for customizing and managing Docusaurus behavior.
- `build/`: Generated after running `pnpm build`. Contains the static website files ready for deployment.

## Deployment

This website is automatically deployed to GitHub Pages using a prepared GitHub Actions workflow. The deployment is triggered automatically whenever a commit is pushed to the main branch.
