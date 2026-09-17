import { CardsSearchError } from '../../domain/errors/CardsSearchError';
import { DomainError } from '../../domain/errors/DomainError';
import { NetworkError, NotFoundError, ServerError } from '../errors/DataErrors';

export function mapDataErrorToDomain(error: unknown): DomainError {
  if (error instanceof DomainError) {
    return error;
  }

  if (error instanceof NetworkError) {
    return new CardsSearchError(error.message, 'NETWORK', error);
  }

  if (error instanceof NotFoundError) {
    return new CardsSearchError(error.message, 'NOT_FOUND', error);
  }

  if (error instanceof ServerError) {
    return new CardsSearchError(error.message, 'SERVER', error);
  }

  if (error instanceof Error) {
    return new CardsSearchError(error.message, 'UNKNOWN', error);
  }

  return new CardsSearchError('Unknown error', 'UNKNOWN', error);
}
