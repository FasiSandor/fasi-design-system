# FS Design System

Központi UI- és dokumentum-arculat Fási Sándor alkalmazásaihoz.

## Cél

Egyetlen közös forrásból adja az appok és a nyomtatott/PDF dokumentumok vizuális alapját.

- glossy app UI
- központi színek és tipográfia
- FS márkajelzés
- A4 dokumentumsablon
- `Fejléccel` / `Fejléc nélkül` nyomtatási mód
- egységes print CSS
- React / Next.js komponensek

## Telepítés GitHub-ról

```bash
npm install github:FasiSandor/fasi-design-system
```

Next.js esetén a `next.config.ts` fájlban:

```ts
const nextConfig = {
  transpilePackages: ["@fasi/design-system"],
};

export default nextConfig;
```

Az app globális CSS-ében:

```css
@import "@fasi/design-system/styles.css";
```

## Fő komponensek

```tsx
import {
  FSBrand,
  GlossyButton,
  GlossyCard,
  PrintControls,
  DocumentTemplate,
} from "@fasi/design-system";
```

## Dokumentummódok

- `branded`: FS fejléc + vizuális márkajelzés
- `school`: egyszerű, intézményi/iskolai nyomtatás fejléc nélkül

A dokumentum címe mindig az adott app vagy riport saját neve marad.

## Verziózás

Az appokban érdemes konkrét commitra vagy később release verzióra hivatkozni, hogy egy design-frissítés ne törje el automatikusan az összes alkalmazást.
