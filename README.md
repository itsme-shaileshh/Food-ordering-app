# 🍽️ SwadSeva - Indian Food Ordering App

A full-stack food ordering platform built with Next.js, MongoDB, Prisma, and Tailwind CSS. Features dual modes: Restaurant ordering and NSUT Canteen ordering with complete cart management, checkout flow, and order tracking.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🏪 **Dual Mode System**: Switch between Restaurant and Canteen ordering
- 🛒 **Shopping Cart**: Add items, manage quantities with real-time updates
- 📦 **Order Tracking**: Real-time order status with delivery timeline
- 🚚 **Delivery & Takeaway**: Support for both delivery and pickup orders
- 💳 **Complete Checkout Flow**: Customer details, order confirmation, and summary
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Beautiful UI**: Animated components with Framer Motion and Tailwind CSS
- 🔔 **Toast Notifications**: Real-time feedback for user actions
- 💾 **Cart Persistence**: Cart data saved in localStorage
- 🍕 **Indian Cuisine Focus**: Authentic Indian restaurants and menu items

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

### Backend
- **API**: Next.js API Routes
- **Database**: MongoDB (via MongoDB Atlas)
- **ORM**: Prisma 6
- **State Management**: Zustand

### Development Tools
# 🍽️ SwadSeva - Food Ordering App

An opinionated full-stack food ordering application built with Next.js (App Router), Prisma and MongoDB, Tailwind CSS and Zustand for state management. The app includes restaurant and canteen flows, cart management, checkout, and order tracking.

## Badges

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## Key Features

- Dual ordering modes: Restaurant and NSUT Canteen
- Cart with quantity management and persistence
- Checkout flow and order summary
- Order tracking and status updates
- Responsive UI with Tailwind CSS and Framer Motion

## Tech Stack

- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Prisma + MongoDB Atlas
- NextAuth for authentication
- Zustand for client state

## Prerequisites

- Node.js 18+ and npm
- A MongoDB Atlas cluster (or any MongoDB URI)
- (Optional) pnpm/yarn if preferred

## Installation

1. Clone the repo:

```powershell
git clone <repo-url>
cd "c:\\Users\\ASUS\\Desktop\\New folder 3\\Food-ordering-app"
```

2. Install dependencies:

```powershell
npm install
```

3. Environment

Create a `.env` file in the project root and set at minimum the database and NextAuth variables required by your configuration (example names shown):

```
DATABASE_URL="your_prisma_mongodb_connection_string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="a_long_random_secret"
```

4. Prisma (generate & push schema + seed):

```powershell
npm run prisma:generate
npm run prisma:push
npm run prisma:seed
```

5. Run development server:

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` — Start Next.js dev server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run linter
- `npm run prisma:generate` — Generate Prisma client
- `npm run prisma:push` — Push Prisma schema to DB
- `npm run prisma:seed` — Run Prisma seed script

## Project Structure

Root overview (important files/folders):

```
.
├─ prisma/
│  ├─ schema.prisma        # Prisma schema (MongoDB datasource)
│  └─ seed.ts              # Seed script
├─ public/
│  └─ images/              # Static images (canteen, menu, restaurants)
├─ src/
│  ├─ app/                 # Next.js App Router: pages and API routes
│  │  ├─ api/              # API route handlers
│  │  │  ├─ auth/[...nextauth]/route.ts
│  │  │  ├─ menu/[id]/route.ts
│  │  │  ├─ orders/route.ts
│  │  │  ├─ orders/[id]/status/route.ts
│  │  │  ├─ profile/route.ts
│  │  │  └─ restaurants/route.ts
│  │  ├─ canteen/page.tsx
│  │  ├─ cart/page.tsx
│  │  ├─ checkout/page.tsx
│  │  ├─ order-summary/page.tsx
│  │  ├─ order-tracking/page.tsx
│  │  ├─ profile/page.tsx
│  │  ├─ restaurant/page.tsx
│  │  └─ restaurant/[id]/page.tsx
│  ├─ components/          # React components (Navbar, AuthProvider, etc.)
│  ├─ lib/                 # Helpers (e.g., `prisma.ts` client)
│  ├─ store/               # Zustand stores (e.g., `cartStore.ts`)
│  └─ types/               # Type definitions
└─ README.md
```

## Notable Files

- `src/app/api/auth/[...nextauth]/route.ts` — NextAuth setup and adapter
- `src/lib/prisma.ts` — Prisma client instance
- `src/store/cartStore.ts` — Cart state using Zustand
- `prisma/schema.prisma` — DB schema (MongoDB)

## Notes & Next Steps

- Ensure `DATABASE_URL` points to a MongoDB Atlas URI for Prisma to work.
- Configure NextAuth providers and secrets in `.env`.
- If you want help adding CI, Docker, or deploying to Vercel, tell me and I can scaffold those steps.

---

If you want this README expanded with screenshots, code examples, or deployment instructions (Vercel), I can add those next.
