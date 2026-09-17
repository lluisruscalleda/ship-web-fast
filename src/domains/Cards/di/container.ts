import { CloudScryfallDataStore } from '../data/datasources/CloudScryfallDataStore';
import { ScryfallDataStoreFactory } from '../data/datasources/ScryfallDataStoreFactory';
import { ScryfallCardsRepository } from '../data/repositories/ScryfallCardsRepository';
import { SearchCards } from '../domain/usecases/SearchCards';

const cloudStore = new CloudScryfallDataStore();
const dataStoreFactory = new ScryfallDataStoreFactory(cloudStore);
const cardsRepository = new ScryfallCardsRepository(dataStoreFactory);
const searchCards = new SearchCards(cardsRepository);

export const cardsContainer = {
  searchCards,
};

export type CardsContainer = typeof cardsContainer;
