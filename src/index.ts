export async function onAnyKey(): Promise<void> {
  process.stdin.setRawMode(true);
  await new Promise((resolve) => {
    process.stdin.once("data", resolve);
    process.stdin.unref();
  });
  process.stdin.pause();
}