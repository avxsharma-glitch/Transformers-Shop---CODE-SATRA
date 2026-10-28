# TRANSFORMERS: THE DEBUGGING WAR

> **Every system has a weakness. Every glitch leaves a trace. Can you find what the machines are hiding?**

## Mission Briefing

Beyond the edge of mapped space, a Transformers Hub has come online with an unstable spark. Its interface looks operational. Its signals are almost coherent. Almost.

An encrypted pulse has reached Cybertron. Something inside this digital environment is behaving in ways its architects did not predict. The evidence is scattered across screens, interactions, routes, state transitions, and shifting viewports. No single scan can reveal the whole story.

You are the newly recruited engineers of the **Debugging War**. Enter the Hub, observe without assumptions, follow every trace, and help restore system stability. The machines will not explain themselves. Your method must.

---

## Transmission from Cybertron

> **[ORIGIN: UNKNOWN ENGINEER // CHANNEL: SPARK-NINE]**
>
> To the engineers who still trust a green screen:
>
> We built this environment to appear calm. That was our first mistake.
>
> The visible layer is only the outer armor. Underneath it, signals cross paths, state waits for the next command, and old assumptions hide inside new metal. A page may render while its intent drifts. A response may arrive while the real clue remains in the console. A path may look familiar while the system quietly asks a different question.
>
> Do not confuse silence with health. Do not confuse motion with progress. Logs remember what interfaces forget, and a small irregularity can be the loose gear that explains an entire cascade.
>
> Record what you see. Mark what you expected. Repeat what you can. The first theory is only a hypothesis until evidence gives it a spark.
>
> If the Hub seems perfectly stable, investigate more carefully.
>
> **Transmission ends. The trace remains.**

---

## The Debugging Shayari

*When the gears of Cybertron turn beneath a polished screen,*  
*A quiet spark may flicker where no warning has been seen.*  
*Code can wear a perfect mask, aligned in every line,*  
*Yet machine logic may take a road that differs from design.*  
  
*Console whispers travel low through channels dark and deep,*  
*A timestamp, a warning, a promise the logs keep.*  
*Read each signal patiently; let evidence be your guide,*  
*For assumptions build false bridges over faults they cannot hide.*  
  
*Buttons speak in metal clicks, routes draw their secret maps,*  
*Pixels shift like orbital plates between the gaps.*  
*A state can change like weather, then settle out of sight,*  
*So trace the spark from cause to effect, from first input into light.*  
  
*On desktop, towers guard the sky; on mobile, worlds transform,*  
*The same command may cross a different kind of storm.*  
*Do not call two screens alike because their colors share a hue,*  
*Measure the space, the focus, the flow, and what the user can do.*  
  
*An encrypted transmission is not proof because it sounds precise,*  
*A confident guess is still a guess until you test it twice.*  
*Compare the promised signal with the signal that arrived,*  
*Then write the smallest truth that keeps the record verified.*  
  
*Let patience be your processor, let method be your blade,*  
*Turn one variable at a time through every test you’ve made.*  
*When the hidden pattern surfaces beneath the chrome and flame,*  
*The sweetest victory is not the blame, but understanding what became.*  
  
*So engineers of Cybertron, keep your instruments bright,*  
*Follow every trace that moves from shadow into sight.*  
*The system yields its secrets to the careful, not the loud,*  
*And truth becomes the strongest spark inside the debugging crowd.*

---

## Mission Objectives

Your assignment is to investigate the Hub as a technical system and produce evidence that another engineer can trust.

1. Explore the website thoroughly, including different screens, interactions, and viewport sizes.
2. Observe behavior that appears unexpected, inconsistent, confusing, or out of alignment with the surrounding experience.
3. Investigate with relevant browser developer tools rather than relying on visual impressions alone.
4. Record reproducible evidence for each confirmed finding.
5. Document the expected behavior and the actual behavior separately.
6. Suggest a reasonable, focused fix for every confirmed finding.

The challenge is intentionally open-ended. Discover the investigation surface yourself; no coordinates, targets, or prewritten trail markers are provided.

---

## Rules of Engagement

- Investigate before making assumptions.
- Reproduce an issue before reporting it.
- Separate genuine defects from intentional design choices.
- Change one variable at a time when narrowing a cause.
- Avoid destructive changes to the project or its data.
- Respect the original project design and user experience.
- Document findings clearly enough for another engineer to verify.
- Keep evidence factual; label hypotheses as hypotheses.
- Do not expose another team’s discoveries during the challenge when the organizer requests confidentiality.
- Keep private challenge materials private. They are not substitutes for independent investigation.

---

## Technical Arsenal

Use the tools that help you turn a suspicion into a reproducible observation:

| Instrument | Useful for |
|---|---|
| Browser DevTools | Inspecting runtime behavior, rendered structure, styles, and browser warnings |
| Console tab | Following runtime messages, warnings, and diagnostic traces |
| Network tab | Observing requests, responses, timing, and resource delivery |
| Responsive device emulation | Comparing behavior across viewport sizes and device profiles |
| Keyboard navigation | Checking focus order, interaction reachability, and non-pointer workflows |
| Accessibility inspection | Reviewing semantics, names, focus states, and usable structure |
| React/Next.js development environment | Understanding component-driven rendering and development feedback |
| Terminal output and build logs | Capturing framework, lint, and compilation signals |

These are recommendations for investigation, not claims about where an anomaly exists.

---

## Getting Started

### Prerequisites

- Node.js compatible with the installed Next.js release
- pnpm
- A modern browser with developer tools
- A terminal capable of running the commands below

### Install dependencies

From the project directory:

```bash
pnpm install
```

### Start the local development environment

```bash
pnpm dev
```

Open the local Hub at:

```text
http://localhost:3000
```

If that port is already in use, the development server will report the address it selected. Keep the terminal visible while investigating so that development-time output remains part of your evidence trail.

### Other available project commands

```bash
pnpm lint   # Run the configured ESLint checks
pnpm build  # Create a production build
pnpm start  # Start the production server after a successful build
```

Begin with the development server so you can observe the application while making controlled, reversible investigations.

---

## How to Report a Finding

Use one record per confirmed finding. Keep the wording neutral, specific, and reproducible.

```text
Finding ID:

Short title:

Severity:

Browser and viewport:

Steps to reproduce:
1.
2.
3.

Expected behavior:

Actual behavior:

Supporting evidence:
- Console or terminal output:
- Screenshot, recording, or inspected detail:
- Network or accessibility evidence:

Suggested fix:
```

### Reporting guidance

- Use a unique Finding ID.
- Choose severity according to impact, scope, frequency, and available workaround.
- Include browser and viewport details so the observation has a known context.
- Keep reproduction steps ordered and minimal.
- Explain the user-visible or system-visible difference without guessing at an unverified root cause.
- Attach only evidence that is relevant and safe to share.
- Describe a suggested fix as an engineering direction, not as a claim that you have proven the implementation.

---

## The Engineer’s Oath

Before submitting a report, ask:

- Can another engineer reproduce this from my notes?
- Did I compare expected behavior with actual behavior?
- Did I test beyond my first assumption?
- Did I preserve the project while investigating?
- Is my evidence stronger than my theory?

If the answer is yes, your investigation has already made the Hub more stable.

---

## Final Transmission

> **Cybertron does not need the loudest warrior to expose a hidden fault; it needs the engineer who follows one faint signal until the entire machine tells the truth.**

The war begins when you open the Hub. The victory is what you can prove.
