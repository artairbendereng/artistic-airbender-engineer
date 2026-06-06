# HVAC Airbender – Project Roadmap

Last updated: 2026-06-06

A living development roadmap for Dean Hanson's Artistic Airbender Engineer portfolio website.

This roadmap is for the **portfolio project itself**, not the personal software-engineering learning roadmap.

---

## North Star

The site should make Dean Hanson look credible, memorable, technically deep, and easy to contact.

Primary audience:

- AEC recruiters.
- Hiring managers.
- Engineering leaders.
- Leaders at firms in adjacent or different industries who need to understand how HVAC engineering experience translates into broader operational, technical, sales, or leadership value.

Highest-priority site outcomes:

1. Show real HVAC/AEC achievements clearly.
2. Add more major projects and project depth.
3. Keep resumes current and easy to access.
4. Make the site clean on mobile.
5. Preserve the 1-of-1 Artistic Airbender Engineer identity without letting visuals outrank substance.

---

## Rules of the Road

Keep the site lean, fast, and intentional.

Like Derek Sivers said, if you want simplicity, avoid unnecessary dependencies. APIs and visual tricks are useful only when they are reliable, low-maintenance, and clearly improve the portfolio.

Default priority order:

```text
Achievements > Project depth > Resume clarity > Mobile polish > Brand flourishes > Advanced features
```

---

## Current Completed Foundation

- [x] Create HVAC-Airbender folder structure.
- [x] Implement `index.html`.
- [x] Implement `projects.html`.
- [x] Implement `styles.css` with black / white / gold theme and Montserrat typography.
- [x] Implement `script.js`.
- [x] Add dynamic footer year.
- [x] Add smooth scrolling for in-page links.
- [x] Add active nav highlighting on scroll.
- [x] Add resume PDFs and live resume links.
- [x] Build first major project cards.
- [x] Add scrolling progress bar at top in `#FFC700`.
- [x] Polish background styling per major section.
- [x] Refine hero/about/project copy.
- [x] Replace plain text links with icon-based buttons where appropriate.
- [x] Add JavaScript show more / show less behavior.
- [x] Create GitHub repository and push local code.
- [x] Activate GitHub Pages hosting.
- [x] Move website files to repo root for clean GitHub Pages deployment.
- [x] Install Live Server for local testing.
- [x] Test resume PDF update workflow.
- [x] Add GitHub teleportation button.
- [x] Improve first-pass mobile layout.

---

## Phase 1 – Recruiter-Ready Portfolio Substance

This is the highest priority phase.

### 1.1 Resume and Teleportation Accuracy

- [ ] Confirm HVAC resume PDF is current.
- [ ] Confirm Translatables resume PDF is current.
- [ ] Confirm all resume links work on GitHub Pages.
- [ ] Confirm LinkedIn link works.
- [ ] Confirm GitHub profile link works.
- [ ] Decide whether resume links should open new tabs or download directly.
- [ ] Add brief context near each resume link explaining who each resume is for.

### 1.2 Major Project Expansion

Add more project depth before adding big visual features.

- [ ] Review current project cards for completeness.
- [ ] Add missing major HVAC/AEC projects.
- [ ] Add at least 1–2 strong bullets per project showing measurable scope, systems, leadership, and constraints.
- [ ] Add client/project context where legally and professionally safe.
- [ ] Add project dates or date ranges consistently.
- [ ] Add specific systems where useful:
  - Chilled water.
  - Cooling towers.
  - AHUs / MAUs / DOAS.
  - VAV systems.
  - Cleanrooms.
  - SCIFs.
  - Server rooms.
  - Process exhaust.
  - Controls sequences.
  - Humidity / ESD / A2L / freeze-protection issues.
- [ ] Highlight non-technical project value:
  - Client-facing coordination.
  - Scope/schedule/budget ownership.
  - Design narratives.
  - Estimates.
  - Construction administration.
  - Cross-discipline coordination.

### 1.3 Achievement Framing

- [ ] Add a concise “Selected Engineering Achievements” section.
- [ ] Use concrete achievements, not vague personality claims.
- [ ] Include scale where possible:
  - Project budgets.
  - Number of AHUs/MAUs/equipment sets.
  - Facility types.
  - Clients/sectors.
  - Systems complexity.
- [ ] Separate achievements into:
  - Technical depth.
  - Leadership / coordination.
  - Systems thinking / standards.
  - AI/software growth.

---

## Phase 2 – Documentation and Site Operations

### 2.1 README.md

- [ ] Add `README.md` to repo root.
- [ ] Include live site link.
- [ ] Explain site purpose.
- [ ] Explain tech stack.
- [ ] Explain project structure.
- [ ] Include local development instructions with Live Server.
- [ ] Include Final Execute Rhythm.

### 2.2 Site Audit

- [ ] Add `markdowns/site-audit.md`.
- [ ] Track mobile issues.
- [ ] Track broken links.
- [ ] Track project copy improvements.
- [ ] Track visual polish ideas.
- [ ] Track future timeline section ideas.

### 2.3 Decisions Log

- [ ] Update `markdowns/decisions.md` with:
  - Audience priority.
  - Achievement-first roadmap decision.
  - GitHub Pages deployment.
  - Live Server local workflow.
  - GitHub teleportation button.
  - Mobile-first polish direction.

---

## Phase 3 – Mobile and UX Polish

- [ ] Test home page on mobile.
- [ ] Test projects page on mobile.
- [ ] Test resume buttons on mobile.
- [ ] Test project card expand/minimize behavior on mobile.
- [ ] Make navigation feel clean on narrow screens.
- [ ] Tighten spacing and typography hierarchy.
- [ ] Ensure no horizontal scrolling.
- [ ] Ensure images scale correctly.
- [ ] Ensure tap targets are comfortable.
- [ ] Add subtle hover/focus states where useful.
- [ ] Confirm site still feels premium and not crowded.

---

## Phase 4 – HVAC Career Arc Visual Timeline

Status: tabled as secondary/tertiary until core achievements and project content are stronger.

Purpose:

Create a visual career narrative from 2019–2026 showing Dean’s growth from early HVAC designer to project-leading, AI-enabled AEC systems thinker.

Possible section title:

```text
HVAC Career Arc: 2019–2026
```

Possible subtitle:

```text
A seven-year climb through AEC design, aerospace facilities, defense-sector constraints, controls logic, and AI-enabled engineering.
```

Recommended timeline eras:

- 2019–2020: HVAC design foundation.
- 2021–2022: Aerospace / defense / Space Coast exposure.
- 2023: Project ownership and systems depth.
- 2024–2025: Controls, standards, and technical range.
- 2026: Public portfolio and AI-enabled engineering identity.

Recommended imagery:

- One Space Coast / aerospace / facility image.
- One Airbender / airflow / systems-thinking image.

Recommended placement:

- `projects.html`, likely after the strongest project content or as a supporting narrative section.

Reason this is tabled:

The timeline is cool and valuable, but it is less important than the achievement layer: current resumes, strong project cards, more projects, and recruiter-ready proof.

---

## Phase 5 – Advanced Features + Deeper JavaScript

Only pursue after the site substance is strong.

- [ ] Image lightbox / modal for project thumbnails.
- [ ] Data-driven project rendering from a JavaScript array.
- [ ] Scroll-triggered animations.
- [ ] Optional Weather API widget for project locations.
- [ ] Optional Google Translate widget or manual bilingual toggle.
- [ ] Contact form if needed.
- [ ] Analytics for views, clicks, and scroll depth.

---

## Phase 6 – Brand System + Future Ecosystem Integration

- [ ] Define HVAC Airbender design system.
- [ ] Connect site to future Thrivinity and Deansy ecosystems only where strategically useful.
- [ ] Add interactive engineering tools if they support recruiter/leader credibility:
  - Rule-of-thumb calculators.
  - HVAC load quick-calcs.
  - Psychrometric shortcuts.
- [ ] Build multi-page architecture for deeper writing, essays, and engineering breakdowns.

---

## Immediate Next Recommended Work

Highest-value next steps:

1. Add/commit `README.md`.
2. Add/commit `markdowns/site-audit.md`.
3. Update `markdowns/decisions.md` with the audience and achievement-first priority.
4. Review existing project cards and choose the next missing project to add.
5. Add more achievement-driven detail to existing projects.
6. Update any resume PDFs that are not current.
7. Return to the HVAC career arc visual after the achievement layer is stronger.

Recommended next commit:

```text
Update project roadmap and decisions
```

Bonzai.
