import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const name = process.argv[2]
if (!name) {
  console.error('Usage: tsx scripts/convert.ts <deck-name>')
  process.exit(1)
}

const contentPath = resolve(`content/${name}.md`)
const outDir = resolve(`decks/${name}`)
const outPath = resolve(`${outDir}/slides.md`)

const raw = readFileSync(contentPath, 'utf-8')

// Split into sections on ### SLIDE, ### APPENDIX, or ### RAW headers
const parts = raw
  .split(/^(?=###\s+(?:SLIDE|APPENDIX|RAW)\s+)/m)
  .filter(p => /^###\s+(?:SLIDE|APPENDIX|RAW)\s+/m.test(p))

function extractField(text: string, field: string): string {
  const regex = new RegExp(`\\*\\*${field}[^*]*\\*\\*\\s*\\n([\\s\\S]*?)(?=\\n\\*\\*|\\n>\\s*\\*\\*|$)`)
  const match = text.match(regex)
  return match ? match[1].trim() : ''
}

function extractNotes(text: string): string {
  const lines = text.split('\n')
  const noteLines: string[] = []
  let inNotes = false

  for (const line of lines) {
    if (/^>\s*\*\*NOTES/.test(line)) {
      inNotes = true
      continue
    }
    if (!inNotes) continue
    if (/^>\s*\*\*GRAPHIC/.test(line)) break
    if (line.startsWith('>')) {
      noteLines.push(line.slice(1).trim())
    } else if (line.trim() !== '') {
      break
    }
  }

  return noteLines.join('\n').trim()
}

function escapeYamlValue(value: string): string {
  if (value.includes(':') || value.includes('"') || value.includes("'")) {
    return `'${value.replace(/'/g, "''")}'`
  }
  return value
}

function buildBodyContent(body: string): string {
  if (!body) return ''

  if (body.includes('LEFT:') && body.includes('RIGHT:')) {
    const leftMatch = body.match(/LEFT:\s*([^\n]*)\n([\s\S]*?)(?=RIGHT:)/)
    const rightMatch = body.match(/RIGHT:\s*([^\n]*)\n([\s\S]*)$/)
    if (leftMatch && rightMatch) {
      return `**${leftMatch[1].trim()}**\n${leftMatch[2].trim()}\n\n**${rightMatch[1].trim()}**\n${rightMatch[2].trim()}`
    }
  }

  return body
}

function buildSlideContent(part: string): string {
  const heading = extractField(part, 'HEADING')
  const subheading = extractField(part, 'SUBHEADING')
  const body = extractField(part, 'BODY')
  const notes = extractNotes(part)
  const bodyContent = buildBodyContent(body)

  let content = ''
  if (heading) content += `# ${heading}\n\n`
  if (subheading) content += `> ${subheading}\n\n`
  if (bodyContent) content += `${bodyContent}\n\n`
  if (notes) content += `<!--\n${notes}\n-->\n`

  return content.trimEnd()
}

const mainParts = parts.filter(p => /^###\s+SLIDE\s+/m.test(p))
const rawParts = parts.filter(p => /^###\s+RAW\s+/m.test(p))
const appendixParts = parts.filter(p => /^###\s+APPENDIX\s+/m.test(p))
const allParts = [...mainParts, ...rawParts, ...appendixParts]

// Build slide sections — slide 0 layout goes in global frontmatter
const sections: string[] = []
let rawCoverFm = ''

allParts.forEach((part, index) => {
  if (/^###\s+RAW\s+/m.test(part)) {
    const rawContent = part.replace(/^###[^\n]*\n\n?/, '').trimEnd()
    if (index === 0) {
      // First slide is RAW — extract its frontmatter to merge into global config
      const fmMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)/)
      if (fmMatch) {
        rawCoverFm = fmMatch[1].trim()
        const layoutMatch = rawCoverFm.match(/^layout:\s*(.+)$/m)
        const modeMatch = rawCoverFm.match(/^mode:\s*(.+)$/m)
        const layout = layoutMatch?.[1]?.trim() ?? 'cover'
        const mode = modeMatch?.[1]?.trim() ?? 'dark'
        sections.push(`__COVER_LAYOUT__:${layout}:${mode}`)
        sections.push(fmMatch[2].trimEnd())
      } else {
        sections.push(`__COVER_LAYOUT__:cover:dark`)
        sections.push(rawContent)
      }
      return
    }
    sections.push(rawContent)
    return
  }

  const headerMatch = part.match(/^###\s+(SLIDE|APPENDIX)\s+[\dA-Z]+\s*\|\s*(.+)$/m)
  const sectionType = headerMatch?.[1] ?? 'SLIDE'
  const title = headerMatch?.[2]?.trim() ?? ''

  const isFirstSlide = index === 0
  const isLastMainSlide = sectionType === 'SLIDE' && index === mainParts.length - 1
  const hasConversation = title.toUpperCase().includes('CONVERSATION')
  const isAppendix = sectionType === 'APPENDIX'

  let layout: string
  let mode: string

  if (isFirstSlide) {
    layout = 'cover'
    mode = 'dark'
  } else if (isAppendix) {
    layout = 'narrative'
    mode = 'light'
  } else if (isLastMainSlide || hasConversation) {
    layout = 'closing'
    mode = 'dark'
  } else {
    layout = 'narrative'
    mode = 'light'
  }

  const slideContent = buildSlideContent(part)

  if (isFirstSlide) {
    // Slide 0: layout goes in global frontmatter, content is returned separately
    sections.push(`__COVER_LAYOUT__:${layout}:${mode}`)
    sections.push(slideContent)
  } else {
    let fm = `layout: ${layout}\nmode: ${mode}`
    if (layout === 'narrative') {
      const eyebrow = title.split('|')[0].trim()
      if (eyebrow) fm += `\neyebrow: ${escapeYamlValue(eyebrow)}`
    }
    // The leading --- is the slide separator AND the frontmatter opener
    sections.push(`---\n${fm}\n---\n\n${slideContent}`)
  }
})

// First entry is the cover layout marker, second is slide 0 content
const coverInfo = sections[0].split(':')
const coverLayout = coverInfo[1]
const coverMode = coverInfo[2]
const slide0Content = sections[1]
const remainingSlides = sections.slice(2)

// Extra frontmatter props from first RAW block's frontmatter (e.g. client, footer)
const extraFm = rawCoverFm
  ? '\n' + rawCoverFm.split('\n').filter(l => !/^(layout|mode):/.test(l)).join('\n').trim()
  : ''

const globalFrontmatter = `---
theme: ../../themes/launch
title: 'HP Inc × Launch'
info: |
  ## HPI Pitch
  v7 — Internal review
class: text-left
transition: slide-left
mdc: true
layout: ${coverLayout}
mode: ${coverMode}${extraFm}
---`

const output = [globalFrontmatter, slide0Content, ...remainingSlides].join('\n\n')

mkdirSync(outDir, { recursive: true })
writeFileSync(outPath, output, 'utf-8')

console.log(`✓ Converted ${name}: ${allParts.length} slides (${rawParts.length} raw) → decks/${name}/slides.md`)
