// Demonstration opportunities are available only in local development.
export function localDemoEnabled() {
  return process.env.NODE_ENV === "development" && process.env.KAVIAN_DEMO_DATA === "true";
}
