# Connecta Design System

> **Safe communication and AI learning for schools and families.**
> A trusted school graph — *school → class → circle → child → parent → teacher* — with two AI characters layered on top:
> **GoodTalk AI** (calm safety moderation) and **Cosmo AI** (Socratic homework guidance).
> Private by default. Reacts only on risk. Teaches better communication. Teaches better thinking.

Connecta is a European platform serving four primary user groups — **children (grades 1–12), teachers, parents/guardians, and schools/municipalities**. It is not a messenger, not an LMS, not a chatbot: it is a controlled digital environment where children can communicate, collaborate and learn with AI support inside trusted school and family boundaries.

This design system is the source of truth for visual + verbal language across **every** Connecta surface — the kid/teen chat app, the parent portal, the teacher workspace, the school admin console, the Cosmo learning canvas, and marketing.

---

## What changed in this revision

This system was originally built against the v1 brand brief (kid/teen messenger with one AI: GoodTalk). The v2 product brief expanded scope significantly. The system now reflects:

| Area | v1 framing | v2 framing (current) |
|---|---|---|
| Audiences | Kids/teens + parents/guardians + schools (implicit) | **Four explicit primary groups**: children, teachers, parents, schools |
| AI characters | One — GoodTalk (safety) | **Two** — GoodTalk (safety) + **Cosmo** (Socratic learning) |
| Product modules | Messaging + safety coaching | **Six layers**: identity, communication, safety, learning, localization, commercial |
| Geography | EU privacy posture | EU **expansion via country packs** (Bulgaria-first, multilingual) |
| Surface variety | One UI kit (chat app) + parent portal | Chat app, parent portal, **+ teacher workspace, school admin, Cosmo learning canvas, Lab Circles** (kits to be built) |

---

## Sources used to build this system

| What | Where | Notes |
|---|---|---|
| Product brief v2 (bilingual EN/BG) | `uploads/connecta_product_brief_bg_en 2.md-b27dc9d0.docx` | Primary source for the v2 update. Defines the four audiences, nine propositions, six product layers, country-pack model, and the school graph. |
| Brand brief (Connecta — Branding Brief v2) | Provided in chat (earlier session) | Voice, principles, tone, signature phrases — still canonical. |
| Brand sheet (logo lockups, app-icon variants) | `assets/brand-sheet.svg` | Wordmark + "nn" app-icon glyph in 4 colorways. |
| Mood board | `assets/brand-mood.png` | Tile system, photo direction, "freedom to chat" hero. |
| Type & color spec sheet | `assets/brand-typography.png` | DM Sans Regular/Medium/Bold confirmed; product palette swatches. |
| Type pairing | User note: "DM Sans only" | DM Sans = the single family (incl. Cyrillic); category / metadata labels use uppercase tracked DM Sans, not a mono face. |
| **Live marketing site** | `https://connecta.education` (Astro, EN; BG country pack pending) | **First shipped surface.** Reconciled into this system — see *v2.1* below. Source for scribbles, the 5-step Lab flow, shipped GoodTalk copy, the "C" Cosmo mark, taglines, and the €20/yr chat-app SKU. |

> **No codebase or Figma was attached.** UI kits are reasoned recreations against the brand brief and the product brief. The **live marketing site (`connecta.education`) is now the one shipped surface** — where it and this system disagree, the shipped site wins and this doc has been corrected to match. When production *app* code or Figma arrives, re-derive the kits too — see *Caveats*.

### v2.1 — reconciled with the shipped site (`connecta.education`)

The public marketing site shipped before this system was finalized. Auditing it surfaced six corrections, now folded in below:

| # | What the live site does | System resolution |
|---|---|---|
| 1 | **Hand-drawn scribbles** (olive / plum / pink) scattered across marketing headers | Scribbles are now a **sanctioned marketing-only accent** — the "no textures" rule still holds for product chrome. See *Scribbles*. |
| 2 | **Lab Circles run 5 steps**: Hypothesis → Variables → Measure → Analysis → Conclusion | Corrected everywhere (was 4). |
| 3 | **Cosmo renders as a "C" monogram**, not a compass | "C" is the working mark; compass demoted to fallback. |
| 4 | GoodTalk ships **"Rethink / Send anyway"** + **"NUDGE · JUST FOR YOU"** | Microcopy canon updated; old strings kept as alternates. |
| 5 | New taglines + four whole-school principles + **€20/yr** chat-app SKU | Added to *Signature phrases*, *Content*, and *Commercial*. |
| 6 | **Lime (`#DEFB50`) is the OS `theme-color`**; `app-icon-lime-coral` is the shipped favicon/lockup | Documented; lime owns the *brand chrome* (iconn, theme color, marketing). |

> **Domain & social:** `connecta.education` · X/Twitter `@connecta_edu` · LinkedIn `company/connecta-edu` · footer signature **"🇪🇺 Made for the EU"** (the EU flag is the one sanctioned emoji in Connecta's own voice — region signal only).

---

## Index

| File | What's in it |
|---|---|
| `colors_and_type.css` | All CSS custom properties: brand & neutral palette, semantic vars (`--fg-1`, `--bg-page`, `--state-*`, `--cosmo-*`, `--scope-*`, `--role-*`), radii, shadows, spacing, motion, **brand washes (`--wash-*`)** and **photo scrims (`--scrim-*`)**. Drop in once at the document root. |
| `fonts/` | DM Sans variable font files (roman + italic), self-hosted. Covers Latin Extended + full Cyrillic for Bulgarian. |
| `assets/` | Logos (4 wordmark colorways), app-icon glyphs (4 backgrounds + 4 bare glyphs), mood/type reference screenshots, brand sheet. |
| `preview/` | One HTML card per token group / principle, registered to the Design System tab. |
| `ui_kits/chat-app/` | Hi-fi recreation of the kid/teen chat app (login → circle list → chat with GoodTalk intervention). |
| `ui_kits/parent-portal/` | Hi-fi recreation of the parent/guardian dashboard (alerts, circles, controls). |
| `primereact-connecta.css` | **The component layer.** Themed PrimeReact catalog — Connecta tokens applied to PrimeReact's component structure. The CSS counterpart of the Connecta preset. |
| `preview/primereact-*.html` | Per-family PrimeReact component proofs (forms, overlays, menus, data, etc.), registered as Design System cards. |
| `Connecta PrimeReact Bridge.html` | Engineering bridge — how to wire PrimeReact into an app via the Connecta preset (styled mode) or passthrough (unstyled). |
| `Connecta × PrimeReact.html` | Visual catalog of the themed PrimeReact components. |
| `Connecta Chat App.html` | Top-level demo of the chat app. |
| `SKILL.md` | Agent skill manifest — pointer for Claude Code or other agents. |
| `README.md` | This file. |

> **Kits still to build for v2:** teacher workspace, school admin console, Cosmo homework canvas, Lab Circles workspace, country-pack onboarding flow. Confirm priority with the product team before starting.

---

## THE PRODUCT IN ONE PAGE

Internalize these before designing anything in Connecta — every surface is derived from them.

### The four audiences

| Audience | Who they are | What they need from Connecta | Default tone of voice |
|---|---|---|---|
| **Children** (grades 1–12) | The everyday user. Two implicit sub-bands: K–5 (younger, parent-supervised) and 6–12 (teen, self-driven). | Safe chat with classmates, homework help from Cosmo, learning circles, a digital identity that isn't anonymous social media. | Plain, fair, never patronizing. Same rules for everyone. |
| **Teachers** | Class owners. Run 20–30 kids per class, multiple classes, parent comms. | Class circles, task assignment, learning circle setup, student-progress visibility, audit-safe parent threads. | Workmanlike, efficient, neutral. Never breezy. |
| **Parents / guardians** | Linked to one or more children. May or may not be paying customers. | Teacher messaging, ability to send homework to their child, low-noise child-safety updates, opt-in GoodTalk activation. | Reassuring, low-noise. Promise a seatbelt, not surveillance. |
| **Schools / municipalities** | The institutional buyer. May deploy across many schools. | Verified school environment, class management, policy & consent control, safety auditability, multi-school deployment. | Formal, audit-flavored, plain-language European-public-sector. |

### The school graph

Every entity in Connecta is anchored in a verified hierarchy. UI references it constantly — breadcrumbs, role badges, audit logs, permission scopes.

```
school
  └── class (e.g. "5а")
        └── circle (class circle, project circle, Lab Circle, trip circle, parent circle…)
              └── child  ↔  parent  ↔  teacher
```

A **circle** is the load-bearing collaboration unit. It can be a whole class, a homework team, a science project, an olympiad-prep group, a school-trip thread, or a parent-coordination thread. Circles are what stop "freely excluding classmates" — the official class circle is always inclusive.

### The two AIs (do not confuse them)

| | **GoodTalk AI** | **Cosmo AI** |
|---|---|---|
| Job | Child-safety moderation | Socratic homework guidance |
| When it speaks | Only on risk signal (bullying, exclusion, unsafe sharing, self-harm, grooming, spam…) | Whenever a child asks for help on a task |
| Tone | Calm, brief, never alarmist. *"Want to rephrase?"* | Curious, patient, never gives the answer. *"Good start. How will you reduce the measurement error?"* |
| Visual | Lime / olive coaching states + plum for true alerts | Sky / curious-blue surfaces — visually **distinct** from GoodTalk so kids know which AI is talking |
| Tokens | `--state-nudge-*`, `--state-pause-*`, `--state-warn-*`, `--state-alert-*`, `--state-ok-*` | `--cosmo-bg`, `--cosmo-fg`, `--cosmo-accent`, `--state-learn-*`, `--state-progress-*` |
| Role badge | `--role-goodtalk-*` | `--role-cosmo-*` |

**They must never share a bubble or a voice.** A GoodTalk surface never tries to teach physics; a Cosmo surface never moderates language.

### The nine propositions (where surfaces come from)

1. **Safe School Chat** — class & circle messaging with child-safe permissions.
2. **Circles** — controlled collaboration spaces (class, homework, project, trip, parent).
3. **GoodTalk AI** — proactive safety moderation, soft nudges → blocks → adult escalation.
4. **Cosmo AI Homework Helper** — Socratic guidance over an uploaded task.
5. **Teacher Tasks** — text/image/file tasks with due dates, teams, Cosmo + GoodTalk support, teacher review.
6. **Lab Circles** — science / project-based learning workspaces (hypothesis → measurement → analysis → conclusion).
7. **Parent Layer** — teacher↔parent threads, homework forwarding, optional GoodTalk activation, progress summaries.
8. **Child Digital Identity** — school-anchored identity (school + class + age band + guardian).
9. **European Country Packs** — language, school structure, curriculum metadata, consent config, moderation rules, data-residency settings — pluggable per country.

### The six product layers (where modules live in the architecture)

`identity` · `communication` · `safety` · `learning` · `localization` · `commercial`

### Commercial surface (do not slop this up with badges)

Five SKUs may appear in school-admin or parent-billing screens: **Connecta Core**, **GoodTalk AI**, **Cosmo AI**, **Lab Circles**, **Parent Plus**, **Institution Plan**. They are *plan rows*, not feature stickers — never put "GoodTalk AI ✓" tile-style on kid-facing surfaces.

---

## CONTENT FUNDAMENTALS

Connecta's voice is **calm, steady, fair, and human**. It treats every reader — a 9-year-old, a 14-year-old, a worried parent, a teacher running 28 class chats, a head-of-school weighing a procurement — as someone who deserves to be told *what's happening and why*, in plain words, without being scolded or oversold.

### Voice principles (apply to all surfaces)

- **Plain over clever.** Short sentences. Common words. No corporate hedging, no marketing froth, no jargon.
- **Fairness framing.** "Same rule for the whole group." "Same rules for everyone." This shows up *constantly* — it's how the system earns teen trust and parent trust.
- **Agency, not commands.** Offer a choice. "Want to rephrase?" not "Rephrase this." "Try a rewrite" not "Required: rewrite."
- **Explain in one line.** Every intervention answers *why* in a single short sentence, then offers a path.
- **Calm, never alarmist.** Avoid red, avoid exclamation marks, avoid "WARNING."
- **No shame, no infantilizing.** Don't tell a teen "that's bad." Don't talk down. Don't use cute mascots or kiddie phrasing.
- **Don't reveal thresholds.** Never say "3 strikes" or "5 flagged messages." Talk about *patterns* and *risk*, not counters.
- **No overpromise.** Connecta doesn't promise perfect safety; it promises a seatbelt. It doesn't promise homework answers; it promises a thinking partner.

### Audience-specific voice (the four tones)

| Audience | Do | Don't |
|---|---|---|
| **Child** | "Your circle is quiet. Say hi." · "That might hurt someone. Want to rephrase?" | "Hey buddy!" · "Oops, that's not nice." · cartoon voice. |
| **Teacher** | "Task sent to 5а. 22 students, due Tue 10:00." · "Read-only thread with parents of 5а." | "Awesome — class is going great!" · "Boost engagement." · LMS-speak. |
| **Parent** | "Nothing to flag. That's the goal." · "We notify adults only when there's real risk." | "Don't worry!" · "We're watching out for you." · surveillance vocabulary ("monitor", "track", "scan", "patrol"). |
| **School** | "Verified school. 412 active students across 18 classes." · "Audit log retained 24 months." | Marketing exclamation copy. "AI-powered safety solution." Corporate jargon. |

### Cosmo's voice (Socratic — its own subdialect)

Cosmo speaks *only* in service of learning. Three load-bearing rules:

1. **Never give the answer first.** Ask the next useful question.
2. **Acknowledge progress in one short clause.** Then probe deeper. *"Good start. How will you reduce the measurement error?"*
3. **Stay subject-aware but tone-neutral.** A physics task and an Bulgarian-literature task get the same patient cadence — only the question changes.

Cosmo never says: "Great job!" · "I'll solve this for you." · "The answer is…" (unless the child has clearly demonstrated the reasoning and is being asked to verify).

### Casing

- **Sentence case** for headings, buttons, menu items, toasts. Always. Even "Private by default."
- **UPPERCASE** is reserved for the `eyebrow` label style (mono, tracked) and tiny system tags ("NUDGE", "COSMO", "READ-ONLY").
- **Title Case is forbidden** in product UI — feels American-marketing and not EU-trust.

### "We" / "you" / "I"

- **You** = the person reading. Always.
- **We** = Connecta. Used sparingly and only when accountability matters: *"We notify adults only when there's real risk."* *"We don't read your messages."*
- **I** is never used. Connecta is not a character. Neither is Cosmo — Cosmo asks questions, it doesn't have a self.

### Emoji & punctuation

- **Emoji: no** in Connecta's own voice (product UI, marketing, onboarding, Cosmo, GoodTalk). One narrow exception: emoji **inside a kid's own message bubble** pass through untouched.
- **No exclamation marks** in system copy. Calm.
- **Em dashes** are fine and very on-brand. **Ellipses** for soft pauses, sparingly.

### Signature phrases (use verbatim)

- *Private by default.*
- *Reacts only on risk.*
- *Teaches better communication.*
- *Teaches better thinking.* *(new — Cosmo counterpart to the GoodTalk principle.)*
- *No feeds. No followers. Just approved circles.*
- *Same rule for the whole group.*
- *Safety without spying.*
- *High-signal alerts only.*
- *Built around the school graph.* *(new — investor / school-admin contexts.)*

### Microcopy examples (canon)

| Surface | Copy |
|---|---|
| GoodTalk rewrite nudge | "That might hurt someone. Want to rephrase?" |
| GoodTalk cooldown | "Let's pause for 2 minutes so this doesn't escalate." |
| GoodTalk alert (rare) | "Adults notified. You're not in trouble — we just want to help." |
| Cosmo first prompt | "Got it. What's the first thing you'd try?" |
| Cosmo follow-up | "Good start. How will you reduce the measurement error?" |
| Cosmo end | "You've got the reasoning. Want to write up your answer?" |
| Teacher composer | "Sending to 5а. 22 students. Add a due date?" |
| Parent reassurance | "Nothing to flag. That's the goal." |
| School admin | "Verified. Audit log retained for 24 months." |
| Empty class circle (kid) | "Your circle is quiet. Say hi." |
| Empty Lab Circle | "Pick a hypothesis to start." |
| Country pack switch | "Showing the Bulgaria pack. Curriculum: МОН 2024." |

### What to avoid (everywhere)

- "Hey there!" / "Welcome aboard!" / cheerful greetings
- "Oops" / "Whoops" / cute error voice
- "Don't worry" — say what's actually true instead
- "Powered by AI" / "with AI" — describe the *behavior*
- "monitor", "track", "scan", "patrol" — any watchdog framing
- "AI tutor" — Cosmo is a thinking partner, not a tutor that answers
- Title Case, gratuitous emoji, exclamation-heavy copy
- Filler stat slop ("99.9% safer!" "10x faster homework!")

---

## VISUAL FOUNDATIONS

The visual system is **modern, minimal, trust-first, soft-geometric**. Closer to a calm productivity app than to a kids' product or a social network. Confidence comes from **whitespace, hierarchy, and one or two saturated brand colors used decisively** — not from gradients, glow, or decoration.

### Color

Colors carry fixed semantic meaning. **Ink is the one primary**; the rest are used only for what they mean.

- **Ink `#0F1A24`** — **primary.** Writing, contour/borders, message bubbles, and the single primary action on every screen (buttons, send). Body type is always ink.
- **Coral `#F35F49`** — **error / check / important.** GoodTalk safety (nudge → warn → alert), validation errors, destructive actions. Calm, not alarmist; never a default action. Wordmark hero use stays in marketing only.
- **Lime `#DEFB50`** — **underline / highlight / experimental / lab.** Text highlight + `::selection`, the active-tag underline, and Cosmo's "lab" accent.
- **Olive `#424F1A`** — **subjects, studies, science, learning.** Cosmo's ground (the EOES lab coach); learning canvases and Lab Circles.
- **Pink `#FBE1FD`** — **love, social, friends.** Friend voice messages, social bubbles, the child's circle surface.
- **Plum `#571B32`** — **parents & guardians.** Parent dashboards, parent-set exercises, the gravity text on alerts.
- **Sky `#BAE6FD`** — **teachers, schools, tasks.** Teacher bubbles & announcements, school admin, Teacher Tasks.

Marketing combinations (wordmark pairings, app-icon colorways, washes) keep their structure — only in-product usage follows the semantics above. No invented blues/greens: every surface is a brand hue or a pale tint of one (`--tint-*`).

**Neutrals & paper** carry structure: `--neutral-*` for hairlines, meta text and muted grounds; paper `#FFFFFF` for cards. Pure `#000` is never used.

**Calm states, always.** Red is never used. GoodTalk's states escalate within **coral** (nudge → warn → alert) on a pale-coral ground; the *alert* surface adds **plum** type for gravity. Repair-complete resolves to **lime** ("go").

### Audience surface scopes

Audience identity is signaled by **ambient ground color**, not by changing chrome. Same DM Sans, same buttons, same icons — different ground.

| Scope | Ground | Tint | Use |
|---|---|---|---|
| `--scope-child-bg`   | white | pink | Kid/teen chat app, child onboarding |
| `--scope-teacher-bg` | neutral-50 | sky | Teacher workspace, task composer |
| `--scope-parent-bg`  | white | pale-plum wash | Parent portal, child-safety summaries |
| `--scope-school-bg`  | neutral-50 | sky | School admin console, audit log |
| `--scope-cosmo-bg`   | pale olive | olive + lime | Lab Circles, homework canvas, any Cosmo dialog |

### Role badges (the school graph, made visible)

Every avatar in chat, audit logs, and dashboards is paired with a 1-line role badge using `--role-*-bg` / `--role-*-fg`. Pill shape, uppercase DM Sans micro-caps, sentence case for the surrounding name. (Role badges are the one place pills remain — selection/filter chips are retired in favour of underline tags.)

`Child · Teacher · Parent · School · Cosmo · GoodTalk`

Role badges are how a child knows whether a message is from their classmate, their teacher, Cosmo or GoodTalk. Never collapse them.

### Type

- **DM Sans** for everything, including category / metadata labels. Regular for body, Medium for emphasis, Semibold/Bold for headings and the uppercase tracked `eyebrow` label style. Geometric warmth that aligns with the wordmark.
- **Cyrillic support is required.** DM Sans covers full Cyrillic — verify any new test copy renders correctly in **Bulgarian (launch locale)** and Latin side-by-side. The preview includes a bilingual type-check card.
- **No monospace.** JetBrains Mono is retired. Categories, timestamps, IDs, message metadata and intervention/role tags ("NUDGE", "COSMO", "READ-ONLY") all set in DM Sans — signalled by uppercase + `.08em` tracking + semibold, not by a mono face. `--font-mono` is kept only as a back-compat alias of the DM Sans stack.
- **Wordmark** is a custom mark — never set "connecta" in DM Sans and call it the logo.
- Hierarchy is built with **size + weight**, not color. Body always `--fg-1`; secondary copy steps to `--fg-2`.

### Localization (country packs)

Connecta is built to expand across Europe via configurable country packs. Each pack swaps language, school structure, grade mapping, curriculum metadata, consent text, moderation rules, AI prompt templates, and data-residency settings.

Visual implications for design:

- **Reserve ~30% horizontal slack** in buttons, tags, and table headers for German/Polish/Hungarian expansion.
- **Never bake locale strings into images.** Wordmark stays as the only fixed text glyph.
- **Date / time / number formatting** comes from the country pack — design components must accept formatted strings, never assume `dd.mm.yyyy` vs `mm/dd/yyyy`.
- **Grade nomenclature varies** — "5а / 5b" (BG/DE-style class letters) is the canon design example; don't hard-code "Grade 5 - Section A".
- **Curriculum tags** ("МОН 2024", "EOES", country-specific) appear as uppercase DM Sans `eyebrow` labels — design space for them in school-admin and Lab Circle screens.

### Spacing & rhythm

- **4pt grid.** Everything on `--s-*` (4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96).
- **Generous breathing room** in marketing (56–96px section spacing). Tighter in product (16–24px).
- **Hairline dividers** (`--border-1`, 1px) over shadows for in-app structure.

### Backgrounds

- **Solid color tiles** dominate marketing (per mood board) — full-bleed coral / lime / sky / plum / ink panels, each carrying one big idea + the wordmark.
- **Photography**, when used, is candid lifestyle. Warm, natural light. No staged stock, no families-on-a-couch. Faces not the primary hook. See *Imagery* below for full rules.
- **No glassmorphism. No repeating patterns or textures.** Flat color or photo.
- **Gradients are permitted only as brand washes on marketing surfaces, and as scrims on photography** — see *Gradients* below. Never in product UI chrome.

### Imagery

Photography is the brand's most powerful asset after the wordmark. Treat it as an editorial choice, never as decoration. Preview: `preview/brand-image-principles.html`.

**Do:**

- **Candid lifestyle.** A teen on a bus, a kid at a desk, hands on a notebook, a real classroom corner. People look like themselves, not like models.
- **Warm, natural light.** Sunlit, golden-hour, lamp-lit interiors. Grain is acceptable, not required.
- **Situated framing.** Shoulders, hands, devices, environments. Backs-of-heads. Anonymity-respectful crops — especially for kids.
- **EU realism.** EU schools, EU streets, EU light. Real, local casting — never forced diversity quotas, never American-suburb aesthetics.
- **Black-and-white** is acceptable for editorial content surfaces (school articles, longer-form). Never for product chrome.

**Don't:**

- **Cool / teal grades.** No blue-shifted teen-drama color science.
- **Posed stock.** No families-on-couch, no smiling-with-laptop, no whiteboard handshakes.
- **Heavy filters, glow, motion blur, tilt-shift.**
- **Identifiable close-ups of named children** without consent docs stored alongside the asset.
- **Kids holding the product like an ad.** Connecta sits in the background of life, not in front of it.

### Watermark on imagery

Use sparingly. The watermark is a quiet signature, not a stamp. Preview: `preview/brand-watermark.html`.

| Rule | Setting |
|---|---|
| Variant | White on dark/photo · ink on bright photo · coral or lime only for hero marketing tiles · never plum/olive on photos |
| Position | Bottom-left preferred. Top-right is acceptable for the small "nn" glyph chip. Never centered, never over a subject's face. |
| Size | Wordmark: 18–22px tall on a 1200px-wide image. Glyph chip: 28×28px. Scales linearly — keep the same fraction of the image's short edge. |
| Inset | 14–16px from the nearest edge. Honors the wordmark's clear-space rule. |
| Legibility | If contrast against the photo falls below 4.5:1, add a soft top or bottom scrim (`--scrim-top` / `--scrim-bottom`). Never a hard color bar. |
| Frequency | One watermark per image. Never both wordmark and glyph on the same photo. |

### Gradients (constrained)

Gradients used to be forbidden outright. They are now permitted in two narrow contexts, with strict rules. Preview: `preview/brand-gradients.html`.

**Where they're allowed:**

1. **Brand washes** — marketing hero tiles, app-store screenshot grounds, social-share cards.
2. **Photo scrims** — soft ink-tinted overlays to lift watermark / hero-line legibility on photography.

**Where they are still forbidden:** buttons, inputs, cards, badges, dashboards, navigation, chat bubbles, role badges, any product chrome.

**Rules for both:**

- **Two stops only.** No three-color rainbows, no mesh, no animated gradients.
- **Brand-locked stops.** Both stops come from the brand palette, or a black/white anchor. No invented colors.
- **Direction.** Default 180° (vertical) or 135–160° (diagonal). No conic. Radial only for soft vignette scrims.
- **Type ≥ 18px** on a gradient ground — anything smaller sits on a flat panel inside the tile.
- **Pick one.** Never combine a gradient ground with a photo on the same surface.

Named brand washes (CSS vars in `colors_and_type.css`):

| Token | Stops | Vibe |
|---|---|---|
| `--wash-sunrise`   | lime → coral · 135° | optimistic, marketing-loud |
| `--wash-dusk`      | coral → plum · 135° | serious-warm, parent surfaces |
| `--wash-night`     | plum → ink · 180° | premium dark hero |
| `--wash-cosmo`     | sky → ink · 160° | learning, "thinking deeper" |
| `--wash-meadow`    | pale-lime → olive · 180° | analog, printed |
| `--wash-paper`     | white → sky · 180° | kid onboarding |
| `--wash-heat`      | coral → ink · 160° | high-energy event/launch |
| `--wash-calm`      | white → pale-plum · 180° | reassurance, parent-portal hero |

Photo scrims: `--scrim-bottom`, `--scrim-top`, `--scrim-vignette`.

### Animation

- **Calm, short, opacity-led.** Default `--dur-base` (220ms) on `--ease-standard`. No overshoot.
- Entries: fade + 4–8px translate. Never scale-up, never bounce.
- Intervention banners slide down into chat flow over 220ms; they hold; they slide back up.
- Cosmo's typing indicator is a slow pulse, not a spinner — Cosmo is thinking, not loading.
- Reduced motion: instant; respects `prefers-reduced-motion`.

### Hover, press, focus

- **Hover:** primary actions darken ~6% (mix with ink). Neutral/ghost: lift to `--neutral-100`. No coloured glows.
- **Press:** scale `0.98`, duration `--dur-fast` (140ms). Cards & tiles scale, never just darken.
- **Focus:** 2px ink outline, 2px offset. Always visible. (Coral outline = error/invalid field only.)

### Borders, shadows, radii

- 1px hairlines (`--border-1`) for in-app structure. 2px borders for **selected** state (ink; coral only for error).
- Shadows light and ink-tinted, three steps. `--shadow-inset` as a softer hairline on resting inputs.
- Radii: `--r-xs` 4 (tags) · `--r-sm` 8 (inputs) · `--r-md` 12 (buttons) · `--r-lg` 16 (cards, bubbles, app-icon) · `--r-xl` 20 (hero tiles) · `--r-2xl` 28 (marketing hero / store screenshots) · `--r-pill` 9999 (badges, capsules).

### Cards (canonical)

- 16px radius, 1px hairline, no shadow at rest. Inside padding 20–24px. Hover (if interactive): `--shadow-1`. Active/selected: 2px ink border, no shadow.

### Layout rules

- **Max content width** in marketing: 1200px, centered.
- **Mobile-first** for child + parent surfaces — chat is mobile-primary; desktop is centered phone-frame plus sidebar.
- **Desktop-first** for teacher + school surfaces — tabular density, dual-pane layouts, audit-log readability matter more than touch.
- **Composer** is bottom-fixed on mobile with 16px safe-area pad. Intervention banner inserts *in flow* above the composer (so kids learn its source), never modal.
- **Top app bar** sticky, flat, no shadow until scroll > 8px (then `--shadow-1`).

---

## COMPONENT IMPLEMENTATION

> **The one rule for building UI: use PrimeReact.**
> When you implement any Connecta interface in code — a screen, a dialog, a form, a menu, a table, a date picker, a toast — build it from **[PrimeReact](https://primereact.org) components**, themed through the **Connecta preset**. Do not hand-roll bespoke widgets, and do not introduce another component library (the previous Tamagui code export has been removed). PrimeReact is the single sanctioned component layer for Connecta.

The visual rules above (color semantics, casing, spacing, radii, no-gradient chrome, calm states) are not re-implemented per component — they are carried by the theme. PrimeReact components inherit the Connecta look automatically; your job is to compose them and apply the *content* and *audience* rules.

### How the theme is applied

Two modes, both reading from `colors_and_type.css` tokens — see `Connecta PrimeReact Bridge.html` for the full walkthrough.

| Mode | When | How |
|---|---|---|
| **Styled mode + Connecta preset** *(default, recommended)* | Almost always. | PrimeReact ships its own component CSS; a single ~60-line preset (`definePreset`) recolors it through Connecta tokens. Wire it once via `PrimeReactProvider`. Least code, survives PrimeReact upgrades, and tracks any edits to `colors_and_type.css` for free. |
| **Unstyled mode + passthrough (`pt`)** *(escape hatch)* | Only for the rare surface that must look exactly like a Connecta-native element (e.g. the GoodTalk nudge banner, chat bubbles). | PrimeReact ships zero CSS; you supply every class via the `pt` prop, styled with the Connecta classes in `primereact-connecta.css`. Total control, much more code. Both modes can coexist in one app. |

```tsx
import { PrimeReactProvider } from 'primereact/api';
import { Connecta } from './connecta-preset'; // definePreset over Aura, mapped to colors_and_type.css

export default function App() {
  return (
    <PrimeReactProvider value={{ theme: { preset: Connecta } }}>
      {/* compose screens from primereact/* components */}
    </PrimeReactProvider>
  );
}
```

`primereact-connecta.css` is the static, framework-free proof of this theme — every PrimeReact component family rebuilt with Connecta tokens (`.pr-*`, `.pac-*`, `.psel-*`, …). Use it as the reference when authoring the preset or writing `pt` overrides, and browse the `preview/primereact-*.html` cards to see each family themed.

### Theme contract (don't relitigate these in component code)

- **Ink is primary** — primary buttons, the focus ring, selected borders. Coral is **error only**, never a default action. Lime is highlight / "go".
- **Hairline borders over shadows.** 1px `--border-1`; 2px ink for selected. DM Sans throughout; `--r-sm` for input radius, `--r-md` for buttons, `--r-lg` for cards.
- **No gradients in component chrome.** Washes/scrims stay in marketing surfaces only.
- Everything maps to a `var()` token — never hard-code a hex, px, or font-family inside a component (the `_adherence.oxlintrc.json` lint enforces this).

---

## ICONOGRAPHY

No proprietary icon font exists yet. Until one is designed, the system uses **Lucide** (https://lucide.dev) at **1.75px stroke** — visually consistent with the wordmark's soft geometry.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });</script>
```

> **🔁 To replace:** swap to a proprietary set or Connecta's own SVG library by editing `ui_kits/_shared/Icons.jsx`.

### Canonical icon mappings (load-bearing)

**GoodTalk states:**

| State | Lucide name | Color token |
|---|---|---|
| `nudge` | `sparkles` (or `wand-2`) | `--state-nudge-accent` |
| `pause` | `pause-circle` | `--state-pause-accent` |
| `warn`  | `alert-triangle` | `--state-warn-accent` |
| `alert` | `shield-alert` | `--state-alert-accent` |
| `repair`| `check-circle` | `--state-ok-accent` |

**Cosmo & learning:**

| State | Lucide name | Color token |
|---|---|---|
| `cosmo` | `compass` (Cosmo's avatar mark) | `--cosmo-accent` |
| `learn` | `book-open` | `--state-learn-accent` |
| `progress` | `arrow-up-right` | `--state-progress-accent` |
| `lab` | `flask-conical` (Lab Circles) | `--cosmo-accent` |

**School graph:**

| Concept | Lucide name |
|---|---|
| `school` | `school` |
| `class` | `users` |
| `circle` | `circle-dot` |
| `child` | `user` |
| `parent` | `user-round-check` |
| `teacher` | `clipboard-list` |
| `country pack` | `globe-2` |
| `consent / audit` | `file-check-2` |

Icons always pair with a one-word label in product surfaces. Never an icon alone.

### Other rules

- Icons inherit `currentColor`.
- Sizes: 20px body, 24px toolbar/nav, 32px empty states, 16px inline.
- No filled icons in chrome (filled only for *active* tab-bar items).
- No emoji as icons. No unicode glyphs as icons. SVG only.

### Logo & wordmark

| Asset | When to use |
|---|---|
| `logo-wordmark-black.svg` | Default on light surfaces |
| `logo-wordmark-white.svg` | On dark / photo / colored surfaces |
| `logo-wordmark-coral.svg` | On lime, sky, or light grounds — "marketing-loud" |
| `logo-wordmark-lime.svg` | On ink or plum — "marketing-loud, dark mode" |

### App icon glyph ("nn")

The "nn" mark is the icon glyph at small sizes (favicon, app icon, avatar fallback). Preview: `preview/brand-app-icon-grid.html`.

**Four official colorways** — these are the ship-approved set. Use them for store listings, OS icons, marketing identity.

| Asset | Bg | Glyph |
|---|---|---|
| `app-icon-coral.svg` | Lime | Coral |
| `app-icon-lime.svg`  | Ink  | Lime  |
| `app-icon-light.svg` | Sky  | Coral |
| `app-icon-dark.svg`  | Plum | Coral |

**Extended colorways (19)** — for contextual use: dark-mode listings, alt seasonal marketing tiles, embedded favicons, parent-vs-kid-vs-school surface variations. The "nn" geometry is identical to the official set; only the color pair changes. File name is `app-icon-<bg>-<glyph>.svg`.

| Cluster | Combos |
|---|---|
| Coral grounds (loud, marketing-forward) | `coral-paper` · `coral-ink` · `coral-pale-lime` |
| Ink grounds (dark-mode store, premium) | `ink-coral` · `ink-sky` · `ink-paper` |
| Plum grounds (serious — parent / admin) | `plum-lime` · `plum-pale-lime` · `plum-sky` |
| Olive grounds (analog, printed) | `olive-lime` · `olive-paper` |
| Soft grounds (kid surfaces, Cosmo, onboarding) | `sky-plum` · `sky-ink` · `lime-plum` · `lime-olive` · `pale-lime-plum` · `pale-lime-olive` |
| Quiet / minimal (favicons, document headers) | `paper-coral` · `paper-ink` |

**Bare glyph variants** — `glyph-nn-coral.svg` · `glyph-nn-lime.svg` · `glyph-nn-dark.svg` · `glyph-nn-white.svg`. Used inline in system messages (*"Connecta paused this thread"*) and as a small loading mark.

**Rules:**

- Same 18px radius on every variant — never change the corner.
- Bg + glyph must come from the brand palette. Don't mix in inverted/derived colors.
- Ensure ≥ 4.5:1 contrast between bg and glyph — combos that fail (e.g. `lime-pale-lime`) are not in the set on purpose.
- For favicons at 16/32px, use the high-contrast pairs: `coral`, `dark`, `ink-paper`, or `paper-ink`.

---

## Caveats

- No production codebase or Figma exists yet. The UI kits in `ui_kits/` are reasoned recreations; treat them as direction, not source of truth.
- **Cosmo** does not yet have a visual mascot or avatar mark — current placeholder is a Lucide `compass` glyph on `--cosmo-accent`. A proper Cosmo mark needs to be designed before launch; it must read as *thoughtful instrument*, not *cute creature*.
- **GoodTalk** is similarly mark-less in v1 — its identity is carried by the lime-on-olive nudge surface and the `wand-2` glyph.
- **Country packs** — only the Bulgarian pack is referenced concretely (МОН 2024). Other packs will need locale-specific consent copy, age-band mapping, and moderation calibration; design just provides the slots.
- **Lab Circles** workflow (hypothesis → measurement → analysis → conclusion) is described in the brief but not yet wireframed. Build before locking the visual system for it.
- **Commercial UI** (Parent Plus checkout, school procurement, Institution Plan) is sketched in tokens (plan rows, pill badges for SKUs) but not yet a kit.

Confirm with the product team before designing in any of these areas.
