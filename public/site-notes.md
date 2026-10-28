# Transformers Hub — Final Bug Manifest

Private organizer documentation for **Find the Flaw: Catch the Bug**. This file is not linked from the participant-facing website.

## Planned intentional bugs

### BUG-001 — Collections navigation opens the wrong section

- **Classification:** Intentional
- **Category:** Navigation
- **Severity:** Medium
- **Location:** `app/page.tsx`, header navigation
- **Preconditions:** Open the home page.
- **Reproduction:**
  1. Click `Collections` in the header.
- **Expected Result:** The page scrolls to the collections/universe section.
- **Actual Result:** The link targets `#gallery` and scrolls to the gallery.
- **Verification:** Verified
- **Fix Hint:** Change the `Collections` anchor to the intended section target.

### BUG-002 — Header Shop Now performs the wrong action

- **Classification:** Intentional
- **Category:** Functional / Navigation
- **Severity:** Medium
- **Location:** `app/page.tsx`, header `Shop Now` button
- **Preconditions:** Open the home page.
- **Reproduction:**
  1. Click the header `Shop Now` button.
- **Expected Result:** The page scrolls to `#collectibles`.
- **Actual Result:** The handler scrolls to `#gallery`.
- **Verification:** Verified
- **Fix Hint:** Change the handler to scroll to the collectibles section.

### BUG-003 — Decepticons filter returns Autobots

- **Classification:** Intentional
- **Category:** Functional / Filtering
- **Severity:** High
- **Location:** `app/page.tsx`, `visibleProducts` category filter
- **Preconditions:** Open the product section.
- **Reproduction:**
  1. Open the `Faction` selector.
  2. Select `Decepticons`.
- **Expected Result:** Only Decepticon products are displayed.
- **Actual Result:** The conditional compares Decepticons against `Autobots`, so Autobots are displayed.
- **Verification:** Verified
- **Fix Hint:** Compare the selected category directly with `product.category`.

### BUG-004 — Partial-name search misses valid matches

- **Classification:** Intentional
- **Category:** Functional / Search
- **Severity:** Medium
- **Location:** `app/page.tsx`, `visibleProducts` search predicate
- **Preconditions:** Open the product section.
- **Reproduction:**
  1. Enter `Prime` in the search field.
- **Expected Result:** Optimus Prime is returned because `Prime` occurs in the product name.
- **Actual Result:** No result is returned because the implementation uses `startsWith`.
- **Verification:** Verified
- **Fix Hint:** Use a case-insensitive substring match such as `includes`.

### BUG-005 — High-to-low price sorting is reversed

- **Classification:** Intentional
- **Category:** Functional / Sorting
- **Severity:** Medium
- **Location:** `app/page.tsx`, `visibleProducts` sort logic
- **Preconditions:** Open the product section.
- **Reproduction:**
  1. Set `Sort` to `Price: high to low`.
- **Expected Result:** Products appear from highest price to lowest price.
- **Actual Result:** The `price-desc` branch returns `a.price - b.price`, producing ascending order.
- **Verification:** Verified
- **Fix Hint:** Return `b.price - a.price` for descending order.

### BUG-006 — Megatron opens Bumblebee details

- **Classification:** Intentional
- **Category:** Functional / Product details
- **Severity:** High
- **Location:** `app/page.tsx`, `openProductDetails`
- **Preconditions:** Open the product section.
- **Reproduction:**
  1. Click or keyboard-activate the Megatron card.
- **Expected Result:** The details panel identifies Megatron.
- **Actual Result:** The handler substitutes `products[1]`, so Bumblebee details are shown.
- **Verification:** Verified
- **Fix Hint:** Set the selected product to the product that was activated.

### BUG-007 — Fourth gallery tile displays the wrong image

- **Classification:** Intentional, previously planted
- **Category:** UI / Imagery
- **Severity:** Low
- **Location:** `app/page.tsx`, gallery fourth tile
- **Preconditions:** Open the gallery.
- **Reproduction:**
  1. Compare the fourth tile source with the intended hero artwork.
- **Expected Result:** The fourth tile uses the assigned hero image.
- **Actual Result:** **Not reproducible in the current tree.** The fourth tile currently uses `/transformers-hero.png`.
- **Verification:** Not Reproducible
- **Fix Hint:** No action is required in the current tree; restoring the incorrect source would reintroduce the defect.

### BUG-008 — Product controls overflow on narrow mobile screens

- **Classification:** Intentional
- **Category:** Responsive / UI
- **Severity:** Medium
- **Location:** `app/globals.css`, narrow-screen `.shop-controls` rule
- **Preconditions:** Use a viewport at or below 480px and open the product section.
- **Reproduction:**
  1. Set the viewport width to 480px or less.
  2. Scroll to the product controls.
- **Expected Result:** Search, faction, and sort controls remain within the viewport.
- **Actual Result:** `.shop-controls` has a fixed `width: 520px`, which exceeds the narrow viewport.
- **Verification:** Verified by source inspection; visual browser reproduction was unavailable.
- **Fix Hint:** Remove the fixed width and allow the controls to size fluidly.

### BUG-009 — Invalid collector input is accepted

- **Classification:** Intentional
- **Category:** Functional / Form validation
- **Severity:** Medium
- **Location:** `app/page.tsx`, collector updates form
- **Preconditions:** Open the footer form.
- **Reproduction:**
  1. Enter `abcd` in the collector input.
  2. Submit the form.
- **Expected Result:** The invalid email-like value is rejected.
- **Actual Result:** The success state appears because validation only checks `email.length > 3`.
- **Verification:** Verified
- **Fix Hint:** Validate the value using an email format check.

### BUG-010 — Bumblebee image has incorrect alternative text

- **Classification:** Intentional
- **Category:** Accessibility
- **Severity:** Low
- **Location:** `app/page.tsx`, Bumblebee product data
- **Preconditions:** Inspect the product image with an accessibility tree or screen reader.
- **Reproduction:**
  1. Inspect the Bumblebee card image alternative text.
- **Expected Result:** The image is announced as a Bumblebee collectible.
- **Actual Result:** The data uses `Megatron collectible` as Bumblebee's alt text.
- **Verification:** Verified
- **Fix Hint:** Change the alt text to `Bumblebee collectible`.

## Legacy intentional defects outside the required ten

These were already present in the competition build and are not counted as naturally occurring findings:

- **BUG-011:** Empty product results have no feedback.
- **BUG-012:** Product details dialog lacks complete modal accessibility.
- **BUG-013:** Space-key product-card activation does not prevent page scrolling.
- **BUG-014:** Whitespace-only collector input is accepted.
- **BUG-015:** Product cards have no visible focus styling.
- **BUG-016:** `Our Universe` links to the nonexistent `/universe` route and returns 404.
- **BUG-017:** `New Arrivals` links to the nonexistent `/new-arrivals` route and returns 404.

## Naturally occurring additional defects

No additional naturally occurring defects were confirmed during this audit. The route failures and accessibility issues listed above are retained intentional competition defects, not newly discovered natural defects.