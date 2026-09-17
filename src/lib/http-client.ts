import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.DEV ? '/scryfall-api' : 'https://api.scryfall.com',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'User-Agent': 'ShipWebFast/1.0 (React template demo)',
  },
});
