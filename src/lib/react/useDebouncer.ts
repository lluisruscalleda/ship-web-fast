import { useEffect, useMemo } from 'react';

import { createDebouncer, type Debouncer } from '../async/createDebouncer';

export function useDebouncer(delayMs: number): Debouncer {
  const debouncer = useMemo(() => createDebouncer(delayMs), [delayMs]);

  useEffect(() => {
    return () => debouncer.cancel();
  }, [debouncer]);

  return debouncer;
}
