# Wix custom code — wellnessrxpharmacy.ca

Live code lives in Wix: Settings → Custom Code (Custom Embeds API). This folder keeps versioned copies.

## 2026-11-06 — Mobile cleanup (live)
| Embed | Change |
|---|---|
| `699f3751…` Book Tab + Scroll Top → **v5** (`book-tab-mobile-bar-v5.html`) | Phones: removed the vertical BOOK tab that covered text, Wix's empty Quick Action Bar circle and the duplicate back-to-top arrow. Added one bottom bar: **Call** + **Book a visit** (thumb reach, 46px tap targets, iPhone safe area, hides while typing, off on booking/cart/checkout). Book link now goes straight to `/book-appointment-bradford` in the same tab (was a 301 redirect, opened a new tab). Desktop is unchanged, apart from showing one scroll-to-top button instead of two. Category set to ESSENTIAL (old value UNKNOWN_CATEGORY was rejected by the API). |
| `0e859f3f…` Email Capture Popup | Phone CSS only (`email-popup-mobile-css-v3.txt`): fits on screen (it was taller than the screen and the × was cut off), 40px close button, 16px email field (stops iPhone zoom), bigger "No thanks". |

Rollback: originals are in `backup-2026-11-06/`.
