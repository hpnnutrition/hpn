# WellnessRX Pharmacy - Shipping Messaging Updates

**Branch:** `claude/shipping-messaging-updates-29rxtr`  
**Date:** July 28, 2026  
**Status:** Ready for implementation

---

## Correct Shipping Tiers (FINAL)

These are the ONLY correct tiers going forward:

```
Bradford & Simcoe County: $75+
GTA: $99+
Outside Ontario: $179+
```

---

## Summary: 7 Locations to Fix

| # | Location | Priority | Current Issue | Fix |
|---|----------|----------|----------------|-----|
| 1 | Global Popup | HIGHEST | Says "$150+ Canada-wide" | Update with all 3 tiers |
| 2 | Top Announcement/Header | HIGH | Missing GTA $99+ & Outside ON $179+ | Add complete messaging |
| 3 | Terms & Conditions/Shipping | CRITICAL | Outdated tiers | Match checkout exactly |
| 4 | Wellness Bundles Category | HIGH | "$99 across Canada" | Remove or replace |
| 5 | New Arrivals Category | HIGH | "Canada-wide $99" | Remove or replace |
| 6 | Product Template Blocks | MEDIUM | "GTA $150+" | Delete entirely |
| 7 | Pet Blog | MEDIUM | Missing outside Ontario tier | Add to shipping info |

---

## Location-by-Location Details

### 1. Global Popup (HIGHEST PRIORITY)
**Impact:** Appears across many pages  
**Find & Replace:**
- **Remove:** `Canada-wide $150+`
- **Add:** `Free shipping: Bradford & Simcoe County $75+ · GTA $99+ · Outside Ontario $179+`

---

### 2. Top Announcement/Header Bar
**Impact:** Visible on every page  
**Fix:** Update to display all three tiers:
```
Free shipping: Bradford & Simcoe County $75+ · GTA $99+ · Outside Ontario $179+
```

---

### 3. Terms & Conditions / Shipping Page (CRITICAL)
**Impact:** Must match checkout experience  
**Update Full Section To:**
```
Free Shipping

We offer free shipping on qualifying orders based on location:

• Bradford & Simcoe County: $75+
• Greater Toronto Area (GTA): $99+
• Outside Ontario (Rest of Canada): $179+
```
**Note:** This is the authoritative shipping policy page. Ensure all other pages reference it or match it exactly.

---

### 4. Wellness Bundles Category
**Impact:** Product listing page  
**Current:** `free shipping over $99 across Canada`  
**Action:** DELETE or REPLACE with `Free shipping: Outside Ontario $179+`

---

### 5. New Arrivals Category
**Impact:** Product listing page  
**Current:** `Canada-wide $99`  
**Action:** DELETE or REPLACE with `Free shipping: Outside Ontario $179+`

---

### 6. Old Product Template Blocks
**Impact:** Legacy product display templates  
**Current:** `GTA $150+`  
**Action:** DELETE ENTIRELY (no replacement needed)

---

### 7. Pet Blog
**Impact:** Blog section  
**Current:** Missing outside Ontario tier  
**Action:** ADD complete shipping info including `Outside Ontario: $179+`

---

## Standard Copy-Paste Blocks

### For Headers/Banners
```
Free shipping: Bradford & Simcoe $75+ · GTA $99+ · Outside Ontario $179+
```

### For Product Pages
```
Free shipping on orders over:
• Bradford & Simcoe County: $75+
• GTA: $99+
• Outside Ontario: $179+
```

### For T&C / Detailed Pages
```
Free Shipping Thresholds

We provide free shipping on qualifying orders based on your location:

• Bradford & Simcoe County: Free shipping on orders $75 or more
• Greater Toronto Area (GTA): Free shipping on orders $99 or more
• Outside Ontario (Rest of Canada): Free shipping on orders $179 or more
```

---

## Implementation Steps

1. ✅ **Access Wix Editor** for WellnessRX Pharmacy site
2. ✅ **Fix #1:** Update global popup (HIGHEST priority)
3. ✅ **Fix #2:** Update header announcement bar
4. ✅ **Fix #3:** Update Terms & Conditions / Shipping page (CRITICAL)
5. ✅ **Fix #4:** Update Wellness Bundles messaging
6. ✅ **Fix #5:** Update New Arrivals messaging
7. ✅ **Fix #6:** Remove old product template blocks
8. ✅ **Fix #7:** Update Pet blog shipping info
9. ✅ **Verify:** Test checkout matches messaging
10. ✅ **Publish:** Confirm all changes are live

---

## Why These Changes?

**Previous Issues:**
- Global popup showed outdated "$150+ Canada-wide" messaging
- Inconsistent messaging across pages (some said $99, some $150)
- Shipping page thresholds didn't match checkout
- Category pages had conflicting information

**Solution:**
- Single source of truth: $75+ (Bradford/Simcoe), $99+ (GTA), $179+ (Outside Ontario)
- Consistent messaging across ALL pages
- Matches current business model and shipping costs
- Clear, location-based pricing

---

## Verification Checklist

After implementation, verify:

- [ ] Global popup updated
- [ ] Header bar shows all 3 tiers
- [ ] T&C page updated and live
- [ ] Wellness Bundles corrected
- [ ] New Arrivals corrected
- [ ] Product templates cleaned
- [ ] Pet blog updated
- [ ] Test checkout flow matches site messaging
- [ ] All changes published to live site

---

**Status:** ✅ Documentation ready for Wix editor implementation
