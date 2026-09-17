import { DomainError } from './DomainError';

export class InvalidCardError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
