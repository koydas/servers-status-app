# servers-status-app

## How to use ?
1. Create a `server.json ` file with this format:
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

2. Add this section in README.md
```
<!-- SERVERS-STATUS-START -->
(update here)
<!-- SERVERS-STATUS-END -->
```
