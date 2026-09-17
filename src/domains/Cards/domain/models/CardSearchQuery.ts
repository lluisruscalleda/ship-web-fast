import { InvalidSearchQueryError } from '../errors/InvalidSearchQueryError';

const FALLBACK_QUERY = 'type:creature';

export class CardSearchQuery {
  readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(raw: string): CardSearchQuery {
    const trimmed = raw.trim();

    if (!trimmed) {
      throw new InvalidSearchQueryError();
    }

    return new CardSearchQuery(trimmed);
  }

  static fallback(): CardSearchQuery {
    return CardSearchQuery.create(FALLBACK_QUERY);
  }

  static resolveInitial(raw?: string): CardSearchQuery {
    try {
      return raw ? CardSearchQuery.create(raw) : CardSearchQuery.fallback();
    } catch {
      return CardSearchQuery.fallback();
    }
  }

  equals(other: CardSearchQuery): boolean {
    return this.value === other.value;
  }
}
