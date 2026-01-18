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

### Environment Variables

Copy `.env.example` to `.env.local` and configure your Airtable credentials:

```sh
cp .env.example .env.local
```

Required environment variables:
- `VITE_AIRTABLE_API_KEY` - Your Airtable API key
- `VITE_AIRTABLE_BASE` - Your Airtable base ID

**Note:** After migrating from Vue CLI to Vite, environment variables changed from `VUE_APP_*` to `VITE_*` prefix.

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
