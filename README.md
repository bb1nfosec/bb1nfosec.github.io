# bb1nfosec.github.io — `opsec-os`

A futuristic, executive-grade security portfolio for **Vignesh Chandrasekaran** —
built for **two readers**: humans, and the AI agents that increasingly read the web.

- **Human layer:** a refined "security operations console" — Deep Slate + Signal Teal,
  boot sequence, expandable OS-style layer stack, `⌘K` command palette, redaction reveals.
- **Agent layer:** `llms.txt`, `agent.json` (structured hiring brief), schema.org JSON-LD,
  `window.__PROFILE__` runtime object, agent-addressed HTML comments, and a `sudo hire` console command.

No framework, no build step — hand-written HTML / CSS / vanilla JS.

## Structure
```
index.html              · the page
assets/css/styles.css   · theme
assets/js/app.js        · boot, palette, layers, easter eggs, agent runtime
agent.json              · machine-readable hiring brief  ← for agents
llms.txt                · LLM summary (llmstxt.org)      ← for agents
humans.txt · robots.txt · sitemap.xml
cv/Vignesh_Chandrasekaran_CV.pdf
.nojekyll               · serve files as-is on GitHub Pages
```

## Deploy to GitHub Pages (user site → https://bb1nfosec.github.io)
From inside this folder:

```bash
git init
git add -A
git commit -m "opsec-os: portfolio for humans & agents"
git branch -M main
# create the repo named EXACTLY  bb1nfosec.github.io  under the bb1nfosec account first
git remote add origin https://github.com/bb1nfosec/bb1nfosec.github.io.git
git push -u origin main
```

Then: GitHub → repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**.
Live within ~1 minute at **https://bb1nfosec.github.io/**.

> Tip: create the empty repo on github.com first (named `bb1nfosec.github.io`), then run the commands above.

## Custom domain (optional, later)
Add a file named `CNAME` containing your domain (e.g. `vignesh.sh`), push, then point a
`CNAME`/`A` record at GitHub Pages. The site is already relative-path safe for this.

## Editing content
All copy lives in `index.html`. The agent-facing facts live in **four** places — keep them in
sync when you update: `index.html` (JSON-LD + visible), `agent.json`, `.well-known/agent.json`
(mirror — `cp agent.json .well-known/agent.json`), and `llms.txt`.

## Agent discoverability
Layered on purpose (no single standard is universal yet):
- `robots.txt` — names AI agents explicitly + points to the briefs and sitemap.
- `<link rel="alternate" type="application/json" href="/agent.json">` in `<head>` — formal hint.
- `/.well-known/agent.json` (RFC 8615 / A2A convention) + `/.well-known/security.txt` (RFC 9116).
- `schema.org/Person` JSON-LD — the one search/answer-engines actually index today.
- `llms.txt` (llmstxt.org), in-DOM agent comment, and `window.__PROFILE__`.
- **Manual, do these yourself:** submit `sitemap.xml` to Google Search Console + Bing Webmaster,
  and link this URL from LinkedIn / GitHub profile / Twitter bio (discovery is link-driven).

> `.nojekyll` is required for GitHub Pages to serve the `.well-known/` dot-folder.

## Versioning / freshness stamp
A snapshot date tells machines this is point-in-time data (stars/followers drift). When you make a
meaningful update, bump the date (`YYYY-MM-DD` / `vYYYY.MM.DD`) in these spots:
- `index.html` — `og:updated_time`, `<meta name="version">`, JSON-LD `dateModified`, footer `.foot-stamp`
- `agent.json` — `generated`, `version`, `last_updated` (then `cp agent.json .well-known/agent.json`)
- `llms.txt` — the version comment near the top

## Local preview
```bash
python3 -m http.server 8080
# open http://localhost:8080
```
