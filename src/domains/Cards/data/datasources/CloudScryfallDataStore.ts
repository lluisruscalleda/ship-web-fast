import { scryfallApi } from '../api/scryfallApi';
import type { ScryfallListResponseDto } from '../dto/CardDto';

import type { ScryfallDataStore } from './ScryfallDataStore';

export class CloudScryfallDataStore implements ScryfallDataStore {
  searchCards(query: string, signal?: AbortSignal): Promise<ScryfallListResponseDto> {
    return scryfallApi.searchCards(query, 1, signal);
  }
}
