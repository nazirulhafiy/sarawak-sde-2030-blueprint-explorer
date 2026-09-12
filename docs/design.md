# Design Notes

## Direction

V2 is selected in the initial HTML so the old layout cannot appear before
React starts. The navigation logo and favicon use the PCDS S-shaped path and
three rising bars in SDE cobalt blue (#3155c6), on a transparent background.
The source is archived in `assets/brand/pcds-mark-source.png`; the favicon
generator preserves its alpha mask and applies the environment colour.
Environment icon colours remain distinct. Do not replace the mark with a square.

Retain the proven PCDS tracker shell while changing the content model from project delivery to Blueprint exploration. The site should feel like a companion within the Sarawak Development Monitor family, but it must have its own SDE 2030 identity and avoid implying government affiliation.

The interface now uses the PCDS V2 visual system as its reference: a compact
sticky navigation bar, SDE cobalt-blue accent colour, centred explorer hero, bordered
summary band, rounded cards, and a responsive menu. This is an interface port.
It does not import PCDS data, wording, or status claims.

## Information hierarchy

1. Full Blueprint identity and independent-explorer explanation in the shared Sarawak Development Monitor header rhythm
2. Four-column summary strip for pillars, roadmap phases, actions, and initiatives
3. Pillar, roadmap-phase, and search controls
4. Expandable initiative cards
5. Hero-aligned product summary, methodology navigation, and independent attribution footer

## Cards

The collapsed card prioritises:

- a PCDS-style split classification pill in the top-left card slot, labelled `Pillar` plus the initiative's pillar name
- initiative title
- short, medium, or long horizon
- original timeline in a compact start-to-end range badge
- the complete original Blueprint target, with multi-part targets shown as compact bullet lists

The split pillar pill is display-only while the dedicated pillar control above the cards is the primary filter. Its interactive morph implementation remains available behind a local feature constant for possible future reuse. The pill is a sibling of the disclosure button, not nested inside it, and each of the five pillars has a stable accent colour that never represents delivery status.

## Discovery controls

The primary controls follow the PCDS tracker pattern. Pillars appear as a horizontally scrollable pill strip, beginning with the compact `All` state. Overflow is handled inside the strip with contextual previous and next controls, never by widening the page. The search field is fixed to the right at desktop widths. At 760px and below, the strip remains first and the full-width search field stacks beneath it.

The search input uses a 16px text size at mobile widths and on coarse touch pointers so focusing it does not trigger iOS Safari's automatic page zoom. The viewport remains normally scalable, preserving pinch zoom.

The roadmap-phase picker is the final pill inside the scrollable strip. Its closed default reads `Phase`; opening the native select exposes `All roadmap phases` and the three dated Blueprint phases. A specific selection replaces the generic closed label. In dark mode, the closed pill retains the dark theme while the operating system's light native popup uses `CanvasText` option colours so every row remains legible.

The default card order is short term, medium term, then long term. Within each horizon, cards are ordered by estimated target display height so long multi-part targets pair with similarly sized targets and shorter cards pair together. Equal-weight targets retain their original Blueprint order.

The roadmap-phase filter presents the Blueprint's 2025, 2027, and 2030 phase names while retaining the source dataset's short, medium, and long classifications as its stable filter keys. Initiative timeline badges remain separate because an initiative's published timeline is not always identical to its horizon classification.

The timeline badge shows its start and end years around compact rounded segments, with one segment for each elapsed year interval. Every segment uses the same neutral treatment because the graphic represents duration, not completed progress. Its accessible label retains the full original timeline wording. Horizon badges use a neutral dot so they read as taxonomy rather than delivery status.

Applying a pillar or roadmap-phase filter briefly fades the current card grid out, then reveals the filtered cards with a short lead-in, a capped stagger, and a restrained scale transition. Filtering collapses any expanded card first. Reduced-motion preferences bypass the transition.

Collapsed desktop cards equalise within each two-card row: the taller target list sets the row height, the paired card stretches to match, and both target callouts remain anchored to the bottom. Rows containing an expanded card return to natural heights. One-column mobile cards always remain content-driven.

The expanded card keeps the horizon and timeline in the persistent header, then presents lead agencies on the left, strategic action on the right, followed by objective, description, intended outcomes, and the full original target without repeating collapsed information. The Blueprint Target panel's left accent uses the same pillar colour as the classification pill. Printed Blueprint pages remain in the source dataset but are not shown in the card. Current implementation evidence is outside this phase of the explorer. The interface must not show a progress bar or completed-milestone count.

## Colour and interaction

- Retain the accessible dark and light themes.
- Use the SDE cobalt-blue accent system (`#3155c6`) while retaining the SDE favicon and all SDE-specific content.
- Give each pillar a stable accent colour.
- Match the PCDS card rhythm: two-column desktop grid, compact top-right chevron, bordered target callout, subtle hover lift, and one-column mobile cards.
- Preserve visible focus states, reduced-motion support, and keyboard-accessible expansion.
- Keep filters compact and usable at 320px without clipped labels or horizontal page overflow; filter overflow belongs inside the horizontal strip.
- Use badges for Blueprint taxonomy, not delivery status or decorative gamification.
- Count summary values into place on initial load, while exposing final totals to assistive technology and bypassing animation for reduced-motion preferences.
- Reset a refreshed page to the top using the same explicit reload-scroll handling as the PCDS tracker.
- After the reader moves beyond the opening viewport, show a localized Back to top control in the lower-right corner on both routes. Desktop retains the text-plus-arrow treatment; at 760px and below it becomes a 40px arrow-only button while keeping the localized accessible label. Respect reduced-motion preferences when scrolling.

## Motion refinement

Collapsed initiative cards reserve at least 30px between the category row and
title (10px grid gap plus 20px title-row padding). Long target text must not
remove this gap. Dark-mode neutral text colours match PCDS; SDE retains blue
accents. Timeline marks use the PCDS icon colour, without implying completion.

The head script selects the first-visit or return-visit state before paint.
Use the live pcds2030.com motion settings, not a shortened alternative.
The logo entrance takes 2200ms after a 300ms delay. The title uses the same
four-word cycle, with SDE words: Pillars, Actions, Initiatives, Explorer.
Words start 1400ms apart; letters start 28ms apart. Copy, date, summary,
filters, cards, and footer start at 300, 380, 460, 560, 660, and 740ms.
Return visits skip the logo and word cycle, with an 800ms title entrance
and section delays of 120, 180, 180, 260, 340, and 340ms.
The summary starts its 1.4-second count with its entrance.
Reduced motion skips decorative transitions.

Cards reveal individually as they approach the desktop viewport (64px early,
12px rise). Mobile cards reveal 16px inside the viewport with a 20px rise.
Filtering and keyboard focus reveal affected cards. Expanded details use a
short height transition; collapsed details are inert and hidden from assistive
technology. Reduced motion bypasses decorative animation.

Escape closes the mobile menu and returns focus to its button. The menu also
closes when the viewport changes to desktop width. Dark backgrounds use neutral
grey surfaces with SDE blue accents.

## Language availability

The public navigation is English-only. It does not show a language control
until the BM interface has completed review. Source-derived initiative text
remains English until reviewed translations exist.

## Environments

Production is published from `main` through GitHub Pages at `sde2030.com`. Cloudflare remains the registrar and DNS provider. Preview deployments may use `preview.sde2030.com` when a dedicated Preview workflow is introduced.
