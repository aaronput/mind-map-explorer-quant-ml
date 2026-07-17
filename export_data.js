// Export the knowledge-base node array from index.html to data.json.
// Usage: node export_data.js
const fs = require('fs');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const m = html.match(/const BRANCH[\s\S]*?\n\];/);
if (!m) { console.error('data block not found'); process.exit(1); }
eval(m[0].replace('const BRANCH', 'var BRANCH').replace('const N', 'var N'));
const out = { generated_from: 'index.html', branches: BRANCH, nodes: N };
fs.writeFileSync(__dirname + '/data.json', JSON.stringify(out, null, 1) + '\n');
console.log('data.json:', N.length, 'nodes,', Object.keys(BRANCH).length, 'branches');
