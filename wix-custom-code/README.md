# Wix custom code — wellnessrxpharmacy.ca

Live code lives in Wix: Settings → Custom Code (Custom Embeds API). This folder keeps versioned copies.

## 2026-11-06 — Mobile cleanup (live)
| Embed | Change |
|---|---|
| `699f3751…` Book Tab + Scroll Top → **v5** (`book-tab-mobile-bar-v5.html`) | Phones: removed the vertical BOOK tab that covered text, Wix's empty Quick Action Bar circle and the duplicate back-to-top arrow. Added one bottom bar: **Call** + **Book a visit** (thumb reach, 46px tap targets, iPhone safe area, hides while typing, off on booking/cart/checkout). Book link now goes straight to `/book-appointment-bradford` in the same tab (was a 301 redirect, opened a new tab). Desktop is unchanged, apart from showing one scroll-to-top button instead of two. Category set to ESSENTIAL (old value UNKNOWN_CATEGORY was rejected by the API). |
| `0e859f3f…` Email Capture Popup | Phone CSS only (`email-popup-mobile-css-v3.txt`): fits on screen (it was taller than the screen and the × was cut off), 40px close button, 16px email field (stops iPhone zoom), bigger "No thanks". |

Rollback: originals are in `backup-2026-11-06/`.

## 2026-11-06 — Part 2 (live)
| Embed | Change |
|---|---|
| `0e859f3f…` Email Capture Popup → submit v3 (`email-popup-submit-v3.js`) | **Signups now go to the real Mailchimp audience** (`c405e59399`, us9) via Mailchimp's public signup endpoint. Before, emails were only saved in the visitor's own browser and posted to a non-existent endpoint. Shows Mailchimp's error text for bad emails. No longer pushes the email address into the analytics dataLayer. |
| `d5b46de7…` Mailchimp | Added one CSS line that hides Mailchimp's own "Sitewide Email Capture" popup, which opened 2 seconds after landing and ran off the edges of phone screens. Mailchimp tracking still loads. Better long-term fix: pause that form in Mailchimp (Website → Forms). |
| `9620f360…` **NEW** Mobile Layout Fixes (`mobile-layout-v1.html`) | Phones only. Header: menu and logo on one row, search and cart on one row (274px → 122px). Year-End Draw block was clipped to a 108px strip and is now shown in full. "Meet your care team" block hidden on phones because the main block repeats its team cards and FAQ. Hours/sale bars and the Call/Book bar hide while the menu is open. The whole sale bar is tappable. Homepage on phones: 22,600px → 20,400px. |

Undo: switch any embed off in Wix → Settings → Custom Code. Originals are in `backup-2026-11-06/`.
Caveat: the layout rules target Wix element IDs (e.g. `#comp-m7rsjjf9`). If the header or homepage sections are rebuilt in the Editor, re-check the mobile view.

## 2026-11-06 — Part 3: iPhone fix (live)
`9620f360…` Mobile Layout Fixes → **v2** (`mobile-layout-v2.html`, v1 moved to backup/):
- Moved from BODY_END to **HEAD**, so the compact header applies at first paint. Before, slow phone loads briefly showed the old stacked header with the logo still fading in.
- **Scrolling:** the hours/sale bars only show near the top of the page. The header slides away while you scroll down and comes back when you scroll up. Before, the bars slid back down over the sticky header and covered the menu and logo.
- Tested in WebKit (Safari's engine) with iPhone 13 emulation, plus Chromium.

## 2026-11-06 — Part 4: logo on iPhone (live)
Mobile Layout Fixes → **v3** (`mobile-layout-v3.html`). The header logo was blank on the owner's iPhone, even before the header change. Wix serves the logo as AVIF, which some Safari versions draw blank. On phones the logo is now drawn from the PNG version of the same file. The original image stays in place, invisible, for its alt text and homepage link.
If desktop Safari on a Mac also shows a blank logo, the same rule can be applied outside the phone media query.

## 2026-11-06 — Part 5: logo v4 + shipping tiers
- Mobile Layout Fixes → **v4** (`mobile-layout-v4.html`). The logo is drawn straight onto the header row from the PNG file, so it shows even if Wix's own logo image never draws. Also removed the no-op square SVG mask Wix puts on the logo image (all screen sizes), because Safari can render masked images blank.
- **Shipping tiers:** Bradford local **$75+** · GTA & rest of Ontario **$99+** · Canada-wide **$129+**.
  - Custom code updated to say "GTA & Ontario": SEO FAQ schema (rev 4), Sale banner (rev 25), Ship progress bar (rev 12), Exit popup (rev 10, still disabled). These already said $129.
  - **Checkout (Wix shipping settings), read only:** Ontario has Local delivery 10 km at $5, free at $75+ ✅, and "GTA Delivery" at $14.99, free at $99+ ✅. Rest of Canada is $24.99, free at $129+ ✅. Not checked: whether "GTA Delivery" covers all of Ontario (the API doesn't show its area).
  - **Editor-only HTML embeds still saying $179** (the API can't edit these). Corrected copies are in `editor-html-embeds/*-FIXED.html`, originals beside them:
    - `homepage-top-banner-FIXED.html`: homepage, flu/COVID + sale banner block
    - `homepage-main-block-FIXED.html`: homepage, large main block
    - `site-footer-FIXED.html`: footer (every page)
    - `shipping-policy-page-FIXED.html`: /shipping-delivery-policy

## 2026-11-06 — Part 6: logo built into the code (v5)
Mobile Layout Fixes → **v5** (`mobile-layout-v5.html`). The logo still didn't show on the owner's iPhone, even from the PNG. The logo is now an optimized 372×114 PNG (5.7KB) built into the CSS as a data URI, so no image download is involved. Tested in WebKit with every copy of the logo file blocked: the logo still shows.
Note: the live copy has one fewer line break than this file (two CSS rules on one line), which is harmless.

## 2026-11-06 — Part 7: Ontario-wide shipping (checkout)
- Added the **Basic Shipping** carrier to the Ontario region (backup rate off).
- New shipping option `790a0b44…`: **"GTA & Ontario Shipping - Free Over $99"**, C$14.99, free at C$99+, 2-5 business days. It covers all of Ontario.
- Not doable by API: renaming or turning off the old Local-delivery row "GTA Delivery" (C$14.99, free at $99+). It now overlaps the new option for GTA addresses. Do it in the dashboard.

## 2026-11-06 — Part 8: footer shipping text (live)
New embed `654607fa…` **Footer Shipping Text Fix** (`footer-shipping-fix-v1.html`, BODY_END, all pages). It fetches the footer's own Embed HTML file (filesusr allows CORS), corrects the two shipping lines (GTA & Ontario $99+, Canada-wide $129+), and points the footer frame at that corrected copy. Wix blocks `srcdoc`, so it uses a blob URL instead.
It only acts on the current footer file `1129db_0046633500c32f177987d1c0dfbb80a4`. Once the footer is edited in the Wix Editor, the file name changes and the script does nothing. Delete the embed then.
