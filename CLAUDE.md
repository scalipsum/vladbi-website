# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15+ blog application that uses Notion as a headless CMS. The app fetches blog posts from a Notion database and renders them as static pages with MDX support.

## Development Commands

- `bun run dev` - Start development server with Turbopack (includes post caching)
- `bun run build` - Build production application (includes post caching)
- `bun run start` - Start production server
- `bun run lint` - Run Next.js linter
- `bun run cache:posts` - Cache posts from Notion (runs via tsx scripts/cache-posts.ts)

## Environment Setup

Required environment variables in `.env.local`:
- `NOTION_TOKEN` - Notion integration token
- `NOTION_DATABASE_ID` - Notion database ID
- `NEXT_PUBLIC_SITE_URL` - Site URL for metadata

## Architecture Overview

### Core Structure
- **App Router**: Uses Next.js 15+ App Router pattern in `src/app/`
- **CMS Integration**: Notion API via `@notionhq/client` and `notion-to-md`
- **Styling**: Tailwind CSS with shadcn/ui components
- **Performance**: Posts are pre-cached to `posts-cache.json` to avoid API rate limits during builds

### Key Components
- `src/lib/notion.ts` - Notion API client, data fetching, and post transformation
- `scripts/cache-posts.ts` - Builds static cache of published posts from Notion
- `src/components/mdx-component.tsx` - Custom MDX rendering with syntax highlighting
- `src/app/posts/[slug]/page.tsx` - Dynamic blog post pages

### Data Flow
1. Posts are fetched from Notion database filtered by "Published" status
2. Content is converted from Notion blocks to Markdown via `notion-to-md`
3. Posts are cached locally in `posts-cache.json` during build/dev startup
4. Pages read from cache for fast rendering (no live Notion API calls during page requests)

### Post Schema
Posts use these Notion database properties:
- `Title` (required) - Post title and slug generation
- `Status` - Publication status (must be "Published")
- `Published Date` - Post date for sorting
- `Author` - Post author from Notion people
- `Tags` - Multi-select tags
- `Category` - Single select category
- `Featured Image` - Cover image URL

## Important Notes

- **Cache dependency**: Development and builds depend on successful post caching. If Notion API fails, builds will fail.
- **Slug generation**: Post slugs are auto-generated from titles (lowercase, dash-separated)
- **Content rendering**: Uses `react-markdown` with `remark-gfm` for GitHub Flavored Markdown
- **Package manager**: Project uses Bun (note `bun.lockb` file)
- **TypeScript**: Full TypeScript setup with strict mode enabled

## Component Architecture

The project follows a component-based architecture:
- UI components in `src/components/ui/` (shadcn/ui)
- Layout components in `src/components/`
- Custom hooks in `src/hooks/`
- Utilities and shared logic in `src/lib/`

When modifying Notion integration or post structure, update both the Post interface in `notion.ts` and the caching logic in `scripts/cache-posts.ts`.