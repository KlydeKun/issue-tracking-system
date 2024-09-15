import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
});