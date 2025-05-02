## NewTube
A Youtube clone built with [Next.js 15](https://nextjs.org/), [PostgreSQL](https://www.postgresql.org/) database hosted on [Neon](https://neon.tech/) and deployed on [Vercel](https://vercel.com/)

### Other tools:
- [bun](https://bun.sh/) - used as Javascript runtime and package manager. It's amazing and blazing fast.
- [Drizzle ORM](https://orm.drizzle.team/) - a headless ORM which supports both relational and SQL-like queries
- [Clerk](https://clerk.com/) - for User and Auth Management
- [ngrok](https://ngrok.com/) - an API gateway (and much more). Used here to generate a free static public domain which is used to tunnel the app from localhost onto it
- [tRPC](https://trpc.io/) - RPC(Remote Procedure Call) with Typescript support. 
- [upstash](https://upstash.com/) - A Serverless Data Platform used to create a Redis database and add RateLimiting to tRPC procedures.

### How to run
- Ensure `bun` is installed 
- Clone this repo
- Run `bun install`
- Sign up on the above tools and create resources as mentioned
- Create an `.env.local` file in the root directory with the following variables
  - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`<your-publishable-key>`
  - CLERK_SECRET_KEY=`<your-secret-key>`
  - NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  - NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  - NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
  - NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
  - CLERK_SIGNING_SECRET=`<your-signing-secret>`
  - UPSTASH_REDIS_REST_URL=`<your-redis-rest-url>`
  - UPSTASH_REDIS_REST_TOKEN=`<your-redis-rest-token>`
  - DATABASE_URL=`<your-database-url>`
- Run `bunx drizzle-kit push`
- Run `bun run dev:all`

### Other useful commands
- `bunx drizzle-kit studio` - Open your PostgreSQL Databse locally in your browser
- `bunx drizzle-kit generate` - Generate database migrations
- `bunx drizzle-kit push` - Push your database migrations