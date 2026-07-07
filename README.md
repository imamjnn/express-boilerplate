# Express Boilerplate

Starter template for Express.js API with security middleware, ES modules, and Babel.

## Features

- Express 4 with ES modules (via Babel)
- Security: Helmet, rate limiting, disabled `x-powered-by`
- Performance: response compression
- CORS and JSON body parsing
- Environment configuration via `.env`
- ESLint + Prettier

## Requirements

- Node.js 18+

## Setup

```bash
npm install
cp .env.example .env
```

## Development

```bash
npm start
```

Server runs at `http://localhost:3000` (or the port set in `.env`).

## Production

```bash
npm run build
npm run prod
```

## Testing

```bash
npm test
```

## Linting & Formatting

```bash
npm run lint
npm run check-format
npm run fix-format
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |
| `RATE_LIMIT_WINDOW_MS` | `900000` | Rate limit window (15 minutes) |
| `RATE_LIMIT_MAX` | `100` | Max requests per IP per window |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Welcome message with current date |
| `GET` | `/example` | Example endpoint |

## Project Structure

```
src/
├── app.js           # Express app setup
├── router.js        # Route definitions
├── config/          # Environment configuration
└── controllers/     # Route handlers
```
