import { InvalidCardError } from '../errors/InvalidCardError';

export interface CardProps {
  readonly id: string;
  readonly name: string;
  readonly manaCost?: string;
  readonly typeLine?: string;
  readonly imageUrl?: string;
}

export class Card {
  readonly id: string;
  readonly name: string;
  readonly manaCost?: string;
  readonly typeLine?: string;
  readonly imageUrl?: string;

  private constructor(props: CardProps) {
    this.id = props.id;
    this.name = props.name;
    this.manaCost = props.manaCost;
    this.typeLine = props.typeLine;
    this.imageUrl = props.imageUrl;
  }

  static create(props: CardProps): Card {
    if (!props.id.trim()) {
      throw new InvalidCardError('Card id is required');
    }
    if (!props.name.trim()) {
      throw new InvalidCardError('Card name is required');
    }

    return new Card({
      id: props.id.trim(),
      name: props.name.trim(),
      manaCost: props.manaCost?.trim() || undefined,
      typeLine: props.typeLine?.trim() || undefined,
      imageUrl: props.imageUrl?.trim() || undefined,
    });
  }
}
