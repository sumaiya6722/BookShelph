# BookShelph

BookShelph is a book discovery and borrowing interface built with Next.js. Browse a sample catalog, search by title, filter by category, view book details, and create an account to access a profile.

## Features

- Home page with featured titles, a promotional banner, and reader testimonials.
- Catalog of 12 sample books loaded from `public/data.json`.
- Category filters for Science, Tech, and Story.
- Title search and individual book detail pages.
- Email/password sign-up and login, plus Google sign-in through Better Auth.
- Profile page with editable display name and image URL.
- Responsive layout with toast notifications.

## Tech stack

- Next.js 16 (App Router) and React 19
- Better Auth with MongoDB
- Tailwind CSS 4, DaisyUI, and HeroUI
- `react-hook-form` for auth forms

## Getting started

### Requirements

- Node.js compatible with Next.js 16
- npm
- A MongoDB database
- Google OAuth credentials if you want Google sign-in

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root:

```dotenv
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENTID=<your-google-oauth-client-id>
GOOGLE_SECRET=<your-google-oauth-client-secret>
```

`MONGO_URL` is required for authentication storage. Google credentials are needed only for Google sign-in. Register `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI in your Google OAuth client. Keep `.env` out of version control.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server using webpack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  (auth)/login/          Login page
  (auth)/signup/         Registration page
  allBooks/              Catalog and book detail routes
  api/auth/[...all]/     Better Auth API handler
  components/            Book cards, search, and borrow button
  homepage/              Home page sections
  lib/                   Better Auth server and client setup
  profile/               Profile and profile editor
public/
  data.json              Sample book catalog
```

## Current scope

This repository currently provides a catalog and authentication demo. Book data is static JSON, and the Borrow button only displays a success toast; it does not record a loan or change availability. Search currently matches book titles (the input hint also mentions author). The home page feature and testimonial sections are presentation content.
