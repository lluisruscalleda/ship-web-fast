export interface Debouncer {
  schedule(callback: () => void): void;
  cancel(): void;
}

export interface DebouncerScheduler {
  set(callback: () => void, delayMs: number): ReturnType<typeof setTimeout>;
  clear(timeoutId: ReturnType<typeof setTimeout>): void;
}

const defaultScheduler: DebouncerScheduler = {
  set: (callback, delayMs) => setTimeout(callback, delayMs),
  clear: (timeoutId) => clearTimeout(timeoutId),
};

export function createDebouncer(
  delayMs: number,
  scheduler: DebouncerScheduler = defaultScheduler
): Debouncer {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return {
    schedule(callback) {
      if (timeoutId !== null) {
        scheduler.clear(timeoutId);
      }

      timeoutId = scheduler.set(() => {
        timeoutId = null;
        callback();
      }, delayMs);
    },

    cancel() {
      if (timeoutId !== null) {
        scheduler.clear(timeoutId);
        timeoutId = null;
      }
    },
  };
}
