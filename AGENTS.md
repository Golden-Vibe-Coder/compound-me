# Finance App - Agent Instructions

These instructions apply to any coding agent working in this repository.

## Project shape

- Keep this app framework-free and static.
- Default to editing `index.html` (inline CSS and JS) unless explicitly asked to split files.
- Do not add bundlers, transpilers, or framework scaffolding.

## UX and accessibility

- Preserve mobile-first behavior and large tap targets.
- Keep form labels and keyboard accessibility intact.
- Keep input font-size at 16px or larger to avoid iOS zoom-on-focus.
- Preserve hamburger menu open/close behavior and calculator page switching.
- Auto-format all new form inputs by adding them to the DOMContentLoaded handlers for `addCommaFormatting` (for currencies) or `addNumberPasteSanitization` (for percentages/years) so mobile paste and numeric display matches the other calculators.

## Calculator logic

- Keep calculations deterministic and easy to follow.
- Use percent values as user-facing input/output (`7` means 7%), but decimal values internally.
- Validate numeric inputs and guard against `NaN`, blanks, or invalid negative values.
- **Do not change core math formulas** (Fisher Equation for inflation, geometric monthly yield, FIRE SWR targets) without extremely strong justification. (See README.md > Calculations & Methodology for the exact standards used).
- Prefer small helper functions for math, then render from computed outputs.

## Performance and dependencies

- Keep dependencies minimal and lightweight.
- Keep Chart.js lazy-loaded only when chart rendering is needed.
- Avoid adding libraries for simple formatting or validation.

## Coding style

- Match current plain HTML/CSS/JS style and naming.
- Favor explicit readability over clever abstractions.
- Reuse existing helpers before introducing new utility functions.

## Security and hygiene

- Never hardcode tokens, secrets, or personal data.
- Respect existing Husky pre-commit protections and formatting checks.

## Validation checklist

- Confirm both calculators still calculate and render result blocks.
- Confirm both charts still render correctly.
- Confirm menu interactions and page switching still work on mobile widths.
- Run `npm run format` or `npm run format:check` after edits.
- Update `README.md` when behavior, scripts, or contributor workflows change.
