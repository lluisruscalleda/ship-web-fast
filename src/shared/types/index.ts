export type TranslationFunction = (key: string, options?: Record<string, unknown>) => string;

export interface ApiError {
  message: string;
  status?: number;
}
