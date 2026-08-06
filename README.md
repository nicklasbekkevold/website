# Website

The source code for my internet magazine, where I share my thoughts and experiences.

## Project Structure

```
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   ├── pages/
│   │   │   └── about.md
│   │   └── posts/
│   │       └── some-blog-posts.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # user-defined configurations
└── astro.config.ts
```

All blog posts are stored in `src/content/posts` directory.

## Tech Stack

**Main Framework** - [Astro](https://astro.build/)
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)
**Styling** - [TailwindCSS](https://tailwindcss.com/)
**UI/UX** - [Figma Design File](https://www.figma.com/community/file/1356898632249991861)
**Static Searchh** - [Pagefind](https://pagefind.app)
**Icons** - [Tablers](https://tabler-icons.io/)
**Deployment** - [Vercel](https://vercel.com)
**Code Formatting** - [Prettier](https://prettier.io/)
**Linting** - [ESLint](https://eslint.org)
**Dynamic OG images** - [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) + [Astro Fonts](https://docs.astro.build/en/guides/fonts/)

## Running Locally

You can start using this project locally by running the following command in your desired directory:

Then start the project by running the following commands:

```bash
# install dependencies
pnpm install

# start running the project
pnpm dev
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm dev`          | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm format:check` | Check code format with Prettier                                                                                                  |
| `pnpm format`       | Format codes with Prettier                                                                                                       |
| `pnpm sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm lint`         | Lint with ESLint                                                                                                                 |

## Acknowledgements

This website is based on [@satnaing](https://github.com/satnaing)'s excellent Astro theme called [AstroPaper](https://github.com/satnaing/astro-paper). Thank you!

## License

Licensed under the MIT License, Copyright © 2026
