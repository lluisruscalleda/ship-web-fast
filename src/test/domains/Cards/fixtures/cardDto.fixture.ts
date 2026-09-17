import type { CardDto } from '@/domains/Cards/data/dto/CardDto';

export const cardDtoFixture: CardDto = {
  id: 'test-uuid',
  name: 'Lightning Bolt',
  mana_cost: '{R}',
  type_line: 'Instant',
  image_uris: {
    small: 'https://example.com/bolt.jpg',
  },
  scryfall_uri: 'https://scryfall.com/card/test',
};

export const cardDtoListFixture: CardDto[] = [cardDtoFixture];
