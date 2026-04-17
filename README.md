# Python för AI — Interaktiv Kurs

En komplett, interaktiv kurs för att lära sig Python för AI — körbar direkt i webbläsaren via Pyodide (Python kompilerad till WebAssembly). Byggd i Next.js och redo att deployas på Vercel.

## Innehåll

**3 faser, 15 lektioner, 40+ körbara övningar:**

- **Fas 1 — Python-grunden** (Vecka 1–3): datatyper, funktioner, filhantering, felhantering, OOP
- **Fas 2 — Data & Matematik** (Vecka 4–7): NumPy, Pandas, Matplotlib, matematik för AI
- **Fas 3 — Machine Learning** (Vecka 8–12): scikit-learn, regression, klassificering, klustring, feature engineering, hyperparameter tuning

Varje lektion har:
- Teoriförklaring
- Flera körbara kodexempel
- Övningsuppgifter med tips och lösningar
- Allt körs i webbläsaren — ingen installation krävs

## Kör lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Deploy på Vercel

### Alternativ 1: GitHub + Vercel dashboard (rekommenderat)

1. Skapa ett nytt GitHub-repo och pusha projektet:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DITT_ANVÄNDARNAMN/python-ai-kurs.git
   git push -u origin main
   ```

2. Gå till [vercel.com/new](https://vercel.com/new), logga in med GitHub, välj repot och klicka Deploy.

3. Vercel upptäcker automatiskt att det är Next.js och bygger. Klart på ~1 minut.

### Alternativ 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Följ instruktionerna. För produktion: `vercel --prod`.

## Teknisk stack

- **Next.js 14** (App Router)
- **React 18**
- **Pyodide 0.26** — kör Python i webbläsaren via WebAssembly
- **CSS-in-JS** via styled-jsx

## Hur Pyodide fungerar

Första gången någon kör Python laddas ~10 MB WASM ner och cachas. Därefter är körningar snabba. Paket som NumPy, Pandas, scikit-learn och Matplotlib laddas on-demand när en lektion behöver dem.

All Python körs **lokalt i användarens webbläsare** — ingen backend, inga data lämnar enheten.

## Anpassa

Lektionsinnehållet finns i `data/fas1.js`, `data/fas2.js`, `data/fas3.js`. Redigera dessa för att lägga till, ta bort eller ändra lektioner och övningar.

Struktur på en lektion:

```js
{
  id: "1-1",
  title: "Lektionstitel",
  icon: "📦",
  theory: "Markdown-lik text med **fet** och `kod`",
  examples: [{ title: "...", code: "..." }],
  exercises: [{
    question: "...",
    starter: "kod med # Din kod här:",
    solution: "fullständig lösning",
    hint: "ledtråd",
    expected: "förväntad output",
  }],
}
```

## Projektstruktur

```
python-ai-kurs/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Hemsida
│   ├── globals.css         # Global styling
│   └── fas/[id]/page.js    # Dynamisk fas-sida
├── components/
│   ├── Nav.js
│   ├── Lesson.js
│   ├── Exercise.js
│   └── PythonEditor.js     # Interaktiv Python-runner
├── data/
│   ├── fas1.js             # Fas 1 innehåll
│   ├── fas2.js             # Fas 2 innehåll
│   ├── fas3.js             # Fas 3 innehåll
│   └── phases.js           # Index
├── lib/
│   └── usePyodide.js       # Pyodide-hook
└── package.json
```

## Licens

Fri att använda, modifiera och dela.
