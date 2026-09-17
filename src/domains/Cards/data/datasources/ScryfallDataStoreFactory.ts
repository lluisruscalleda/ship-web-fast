import { CloudScryfallDataStore } from './CloudScryfallDataStore';
import type { ScryfallDataStore } from './ScryfallDataStore';

export class ScryfallDataStoreFactory {
  constructor(private readonly cloudStore: CloudScryfallDataStore) {}

  create(): ScryfallDataStore {
    return this.cloudStore;
  }
}
