export type WithAbortSignal<T extends object> = T & {
  signal?: AbortSignal;
};

export interface QuerySignal {
  signal?: AbortSignal;
}
