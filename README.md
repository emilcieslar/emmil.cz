# Next.js Blog

This repository contains a simple blog powered by [Next.js](https://nextjs.org/). Posts are written in Markdown and stored in the `posts/` directory.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` to view the blog.

## Writing Posts

Add a new Markdown file inside the `posts/` directory. Each file needs front matter with a `title` and `date`:

```markdown
---
title: My New Post
date: 2024-01-01
---

Post content here.
```

The filename (without `.md`) becomes the post URL.

## Deployment

This project is configured to deploy automatically to [Vercel](https://vercel.com/) using GitHub Actions. Create the following secrets in your GitHub repository settings:

- `VERCEL_TOKEN` – a Vercel token with access to your account
- `VERCEL_ORG_ID` – your Vercel organization ID
- `VERCEL_PROJECT_ID` – the project ID created in Vercel

On every push to the `main` branch the workflow in `.github/workflows/deploy.yml` will build and deploy the site.

You can also deploy manually using the Vercel CLI:

```bash
npm run build
npx vercel --prod
```

