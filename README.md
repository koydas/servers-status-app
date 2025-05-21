# servers-status-app

## How to use ?
### 1. Create a `server.json ` file with this format:
```json
[
  {
    "name": "API Prod",
    "url": "https://api.example.com/health"
  },
  {
    "name": "Auth Dev",
    "url": "https://auth.example.com/health"
  },
  {
    "name": "https://example.com/",
    "url": "https://example.com/"
  }
]
```

### 2. Add this section in README.md
```markdown
<!-- SERVERS-STATUS-START -->
- **API Prod** — 🔴 DOWN
- **Auth Dev** — 🔴 DOWN
- **https://example.com/** — 🟢 UP
<!-- SERVERS-STATUS-END -->
```

### 3. Run Readme update
```bash
npm run update:readme
```

### 4. Run the frontend App
```bash
npm run start
```

### 5. Use React component
```bash
npm install @koydas/server-status-react
```