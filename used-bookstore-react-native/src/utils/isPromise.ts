export function isPromise(p: string | Promise<void>) {
  if (typeof p === "object" && typeof p.then === "function") {
    return true;
  }
  return false;
}
