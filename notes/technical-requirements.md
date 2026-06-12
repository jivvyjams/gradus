## Technical Requirements

Every project must meet all of the following requirements regardless of topic. These are not optional —
they exist to make sure you practice everything from weeks 1–6.

### Pages and routing

- At least **two pages** connected with React Router
- At least **one dynamic route** using `useParams` — for example `/movies/:id` that loads a detail page for a specific item
- A **404 not found page** that renders when no route matches
- A **navigation component** using `NavLink` with active link styling, visible on every page

### Data fetching

- At least **one API integration** using `useEffect`
- All three async states handled: **loading**, **error**, and **success**
- `AbortController` cleanup on any effect that fetches data
- `response.ok` checked before parsing JSON

### Forms

- At least **one form** with controlled inputs — a search field, a filter, a contact form, or similar
- At least **one validation rule** with an error message shown to the user

### TypeScript

- TypeScript used throughout (no `any`)
- An **interface or type** defined for every piece of API data you use
- Props typed with interfaces on every component

### Styling

- **Tailwind v4** for all styling — no separate CSS files
- **Responsive layout** — usable on mobile and desktop
- **Dark mode toggle** using `useState` that applies `dark:` variants
- At least one **custom colour token** defined in `@theme`
- Visible **hover and focus-visible states** on all interactive elements

### Deployment

- Project pushed to a **public GitHub repository**
- Deployed to **Vercel** at a live URL
- Any API keys stored as **environment variables** — not hardcoded in the source

### Code quality

- Components split into a logical **folder structure** (`pages/`, `components/`)
- Meaningful **variable and function names** throughout

## What You're Not Expected to Do

- Authentication or login flows
- A backend or database

Keep scope tight. A well-built two-page app is better than a half-finished five-page one.

## Deliverables

By the end of the week, submit:

1. **GitHub repository URL** — public, with a descriptive README that includes what the project does and how to run it locally
2. **Live Vercel URL** — deployed and accessible
3. **Completed project brief** — the one you submitted at the start, updated if anything changed during the week
