# Nabil Hamada Portfolio

Bilingual Arabic / English portfolio for Nabil Hamada, focused on PHP, Laravel, MySQL performance, secure payments, real-time features, and DevOps.

## Local development

```bash
pnpm install
pnpm dev
```

The production build is generated with:

```bash
pnpm check
pnpm build
```

## GitHub Pages

The repository is configured for the project-site URL `https://nabil12ful.github.io/portfolio/`. The workflow in `.github/workflows/deploy-pages.yml` runs on pushes to `master` or `main`, validates TypeScript, builds the static site, and publishes `dist/public` through GitHub Pages.

In the GitHub repository settings, open **Pages**, choose **GitHub Actions** as the source, and push to `master`. No paid hosting or server is required.
