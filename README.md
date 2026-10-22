# Pickup Tracker

A public-facing SvelteKit vehicle shortlist and watchlist for pickup shopping in Jamaica.

## Stack

- SvelteKit + TypeScript
- Tailwind CSS
- Static vehicle data in `src/lib/data/vehicles.ts`
- Vercel hosting

No database or CMS. Vehicle updates are committed to GitHub and deployed by Vercel.

## Development

```sh
npm install
npm run dev
```

## Deployment

Import this repository into Vercel and use the SvelteKit framework preset. Keep repository visibility private; the deployment can be public.
