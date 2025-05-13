const fs = require('fs');
const fetch = require('node-fetch');

async function checkStatus(url) {
  try {
    const res = await fetch(url, { method: 'GET' });
    return res.ok ? '🟢 UP' : '🔴 DOWN';
  } catch {
    return '🔴 DOWN';
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
