# Finance App

A simple, mobile-friendly web app for investors. Instantly calculates compound interest and your FIRE (Financial Independence, Retire Early) number. No frameworks or build tools required—just open in your browser.

---

## Commit Safeguards

This project now follows the same commit-quality guardrail style used in `movies-we-watched`.

- Husky pre-commit hook runs automatically on each commit.
- The hook blocks common accidental secret/data leaks:
- Dangerous file types (`.pem`, `.key`, dump/archive variants).
- Real `.env*` files (except `.env.example`).
- Common backup/dump folders.
- Obvious token/credential patterns in staged additions.
- Staged web/docs files are auto-formatted with Prettier and re-staged.
- Pre-commit also runs HTML lint checks and inline JavaScript type checks.
- Commit exits with a clear message when checks fail.

## Copilot Project Instructions

This repo now includes project-scoped Copilot guidance in `.github/copilot-instructions.md`.
General multi-agent guidance is also available in `AGENTS.md`.

- It tells Copilot to preserve the framework-free static structure.
- It enforces mobile/accessibility guardrails and finance calculation consistency.
- It reminds contributors to validate both calculators, charts, and menu behavior after changes.

### One-time setup

From repo root:

```powershell
npm install
```

This installs dev tooling and activates Husky via the `prepare` script.

### Available scripts

- `npm run format` - write formatting for `html/json/md/css/js` files.
- `npm run format:check` - verify formatting (used by pre-commit).
- `npm run lint` - lint `index.html` with HTMLHint.
- `npm run typecheck` - extract inline scripts from `index.html` and type-check with TypeScript.
- `npm run commit:prep` - run format, lint, and typecheck readiness checks manually.

---

## Tools

### 1. Compound Me

**Purpose:**
Calculate how your investments grow over time with compound interest.

**Features:**

- Starting investment (required)
- Annual contribution (optional)
- Expense ratio (optional)
- AUM fee (optional)
- Annual rate of return (required)
- Number of years (required)
- Inflation (optional)
- Results: final balance, total contributions, total interest earned
- Interactive chart: stacked area graph showing principal, contributions, and growth over time

**How to Use:**

1. Open `index.html` in your browser.
2. Use the hamburger menu (top left) to select "Compound Me" if not already selected.
3. Enter your investment details and click **Calculate**.
4. View your results instantly below the form.

---

### 2. FIRE Calculator

**Purpose:**
Find your FIRE number (the amount needed to retire) and estimate your timeline to financial independence.

**Features:**

- Current nest egg
- Monthly contribution
- Expected annual return
- Total annual fees
- Annual inflation
- Annual retirement spending
- Safe withdrawal rate (selectable)
- Results: FIRE number, progress to FI, estimated years/months to FI, fee penalty
- Interactive chart: portfolio growth vs. FIRE target over time

**How to Use:**

1. Open `index.html` in your browser.
2. Use the hamburger menu (top left) to select "FIRE Calculator".
3. Enter your financial details and click **Calculate**.
4. View your FIRE number, timeline, and fee impact instantly below the form.

---

## Navigation & UI

- Use the hamburger menu (top left) to switch between calculators.
- Side menu includes a back arrow and page links.
- Mobile-first, responsive design with large tap targets and consistent icon sizing.

---

## Attribution

Icons by [Icons8](https://icons8.com/). Attribution required by Icons8.

## License

MIT
