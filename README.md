<div align="center">

<img src="./public/logo.png" alt="VK Group" width="92" />

# VK Group — Solar Platform

**A marketing website and an enterprise staff-management portal, in one Next.js app.**

Public solar-energy site for customers · role-based internal portal for the sales hierarchy — sharing one green design language, behind one auth wall.

<br />

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Framer Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![JWT](https://img.shields.io/badge/JWT_(jose)-D63AFF?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://github.com/panva/jose)
[![Recharts](https://img.shields.io/badge/Recharts-22C55E?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)

</div>

---

## ✨ Overview

This repo is **one Next.js App Router project** split into two route groups:

| Area | Routes | Who | Auth |
| :-- | :-- | :-- | :-- |
| 🌞 **Public site** | `/`, `/payment` | Customers & visitors | Open |
| 🔐 **Staff portal** | `/dashboard`, `/employees`, `/prospects`, `/hierarchy`, `/reports`, `/activity`, `/settings` | Employees | Protected by middleware |

A **Staff Login** button on the public navbar is the only bridge between them. Everything under the portal is gated server-side — unauthenticated visitors are redirected to `/login`, and portal APIs return `401`.

---

## 🧭 Features

### 🌞 Public website
- Solar-energy marketing site (hero, services, why-us, testimonials, contact)
- Customer **payment portal** (`/payment`) backed by an external payments API
- Fully responsive, single-page with smooth anchor navigation

### 🔐 Staff Management Portal
- **Auth** — email + password, JWT in an httpOnly cookie, optional 30-day "remember me"
- **5-level hierarchy** — `Owner → National Head → CSM → ASM → CPE`, enforced everywhere
- **RBAC** — each role sees only its own subtree via a materialized ancestor path (one indexed query, no recursion)
- **Employees** — create · edit · deactivate · **transfer** (re-parents the whole sub-team atomically) · rich profiles
- **Prospects** — field-visit records, default **last-3-days** view, search · filters · date-range · pagination · CSV export
- **Dashboards** — role-conditional widgets, animated KPIs, trend/donut/leaderboard charts
- **Hierarchy** — interactive SVG org chart with pan · zoom · expand/collapse
- **Reports & Settings** — analytics + export, self-service profile/password, light/dark theme
- **Activity log** — every mutation recorded and filterable

---

## 🛠️ Tech Stack

| Layer | Tools |
| :-- | :-- |
| **Framework** | Next.js 16 (App Router) · React 19 · TypeScript |
| **Styling** | Tailwind CSS v4 · shadcn/ui (radix-nova) · Framer Motion |
| **Data** | MongoDB Atlas · Prisma ORM |
| **Auth** | jose (JWT) · bcryptjs |
| **Viz** | Recharts · custom SVG org chart |
| **Tooling** | ESLint · tsx · Turbopack |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 20+**
- A **MongoDB Atlas** cluster (the Prisma MongoDB connector needs a replica set — Atlas free tier works)

### 1. Clone & install
```bash
git clone https://github.com/kshitij0305/Vkgroup.git
cd Vkgroup
npm install
```

### 2. Configure environment
Create a `.env` in the project root:
```env
# MongoDB Atlas (Connect → Drivers), keep the /vk_staff database name
DATABASE_URL="mongodb+srv://USER:PASSWORD@cluster.xxxxx.mongodb.net/vk_staff?retryWrites=true&w=majority"

# Sign session JWTs — generate: openssl rand -base64 32
JWT_SECRET="a-long-random-string"
```

### 3. Set up the database
```bash
npm run db:push    # sync schema + indexes to MongoDB
npm run db:seed    # seed a demo company (~45 staff, ~700 prospects)
```

### 4. Run
```bash
npm run dev
```
Open **http://localhost:3000** → click **Staff Login**.

---

## 🔑 Demo Logins

After seeding, every account uses the password `demo1234`:

| Role | Email | Sees |
| :-- | :-- | :-- |
| Owner | `owner@vkgroup.in` | Whole company, all analytics |
| National Head | `nationalhead@vkgroup.in` | Company-wide view |
| CSM | `csm@vkgroup.in` | Their circle (ASMs + CPEs) |
| ASM | `asm@vkgroup.in` | Their CPEs + team leaderboard |
| CPE | `cpe@vkgroup.in` | Personal dashboard + prospect entry |

> 💡 Try **Ctrl + K** for the command palette, the theme toggle, and dragging/zooming the hierarchy chart.

---

## 📜 Scripts

| Command | Description |
| :-- | :-- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run db:push` | Push Prisma schema to MongoDB |
| `npm run db:seed` | Wipe + seed the demo company |

---

## 🗂️ Project Structure

```
app/
├── (public)/            # marketing site — open
│   ├── page.tsx         #   landing
│   ├── login/           #   staff sign-in
│   └── payment/         #   customer payment portal
├── (portal)/            # staff portal — auth-gated
│   ├── dashboard/  employees/  prospects/
│   ├── hierarchy/  reports/    activity/  settings/
│   └── layout.tsx       #   sidebar · topbar · command palette
└── api/                 # auth · employees · prospects · activity · account
middleware.ts            # protects every portal route + API
components/              # ui (shadcn) · shell · shared widgets
features/                # employees · prospects · dashboard · hierarchy · …
lib/                     # auth (JWT) · rbac · prisma · constants
prisma/schema.prisma     # User · Prospect · ActivityLog
```

---

## 🔒 Security

- Sessions are signed JWTs in **httpOnly, SameSite cookies** (`Secure` in production)
- **Brute-force protection** on login (per-IP + per-account rate limits)
- **No user enumeration** — identical response + timing for unknown email / wrong password
- **CSRF** — SameSite cookies + Origin checks on every mutation
- Security headers: CSP · `X-Frame-Options: DENY` · HSTS · `nosniff`
- All RBAC scoping enforced **server-side**; inputs validated with Zod; Prisma parameterizes every query
- Secrets live only in `.env` (gitignored) — never committed

---

<div align="center">

Built for **VK Group** · APN Solar Energy Pvt. Ltd.

</div>
