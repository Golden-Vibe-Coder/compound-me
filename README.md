# Finance App

A simple web app for investors with mobile-first and desktop-optimized layouts. Instantly calculates compound interest and your FIRE (Financial Independence, Retire Early) number. No frameworks or build tools required-just open in your browser.

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
2. Use the header tabs to select "Compound Me" if not already selected.
3. Enter your investment details and click **Calculate**.
4. View your results instantly below the form.

On desktop screens, the calculator and results render side-by-side so you can compare inputs, summary values, and charts without excessive scrolling.

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
2. Use the header tabs to select "FIRE Calculator".
3. Enter your financial details and click **Calculate**.
4. View your FIRE number, timeline, and fee impact instantly below the form.

On desktop screens, the FIRE inputs stay visible while results and charts render in a second column for easier planning workflows.

---

### 3. Monte Carlo Retirement Simulator

**Purpose:**
Determine if your money will last through your retirement drawdown phase by running randomized market simulations.

**Features:**

- Starting portfolio
- Annual withdrawal
- Years in retirement
- Expected nominal annual return
- Annual inflation rate
- Volatility (Standard Deviation)
- Results: Probability of Success (percentage of simulated portfolios that do not run out of money)
- Interactive chart: 10th (pessimistic), 50th (median), and 90th (optimistic) percentile portfolio balances over time

**How to Use:**

1. Open `index.html` in your browser.
2. Open the navigation menu and select "Monte Carlo".
3. Enter your retirement scenario and click **Calculate**.
4. View your Probability of Success and percentile paths chart.

---

## Calculations & Methodology

This app adheres to strict financial math formulas widely used in financial planning, ensuring accuracy in long-term projections.

### Inflation Adjustments (Real vs. Nominal)

Rather than simply subtracting inflation from the nominal return, both the **Compound** and **FIRE** calculators use the true **Fisher Equation** to calculate the Exact Real Net Return:
`Real Return = (1 + Nominal Gross Return - Fees) / (1 + Inflation Rate) - 1`
This ensures the final balances and targets are accurately portrayed in "Today's Dollars".

### Compounding Frequency

When simulating monthly contributions, the calculators convert the annual real net return into a strict Monthly Yield using geometric derivation:
`Monthly Rate = (1 + Annual Real Return)^(1/12) - 1`
They avoid the naive (and inaccurate) approach of dividing the annual rate by 12.

### FIRE Number Details

The FIRE simulation uses the Safe Withdrawal Rate (SWR) approach (popularized by the Trinity Study).

- **Target Line**: `Annual Spending / Safe Withdrawal Rate` (e.g. 4% = 25x expenses).
- **Horizon**: The simulator compounds up to 60 years (720 months) sequentially to find the exact crossover point where portfolio balance exceeds the static FIRE target.
- **Fee Penalty**: The timeline explicitly runs the entire simulation twice—with and without the provided fees—to isolate and report exactly how many years you are forced to work simply to pay those fees.

### Monte Carlo Drawdown Simulation

The Monte Carlo tool runs 1,000 independent randomized simulations of a retirement drawdown period.

- **Random Variable Generation**: It uses the **Box-Muller transform** to generate normally distributed annual returns based on the user's Expected Nominal Return and Volatility (Standard Deviation).
- **Inflation Adjustment**: Withdrawals are drawn from the portfolio at the start of each year, and the withdrawal amount is stepped up annually by the given Inflation Rate to maintain purchasing power.
- **Results**: "Probability of Success" represents the percentage of those 1,000 simulations where the final balance remains above $0.

---

## Navigation & UI

- A sticky header keeps the app title and calculator switcher visible on both mobile and desktop.
- Header tabs provide one-tap switching between Compound and FIRE calculators.
- The same tab navigation pattern is used on mobile and desktop for consistency.
- Responsive design keeps large tap targets and improved readability across screen sizes.

---

## Attribution

Icons by [Icons8](https://icons8.com/). Attribution required by Icons8.

## License

MIT
