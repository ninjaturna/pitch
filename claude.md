# Pitch Project — Claude Code Instructions

## What this project is
A Slidev-based system for generating client pitches, proposals, and 
web presentations. Each pitch lives on its own branch or in its own 
fork of this template.

## Tech stack
- Slidev (markdown-driven presentation framework)
- Vue 3 single-file components for custom design system elements
- UnoCSS for utility styling (Tailwind-equivalent classes work)
- Deployed to Netlify, source on GitHub

## When editing slides.md
- Use `---` to separate slides (with blank lines around it)
- Use frontmatter at the top of each slide for layout and styling
- Prefer Slidev built-in layouts before custom ones: cover, two-cols, 
  image-right, center, statement, quote, end
- Use `<v-click>` for click-to-reveal animations
- Keep one idea per slide — no walls of text

## Custom components
- Live in /components as .vue files
- Use them in slides like <ComponentName :prop="value" />

## Brand defaults
[Fill in: brand colors, fonts, tone of voice, logo path]

## Always
- Read pitch-brief.md before generating slides for a new pitch
- Match the tone and audience defined in the brief
- Ask before adding new dependencies
