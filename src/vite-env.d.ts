/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SCRYFALL_DEFAULT_QUERY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
