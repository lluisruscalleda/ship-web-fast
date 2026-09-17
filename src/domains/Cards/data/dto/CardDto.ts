export interface CardImageUrisDto {
  small?: string;
  normal?: string;
  large?: string;
}

export interface CardDto {
  id: string;
  name: string;
  mana_cost?: string;
  type_line?: string;
  image_uris?: CardImageUrisDto;
  scryfall_uri?: string;
}

export interface ScryfallListResponseDto {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: CardDto[];
}
