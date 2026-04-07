# Aaron Judge — Data Dive Site

This is **Aaron Judge**, a fan site for the Yankees captain. It's part of [Operation Data Dive](https://data-dive-sean-tarzys-projects.vercel.app) — Sean's cross-site analytics framework.

## Quick stats lookup

Before answering questions about traffic, engagement, or user behavior, fetch live data:
```bash
API_KEY=$(grep API_KEY ~/Development/code/data-dive/.env.local | cut -d= -f2)
curl -s -H "X-API-Key: $API_KEY" "https://data-dive-sean-tarzys-projects.vercel.app/api/status/aaron-judge?period=7d"
```

## Site facts

- **GA4 property:** `properties/530423554` (measurement ID `G-8YJK1W7906`)
- **Category:** fan-site
- **Framework:** Next.js 14 App Router (uses .jsx files, not .tsx)
- **Analytics module:** `src/lib/analytics.js` — Tier 1 universal + fan-site Tier 2 events

## Site-specific gotchas

- This is a JavaScript project (not TypeScript) — `analytics.js` not `analytics.ts`
- Has a trivia game in `TriviaGame.jsx` — tracks `trackGamePlay` for answers (with correct/incorrect), completion (with score), restart
- News feed outbound links tracked
- Contact form submission tracked

For full Data Dive context see `~/.claude/CLAUDE.md`.
