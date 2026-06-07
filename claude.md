**Single /dashboard route** — use role-based conditional rendering:
```typescript
if (role === "asm") → show ASM widgets
if (role === "cpe") → show CPE widgets
```
Do NOT create separate /asm-dashboard, /cpe-dashboard, etc.

---

## 8. PROPOSED FOLDER STRUCTURE (to add)
vkgroup.ltd/           → Public marketing site (existing)
vkgroup.ltd/login      → Employee login
vkgroup.ltd/dashboard  → Role-based dashboard (one route, different widgets per role)

**Single /dashboard route** — use role-based conditional rendering:
```typescript
if (role === "asm") → show ASM widgets
if (role === "cpe") → show CPE widgets
```
Do NOT create separate /asm-dashboard, /cpe-dashboard, etc.

---

## 8. PROPOSED FOLDER STRUCTURE (to add)
---

## 9. DASHBOARD REQUIREMENTS

### Chairman / National Head dashboard:
- Total active employees count
- Total prospects collected (last 7 days / 30 days)
- Performance ranking: top ASMs, top CPEs
- Prospects by status (interested vs not interested) — chart
- Activity feed

### ASM dashboard:
- CPEs under them
- Prospects submitted by each CPE
- CPE status (active/inactive)
- Performance table

### CPE dashboard:
- Submit new prospect (form)
- My prospect list (default: last 3 days)
- Filter prospects by status

### Prospect table filters (all roles):
- Date range
- Status (interested / not interested / follow-up)
- Employee (who collected)

---

## 10. AUTHENTICATION

- Email + password login (JWT or NextAuth)
- Sessions with role stored in token
- Protected routes via middleware
- No public registration — accounts are created by managers only

---

## 11. FEATURES — PHASED PLAN

### Phase 1 (MVP):
- Authentication (login/logout, role-based session)
- Employee management (create, view, activate/deactivate)
- Prospect submission by CPE
- Role-based dashboard with basic stats
- Activity logs

### Phase 2:
- Performance analytics (charts, trends)
- Employee hierarchy tree visualization
- Attendance tracking (CPE "Start Day" button)
- Excel/CSV export of reports

### Phase 3 (SaaS Conversion):
- Multi-company / multi-tenant architecture
- Company isolation
- Subscription plans
- AI insights

---

## 12. NAMING CONVENTION

Use **"Prospects"** (not "files", not "leads") for customer contact records collected by CPEs.

---

## 13. TECHNICAL DECISIONS MADE

1. **Single monorepo** — no separate frontend/backend
2. **Next.js App Router** — API routes live in `app/api/`
3. **MongoDB + Prisma** — flexible schema, easy relations
4. **managerId pattern** — entire hierarchy via one field
5. **One /dashboard route** — role-conditional UI, not separate pages
6. **RBAC in middleware** — enforced server-side on every API call
7. **No CRM features** — no conversion tracking, no sales pipeline in V1
8. **Shadcn/UI** — already configured, use for all new components

---

## 14. WHAT'S NOT BUILT YET (Start Here)

The existing repo only has:
- Public marketing website (VK Group solar energy pages)
- Razorpay payment portal (`/app/payment/`)

**Everything staff-portal-related needs to be built from scratch:**
- Auth system
- User/Employee management
- Prospect management
- Dashboard pages
- RBAC middleware
- MongoDB connection + Prisma schema
- API routes

---

## 15. START ORDER (recommended)

1. Set up MongoDB connection + Prisma schema (Users, Prospects, ActivityLogs)
2. Build authentication (NextAuth or custom JWT — `/login` page + API)
3. Build RBAC middleware (protect all `/dashboard` and `/api/` routes)
4. Build employee creation flow (respects who-can-create-whom rules)
5. Build prospect submission form (CPE facing)
6. Build dashboard pages (role-conditional widgets)
7. Build reports/analytics