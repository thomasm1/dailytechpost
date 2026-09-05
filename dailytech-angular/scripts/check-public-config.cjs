// Print file paths and rule names only, never matched credential values.
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const allowed = new Set(['production', 'firebase', 'API_URL', 'awsUrlDevAll', 'awsUrlDevId', 'nft_url', 'local_url']);
const firebaseFields = new Set(['apiKey', 'authDomain', 'databaseURL', 'projectId', 'storageBucket', 'messagingSenderId', 'appId', 'measurementId']);
const publicKeys = new Set();
const errors = [];
function fail(file, rule) { errors.push(`${path.relative(root, file)}: ${rule}`); }

for (const name of ['environment.ts', 'environment.prod.ts']) {
  const file = path.join(root, 'src/environments', name);
  const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  const declarations = source.statements.filter(ts.isVariableStatement).flatMap(s => [...s.declarationList.declarations]);
  const env = declarations.find(d => d.name.getText(source) === 'environment')?.initializer;
  if (!env || !ts.isObjectLiteralExpression(env)) { fail(file, 'Expected a literal public environment object'); continue; }
  for (const property of env.properties) {
    const name = property.name?.getText(source);
    if (!ts.isPropertyAssignment(property) || !allowed.has(name)) { fail(file, 'Non-allowlisted environment property'); continue; }
    if (name === 'firebase') {
      if (!ts.isObjectLiteralExpression(property.initializer)) { fail(file, 'Firebase configuration must be a literal'); continue; }
      for (const field of property.initializer.properties) {
        if (!ts.isPropertyAssignment(field) || !firebaseFields.has(field.name?.getText(source)) || !ts.isStringLiteral(field.initializer)) {
          fail(file, 'Unexpected Firebase configuration field');
        } else if (field.name.getText(source) === 'apiKey') publicKeys.add(field.initializer.text);
      }
    } else if (name !== 'production') {
      if (!ts.isStringLiteral(property.initializer)) fail(file, 'Public URL must be a literal');
      else {
        try {
          const url = new URL(property.initializer.text, 'https://local.invalid');
          if (url.username || url.password || [...url.searchParams.keys()].some(k => /key|token|secret|signature/i.test(k))) {
            fail(file, 'Credential-bearing public URL');
          }
        } catch { fail(file, 'Invalid public URL'); }
      }
    }
  }
}

const configFile = path.join(root, 'angular.json');
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
for (const project of Object.values(config.projects)) {
  for (const target of Object.values(project.architect || {})) {
    for (const options of [target.options || {}, ...Object.values(target.configurations || {})]) {
      for (const asset of options.assets || []) {
        if (/\.env(?:\b|[/*])/.test(JSON.stringify(asset))) fail(configFile, 'Environment files must not be web assets');
      }
    }
  }
}

const signatures = [
  /AIza[0-9A-Za-z_-]{35}/g,
  /\bsk-[A-Za-z0-9_-]{20,}/g,
  /\beyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
  /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/g
];
function scan(dir) {
  if (!fs.existsSync(dir)) { fail(dir, 'Scan directory does not exist'); return; }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (/^\.env(?:\.|$)/i.test(entry.name)) { fail(file, 'Environment file in publishable assets'); continue; }
    if (!/\.(js|mjs|cjs|ts|json|html|map|txt|pem)$/i.test(entry.name)) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (signatures.some(pattern => [...text.matchAll(pattern)].some(match => !publicKeys.has(match[0])))) {
      fail(file, 'Possible provider secret, embedded session token, or private key');
    }
  }
}
scan(path.join(root, 'src/assets'));
if (process.argv[2]) scan(path.resolve(root, process.argv[2]));
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exitCode = 1;
} else console.log('Public environment allowlist and asset credential checks passed.');
