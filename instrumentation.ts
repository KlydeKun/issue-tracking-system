import { init } from '@sentry/nextjs';

export function register() {
  init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Add any other configuration options here
    tracesSampleRate: 1.0,
  });
}

// Edge configuration (if needed)
export function registerEdge() {
  init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Add any Edge-specific configuration here
  });
}