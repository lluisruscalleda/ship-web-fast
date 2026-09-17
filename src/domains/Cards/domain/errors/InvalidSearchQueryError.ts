import { DomainError } from './DomainError';

export class InvalidSearchQueryError extends DomainError {
  constructor(message = 'Search query cannot be empty') {
    super(message);
  }
}
