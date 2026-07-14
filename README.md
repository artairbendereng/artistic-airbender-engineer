# Artistic Airbender Engineer

**Owner:** Dean Hanson  
**Project type:** Static engineering portfolio and first coding project  
**Last updated:** 2026-07-14

## Project Purpose

Artistic Airbender Engineer is a lightweight portfolio website that documents Dean Hanson's HVAC engineering experience, technical depth, translatable skills, and evolving coding abilities.

The site has two jobs:

1. Present engineering work clearly to AEC recruiters, technical leaders, and adjacent industries.
2. Serve as a durable first coding project for learning HTML, CSS, JavaScript, Git, GitHub, browser development tools, and carefully isolated experiments.

The site intentionally remains simple. It does not use Next.js, npm, a database, or a backend because the current product does not require them.

## Current Stack

### Core website

- HTML for structure and content
- CSS for layout, responsive behavior, typography, and visual styling
- JavaScript for interactions and lightweight browser behavior
- Git and GitHub for version control
- VS Code Live Server for local development
- GitHub Pages planned for public hosting

### Current external dependency

- Google Fonts for Montserrat

The website includes local system-font fallbacks so the core site still displays if Google Fonts is unavailable.

## Core Architecture Rule

The production website must remain functional even if every optional experiment, dependency, or API is deleted.

```text
Core static website
        |
        +-- always works independently
        |
Optional experiments
        |
        +-- isolated
        +-- removable
        +-- never required at runtime
```

This is the project's dependency isolation switch.

## Repository Structure

```text
artistic-airbender-engineer/
├── index.html
├── projects.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── assets/
│   └── production images, logos, and graphics
├── docs/
│   └── public resume PDFs
├── markdowns/
│   ├── airbender roadmap.md
│   ├── decisions.md
│   ├── HVACAirbenderMacro.md
│   └── project notes and archives
├── simple-snakes/
│   └── dependency-free Python helper scripts
├── dependencies/
│   └── optional experiments that require installed packages
└── experiments/
    └── disposable prototypes and isolated tests
```

## Folder Rules

### `assets/`

Production-ready files used directly by the live website.

Do not keep discarded images, format tests, or unused alternatives here.

### `docs/`

Resume PDFs and other public documents opened by the website.

Current resume files:

- `2026-dean-hanson-hvac-resume.pdf`
- `2026-dean-hanson-translatables-resume.pdf`

### `markdowns/`

Project planning, decisions, archives, and long-term documentation.

### `simple-snakes/`

Small Python scripts using only Python's standard library whenever practical.

These scripts may help with repetitive development tasks, validation, image inventories, link checks, or content organization, but the website must not depend on them to load.

### `dependencies/`

Optional learning projects that use third-party packages.

Every experiment in this folder should have its own instructions and should be removable without affecting the core site.

### `experiments/`

Unproven ideas, temporary tests, alternate assets, and prototypes.

Experiments may later graduate into `simple-snakes/`, `dependencies/`, or the production website after review.

## Current Features

- Two-page static website
- One-page personal and professional introduction
- Separate notable-projects page
- Sticky navigation
- Gold scroll-progress bar
- Responsive mobile styling
- Engineering project cards with imagery
- Expand and minimize controls
- Staggered bullet reveal animation
- Blue technical-skill bullets
- Gold translatable-skill bullets
- HVAC resume link
- Intentionally non-secure JavaScript passcode gate for the Translatables resume
- LinkedIn and GitHub profile links
- Dynamic copyright year

## Password Gate Note

The Translatables resume uses a basic front-end JavaScript prompt.

This is a soft barrier only. It is not secure authentication because the passcode and PDF path can be discovered in the public source code. It exists for personality and light friction, not for protecting confidential information.

## Local Development

Open the repository in VS Code and start Live Server from `index.html`.

No package installation is required.

There is currently no need to run:

```bash
npm install
npm run dev
```

Those commands belong to projects with a Node.js build system, such as The Spoiling Point. Artistic Airbender Engineer is intentionally a plain static site.

## Basic Git Workflow

```bash
git status --short
git diff --check
git diff --stat
git add -A
git commit -m "Describe the completed update"
git push
```

## Design System

- Background: `#000000`
- Primary text: `#FFFFFF`
- Gold accent: `#FFC700`
- Technical blue: `#6EC6FF`
- Font: Montserrat with local system-font fallbacks

## Quality-Control Checklist

Before each push:

- Test `index.html` with Live Server.
- Test `projects.html` with Live Server.
- Open both resume PDFs.
- Test the Translatables resume passcode gate.
- Expand and minimize every project card.
- Verify blue and gold bullet divisions.
- Resize the browser to test mobile behavior.
- Confirm that no production file references discarded experiment assets.
- Run `git diff --check`.
- Review `git status` before committing.

## Long-Term Direction

This repository remains Pilot I: a durable, static, achievement-first portfolio and coding foundation.

Thrivinity is planned as Pilot II and may justify a more advanced stack involving logins, calculators, stored user data, Google Drive links, APIs, dependencies, and a fuller application architecture.

The purpose is not to force every technology into one project. The purpose is to choose the smallest stack that serves each product while building transferable software-engineering judgment.
