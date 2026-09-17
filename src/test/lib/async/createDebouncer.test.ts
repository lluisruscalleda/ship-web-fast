import { describe, expect, it, vi } from 'vitest';

import { createDebouncer } from '@/lib/async/createDebouncer';

describe('createDebouncer', () => {
  it('delays callback execution', () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debouncer = createDebouncer(300);

    debouncer.schedule(callback);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(callback).toHaveBeenCalledOnce();

    vi.useRealTimers();
  });

  it('cancels a pending callback', () => {
    vi.useFakeTimers();

    const callback = vi.fn();
    const debouncer = createDebouncer(300);

    debouncer.schedule(callback);
    debouncer.cancel();

    vi.advanceTimersByTime(300);
    expect(callback).not.toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('resets the timer when scheduled again', () => {
    vi.useFakeTimers();

    const first = vi.fn();
    const second = vi.fn();
    const debouncer = createDebouncer(300);

    debouncer.schedule(first);
    vi.advanceTimersByTime(200);
    debouncer.schedule(second);

    vi.advanceTimersByTime(299);
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledOnce();

    vi.useRealTimers();
  });
});
