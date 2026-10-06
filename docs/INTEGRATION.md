# Integráció Next.js alkalmazásba

## 1. Telepítés

```bash
npm install github:FasiSandor/fasi-design-system
```

## 2. Next config

```ts
const nextConfig = {
  transpilePackages: ["@fasi/design-system"],
};
export default nextConfig;
```

## 3. CSS

Az `app/globals.css` elején:

```css
@import "@fasi/design-system/styles.css";
```

## 4. App fejléc

```tsx
import { AppHeader } from "@fasi/design-system";

<AppHeader
  title="Havi Nyersanyagrendelő"
  subtitle="Havi terv · leltár · rendelés"
/>
```

## 5. Nyomtatási mód

```tsx
"use client";
import { useState } from "react";
import {
  DocumentTemplate,
  DocumentTable,
  PrintControls,
  type PrintMode,
} from "@fasi/design-system";

export default function Report() {
  const [mode,setMode] = useState<PrintMode>("school");

  return <>
    <PrintControls mode={mode} onModeChange={setMode} />

    <DocumentTemplate
      mode={mode}
      title="HAVI NYERSANYAGRENDELÉS"
      subtitle="Havi rendelési összesítő"
      meta={[
        {label:"Tanév",value:"2026/27"},
        {label:"Hónap",value:"Október"},
      ]}
    >
      <DocumentTable>
        <thead><tr><th>Nyersanyag</th><th>Végleges</th><th>Egység</th></tr></thead>
        <tbody>{/* adatsorok */}</tbody>
      </DocumentTable>
    </DocumentTemplate>
  </>;
}
```

## 6. Verziórögzítés

Stabil appnál használható konkrét commit:

```json
{
  "dependencies": {
    "@fasi/design-system": "github:FasiSandor/fasi-design-system#COMMIT_SHA"
  }
}
```

Így a központi design későbbi módosítása nem tör el automatikusan egy kész alkalmazást.
