import type { TranslationFunction } from '../types';

export function toUserMessage(error: unknown, t: TranslationFunction): string {
  if (error instanceof Error) {
    return error.message;
  }

  return t('errors.generic');
}
