# Scryfall API

Demo data source: https://api.scryfall.com

## Endpoint used

```
GET /cards/search?q={query}&page=1
```

Returns a `list` object with up to **175 cards** per page. This template loads **page 1 only**.

## Required headers

Configured in `src/lib/http-client.ts`:

- `Accept: application/json`
- `User-Agent: ShipWebFast/1.0 (...)` — **required** by Scryfall

## Development proxy

Vite proxies `/scryfall-api` → `https://api.scryfall.com` to avoid CORS issues.

Production builds call `https://api.scryfall.com` directly.

## Rate limits

~**2 requests per second**. The UI debounces search input (300 ms). Avoid rapid-fire searches in loops.

## Default query

Set in `.env`:

```
VITE_SCRYFALL_DEFAULT_QUERY=type:creature
```

## Example queries

| Query | Description |
|-------|-------------|
| `type:creature` | Creatures |
| `set:lea` | Limited Edition Alpha |
| `c:red pow=3` | Red 3-power cards |
| `order:edhrec` | EDHREC popularity |

Invalid queries return HTTP 404 — mapped to `NotFoundError` and shown in the UI.

## Attribution

Include in any public deployment:

> Card data and images © Scryfall, LLC. Magic: The Gathering is a trademark of Wizards of the Coast.

See [Scryfall API terms](https://scryfall.com/docs/api) and [Wizards Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy).
