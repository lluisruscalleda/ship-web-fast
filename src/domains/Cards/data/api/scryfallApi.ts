import type { AxiosError } from 'axios';

import type { ScryfallListResponseDto } from '../dto/CardDto';
import { NetworkError, NotFoundError, ServerError } from '../errors/DataErrors';

import { httpClient } from '@/lib/http-client';

export const scryfallApi = {
  async searchCards(
    query: string,
    page = 1,
    signal?: AbortSignal
  ): Promise<ScryfallListResponseDto> {
    if (!navigator.onLine) {
      throw new NetworkError();
    }

    try {
      const response = await httpClient.get<ScryfallListResponseDto>('/cards/search', {
        params: { q: query, page },
        signal,
      });

      return response.data;
    } catch (error) {
      if (signal?.aborted) {
        throw error;
      }

      const axiosError = error as AxiosError<{ code?: string; details?: string }>;

      if (axiosError.response?.status === 404) {
        throw new NotFoundError(axiosError.response.data?.details ?? 'No cards found');
      }

      if (axiosError.response?.status && axiosError.response.status >= 500) {
        throw new ServerError();
      }

      throw error;
    }
  },
};
