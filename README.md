# [nnmbl](https://nnmbl.xyz) - not now, maybe later

## Motivation

Like many Software Engineers, recruiting is a regular part of my day-to-day life. Both as a candidate combing through inbound recruiting emails and as the Head of Apps Engineering searching for exceptional engineers to join our team at [Viaduct](https://viaduct.ai/). I have always found the background noise of daily recruiting emails acceptable, but the recent explosion of sourcing software, like Gem, changed this. Sourcing software allows companies to run mass email campaigns using candidates' personal information, like email addresses and phone numbers. The benefit to companies is clear: direct access to candidates' inboxes; however, the consequence for candidates is less than ideal.

If you are looking for a new opportunity, the increase in inbound recruiting emails is welcome, but most candidates are not. For these candidates, the daily onslaught of emails resembles spam. Despite drastically different experiences, the only difference between these candidates is timing. Once a candidate is back on the market for a new position, these recruiting emails transform from a source of spam to a way to discover and connect with diverse companies.

The experience for companies reflects candidates'. Recruiters spend countless hours sourcing qualified candidates, but if the candidate isn't looking for a new role when the recruiter reaches out, sourcing software or not, the sourcing time is a sunk cost. The best-case scenario is the candidate responds to let you know that the timing isn't right, which then shifts the burden back to the company to reach back out. There is an overhead for recruiters in managing which candidates they need to follow up with and at what time. Worse yet, if a recruiter reaches out to a candidate again and the candidate still isn't looking, this cycle continues, reducing recruiting efficiency.

Without accounting for timing, outbound recruiting wastes both candidates' and companies' time. I've been a victim of these inefficiencies as a candidate and a recruiter, so I decided to do as engineers do and build myself a solution. Not now, maybe later, or [nnmbl](https://nnmbl.xyz) (pronounced "nimble") manages your inbound recruiting emails when you aren't looking for a new opportunity and organizes them, so they are accessible to you when you are.

nnmbl is still a work in progress, so I've created this Github repo and [landing page](https://nnmbl.xyz) to see if other people think this would be useful to them while I'm building it out. If you are interested, please [join the waitlist](https://nnmbl.xyz)!

## Contributing

### Developing

Installed dependencies with `npm install`

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```
