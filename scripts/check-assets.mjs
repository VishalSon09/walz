// Lists files referenced as '/folder/file.ext' in src/ that are missing from public/.
// The check is CASE-SENSITIVE on every OS, because the Docker/nginx image runs on Linux.
// Usage: npm run check:assets
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const pub = path.join(root, 'public')
const exts = 'png|jpe?g|svg|webp|gif|glb|gltf|json|cube|hdr|mp4|webm|woff2?|ttf'
const re = new RegExp(`['"\`](/[A-Za-z0-9_\\-./ ]+\\.(?:${exts}))['"\`]`, 'g')

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : [p]
  })
}

function existsExact(rel) {
  let cur = pub
  for (const seg of rel.split('/').filter(Boolean)) {
    if (!fs.existsSync(cur) || !fs.readdirSync(cur).includes(seg)) return false
    cur = path.join(cur, seg)
  }
  return true
}

const missing = new Map()
for (const file of walk(path.join(root, 'src')).filter((f) => /\.(jsx?|css)$/.test(f))) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('{/*')) return // commented out
    for (const m of line.matchAll(re)) {
      if (!existsExact(m[1])) {
        const where = `${path.relative(root, file)}:${i + 1}`
        missing.set(m[1], [...(missing.get(m[1]) || []), where])
      }
    }
  })
}

if (missing.size === 0) {
  console.log('All referenced public assets exist (case-sensitive check).')
} else {
  console.log(`Missing from public/ (${missing.size}):\n`)
  for (const [asset, where] of missing) console.log(`  ${asset}\n      used in ${where.join(', ')}`)
  console.log('\nCheck spelling, letter case and file extension.')
  process.exitCode = 1
}
