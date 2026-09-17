import { DomainError } from './DomainError';

export type CardsSearchErrorCode = 'NETWORK' | 'NOT_FOUND' | 'SERVER' | 'UNKNOWN';

export class CardsSearchError extends DomainError {
  constructor(
    message: string,
    readonly code: CardsSearchErrorCode = 'UNKNOWN',
    readonly cause?: unknown
  ) {
    super(message);
  }
}
