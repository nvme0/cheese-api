export const host = process.env.APP_HOST || "127.0.0.1";
export const port = process.env.APP_PORT || 8080;

const WHITELISTED_DOMAINS = process.env.WHITELISTED_DOMAINS as string;

if (!WHITELISTED_DOMAINS || typeof WHITELISTED_DOMAINS !== "string") {
  throw new Error("Environment variable WHITELISTED_DOMAINS must be valid");
}

export const whitelist = WHITELISTED_DOMAINS.split(",");
