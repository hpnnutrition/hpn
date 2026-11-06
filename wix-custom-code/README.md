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
