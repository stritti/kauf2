# kauf2

Landingpage für die Aktion kauf2. Ein Projekt zur Unterstützung der Tafelläden.

https://kauf2.vercel.app/

---

## Development

Project is based on Vue 3, Vite, Airtable and Bootstrap-Vue-Next.

### Project setup

```sh
npm install
```

### ⚠️ Environment Variables (Required)

**Important:** The application requires Airtable credentials to load data.

1. Copy `.env.example` to `.env.local`:
   ```sh
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Airtable credentials:
   ```env
   VITE_AIRTABLE_API_KEY=your_actual_api_key_here
   VITE_AIRTABLE_BASE=your_actual_base_id_here
   ```

3. Get your credentials from:
   - API Key: https://airtable.com/account
   - Base ID: From your Airtable base URL

**Note for existing developers:** After migrating from Vue CLI to Vite, environment variables changed:
- `VUE_APP_AIRTABLE_API_KEY` → `VITE_AIRTABLE_API_KEY`
- `VUE_APP_AIRTABLE_BASE` → `VITE_AIRTABLE_BASE`

Without these credentials, the supporter and product lists will not load.

### Compiles and hot-reloads for development

```sh
npm run dev
```

or

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
