
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let contactRateLimiter: Ratelimit | undefined;

export function getContactRateLimiter(): Ratelimit {
  if (contactRateLimiter) {
    return contactRateLimiter;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error("Upstash Redis environment variables are missing.");
  }

  contactRateLimiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: false,
    prefix: "ample-financial-solutions:contact",
    timeout: 1000,
  });

  return contactRateLimiter;
}
