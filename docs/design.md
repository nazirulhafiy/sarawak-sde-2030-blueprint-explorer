# Design Notes

## Direction

Retain the proven PCDS tracker shell while changing the content model from project delivery to Blueprint exploration. The site should feel like a companion within the Sarawak Development Monitor family, but it must have its own SDE 2030 identity and avoid implying government affiliation.

## Information hierarchy

1. Full Blueprint identity and independent-explorer explanation in the shared Sarawak Development Monitor header rhythm
2. Four-column summary strip for pillars, actions, initiatives, and roadmap phases
3. Search, pillar, and roadmap-phase controls
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

The default card order is short term, medium term, then long term. Within each horizon, cards are ordered by estimated target display height so long multi-part targets pair with similarly sized targets and shorter cards pair together. Equal-weight targets retain their original Blueprint order.

The roadmap-phase filter presents the Blueprint's 2025, 2027, and 2030 phase names while retaining the source dataset's short, medium, and long classifications as its stable filter keys. Initiative timeline badges remain separate because an initiative's published timeline is not always identical to its horizon classification.

The timeline badge shows its start and end years around compact rounded segments, with one segment for each elapsed year interval. Every segment uses the same neutral treatment because the graphic represents duration, not completed progress. Its accessible label retains the full original timeline wording. Horizon badges use a neutral dot so they read as taxonomy rather than delivery status.

Applying a pillar or roadmap-phase filter briefly fades the current card grid out, then reveals the filtered cards with a short lead-in, a capped stagger, and a restrained scale transition. Filtering collapses any expanded card first. Reduced-motion preferences bypass the transition.

Collapsed desktop cards equalise within each two-card row: the taller target list sets the row height, the paired card stretches to match, and both target callouts remain anchored to the bottom. Rows containing an expanded card return to natural heights. One-column mobile cards always remain content-driven.

The expanded card keeps the horizon and timeline in the persistent header, then presents lead agencies on the left, strategic action on the right, followed by objective, description, intended outcomes, and the full original target without repeating collapsed information. The Blueprint Target panel's left accent uses the same pillar colour as the classification pill. Printed Blueprint pages remain in the source dataset but are not shown in the card. Current implementation evidence is outside this phase of the explorer. The interface must not show a progress bar or completed-milestone count.

## Colour and interaction

- Retain the accessible dark and light themes.
- Use cobalt blueprint blue (`#3155c6`) as the SDE brand accent, with a five-pillar blueprint-grid favicon, so the explorer remains visibly distinct from the teal PCDS tracker.
- Give each pillar a stable accent colour.
- Match the PCDS card rhythm: two-column desktop grid, compact top-right chevron, bordered target callout, subtle hover lift, and one-column mobile cards.
- Preserve visible focus states, reduced-motion support, and keyboard-accessible expansion.
- Keep filters compact and usable at 320px without clipped labels or horizontal page overflow.
- Use badges for Blueprint taxonomy, not delivery status or decorative gamification.
- Count summary values into place on initial load, while exposing final totals to assistive technology and bypassing animation for reduced-motion preferences.
- Reset a refreshed page to the top using the same explicit reload-scroll handling as the PCDS tracker.

## Language

The current public interface is English-only and does not show a language toggle. Previous BM entry points temporarily render the English experience with English canonical metadata. Restore BM only after its interface copy and route metadata have been reviewed; canonical source-derived initiative text must remain in English until reviewed translations exist.

## Environments

Production is published from `main` through GitHub Pages at `sde2030.com`. Cloudflare remains the registrar and DNS provider. Preview deployments may use `preview.sde2030.com` when a dedicated Preview workflow is introduced.
