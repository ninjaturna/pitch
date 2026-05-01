---
theme: ./themes/launch
title: 'HP Inc × Launch'
info: |
  ## HPI Pitch
  v7 — Internal review
class: text-left
transition: slide-left
mdc: true
layout: cover
mode: dark
---

# Where HP Stands Today

> Three observations about HP's current moment, before we say anything about Launch.

- A $1B mandate, on the clock — HP has committed to $1B in productivity gains through AI-enabled transformation by FY2028. The target is set. How development delivers it is the open question.
- A development partnership, growing more complex — NTT has supported HP's development organization for years. The relationship has grown, and so has the gap between headcount on the floor and what actually ships. Adding people hasn't moved velocity proportionally.
- A live initiative asking the harder question — Project Armor is in motion. The hard question inside it is methodology — what stays, what consolidates, what sunsets, and on what basis. The answer decides whether the program produces a defensible roadmap or a politically negotiated one.

<!--
Open with the three observations. Pause after each. Land on the closing question and let the room respond before advancing. Project Armor is named here intentionally — Craig confirmed pre-meeting framing supports it. Sources: HP Inc FY2025 earnings release for the $1B target; April 28 internal sync for the partnership and Project Armor context.
-->

---
layout: narrative
mode: light
eyebrow: WHERE LAUNCH SITS
---

# Where Launch Sits

> Not the delivery team. The team that figures out what the delivery team should build, in what order, and how to set them up to succeed.

**The layer above execution**
- Launch works upstream of delivery
- The job is methodology, governance, and the operating conditions around the engineers
- Not the development capacity itself

**Different from what HP already has**
- NTT's apps team scales delivery capacity — that's what staff augmentation does, and it does it well
- Launch is the layer above — defining what gets built before tickets are written
- Structuring the conditions that turn capacity into compounding returns instead of compounding cost

<!--
The contrast with the apps team is explicit in the script but the apps team is not named on the slide. Apps is also NTT — read the room before leaning into the differentiation. Craig may have political sensitivity here.
-->

---
layout: narrative
mode: light
eyebrow: THE FRICTION DIAGNOSTIC
---

# The Friction Diagnostic

> Most backlogs don't have an engineering problem. They have a friction problem — and that friction almost never lives where everyone is looking.

Where friction actually lives:
- Upstream, in how requirements are defined and validated before development starts
- In handoffs between product, engineering, and QA
- In testing cycles that depend on data from teams operating on different release cadences
- In definitions of "done" that aren't shared across roles

The diagnostic before the prescription — Launch maps friction across the SDLC before recommending what to change. The Frictionless Enterprise pyramid is the framework. The map is the deliverable. The recommendations come from the data, not from a template.

<!--
Uses the current Frictionless Enterprise pyramid (Ted's asset, same version Craig has already seen via the FE eBook). Friction examples are illustrative — Ted's source content should drive the on-slide examples in deck build.
-->

---
layout: narrative
mode: light
eyebrow: 'AI TOOLS AREN''T THE PROBLEM'
---

# AI Tools Aren't the Problem. Organization Readiness Is.

> GitHub Copilot has been available since 2022. The teams getting full value from it didn't just install the tool — they restructured around how AI-assisted development actually works.

The challenge — AI development tooling is a four-year-old conversation. Most enterprise development organizations have the tools. The question is whether the operating model has caught up — whether work is defined so the tools can amplify it, whether engineers are structured around them, and whether quality measurement keeps up with AI-generated code.

Three things that change when AI development actually works:
- How work is defined and scoped — AI amplifies clarity and exposes ambiguity
- How engineers are structured around the tools — pairing models, ownership, review cycles
- How quality is measured — AI-generated code has different failure modes than hand-written code

The approach — start with an assessment. Where is the organization on the AI maturity curve? Where is the gap between tool access and tool value? The assessment is a 90-day engagement that establishes the baseline. The intervention follows the data.

<!--
Sources: Jason's refreshed AI-Powered Development materials and the HCAI maturity model. GitHub Copilot launch date (June 2022) is confirmed from public record. Posture is explicit: we are NOT assuming HP is early-stage on AI tooling. The three change areas are illustrative — Jason's framework should drive the final structure.
-->

---
layout: narrative
mode: light
eyebrow: CASE STUDY — UPS
---

# Case Study: UPS

> Their engineers were good. Their architecture was solid. Their backlog kept growing anyway — because every sprint started late, and nobody could agree on what "done" meant upstream. That's where we started.

- The client — a global logistics organization running enterprise-scale development with significant staff augmentation supporting delivery.
- The challenge — backlog growth outpacing the team's capacity to address it. Velocity unpredictable. The development organization had headcount but not throughput, and the throughput problem wasn't engineering.
- What we did — mapped the SDLC from intake to ship. Identified specific friction points upstream of engineering. Built the operating conditions — backlog governance, definition-of-done alignment, testing sequencing — that the delivery model needed to produce predictable output.
- What we achieved — [Metrics — Ted/Jason to populate from Launch 3.0 case study library before deck build.]
- Why this translates to HP Inc — the starting condition mirrors HP's. Large development organization. Significant staff aug capacity. A backlog that has outgrown the model supporting it. The diagnostic pattern that worked at UPS transfers.

<!--
Source: Launch 3.0 UPS case study. Ted owns story fluency. Craig has already confirmed this story landed when he saw it. Metrics bracketed — populate from Launch 3.0 library before deck build. Pacing: brief story plus offer-depth-on-request. Keep it tight to leave real time for the open floor.
-->

---
layout: narrative
mode: light
eyebrow: CASE STUDY — COVER MY MEDS
---

# Case Study: Cover My Meds

> Multiple product owners. No shared method for deciding what to build next. Every team confident they were building the right thing — and no way to prove it. Sound familiar?

- The client — a healthcare technology organization within McKesson, operating at enterprise scale with many product owners across multiple lines.
- The challenge — product decisions made by team conviction, not validated insight. No shared methodology for prioritization. Resource allocation negotiated, not optimized.
- What we did — built the discovery and prioritization infrastructure. Established shared product practices across teams: how to decide what gets built, how to validate before building, how to measure whether what was built worked.
- What we achieved — [Metrics — Ted/Jason to populate from Launch 3.0 case study library before deck build.]
- Why this translates to HP Inc — the 10+ product owners downstream of HP's product organization face the same structural question: are build decisions coordinated by a shared methodology, or by individual team confidence? The Cover My Meds model answers that. The framework transfers.

<!--
Source: Launch 3.0 CMM case study. Ted owns story fluency. Slide is conditional — included only if Monique is confirmed in the room. If not, it moves to appendix. Confirm name (Monique or Monica) and her actual title before the meeting.
-->

---
layout: closing
mode: dark
---

# The Conversation Worth Having

> The rest of this time is yours. We want to learn where you feel friction.

What we'd like to learn:
- Where does friction live in your engineering cycle today — and where would you start if you had to pick one place?
- What does AI-assisted development actually look like inside your dev organization right now — adoption, governance, measured outcomes?
- On the product side: when teams disagree on what to build next, how does that get resolved today?
- On Project Armor: where is the methodology question sitting right now?

<!--
Listening posture is intentional — slide is minimal by design. Four questions map to the three opportunity tracks (engineering, AI, product) plus Project Armor. Sequence based on who Craig confirms is in the room.
-->

---
layout: narrative
mode: light
eyebrow: APP RATIONALIZATION METHODOLOGY
---

# App Rationalization Methodology

> When the question "which apps do we keep" becomes "how do we decide," Launch is the layer that builds the answer.

- The challenge — app sprawl is the symptom. The structural problem is decision methodology. Without one, the rationalization roadmap reflects organizational politics, not strategic value. That's how rationalization programs stall.
- The approach — Launch builds the decision framework: the criteria, the weighting, the data inputs, and the governance that holds up under executive review. We're not the team that decommissions the apps. We're the team that makes the decommissioning decisions defensible.
- Why this position matters — the execution body has an incentive to grow the application footprint, not shrink it. An independent advisory layer has the opposite incentive structure, and produces a different recommendation set as a result.

<!--
Held as appendix because the apps team is already engaged with HP on Project Armor execution. Launch's angle is the strategy layer, not the execution body. Surface only if HP raises Project Armor first. No confirmed Launch case study exists for app rationalization — methodology and positioning language only.
-->