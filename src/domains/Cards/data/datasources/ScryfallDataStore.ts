import type { ScryfallListResponseDto } from '../dto/CardDto';

export interface ScryfallDataStore {
  searchCards(query: string, signal?: AbortSignal): Promise<ScryfallListResponseDto>;
}
