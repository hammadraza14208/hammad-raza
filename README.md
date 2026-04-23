# Lumina Atelier

A premium, luxury-style marketing website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and React Hook Form.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript with `strict` mode
- Tailwind CSS with JIT-enabled class scanning
- Framer Motion
- React Hook Form

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the local app
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run check` runs TypeScript validation

## Project Structure

```text
app/                  App Router pages, metadata, sitemap, robots
components/           Shared UI, layout, page features, and form logic
content/              Typed content for services, team, case studies, blog, and social feed
lib/                  Small utilities
```

## Environment Variables

Copy `.env.example` to `.env.local` and adjust values if needed.

## Deployment

### Frontend on Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Set environment variables from `.env.example`.
4. Use the default Next.js build settings:
   - Build command: `npm run build`
   - Output: `.next`
5. Deploy.

### Frontend on Netlify

1. Connect the repository in Netlify.
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add the environment variables from `.env.example`.
4. Enable the Netlify Next.js runtime when prompted.

### Optional Backend on Render or Railway

The contact form currently validates client-side and is ready to connect to an API route, server action, CRM webhook, or external backend.

- Render:
  1. Create a new Web Service.
  2. Point it at your API repository or monorepo backend folder.
  3. Add environment variables for email, CRM, or database credentials.
- Railway:
  1. Create a new project from your repository.
  2. Add the required secrets.
  3. Deploy the API and connect the form submission endpoint from this frontend.

## Production Notes

- Replace the sample URLs and contact values with your real brand details.
- The form currently logs successful submissions in the browser console until a backend is connected.
- Remote images are configured for Unsplash and Pexels in `next.config.ts`.
# video-agency-work-2
