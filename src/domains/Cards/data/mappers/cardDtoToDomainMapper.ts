import { Card } from '../../domain/models/Card';
import type { CardDto } from '../dto/CardDto';

export function cardDtoToDomainMapper(dto: CardDto): Card {
  return Card.create({
    id: dto.id,
    name: dto.name,
    manaCost: dto.mana_cost,
    typeLine: dto.type_line,
    imageUrl: dto.image_uris?.small ?? dto.image_uris?.normal,
  });
}

export function cardDtoListToDomainMapper(dtos: CardDto[]): Card[] {
  return dtos.map(cardDtoToDomainMapper);
}
