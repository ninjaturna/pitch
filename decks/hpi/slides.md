---
theme: ../../themes/launch
title: "HP Inc × Launch"
info: |
  ## HPI Pitch
  v8 — GA build
class: text-left
transition: slide-left
mdc: true
layout: observation-cards
mode: dark
client: HP Inc × Launch by NTT DATA
footer: Before we say anything about us — does that frame match where you are?
---

<template v-slot:heading>

# Where HP Stands Today.

</template>

<template v-slot:subheading>

Three observations about HP's current moment, before we say anything about Launch.

</template>

<template v-slot:cards>
<div class="oc-card">
  <div class="oc-card-label">01 — Mandate</div>
  <div class="oc-card-title">A $1B mandate, on the clock.</div>
  <div class="oc-card-body">HP has committed to $1B in productivity gains through AI-enabled transformation by FY2028. The target is set. How development delivers it is the open question.</div>
</div>
<div class="oc-card">
  <div class="oc-card-label">02 — Partnership</div>
  <div class="oc-card-title">A development partnership, growing more complex.</div>
  <div class="oc-card-body">NTT has supported HP's development organization for years. The relationship has grown, and so has the gap between headcount on the floor and what actually ships.</div>
</div>
<div class="oc-card">
  <div class="oc-card-label">03 — Initiative</div>
  <div class="oc-card-title">A live initiative asking the harder question.</div>
  <div class="oc-card-body">Project Armor is in motion. The hard question inside it is methodology — what stays, what consolidates, what sunsets, and on what basis. The answer decides whether the program produces a defensible roadmap or a politically negotiated one.</div>
</div>
</template>

<!--
Open with the three observations. Pause after each. Land on the footer question and let the room respond before advancing. Project Armor is named here intentionally — Craig confirmed pre-meeting framing supports it. Do not rush this slide.
-->


---
layout: two-pane
---

<template v-slot:left>

## The layer above execution.

# Where Launch Sits.

<div class="s1-bullets">
  <div class="s1-bullet">Launch works upstream of delivery</div>
  <div class="s1-bullet">Methodology, governance, and the operating conditions around the engineers</div>
  <div class="s1-bullet">Not the development capacity itself</div>
</div>

</template>

<div class="point">
  <div class="pt-label">Staff augmentation</div>
  <p>NTT's apps team scales delivery capacity — that's what staff augmentation does, and it does it well.</p>
</div>
<div class="point active">
  <div class="pt-label">Launch</div>
  <p>Defining what gets built before tickets are written. Structuring conditions that turn capacity into compounding returns.</p>
</div>
<div class="point">
  <div class="pt-label">The distinction</div>
  <p>One scales execution. The other determines what execution should produce.</p>
</div>

<!--
The contrast with the apps team is explicit in the script but the apps team is not named on the slide. Apps is also NTT — read the room before leaning into the differentiation. Craig may have political sensitivity here. If the room is warm, lean in. If not, keep it abstract.
-->


---
layout: statement-split
eyebrow: The Friction Diagnostic
attribution: Launch Friction Diagnostic Framework
listHeading: Where friction actually lives
---

<template v-slot:statement>

> Most backlogs don't have an *engineering problem*. They have a friction problem — and that friction almost never lives *where everyone is looking*.

</template>

<div class="ss-item">
  <div class="ss-item-num">01</div>
  <div class="ss-item-text">Upstream, in how requirements are defined and validated before development starts</div>
</div>
<div class="ss-item">
  <div class="ss-item-num">02</div>
  <div class="ss-item-text">In handoffs between product, engineering, and QA</div>
</div>
<div class="ss-item">
  <div class="ss-item-num">03</div>
  <div class="ss-item-text">In testing cycles that depend on data from teams operating on different release cadences</div>
</div>
<div class="ss-item">
  <div class="ss-item-num">04</div>
  <div class="ss-item-text">In definitions of "done" that aren't shared across roles</div>
</div>
<div class="ss-conclusion">
  <p><strong>The diagnostic before the prescription</strong> — Launch maps friction across the SDLC before recommending what to change. The map is the deliverable. The recommendations come from the data, not from a template.</p>
</div>

<!--
Uses the current Frictionless Enterprise pyramid (Ted's asset). Friction examples are illustrative — Ted's source content should drive the on-slide examples if the asset is refreshed before the meeting. The four locations are the argument; don't shortcut through them.
-->


---
layout: three-things
eyebrow: AI Readiness
footerBar: '<strong>The approach —</strong> start with an assessment. 90-day engagement establishes the baseline. The intervention follows the data.'
---

<template v-slot:heading>

# AI Tools Aren't the Problem. Organization Readiness Is.

</template>

<template v-slot:setup>

GitHub Copilot has been available since 2022. The teams getting full value didn't just install the tool — they restructured around how AI-assisted development actually works.

</template>

<template v-slot:cells>
<div class="tt-cell" data-num="1">
  <div class="tt-cell-bar"></div>
  <div class="tt-cell-title">How work is defined and scoped</div>
  <div class="tt-cell-body">AI amplifies clarity and exposes ambiguity. If requirements are loose, the tool generates confidently wrong output faster.</div>
  <div class="tt-cell-tag">Work definition</div>
</div>
<div class="tt-cell" data-num="2">
  <div class="tt-cell-bar"></div>
  <div class="tt-cell-title">How engineers are structured around the tools</div>
  <div class="tt-cell-body">Pairing models, ownership structures, and review cycles change when AI writes first drafts of production code.</div>
  <div class="tt-cell-tag">Team structure</div>
</div>
<div class="tt-cell" data-num="3">
  <div class="tt-cell-bar"></div>
  <div class="tt-cell-title">How quality is measured</div>
  <div class="tt-cell-body">AI-generated code has different failure modes than hand-written code. Quality measurement needs to catch up.</div>
  <div class="tt-cell-tag">Quality model</div>
</div>
</template>

<!--
Sources: Jason's refreshed AI-Powered Development materials and the HCAI maturity model. GitHub Copilot availability date (June 2022) confirmed from public record. The footer bar names the 90-day engagement — this is the natural bridge into the close. Let HP respond to the three cells before landing on it.
-->


---
layout: case-study
---

## Case Study — UPS

# Backlog growth outpacing the team's capacity to address it.

<div class="cs-hook">Their engineers were good. Their architecture was solid. Their backlog kept growing anyway — because every sprint started late, and nobody could agree on what "done" meant upstream. That's where we started.</div>

<div class="cs-story">
  <div class="cs-story-item">
    <div class="cs-story-label">Client</div>
    <div class="cs-story-text">Global logistics organization, enterprise-scale development with significant staff augmentation supporting delivery.</div>
  </div>
  <div class="cs-story-item">
    <div class="cs-story-label">Challenge</div>
    <div class="cs-story-text">Velocity unpredictable. Headcount but not throughput — and the throughput problem wasn't engineering.</div>
  </div>
  <div class="cs-story-item">
    <div class="cs-story-label">What we did</div>
    <div class="cs-story-text">Mapped the SDLC from intake to ship. Built the operating conditions — backlog governance, definition-of-done alignment, testing sequencing.</div>
  </div>
</div>

<template v-slot:outcomes>
<div class="cs-metric">
  <div class="cs-metric-label">Velocity</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
<div class="cs-metric">
  <div class="cs-metric-label">Cycle time</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
<div class="cs-metric">
  <div class="cs-metric-label">Rework rate</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
</template>

<template v-slot:sidebar>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Industry</div>
  <div class="cs-sidebar-val">Global Logistics</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Scale</div>
  <div class="cs-sidebar-val">Enterprise, significant staff aug</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Engagement type</div>
  <div class="cs-sidebar-val">SDLC Friction Diagnostic + Operating Model</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Tags</div>
  <div class="cs-tag-list">
    <span class="cs-tag-item">Logistics</span>
    <span class="cs-tag-item">Enterprise</span>
    <span class="cs-tag-item">SDLC</span>
    <span class="cs-tag-item">Velocity</span>
  </div>
</div>
<div class="cs-sidebar-divider"></div>
<div class="cs-why">
  <div class="cs-why-label">Why HP</div>
  <div class="cs-why-text">Large dev org, significant staff aug capacity, a backlog that has outgrown the model. The diagnostic pattern transfers.</div>
</div>
</template>

<!--
Source: Launch 3.0 UPS case study. Ted owns story fluency.
[FLAG: All three metrics (velocity, cycle time, rework rate) are TBD — do not present this deck to HP until populated. Pull from Launch 3.0 library. If metrics are not available before the meeting, consider removing the outcomes section or replacing with qualitative outcome statements.]
-->


---
layout: case-study
---

## Case Study — Cover My Meds

# No shared method for deciding what to build next.

<div class="cs-hook">Multiple product owners. Every team confident they were building the right thing — and no way to prove it. Sound familiar?</div>

<div class="cs-story">
  <div class="cs-story-item">
    <div class="cs-story-label">Client</div>
    <div class="cs-story-text">Healthcare technology org within McKesson, enterprise scale, many product owners across multiple lines.</div>
  </div>
  <div class="cs-story-item">
    <div class="cs-story-label">Challenge</div>
    <div class="cs-story-text">Product decisions made by team conviction, not validated insight. Resource allocation negotiated, not optimized.</div>
  </div>
  <div class="cs-story-item">
    <div class="cs-story-label">What we did</div>
    <div class="cs-story-text">Built the discovery and prioritization infrastructure. Established shared product practices: how to decide what gets built, how to validate before building.</div>
  </div>
</div>

<template v-slot:outcomes>
<div class="cs-metric">
  <div class="cs-metric-label">Prioritization</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
<div class="cs-metric">
  <div class="cs-metric-label">Alignment</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
<div class="cs-metric">
  <div class="cs-metric-label">Outcome</div>
  <div class="cs-metric-placeholder">TBD</div>
  <div class="cs-metric-desc">Ted/Jason — Launch 3.0</div>
</div>
</template>

<template v-slot:sidebar>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Industry</div>
  <div class="cs-sidebar-val">Healthcare Technology</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Parent org</div>
  <div class="cs-sidebar-val">McKesson</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Engagement type</div>
  <div class="cs-sidebar-val">Discovery Infrastructure + Product Prioritization</div>
</div>
<div class="cs-sidebar-block">
  <div class="cs-sidebar-label">Tags</div>
  <div class="cs-tag-list">
    <span class="cs-tag-item">Healthcare</span>
    <span class="cs-tag-item">Product</span>
    <span class="cs-tag-item">Prioritization</span>
  </div>
</div>
<div class="cs-sidebar-divider"></div>
<div class="cs-why">
  <div class="cs-why-label">Why HP</div>
  <div class="cs-why-text">10+ product owners downstream of HP's product org face the same structural question. The Cover My Meds model answers it.</div>
</div>
</template>

<!--
Source: Launch 3.0 CMM case study.
[FLAG: This slide is CONDITIONAL — include in the deck only if Monique is confirmed in the room. If she is not attending, move this slide to the appendix before the meeting. Confirm her name and title with Craig before finalizing the run-of-show.]
[FLAG: All three metrics TBD — same sourcing requirement as UPS slide.]
-->


---
layout: conversation
eyebrow: Open floor
cta: We can develop a specific POV focusing on where Launch can help.
---

<template v-slot:heading>

# The Conversation Worth Having.

</template>

<template v-slot:subheading>

The rest of this time is yours. We want to learn where you feel friction.

</template>

<template v-slot:questions>
<div class="cv-q">
  <div class="cv-q-num">01</div>
  <div class="cv-q-text">Where does friction live in your engineering cycle today — and where would you start if you had to pick one place?</div>
</div>
<div class="cv-q">
  <div class="cv-q-num">02</div>
  <div class="cv-q-text">What does AI-assisted development actually look like inside your dev organization right now — adoption, governance, measured outcomes?</div>
</div>
<div class="cv-q">
  <div class="cv-q-num">03</div>
  <div class="cv-q-text">On the product side: when teams disagree on what to build next, how does that get resolved today?</div>
</div>
<div class="cv-q">
  <div class="cv-q-num">04</div>
  <div class="cv-q-text">On Project Armor: where is the methodology question sitting right now?</div>
</div>
</template>

<!--
Listening posture is intentional — the slide is minimal by design. Four questions map to the three opportunity tracks plus Project Armor. Sequence them based on who Craig confirms is in the room. If the conversation goes long before this slide, cut Q3 or Q4 — the most important ones are Q1 and Q4.
-->


---
layout: closing
---

Ready to map where friction lives in HP's engineering cycle.

<!--
Brand close. Let it breathe. If the conversation is still running, hold here until the room wraps naturally. When it does, this is the last thing they see. No action items, no follow-up list — that comes via email. The slide does one job: end on the Launch brand.
-->

---

## Appendix


---
layout: narrative
---

## App Rationalization Methodology.

When the question "which apps do we keep" becomes "how do we decide," Launch is the layer that builds the answer.

<div class="ss-item">
  <div class="ss-item-num">01</div>
  <div class="ss-item-text"><strong>The challenge</strong> — app sprawl is the symptom. The structural problem is decision methodology. Without one, the rationalization roadmap reflects organizational politics, not strategic value. That's how rationalization programs stall.</div>
</div>
<div class="ss-item">
  <div class="ss-item-num">02</div>
  <div class="ss-item-text"><strong>The approach</strong> — Launch builds the decision framework: the criteria, the weighting, the data inputs, and the governance that holds up under executive review. We're not the team that decommissions the apps. We're the team that makes the decommissioning decisions defensible.</div>
</div>
<div class="ss-item">
  <div class="ss-item-num">03</div>
  <div class="ss-item-text"><strong>Why this position matters</strong> — the execution body has an incentive to grow the application footprint, not shrink it. An independent advisory layer has the opposite incentive structure, and produces a different recommendation set as a result.</div>
</div>

<!--
Appendix slide — pull forward into the main deck if Project Armor surfaces app rationalization as a live decision in the meeting. Craig is the signal — if he brings up the rationalization question before RAW 6, this is the slide to have ready. Otherwise it stays in appendix.
-->

---

## Open Items Before Client-Facing Build

The following must be resolved before this deck is shown to HP:

1. **UPS metrics** — velocity, cycle time, rework rate. Source: Ted/Jason via Launch 3.0 library.
2. **CMM metrics** — prioritization improvement, alignment outcome, overall outcome. Source: Ted/Jason via Launch 3.0 library.
3. **Monique attendance** — confirm with Craig whether she is in the room. If not, move RAW 5 to appendix before the meeting.
4. **Monique's title** — confirm full name and title before any version of the deck references her or her team explicitly in the room.