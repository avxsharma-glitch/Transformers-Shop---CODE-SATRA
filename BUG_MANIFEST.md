# Find the Flaw: Catch the Bug — Organizer Manifest

This document lists the intentional defects currently present in the Transformers Hub competition build. It is not linked from the website.

## Active bugs

### BUG-001 — Collections navigation lands on the gallery

- **File:** `app/page.tsx`
- **Affected element:** Header `Collections` link
- **Steps:** Click `Collections` in the header.
- **Expected:** Scroll to the collections/universe section.
- **Actual:** Scrolls to the gallery section.
- **Severity:** Medium
- **Suggested fix:** Change the target from `#gallery` to `#universe`.

### BUG-002 — Header Shop Now opens the gallery

- **File:** `app/page.tsx`
- **Affected element:** Header `Shop Now` button
- **Steps:** Click `Shop Now` in the header.
- **Expected:** Scroll to the collectibles section.
- **Actual:** Scrolls to the gallery section.
- **Severity:** Medium
- **Suggested fix:** Scroll to `#collectibles`.

### BUG-003 — Decepticons filter returns Autobots

- **File:** `app/page.tsx`
- **Affected element:** Faction selector
- **Steps:** Select `Decepticons`.
- **Expected:** Show only Decepticon products.
- **Actual:** Shows Autobots products.
- **Severity:** High
- **Suggested fix:** Compare the selected category directly with `product.category`.

### BUG-004 — Partial product search misses valid matches

- **File:** `app/page.tsx`
- **Affected element:** Product search
- **Steps:** Search for `Prime`.
- **Expected:** Show Optimus Prime.
- **Actual:** No result appears because matching only checks the beginning of the name.
- **Severity:** Medium
- **Suggested fix:** Use a case-insensitive `includes` check.

### BUG-005 — High-to-low price sorting is reversed

- **File:** `app/page.tsx`
- **Affected element:** Sort selector
- **Steps:** Select `Price: high to low`.
- **Expected:** Highest-priced products appear first.
- **Actual:** Products are sorted low to high.
- **Severity:** Medium
- **Suggested fix:** Return `b.price - a.price` for descending order.

### BUG-006 — Megatron opens Bumblebee details

- **File:** `app/page.tsx`
- **Affected element:** Megatron product card
- **Steps:** Click or keyboard-activate Megatron.
- **Expected:** Open Megatron details.
- **Actual:** Opens Bumblebee details.
- **Severity:** High
- **Suggested fix:** Set the selected product to the activated product.

### BUG-007 — Fourth gallery tile uses the wrong image

- **File:** `app/page.tsx`
- **Affected element:** Fourth gallery tile
- **Steps:** Compare the fourth tile with its expected hero artwork.
- **Expected:** Display the hero image assigned to that tile.
- **Actual:** Displays a different existing gallery image.
- **Severity:** Low
- **Suggested fix:** Restore the fourth tile source to `/transformers-hero.png`.

### BUG-008 — Shop controls overflow at narrow mobile widths

- **File:** `app/globals.css`
- **Affected element:** Product controls
- **Steps:** Open the page at 480px width or less and view the controls.
- **Expected:** Controls fit within the viewport.
- **Actual:** A fixed 520px width causes clipping or horizontal overflow.
- **Severity:** Medium
- **Suggested fix:** Remove the fixed width at narrow breakpoints.

### BUG-009 — Invalid collector email is accepted

- **File:** `app/page.tsx`
- **Affected element:** Collector updates form
- **Steps:** Enter `abcd` and submit.
- **Expected:** Reject the invalid email.
- **Actual:** Shows the success state.
- **Severity:** Medium
- **Suggested fix:** Validate the value as an email address.

### BUG-010 — Bumblebee image has Megatron alternative text

- **File:** `app/page.tsx`
- **Affected element:** Bumblebee product image
- **Steps:** Inspect the image with a screen reader or accessibility tree.
- **Expected:** Announce Bumblebee collectible.
- **Actual:** Announces Megatron collectible.
- **Severity:** Low
- **Suggested fix:** Change the alt text to `Bumblebee collectible`.

### BUG-011 — Empty product results have no feedback

- **File:** `app/page.tsx`
- **Affected element:** Product grid
- **Steps:** Search for a nonexistent product name.
- **Expected:** Show a no-results message and recovery action.
- **Actual:** The grid becomes empty with no explanation.
- **Severity:** Medium
- **Suggested fix:** Render an empty state with a reset action.

### BUG-012 — Product details dialog lacks complete modal accessibility

- **File:** `app/page.tsx`
- **Affected element:** Product details panel
- **Steps:** Open any product details panel and inspect its accessibility tree.
- **Expected:** Announce a modal dialog and move focus into it.
- **Actual:** The dialog lacks `aria-modal` and focus management.
- **Severity:** Medium
- **Suggested fix:** Add modal semantics and focus management.

### BUG-013 — Space key scrolls while activating product cards

- **File:** `app/page.tsx`
- **Affected element:** Keyboard-accessible product cards
- **Steps:** Tab to a product card and press Space.
- **Expected:** Open details without page scrolling.
- **Actual:** Details open, but the browser also performs default Space scrolling.
- **Severity:** Low
- **Suggested fix:** Prevent the Space key default action.

### BUG-014 — Whitespace-only collector input is accepted

- **File:** `app/page.tsx`
- **Affected element:** Collector updates form
- **Steps:** Enter four spaces and submit.
- **Expected:** Reject whitespace-only input.
- **Actual:** Shows the success state.
- **Severity:** Medium
- **Suggested fix:** Trim before validating.

### BUG-015 — Product cards have no visible focus styling

- **File:** `app/page.tsx`, `app/globals.css`
- **Affected element:** Product cards
- **Steps:** Press Tab until a product card is focused.
- **Expected:** Show a clear focus indicator.
- **Actual:** No visible focus state is provided.
- **Severity:** Medium
- **Suggested fix:** Add a `:focus-visible` outline or equivalent.

### BUG-016 — Our Universe navigates to a missing route

- **File:** `app/page.tsx`
- **Affected element:** `Our Universe` button
- **Steps:** Click `Our Universe` in the story section.
- **Expected:** Scroll to the existing Transformers universe section or open a valid page.
- **Actual:** Navigates to `/universe`, which has no route and displays a 404 page.
- **Severity:** High
- **Suggested fix:** Use `href="#universe"` or scroll the existing section into view.

### BUG-017 — New Arrivals navigates to a missing route

- **File:** `app/page.tsx`
- **Affected element:** Header `New Arrivals` link
- **Steps:** Click `New Arrivals` in the header and inspect the browser console/network activity.
- **Expected:** Navigate to the existing arrivals/products section without errors.
- **Actual:** Requests `/new-arrivals`, which has no route; the navigation fails with a 404 and produces a failed document request.
- **Severity:** High
- **Suggested fix:** Link to the existing `#collectibles` section or create a valid route.

## Verification notes

- The application has one implemented route: `/`.
- `/universe` and `/new-arrivals` are intentionally nonexistent routes for BUG-016 and BUG-017.
- No real payment, authentication, destructive action, or external data submission is involved.
- Build verification should be run after any future changes; these defects are intentionally retained for the competition.
