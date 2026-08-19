/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AIRTABLE_API_KEY: string
  readonly VITE_AIRTABLE_BASE: string
  readonly VITE_GTAG_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue-cookie-accept-decline' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}