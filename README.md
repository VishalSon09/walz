# lensmanzest – fixes + Docker/GCP setup

This zip is an **overlay**: it contains only the files I reviewed and changed (plus new deploy files).
Copy it over your project root, keeping the folder structure, and overwrite when asked.

## Apply

1. Unzip into your project root (overwrites the matching files).
2. Run `npm install` once. `package.json` changed, so the lockfile must be refreshed (`npm ci` in Docker fails on a stale lock). Commit `package-lock.json`.
3. Run `npm run check:assets` and fix anything it lists (see "Assets" below).
4. Run `npm run build`. If it fails, send me the first error.

## What was fixed

**Build/runtime breaking**
- `forPrism/Reflect.jsx`: mangled `useLayoutEffect` (unbalanced braces, duplicated `traverse` / `updateWorldMatrix`) rewritten. Duplicate `positions` key removed. Scratch vectors now created once inside the memo.
- `forPrism/Prism.jsx`: removed `import scene from '/models/prism.glb'` (public/ files can't be imported in Vite); uses the URL string.
- `forPrism/Beam.jsx`: removed `instanceMatrix.set(range * 16)` (leftover from the old `updateRange` line; `.set()` needs an array).
- `PScene.jsx`: `useFrame` read `rainbow.current` after only checking `spot.current` → now guards both.
- `sections/Home.jsx`: LUT now loads with `useLoader` inside `<Suspense>` (previously the page showed a bare div, lost `id="home"`, and replaced the scene on error). Added drei `<Loader />` and `dpr={[1, 2]}`.
- `App.jsx`: removed no-op ternaries and unused import; added catch-all route, scroll-to-top on navigation, and `React.lazy` for the three canvas pages.
- `vite.config.js`: removed `server.historyApiFallback` (not a Vite option; dev already falls back to index.html).

**Correctness / quality**
- `Navbar.jsx`: `<a href="/">` → `<Link>` (full reload re-created WebGL); `end` on the "/" NavLink so Home isn't always highlighted; absolute icon paths; `aria-expanded`.
- `Projects.jsx`: external project links used `NavLink` → plain `<a target="_blank" rel="noreferrer noopener">`.
- `About.jsx`: removed unused `react-globe.gl` import (it bloated the bundle), `rotation-x={[x]}` → `{x}`, clipboard error handling, stray zero-width space removed, duplicate key removed, absolute asset paths.
- `Contact.jsx`: `setTimeout(..., [3000])` → `3000`, functional `setForm`, unused import.
- `Experience.jsx`: unused imports/state removed; `dpr={[1, 2]}`.
- `Box.jsx`: unused geometry removed, stable `onHoverChange` default (effect no longer re-fires every render), null guard in `useFrame`.
- `Flare.jsx`, `Rainbow.jsx`: null guard / `displayName` moved outside the component.
- `constants/index.js`: 9 unused icon imports removed, review image paths made absolute, `'Pyhton'` → `'Python'`, `"Sql"` → `"PostgreSQL"`.
- `Footer.jsx`: dynamic copyright year, GitHub link opens safely in a new tab.
- `package.json`: added `vite` (was only a transitive peer), removed `@types/three` (mismatched three 0.167) and `gh-pages`, `prettier` moved to devDependencies, added `check:assets` script.

## Deploy (Cloud Run, Mumbai)

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
gcloud artifacts repositories create web --repository-format=docker --location=asia-south1

IMAGE=asia-south1-docker.pkg.dev/YOUR_PROJECT_ID/web/portfolio
gcloud builds submit --config cloudbuild.yaml \
  --substitutions=_IMAGE=$IMAGE,_EMAILJS_SERVICE_ID=xxx,_EMAILJS_TEMPLATE_ID=yyy,_EMAILJS_PUBLIC_KEY=zzz

gcloud run deploy portfolio --image $IMAGE --region asia-south1 --allow-unauthenticated
```

Local test: `docker build --build-arg VITE_APP_EMAILJS_SERVICE_ID=xxx --build-arg VITE_APP_EMAILJS_TEMPLATE_ID=yyy --build-arg VITE_APP_EMAILJS_PUBLIC_KEY=zzz -t portfolio . && docker run -p 8080:8080 portfolio`

`VITE_*` values are baked into the JS bundle at build time (that's why they're build args, not Cloud Run env vars). EmailJS keys are meant to be public; never put real secrets in `VITE_*`.

## Assets (case-sensitive on Linux)

`npm run check:assets` lists every `'/folder/file.ext'` used in `src/` that's missing from `public/`, comparing letter case exactly. Known item to resolve: `Beam.jsx` loads `lensflare0_bw.jpg` but `Flare.jsx` loads `lensflare0_bw.png`. Only one of them can be right; make both match the real file.

## Not changed (needs your decision or files I haven't seen)

- `import ... from '/public/icons'` in constants: works today, but `public/` is meant for static URLs. Cleaner: move to `src/assets/icons/` and import relatively.
- `constants`: `experiences[].company_name` repeats the job title; "ML Skin Deformer" links to `.../reactiondiffusion`; `workExperiences` and `clientReviews` look like template data.
- Not reviewed (not uploaded): `forAbout/*`, `forExperience/*`, `ExpShader`, `DemoComputer`, `Loading`, `Alert`, `Button`, `useAlert`, `main.jsx`, `index.css`, `tailwind.config.js`, `public/icons/index.js`.
- `<Environment preset="night" />` in About downloads its HDR from a CDN at runtime; for a fully self-hosted site, put an `.hdr` in `public/` and use `files="/hdr/night.hdr"`.
- `react-globe.gl` is now unused in the files I saw; remove it from `package.json` if nothing else imports it.
- I couldn't run `npm install` / `npm run build` here (no network). Files are syntax-checked only.
