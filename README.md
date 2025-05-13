# servers-status-app

## How to use ?
Simply create a `server.json ` file with this format:
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

## 📡 Statut des serveurs

<!-- SERVERS-STATUS-START -->
- **API Prod** — 🔴 DOWN
- **Auth Dev** — 🔴 DOWN
- **https://example.com/** — 🟢 UP
<!-- SERVERS-STATUS-END -->
