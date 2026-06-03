# የኛstudio

Professional agency portfolio site for web apps, mobile apps, business profiles, UI/UX, and social media work.

## Stack

- Next.js 16.2.6 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

Copy `.env.example` to `.env.local` and add the Telegram bot credentials used by the contact form:

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

These variables must also be configured in the production host, such as Vercel project environment variables.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deployment Checklist

- Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in production.
- Run `npm run lint`.
- Run `npm run build`.
- Confirm the contact form sends a test message through `/api/send_telegram`.
