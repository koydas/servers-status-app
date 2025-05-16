const fs = require('fs');
const fetch = require('node-fetch');
const YAML = require('yaml');

// > Chargement de la configuration
const config = YAML.parse(fs.readFileSync('configs.yaml', 'utf8'));
const ICON_UP = config.icons?.up || '🟢';
const ICON_DOWN = config.icons?.down || '🔴';

async function checkStatus(url) {
  try {
    const res = await fetch(url, { method: 'GET' });
    return res.ok ? `${ICON_UP} UP` : `${ICON_DOWN} DOWN`;
  } catch {
    return `${ICON_DOWN} DOWN`;
  }
}

async function main() {
  const servers = JSON.parse(fs.readFileSync('servers.json', 'utf8'));
  const statuses = await Promise.all(
    servers.map(async (srv) => {
      const status = await checkStatus(srv.url);
      return `- **${srv.name}** — ${status}`;
    })
  );

  const readme = fs.readFileSync('README.md', 'utf8');
  const markerStart = '<!-- SERVERS-STATUS-START -->';
  const markerEnd = '<!-- SERVERS-STATUS-END -->';

  const newSection = `${markerStart}\n${statuses.join('\n')}\n${markerEnd}`;
  const updated = readme.replace(
    new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`),
    newSection
  );

  fs.writeFileSync('README.md', updated);
}

main();