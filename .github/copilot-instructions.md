# Finance App - Copilot Instructions

Apply these rules for all code changes in this repository.

## Project shape

- This is a static, framework-free app. Keep logic in `index.html` (inline CSS + JS) unless the user explicitly asks for a file split.
- Keep it runnable by opening `index.html` directly in a browser.
- Do not add bundlers, transpilers, or framework scaffolding.

## UX and layout rules

- Preserve mobile-first behavior and large tap targets.
- Keep all interactive controls accessible by keyboard.
- Do not remove labels for form fields.
- Keep input font-size at 16px or larger to avoid iOS zoom-on-focus.
- Preserve hamburger menu behavior and page switching between tools.
- Auto-format all new form inputs by adding them to the DOMContentLoaded handlers for `addCommaFormatting` (for currencies) or `addNumberPasteSanitization` (for percentages/years) so mobile paste and numeric display matches the other calculators.

## Calculator logic rules

- Keep math deterministic and side-effect free where possible.
- Treat percentages consistently:
  - User-facing input/output in percent form (for example `7` means 7%).
  - Internal calculations in decimal form.
- Guard against invalid numeric inputs (`NaN`, empty strings, negative values where disallowed).
- **Do not change core math formulas** (Fisher Equation for inflation, geometric monthly yield, FIRE SWR targets) without extremely strong justification. (See README.md > Calculations & Methodology for the exact standards used).
- Prefer small pure helper functions for calculations, then render from results.

## Performance and dependency rules

- Keep dependencies minimal. Only add a package when there is clear value.
- Continue loading Chart.js lazily only when needed.
- Avoid heavy libraries for simple formatting or validation.

## Visual and code-style rules

- Match the existing plain HTML/CSS/JS style and naming patterns.
- Prefer readable, explicit code over clever abstractions.
- Reuse existing utility functions (`formatCurrency`, `formatPercent`, calculation helpers) before adding new ones.
- Keep inline styles and CSS changes scoped and consistent with current palette and spacing.

## Safety and privacy rules

- Never hardcode secrets, API keys, tokens, or personal data.
- Respect existing commit safeguards (Husky + secret scanning patterns).

## Validation before finalizing

- For behavior changes, verify both calculators still submit, render results, and show charts.
- Verify menu open/close and calculator page switching still work on mobile widths.
- Run `npm run format` (or `npm run format:check` when write access is not desired) after edits.
- If functionality or scripts change, update `README.md` in the same change.
