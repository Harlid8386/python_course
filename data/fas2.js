export const fas2 = {
  id: 2,
  title: "Data & Matematik",
  weeks: "Vecka 4–7",
  icon: "📊",
  accent: "#8B5CF6",
  description: "NumPy och Pandas är ryggraden i all AI-kod. Här lär du dig att hantera data effektivt.",
  requiresPackages: ["numpy", "pandas", "matplotlib"],
  lessons: [
    {
      id: "2-1",
      title: "NumPy — Arrays & Vektorisering",
      icon: "🔢",
      theory: `NumPy är grunden för ALL numerisk Python. Nyckelkoncept:

• **ndarray** — N-dimensionell array, snabbare än listor
• **Vektorisering** — operationer på hela arrays utan loops
• **Broadcasting** — auto-utökning av olika formade arrays
• **Slicing & indexering** — kraftfull datatillgång

NumPy är 10-100x snabbare än Python-loops för numerisk kod.`,
      examples: [
        {
          title: "Skapa & inspektera arrays",
          code: `import numpy as np

# Från lista
a = np.array([1, 2, 3, 4, 5])
print(a)
print(f"Shape: {a.shape}, dtype: {a.dtype}")

# 2D array (matris)
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m)
print(f"Shape: {m.shape}")

# Specialarrays
print(np.zeros((2, 3)))       # nollor
print(np.ones((2, 3)))        # ettor
print(np.arange(0, 10, 2))    # 0 till 10, steg 2
print(np.linspace(0, 1, 5))   # 5 värden mellan 0 och 1`,
        },
        {
          title: "Vektorisering — inga loops!",
          code: `import numpy as np

# SNABBT med NumPy
a = np.array([1, 2, 3, 4, 5])
b = np.array([10, 20, 30, 40, 50])

print(a + b)         # element-vis addition
print(a * 2)         # skalär multiplikation
print(a ** 2)        # element-vis kvadrat
print(np.sqrt(a))    # element-vis roten ur

# Statistik på hela arrayen
data = np.array([23, 45, 12, 67, 89, 34, 56])
print(f"Medel: {data.mean()}")
print(f"Std: {data.std():.2f}")
print(f"Min/Max: {data.min()}/{data.max()}")
print(f"Sum: {data.sum()}")`,
        },
        {
          title: "Slicing & Boolean indexering",
          code: `import numpy as np

# 1D slicing
a = np.array([10, 20, 30, 40, 50, 60, 70])
print(a[1:4])        # [20, 30, 40]
print(a[::-1])       # reverserad
print(a[::2])        # varannan

# 2D slicing
m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(m[0])          # första raden
print(m[:, 1])       # andra kolumnen
print(m[1:, 1:])     # undre-höger 2x2

# Boolean mask — VANLIGT i ML!
data = np.array([23, 45, 12, 67, 89])
mask = data > 40
print(mask)          # [F, T, F, T, T]
print(data[mask])    # [45, 67, 89]`,
        },
        {
          title: "Broadcasting & Linjär algebra",
          code: `import numpy as np

# Broadcasting — olika former
matrix = np.array([[1, 2, 3], [4, 5, 6]])
vektor = np.array([10, 20, 30])
print(matrix + vektor)  # vektor "broadcastas" till varje rad

# Matrixmultiplikation
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)             # matrixmultiplikation
print(np.dot(A, B))      # samma sak

# Vanligt i ML: normalisering
data = np.array([[1.0, 100.0], [2.0, 200.0], [3.0, 300.0]])
normaliserad = (data - data.mean(axis=0)) / data.std(axis=0)
print(normaliserad)`,
        },
      ],
      exercises: [
        {
          explanation: `En boolean-mask är en array av True/False-värden som du kan använda för att filtrera en annan array.\n\nExempel:\na = np.array([1, 2, 3, 4, 5])\nmask = a > 2        →  [False, False, True, True, True]\na[mask]             →  [3, 4, 5]\n\nKombinera villkor med & (OCH) eller | (ELLER) — inte 'and'/'or':\na[(a > 2) & (a % 2 == 0)]  →  [4]\n\nnp.arange(1, 21) skapar arrayen [1, 2, 3, ..., 20].`,
          question: "Skapa en array med tal 1-20, och använd boolean-mask för att få alla tal som är både jämna och > 10.",
          starter: `import numpy as np

a = np.arange(1, 21)
# Din kod här:
resultat = 

print(resultat)`,
          solution: `import numpy as np

a = np.arange(1, 21)
resultat = a[(a % 2 == 0) & (a > 10)]
print(resultat)`,
          hint: "Kombinera villkor med & (och), inte 'and'. Använd parenteser!",
          expected: "[12 14 16 18 20]",
        },
        {
          explanation: `Normalisering skalar om data så att det hamnar i ett bestämt intervall — vanligast är [0, 1].\n\nFormeln för min-max normalisering:\nnormaliserad = (x - min) / (max - min)\n\nMed NumPy fungerar detta automatiskt element-vis på hela arrayen:\n(data - data.min()) / (data.max() - data.min())\n\nNormalisering används i nästan alla ML-modeller för att skala features lika.`,
          question: "Normalisera en array så att värdena hamnar mellan 0 och 1 (min-max normalisering).",
          starter: `import numpy as np

data = np.array([15, 30, 45, 60, 75, 90])
# Formel: (x - min) / (max - min)
# Din kod här:
normaliserad = 

print(normaliserad)`,
          solution: `import numpy as np

data = np.array([15, 30, 45, 60, 75, 90])
normaliserad = (data - data.min()) / (data.max() - data.min())
print(normaliserad)`,
          hint: "(data - data.min()) / (data.max() - data.min())",
          expected: "[0.  0.2 0.4 0.6 0.8 1. ]",
        },
        {
          explanation: `En identitetsmatris har 1:or längs diagonalen och 0:or överallt annars. Den är viktig i linjär algebra.\n\nnp.eye(n) skapar en n×n identitetsmatris:\nnp.eye(3)\n→  [[1., 0., 0.],\n    [0., 1., 0.],\n    [0., 0., 1.]]\n\nMultiplicera med en skalär för att skala diagonalvärdena:\nnp.eye(3) * 5\n→  [[5., 0., 0.],\n    [0., 5., 0.],\n    [0., 0., 5.]]`,
          question: "Skapa en 5x5 matris med identitetsmatrisen multiplicerad med 3 på diagonalen.",
          starter: `import numpy as np

# Din kod här:
m = 

print(m)`,
          solution: `import numpy as np

m = np.eye(5) * 3
print(m)`,
          hint: "np.eye(n) skapar identitetsmatris. Multiplicera med skalär.",
          expected: "[[3. 0. 0. 0. 0.]\n [0. 3. 0. 0. 0.]\n [0. 0. 3. 0. 0.]\n [0. 0. 0. 3. 0.]\n [0. 0. 0. 0. 3.]]",
        },
        {
          explanation: `Det euklidiska avståndet är det "raka" avståndet mellan två punkter — som Pythagoras sats i 3D.\n\nFormeln: avstånd = √((x₁-x₂)² + (y₁-y₂)² + (z₁-z₂)²)\n\nMed NumPy kan du beräkna det i en rad:\n1. Subtrahera punkterna: p1 - p2\n2. Kvadrera varje komponent: ** 2\n3. Summera: np.sum(...)\n4. Ta roten: np.sqrt(...)\n\nAlternativt: np.linalg.norm(p1 - p2) gör allt på en gång.`,
          question: "Beräkna euklidiskt avstånd mellan två 3D-punkter med NumPy.",
          starter: `import numpy as np

p1 = np.array([1, 2, 3])
p2 = np.array([4, 6, 8])
# Avstånd = sqrt(sum((p1-p2)^2))
# Din kod här:
avstånd = 

print(f"Avstånd: {avstånd:.2f}")`,
          solution: `import numpy as np

p1 = np.array([1, 2, 3])
p2 = np.array([4, 6, 8])
avstånd = np.sqrt(np.sum((p1 - p2) ** 2))
print(f"Avstånd: {avstånd:.2f}")`,
          hint: "Använd np.sqrt och np.sum på (p1-p2)**2.",
          expected: "Avstånd: 7.07",
        },
      ],
    },
    {
      id: "2-2",
      title: "Pandas — DataFrames",
      icon: "🐼",
      theory: `Pandas är NumPy för strukturerad data. Det är standardverktyget för dataanalys.

Två huvudobjekt:
• **Series** — 1D med etiketter (som en namngiven kolumn)
• **DataFrame** — 2D tabell (rader × kolumner)

Allt du gör i Excel kan du göra snabbare i Pandas — och med kod som är reproducerbar.`,
      examples: [
        {
          title: "Skapa DataFrames",
          code: `import pandas as pd

# Från dict
df = pd.DataFrame({
    "namn": ["Alice", "Bob", "Charlie", "Diana"],
    "ålder": [25, 30, 35, 28],
    "stad": ["Sthlm", "Göteborg", "Malmö", "Sthlm"],
    "lön": [45000, 52000, 48000, 55000]
})

print(df)
print()
print(f"Shape: {df.shape}")
print(f"Kolumner: {list(df.columns)}")
print()
print(df.info())`,
        },
        {
          title: "Filtrering & Selection",
          code: `import pandas as pd

df = pd.DataFrame({
    "namn": ["Alice", "Bob", "Charlie", "Diana", "Erik"],
    "ålder": [25, 30, 35, 28, 45],
    "stad": ["Sthlm", "Göteborg", "Malmö", "Sthlm", "Göteborg"],
    "lön": [45000, 52000, 48000, 55000, 62000]
})

# Välj kolumn
print(df["namn"])

# Filtrera rader
unga = df[df["ålder"] < 30]
print(unga)

# Flera villkor
hög_lön_sthlm = df[(df["lön"] > 50000) & (df["stad"] == "Sthlm")]
print(hög_lön_sthlm)

# .loc och .iloc
print(df.loc[0, "namn"])     # namn på rad 0
print(df.iloc[0])             # första raden`,
        },
        {
          title: "GroupBy & Aggregering",
          code: `import pandas as pd

df = pd.DataFrame({
    "stad": ["Sthlm", "Göteborg", "Malmö", "Sthlm", "Göteborg", "Sthlm"],
    "avdelning": ["IT", "HR", "IT", "HR", "IT", "IT"],
    "lön": [45000, 52000, 48000, 55000, 62000, 58000]
})

# Gruppera efter stad
per_stad = df.groupby("stad")["lön"].mean()
print(per_stad)
print()

# Flera aggregeringar
stats = df.groupby("stad")["lön"].agg(["mean", "min", "max", "count"])
print(stats)
print()

# Pivot table
pivot = df.pivot_table(values="lön", index="stad", 
                       columns="avdelning", aggfunc="mean")
print(pivot)`,
        },
        {
          title: "Datahantering: saknade värden, typer",
          code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "namn": ["Alice", "Bob", "Charlie", "Diana"],
    "ålder": [25, np.nan, 35, 28],
    "lön": [45000, 52000, np.nan, 55000]
})

print("Saknade värden:")
print(df.isnull().sum())
print()

# Fyll saknade värden
df["ålder"] = df["ålder"].fillna(df["ålder"].mean())
df["lön"] = df["lön"].fillna(df["lön"].median())
print(df)
print()

# Ny kolumn
df["lön_i_kkr"] = df["lön"] / 1000
print(df[["namn", "lön_i_kkr"]])`,
        },
      ],
      exercises: [
        {
          explanation: `I Pandas filtrerar du rader med villkor inom hakparenteser:\ndf[df["kolumn"] > värde]\n\nFör att kombinera flera villkor — använd & (OCH) eller | (ELLER), och sätt varje villkor i parenteser:\ndf[(df["pris"] < 1000) & (df["lager"] > 5)]\n\nObs: Använd & istället för 'and' — det funkar element-vis på hela kolumnen.`,
          question: "Skapa en DataFrame med 5 produkter (namn, pris, lager). Filtrera fram de som kostar < 500 OCH har > 0 i lager.",
          starter: `import pandas as pd

df = pd.DataFrame({
    "namn": ["Laptop", "Mus", "Tangentbord", "Skärm", "Headset"],
    "pris": [12000, 250, 800, 3500, 450],
    "lager": [5, 20, 0, 3, 12]
})

# Din kod här:
resultat = 

print(resultat)`,
          solution: `import pandas as pd

df = pd.DataFrame({
    "namn": ["Laptop", "Mus", "Tangentbord", "Skärm", "Headset"],
    "pris": [12000, 250, 800, 3500, 450],
    "lager": [5, 20, 0, 3, 12]
})

resultat = df[(df["pris"] < 500) & (df["lager"] > 0)]
print(resultat)`,
          hint: "Kombinera villkor med & inom parenteser.",
          expected: "      namn  pris  lager\n1      Mus   250     20\n4  Headset   450     12",
        },
        {
          explanation: `groupby() delar upp DataFramen i grupper, ungefär som "GROUP BY" i SQL.\n\nMönster:\ndf.groupby("kolumn")["värde"].aggregeringsfunktion()\n\nExempel:\ndf.groupby("stad")["lön"].mean()   →  medellön per stad\ndf.groupby("stad")["lön"].sum()    →  totallön per stad\n\nSortera resultatet med .sort_values():\n.sort_values(ascending=False)  →  högst först`,
          question: "Gruppera en DataFrame efter 'stad' och beräkna medel-lön per stad, sorterat från högst till lägst.",
          starter: `import pandas as pd

df = pd.DataFrame({
    "stad": ["Sthlm", "Göteborg", "Malmö", "Sthlm", "Göteborg", "Sthlm"],
    "lön": [45000, 52000, 48000, 55000, 62000, 58000]
})

# Din kod här:
resultat = 

print(resultat)`,
          solution: `import pandas as pd

df = pd.DataFrame({
    "stad": ["Sthlm", "Göteborg", "Malmö", "Sthlm", "Göteborg", "Sthlm"],
    "lön": [45000, 52000, 48000, 55000, 62000, 58000]
})

resultat = df.groupby("stad")["lön"].mean().sort_values(ascending=False)
print(resultat)`,
          hint: "df.groupby(...)['lön'].mean().sort_values(ascending=False)",
          expected: "stad\nGöteborg    57000.0\nSthlm       52666.666667\nMalmö       48000.0\nName: lön, dtype: float64",
        },
        {
          explanation: `.apply() kör en funktion på varje värde i en kolumn och returnerar resultaten som en ny kolumn.\n\nMed lambda:\ndf["ny_kolumn"] = df["gammal_kolumn"].apply(lambda x: ... )\n\nExempel — dela upp i kategorier:\ndf["storlek"] = df["vikt"].apply(lambda x: "Stor" if x > 100 else "Liten")\n\nDu kan också använda en if/else direkt i lambda-uttrycket.`,
          question: "Lägg till en kolumn 'kategori' som är 'Hög' om lön > 50000, annars 'Låg'.",
          starter: `import pandas as pd

df = pd.DataFrame({
    "namn": ["A", "B", "C", "D"],
    "lön": [45000, 55000, 48000, 62000]
})

# Din kod här:


print(df)`,
          solution: `import pandas as pd

df = pd.DataFrame({
    "namn": ["A", "B", "C", "D"],
    "lön": [45000, 55000, 48000, 62000]
})

df["kategori"] = df["lön"].apply(lambda x: "Hög" if x > 50000 else "Låg")
print(df)`,
          hint: "Använd .apply(lambda x: ...) eller np.where().",
          expected: "  namn    lön kategori\n0    A  45000      Låg\n1    B  55000      Hög\n2    C  48000      Låg\n3    D  62000      Hög",
        },
      ],
    },
    {
      id: "2-3",
      title: "Visualisering med Matplotlib",
      icon: "📈",
      theory: `Visualisering är kritiskt för att förstå data. Matplotlib är standardbiblioteket i Python.

Viktigaste plottyperna för AI:
• **Linjegraf** — tidsserier, träningskurvor (loss över epochs)
• **Scatter plot** — relationer mellan variabler
• **Histogram** — fördelning av data
• **Heatmap** — korrelationer, förvirringsmatriser

Obs: I Pyodide visas plots som bilder nedan koden.`,
      examples: [
        {
          title: "Grundläggande plot",
          code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y, label="sin(x)", color="#14B8A6", linewidth=2)
plt.plot(x, np.cos(x), label="cos(x)", color="#8B5CF6", linewidth=2)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Sinus och Cosinus")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`,
        },
        {
          title: "Scatter plot & Histogram",
          code: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)

# Scatter — 100 punkter, tre kluster
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5
axes[0].scatter(x, y, alpha=0.6, color="#EC4899")
axes[0].set_title("Scatter: y ~ 2x + brus")
axes[0].set_xlabel("x")
axes[0].set_ylabel("y")

# Histogram
data = np.random.randn(1000) * 15 + 100
axes[1].hist(data, bins=30, color="#F59E0B", edgecolor="white")
axes[1].set_title("Histogram: normalfördelning")
axes[1].set_xlabel("värde")
axes[1].set_ylabel("frekvens")

plt.tight_layout()
plt.show()`,
        },
        {
          title: "Bar chart & Subplots",
          code: `import matplotlib.pyplot as plt
import numpy as np

# Bar chart
kategorier = ["A", "B", "C", "D", "E"]
värden = [23, 45, 56, 12, 78]

fig, ax = plt.subplots(figsize=(8, 4))
färger = ["#14B8A6", "#8B5CF6", "#EC4899", "#F59E0B", "#3B82F6"]
ax.bar(kategorier, värden, color=färger)
ax.set_title("Försäljning per kategori")
ax.set_ylabel("Antal")

# Lägg värden ovanpå staplarna
for i, v in enumerate(värden):
    ax.text(i, v + 1, str(v), ha="center", fontweight="bold")

plt.tight_layout()
plt.show()`,
        },
      ],
      exercises: [
        {
          explanation: `Grundmönstret i Matplotlib:\n1. Beräkna x-värdena med np.linspace(start, slut, antal_punkter)\n2. Beräkna y-värdena matematiskt\n3. Rita med plt.plot(x, y)\n4. Lägg till titel, etiketter och rutnät\n\nExempel:\nx = np.linspace(0, 10, 100)\ny = x * 2\nplt.plot(x, y)\nplt.title("Titel")\nplt.xlabel("x")\nplt.grid(True)\nplt.show()`,
          question: "Plotta funktionen y = x² - 4x + 3 för x mellan -2 och 6, med snyggt rutnät och titel.",
          starter: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-2, 6, 100)
# Din kod här:


plt.show()`,
          solution: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-2, 6, 100)
y = x**2 - 4*x + 3
plt.figure(figsize=(8, 4))
plt.plot(x, y, color="#14B8A6", linewidth=2)
plt.title("y = x² - 4x + 3")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True, alpha=0.3)
plt.axhline(0, color="gray", linewidth=0.5)
plt.show()`,
          hint: "Beräkna y = x**2 - 4*x + 3, använd plt.plot().",
          expected: "Plot visas nedan",
        },
        {
          explanation: `Ett histogram visar hur data fördelar sig — hur många värden faller inom varje intervall.\n\nnp.random.randn(n) ger n slumpade tal med medel=0 och std=1.\nFör att flytta medelvärdet och skala spridningen:\ndata = np.random.randn(500) * std + medel\n\nRita histogram:\nplt.hist(data, bins=antal_intervall)\n\nFler bins = finare upplösning. 20-30 är vanligt för 500 datapunkter.`,
          question: "Skapa ett histogram av 500 slumpade normalfördelade tal (medel=50, std=10) med 25 bins.",
          starter: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(0)
# Din kod här:
data = 


plt.show()`,
          solution: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(0)
data = np.random.randn(500) * 10 + 50
plt.figure(figsize=(8, 4))
plt.hist(data, bins=25, color="#8B5CF6", edgecolor="white")
plt.title("Normalfördelning (μ=50, σ=10)")
plt.xlabel("Värde")
plt.ylabel("Frekvens")
plt.show()`,
          hint: "np.random.randn(500) * 10 + 50 ger medel 50, std 10.",
          expected: "Histogram visas nedan",
        },
      ],
    },
    {
      id: "2-4",
      title: "Matematik för AI",
      icon: "🧮",
      theory: `Du behöver inte en matteexamen — men några koncept är nyckeln till att förstå AI:

• **Linjär algebra** — vektorer, matriser, dot-product
• **Derivator & gradienter** — hur modeller lär sig (gradient descent)
• **Sannolikhet** — alla prediktioner är sannolikheter
• **Statistik** — medel, std, fördelningar

Här fokuserar vi på koden — matematiken blir konkret när du ser den i NumPy.`,
      examples: [
        {
          title: "Vektorer & Dot Product",
          code: `import numpy as np

# Vektorer i 3D
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])

# Dot product — grunden i neurala nätverk!
dot = np.dot(v1, v2)
print(f"Dot product: {dot}")
# 1*4 + 2*5 + 3*6 = 32

# Längd (magnitud) av vektor
längd = np.linalg.norm(v1)
print(f"|v1| = {längd:.3f}")

# Cosinus-likhet — viktigt i NLP/embeddings!
cos_sim = np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))
print(f"Cosinus-likhet: {cos_sim:.3f}")`,
        },
        {
          title: "Gradient Descent — från grunden",
          code: `import numpy as np

# Vi vill hitta minimum av f(x) = x² - 4x + 5
# Derivata: f'(x) = 2x - 4
# Analytisk lösning: minimum vid x=2

def f(x):
    return x**2 - 4*x + 5

def grad_f(x):
    return 2*x - 4

# Gradient descent
x = 10.0              # startpunkt
learning_rate = 0.1
historia = [x]

for i in range(20):
    gradient = grad_f(x)
    x = x - learning_rate * gradient
    historia.append(x)
    if i % 5 == 0:
        print(f"Steg {i}: x={x:.4f}, f(x)={f(x):.4f}")

print(f"\\nHittade minimum vid x={x:.4f}")
print(f"Analytiskt: x=2.0000")`,
        },
        {
          title: "Sannolikhet & Softmax",
          code: `import numpy as np

# Softmax — konverterar logits till sannolikheter
# Används i nästan alla klassificerare!
def softmax(logits):
    exp = np.exp(logits - np.max(logits))  # numerisk stabilitet
    return exp / exp.sum()

# Ex: modell ger 3 logits för 3 klasser
logits = np.array([2.0, 1.0, 0.1])
sannolikheter = softmax(logits)

print(f"Logits: {logits}")
print(f"Sannolikheter: {sannolikheter.round(3)}")
print(f"Summa: {sannolikheter.sum()}")
print(f"Förutspådd klass: {np.argmax(sannolikheter)}")`,
        },
      ],
      exercises: [
        {
          explanation: `Cosinus-likhet mäter vinkeln mellan två vektorer — 1.0 betyder exakt samma riktning, 0 betyder vinkelrät.\n\nFormeln:\ncos_sim = dot(a, b) / (||a|| × ||b||)\n\nMed NumPy:\n- np.dot(a, b)           →  dot-produkt\n- np.linalg.norm(v)      →  vektorns längd (||v||)\n\nResultat 1.0 = helt lika riktning, 0 = ingen likhet, -1 = motsatt riktning.\nAnvänds mycket i NLP för att jämföra texters "mening" som vektorer.`,
          question: "Beräkna cosinus-likheten mellan två vektorer (mått på hur lika riktning de har).",
          starter: `import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([2, 4, 6, 8])
# cos_sim = dot(a,b) / (||a|| * ||b||)
# Din kod här:
cos_sim = 

print(f"Cosinus-likhet: {cos_sim:.3f}")`,
          solution: `import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([2, 4, 6, 8])
cos_sim = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print(f"Cosinus-likhet: {cos_sim:.3f}")`,
          hint: "np.dot(a,b) / (np.linalg.norm(a) * np.linalg.norm(b))",
          expected: "Cosinus-likhet: 1.000",
        },
        {
          explanation: `Gradient descent är algoritmen som tränar neurala nätverk. Den hittar minimum av en funktion genom att följa lutningen nedåt.\n\nIde:\n- Gradienten (derivatan) pekar uppåt i riktning mot starkast ökning\n- Gå ett litet steg i MOTSATT riktning\n- Upprepa tills du hittar minimum\n\nFormeln: x_ny = x - learning_rate × gradient\n\nFör f(x) = (x-3)² + 2 är derivatan f'(x) = 2(x-3).\nMinimum ligger vid x=3 (där f'(x)=0).`,
          question: "Implementera gradient descent för att hitta minimum av f(x) = (x-3)² + 2. Startpunkt x=0.",
          starter: `import numpy as np

# f(x) = (x-3)² + 2
# f'(x) = 2(x-3)
x = 0.0
lr = 0.1
# Din kod här — kör 30 steg:


print(f"Minimum ungefär vid x={x:.3f}")`,
          solution: `import numpy as np

x = 0.0
lr = 0.1
for i in range(30):
    grad = 2 * (x - 3)
    x = x - lr * grad
print(f"Minimum ungefär vid x={x:.3f}")`,
          hint: "I loopen: grad = 2*(x-3), sedan x = x - lr*grad.",
          expected: "Minimum ungefär vid x=3.000",
        },
        {
          explanation: `Softmax omvandlar råa poäng (logits) till sannolikheter som summerar till 1.0.\n\nFormeln:\nsoftmax(xᵢ) = e^xᵢ / Σ e^xⱼ\n\nMed NumPy:\nexp = np.exp(logits)\nreturn exp / exp.sum()\n\nTrick för numerisk stabilitet: subtrahera max-värdet först så att exp() inte spränger.\nnp.exp(logits - np.max(logits))\n\nAnvänds i sista lagret av klassificeringsnätverk.`,
          question: "Implementera softmax-funktionen och testa den på logits [1.0, 2.0, 3.0].",
          starter: `import numpy as np

def softmax(logits):
    # Din kod här:
    pass

logits = np.array([1.0, 2.0, 3.0])
probs = softmax(logits)
print(probs.round(3))
print(f"Summa: {probs.sum()}")`,
          solution: `import numpy as np

def softmax(logits):
    exp = np.exp(logits - np.max(logits))
    return exp / exp.sum()

logits = np.array([1.0, 2.0, 3.0])
probs = softmax(logits)
print(probs.round(3))
print(f"Summa: {probs.sum()}")`,
          hint: "np.exp(x) / np.exp(x).sum(), subtrahera np.max för stabilitet.",
          expected: "[0.09  0.245 0.665]\nSumma: 1.0",
        },
      ],
    },
  ],
  milestone: {
    title: "Dataanalys-projekt",
    description: "Ladda ett dataset, rensa saknade värden, gör feature engineering, visualisera fördelningar och korrelationer. Kombinerar NumPy + Pandas + Matplotlib.",
    code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Simulera Titanic-liknande dataset
np.random.seed(42)
n = 200
df = pd.DataFrame({
    "ålder": np.random.normal(35, 15, n).clip(1, 80),
    "klass": np.random.choice([1, 2, 3], n, p=[0.2, 0.3, 0.5]),
    "kön": np.random.choice(["M", "K"], n),
    "biljettpris": np.random.exponential(30, n),
})
# Överlevde? Kvinnor + 1:a klass har högre chans
prob = 0.3 + 0.3*(df["kön"]=="K") + 0.2*(df["klass"]==1)
df["överlevde"] = (np.random.random(n) < prob).astype(int)

# Lägg till saknade värden
df.loc[np.random.choice(n, 20, replace=False), "ålder"] = np.nan

print("=== Översikt ===")
print(df.head())
print(f"\\nShape: {df.shape}")
print(f"Saknade värden:\\n{df.isnull().sum()}")

# Fyll saknade åldrar med median per klass
df["ålder"] = df.groupby("klass")["ålder"].transform(
    lambda x: x.fillna(x.median())
)

# Feature engineering
df["åldersgrupp"] = pd.cut(df["ålder"], bins=[0, 18, 35, 60, 100],
                            labels=["barn", "ung", "vuxen", "äldre"])

# Analys
print("\\n=== Överlevnad per grupp ===")
print(df.groupby(["klass", "kön"])["överlevde"].mean().round(3))

# Visualisering
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

df["ålder"].hist(bins=20, ax=axes[0], color="#14B8A6")
axes[0].set_title("Åldersfördelning")

surv_per_class = df.groupby("klass")["överlevde"].mean()
surv_per_class.plot(kind="bar", ax=axes[1], color="#8B5CF6")
axes[1].set_title("Överlevnadsgrad per klass")
axes[1].set_ylabel("Andel överlevde")

plt.tight_layout()
plt.show()`,
  },
};
