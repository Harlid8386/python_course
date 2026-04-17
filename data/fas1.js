export const fas1 = {
  id: 1,
  title: "Stärk Python-grunden",
  weeks: "Vecka 1–3",
  icon: "🐍",
  accent: "#14B8A6",
  description: "Bygg en solid grund i Python — syntax, datastrukturer, funktioner, filhantering och OOP.",
  lessons: [
    {
      id: "1-1",
      title: "Datatyper & Strukturer",
      icon: "📦",
      theory: `Python har fyra centrala datastrukturer du MÅSTE behärska innan AI:

• **Listor** — ordnade, föränderliga sekvenser \`[1, 2, 3]\`
• **Dictionaries** — nyckel:värde-par \`{"namn": "Anna"}\`  
• **Tuples** — oföränderliga listor \`(10, 20)\`
• **Sets** — unika värden \`{1, 2, 3}\`

List comprehensions är en av Pythons mest kraftfulla features — du kommer använda dem varje dag i AI-kod.`,
      examples: [
        {
          title: "Listor & List Comprehensions",
          code: `# Vanlig lista
frukt = ["äpple", "banan", "citron"]
frukt.append("druva")
print(frukt[0])      # första elementet
print(frukt[-1])     # sista elementet
print(frukt[1:3])    # slicing

# List comprehension — filtrera
tal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
jämna = [t for t in tal if t % 2 == 0]
print(jämna)

# Transformera
kvadrater = [t ** 2 for t in tal]
print(kvadrater)`,
        },
        {
          title: "Dictionaries",
          code: `# Dictionary — nyckel:värde
person = {
    "namn": "Anna",
    "ålder": 28,
    "språk": ["Python", "JavaScript"]
}
print(person["namn"])
print(person.get("jobb", "Okänt"))  # default

# Loopa
for nyckel, värde in person.items():
    print(f"{nyckel}: {värde}")

# Dict comprehension
ord_lista = ["hej", "python", "ai"]
längder = {o: len(o) for o in ord_lista}
print(längder)`,
        },
        {
          title: "Tuples & Sets",
          code: `# Tuple — oföränderlig
punkt = (10, 20)
x, y = punkt  # unpacking
print(f"x={x}, y={y}")

# Set — unika värden
färger_a = {"röd", "blå", "grön"}
färger_b = {"blå", "gul", "röd"}

print(färger_a & färger_b)  # gemensamma
print(färger_a | färger_b)  # alla unika
print(färger_a - färger_b)  # bara i a`,
        },
      ],
      exercises: [
        {
          explanation: `En list comprehension låter dig skapa en ny lista i en enda rad istället för en vanlig for-loop.\n\nSyntax:  [uttryck for element in lista if villkor]\n\nExempel:\ntal = [1, 2, 3, 4, 5]\njämna = [t for t in tal if t % 2 == 0]  → [2, 4]\n\nlen(s) returnerar antalet tecken i strängen s — använd det som villkor.`,
          question: "Skapa en list comprehension som returnerar bara ord med fler än 3 bokstäver från listan.",
          starter: `ord = ["ai", "python", "ml", "data", "neuralt", "gpu"]
# Din kod här:
långa = 

print(långa)`,
          solution: `ord = ["ai", "python", "ml", "data", "neuralt", "gpu"]
långa = [o for o in ord if len(o) > 3]
print(långa)`,
          hint: "Använd len() inuti villkoret i comprehension.",
          expected: "['python', 'data', 'neuralt']",
        },
        {
          explanation: `En dict comprehension fungerar precis som list comprehension men skapar en dictionary (nyckel:värde-par).\n\nSyntax:  {nyckel: värde for element in lista}\n\nExempel:\n{x: x**2 for x in range(3)}  →  {0: 0, 1: 1, 2: 4}\n\nrange(1, 6) ger talen 1, 2, 3, 4, 5. Kvadraten av x skrivs x**2.`,
          question: "Skapa en dictionary som mappar varje tal 1-5 till dess kvadrat.",
          starter: `# Din kod här:
kvadrater = 

print(kvadrater)`,
          solution: `kvadrater = {n: n**2 for n in range(1, 6)}
print(kvadrater)`,
          hint: "Använd dict comprehension: {nyckel: värde for ...}",
          expected: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
        },
        {
          explanation: `Ett set är en samling unika värden. Med set() kan du enkelt hitta gemensamma element.\n\nOperatorer för sets:\n  &  →  gemensamma element (snitt)\n  |  →  alla unika element (union)\n  -  →  element bara i det första setet\n\nExempel:\nset([1,2,2,3]) & set([2,3,4])  →  {2, 3}`,
          question: "Hitta gemensamma element i två listor (utan dubbletter).",
          starter: `lista_a = [1, 2, 3, 4, 5, 3, 2]
lista_b = [4, 5, 6, 7, 8, 5]
# Din kod här:
gemensamma = 

print(sorted(gemensamma))`,
          solution: `lista_a = [1, 2, 3, 4, 5, 3, 2]
lista_b = [4, 5, 6, 7, 8, 5]
gemensamma = set(lista_a) & set(lista_b)
print(sorted(gemensamma))`,
          hint: "Konvertera till sets och använd & operatorn.",
          expected: "[4, 5]",
        },
        {
          explanation: `För att räkna förekomster kan du använda en dictionary som räknare.\n\nTricket är dict.get(nyckel, standardvärde) — om nyckeln inte finns returneras standardvärdet istället för ett fel.\n\nExempel:\nräknare = {}\nfor bokstav in "hej":\n    räknare[bokstav] = räknare.get(bokstav, 0) + 1\n→  {'h': 1, 'e': 1, 'j': 1}`,
          question: "Räkna förekomster av varje bokstav i ordet 'programmering'.",
          starter: `ord = "programmering"
# Din kod här:
räknare = {}


print(räknare)`,
          solution: `ord = "programmering"
räknare = {}
for b in ord:
    räknare[b] = räknare.get(b, 0) + 1
print(räknare)`,
          hint: "Använd .get(b, 0) + 1 för att öka räknaren.",
          expected: "{'p': 1, 'r': 3, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'e': 1, 'i': 1, 'n': 1}",
        },
      ],
    },
    {
      id: "1-2",
      title: "Funktioner & Lambda",
      icon: "⚡",
      theory: `Funktioner är grunden för all strukturerad kod. I AI-projekt skriver du funktioner för:
• Databehandling (rensa, transformera)
• Modellträning och utvärdering  
• Metrics och visualisering

*args och **kwargs gör funktioner flexibla — exakt som PyTorch-modeller tar emot varierande parametrar.`,
      examples: [
        {
          title: "Grundläggande funktioner",
          code: `def beräkna_medel(tal, avrunda=2):
    """Beräknar medelvärde med valfri avrundning."""
    resultat = sum(tal) / len(tal)
    return round(resultat, avrunda)

data = [85.5, 92.3, 78.1, 95.7]
print(beräkna_medel(data))
print(beräkna_medel(data, 0))

# Returnera flera värden
def statistik(tal):
    return min(tal), max(tal), sum(tal)/len(tal)

lo, hi, medel = statistik(data)
print(f"Min: {lo}, Max: {hi}, Medel: {medel:.1f}")`,
        },
        {
          title: "*args och **kwargs",
          code: `# *args — valfritt antal argument
def summa(*tal):
    return sum(tal)

print(summa(1, 2, 3))
print(summa(10, 20, 30, 40))

# **kwargs — namngivna argument (som ML-config)
def skapa_modell(namn, **config):
    print(f"Modell: {namn}")
    for param, värde in config.items():
        print(f"  {param} = {värde}")

skapa_modell("NeuralNet",
    lager=3,
    learning_rate=0.001,
    epochs=100
)`,
        },
        {
          title: "Lambda, Map, Filter, Zip",
          code: `# Lambda
dubbla = lambda x: x * 2
print(dubbla(5))

# map — applicera på alla
tal = [1, 2, 3, 4, 5]
kvadrater = list(map(lambda x: x**2, tal))
print(kvadrater)

# filter
positiva = list(filter(lambda x: x > 0, [-3, -1, 0, 2, 5]))
print(positiva)

# zip — kombinera parvis
namn = ["Alice", "Bob", "Charlie"]
poäng = [92, 87, 95]
resultat = dict(zip(namn, poäng))
print(resultat)`,
        },
      ],
      exercises: [
        {
          explanation: `*args låter en funktion ta emot hur många argument som helst. Inne i funktionen är de en tuple.\n\nExempel:\ndef summera(*tal):\n    return sum(tal)\n\nsummera(1, 2, 3)   →  6\nsummera(10, 20)    →  30\n\nAnvändbara inbyggda funktioner: min(), max(), sum(), len().`,
          question: "Skriv en funktion analysera(*tal) som returnerar en dict med 'min', 'max' och 'medel'.",
          starter: `def analysera(*tal):
    # Din kod här:
    pass

print(analysera(10, 20, 30, 40, 50))`,
          solution: `def analysera(*tal):
    return {
        "min": min(tal),
        "max": max(tal),
        "medel": round(sum(tal) / len(tal), 2)
    }

print(analysera(10, 20, 30, 40, 50))`,
          hint: "Returnera en dict med tre nycklar, använd min(), max(), sum()/len().",
          expected: "{'min': 10, 'max': 50, 'medel': 30.0}",
        },
        {
          explanation: `map() applicerar en funktion på varje element i en lista.\nlambda är ett sätt att skriva en kort funktion på en rad.\n\nExempel:\ndubbla = lambda x: x * 2\nlist(map(dubbla, [1, 2, 3]))  →  [2, 4, 6]\n\nEller direkt:\nlist(map(lambda x: x * 2, [1, 2, 3]))  →  [2, 4, 6]\n\nObs: map() returnerar ett map-objekt — wrap:a det med list() för att se resultatet.`,
          question: "Använd map() och lambda för att konvertera Celsius till Fahrenheit (F = C*9/5 + 32).",
          starter: `celsius = [0, 20, 37, 100]
# Din kod här:
fahrenheit = 

print(fahrenheit)`,
          solution: `celsius = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))
print(fahrenheit)`,
          hint: "map(lambda c: ..., celsius) — glöm inte list() runt.",
          expected: "[32.0, 68.0, 98.6, 212.0]",
        },
        {
          explanation: `sorted() sorterar en lista. Med key= kan du ange vad den ska sortera efter.\n\nFör att sortera en lista av dicts anger du en lambda som hämtar värdet du vill sortera på:\n\nExempel:\npersoner = [{"namn": "Bo", "ålder": 30}, {"namn": "Anna", "ålder": 25}]\nsorted(personer, key=lambda p: p["ålder"])  →  Anna, Bo\n\nFunktionen tar nyckel som parameter med default-värdet "namn".`,
          question: "Sortera en lista av dicts efter en valfri nyckel (default 'namn').",
          starter: `def sortera(personer, nyckel="namn"):
    # Din kod här:
    pass

folk = [
    {"namn": "Charlie", "ålder": 30},
    {"namn": "Alice", "ålder": 25},
    {"namn": "Bob", "ålder": 35},
]
for p in sortera(folk, "ålder"):
    print(p)`,
          solution: `def sortera(personer, nyckel="namn"):
    return sorted(personer, key=lambda p: p[nyckel])

folk = [
    {"namn": "Charlie", "ålder": 30},
    {"namn": "Alice", "ålder": 25},
    {"namn": "Bob", "ålder": 35},
]
for p in sortera(folk, "ålder"):
    print(p)`,
          hint: "Använd sorted() med key=lambda.",
          expected: "{'namn': 'Alice', 'ålder': 25}\n{'namn': 'Charlie', 'ålder': 30}\n{'namn': 'Bob', 'ålder': 35}",
        },
        {
          explanation: `Rekursion innebär att en funktion anropar sig själv. Det kräver alltid:\n1. Ett basfall — när ska den sluta?\n2. Ett rekursivt steg — hur reduceras problemet?\n\nFakultet: 5! = 5 × 4 × 3 × 2 × 1 = 120\nDet kan skrivas som: 5 × fakultet(4)\n\nMönster:\ndef fakultet(n):\n    if n <= 1:        # basfall\n        return 1\n    return n * fakultet(n - 1)  # rekursivt steg`,
          question: "Skriv en rekursiv funktion fakultet(n).",
          starter: `def fakultet(n):
    # Din kod här:
    pass

print(fakultet(5))
print(fakultet(10))`,
          solution: `def fakultet(n):
    if n <= 1:
        return 1
    return n * fakultet(n - 1)

print(fakultet(5))
print(fakultet(10))`,
          hint: "Basfall: n <= 1 returnerar 1. Annars: n * fakultet(n-1).",
          expected: "120\n3628800",
        },
      ],
    },
    {
      id: "1-3",
      title: "Filhantering & Data I/O",
      icon: "📁",
      theory: `AI-projekt börjar alltid med data. Du måste kunna:
• Läsa/skriva textfiler, CSV, JSON
• Hantera encoding (UTF-8 för svenska tecken)
• Använda \`with\` för säker filhantering

JSON är extra viktigt — det är formatet för API-anrop, config-filer och sparade modeller.`,
      examples: [
        {
          title: "Textfiler (simulerat)",
          code: `# I webbläsaren simulerar vi med StringIO
from io import StringIO

# Skriva (i verkliga livet: open("fil.txt", "w"))
innehåll = """Rad 1: Python är kul
Rad 2: AI är framtiden
Rad 3: Tränar modell..."""

# Läsa rad för rad
fil = StringIO(innehåll)
for rad in fil:
    print(rad.strip())

# Räkna ord
fil = StringIO(innehåll)
text = fil.read()
print(f"\\nAntal ord: {len(text.split())}")`,
        },
        {
          title: "CSV-filer",
          code: `import csv
from io import StringIO

# Simulerad CSV
csv_data = """namn,ålder,poäng
Alice,25,92
Bob,30,87
Charlie,28,95"""

# Läs som dicts
reader = csv.DictReader(StringIO(csv_data))
for rad in reader:
    namn = rad["namn"]
    poäng = int(rad["poäng"])
    print(f"{namn}: {poäng} poäng")

# Beräkna medel-poäng
reader = csv.DictReader(StringIO(csv_data))
poäng_lista = [int(r["poäng"]) for r in reader]
print(f"\\nMedelpoäng: {sum(poäng_lista)/len(poäng_lista):.1f}")`,
        },
        {
          title: "JSON",
          code: `import json

# Python dict → JSON
modell_config = {
    "namn": "MinModell",
    "version": 1.0,
    "parametrar": {
        "learning_rate": 0.001,
        "epochs": 50,
        "batch_size": 32
    },
    "lager": [128, 64, 32]
}

# Serialisera till JSON-sträng
json_text = json.dumps(modell_config, indent=2, ensure_ascii=False)
print(json_text)

# Deserialisera
data = json.loads(json_text)
print(f"\\nLR: {data['parametrar']['learning_rate']}")
print(f"Första lagret: {data['lager'][0]} neuroner")`,
        },
      ],
      exercises: [
        {
          explanation: `csv.DictReader läser CSV-data och gör varje rad till en dictionary med kolumnnamnen som nycklar.\n\nExempel:\ndata = "namn,poäng\\nAlice,92\\nBob,78"\nreader = csv.DictReader(StringIO(data))\nfor rad in reader:\n    print(rad["namn"], rad["poäng"])  # "Alice" "92"\n\nObs: Alla värden är strängar! Konvertera med int() eller float() för att jämföra tal.`,
          question: "Parsa följande CSV-data och returnera en lista av elever som har >= 85 poäng.",
          starter: `import csv
from io import StringIO

data = """namn,poäng
Alice,92
Bob,78
Charlie,85
Diana,67
Erik,95"""

# Din kod här:
godkända = []


print(godkända)`,
          solution: `import csv
from io import StringIO

data = """namn,poäng
Alice,92
Bob,78
Charlie,85
Diana,67
Erik,95"""

reader = csv.DictReader(StringIO(data))
godkända = [r["namn"] for r in reader if int(r["poäng"]) >= 85]
print(godkända)`,
          hint: "Använd DictReader och list comprehension med villkor.",
          expected: "['Alice', 'Charlie', 'Erik']",
        },
        {
          explanation: `JSON är ett textformat för att lagra och skicka data. Python har inbyggt stöd via json-modulen.\n\njson.dumps(data)   →  omvandlar Python-objekt till JSON-sträng\njson.loads(text)   →  omvandlar JSON-sträng tillbaka till Python-objekt\n\nExempel:\nimport json\ndata = {"namn": "Anna", "ålder": 25}\ntext = json.dumps(data)       →  '{"namn": "Anna", "ålder": 25}'\njson.loads(text)["namn"]      →  "Anna"`,
          question: "Skapa en JSON-sträng från en lista av 3 böcker och läs sedan tillbaka titlarna.",
          starter: `import json

böcker = [
    {"titel": "Deep Learning", "år": 2016},
    {"titel": "Hands-On ML", "år": 2022},
    {"titel": "Python Crash Course", "år": 2019},
]

# 1. Konvertera till JSON-sträng
json_str = 

# 2. Parsa tillbaka och skriv ut titlarna
# Din kod här:
`,
          solution: `import json

böcker = [
    {"titel": "Deep Learning", "år": 2016},
    {"titel": "Hands-On ML", "år": 2022},
    {"titel": "Python Crash Course", "år": 2019},
]

json_str = json.dumps(böcker)
data = json.loads(json_str)
for bok in data:
    print(bok["titel"])`,
          hint: "json.dumps() för att serialisera, json.loads() för att parsa.",
          expected: "Deep Learning\nHands-On ML\nPython Crash Course",
        },
      ],
    },
    {
      id: "1-4",
      title: "Felhantering",
      icon: "🛡️",
      theory: `I AI-projekt händer fel HELA tiden:
• Filer saknas
• Data har fel format
• API-anrop misslyckas
• GPU tar slut på minne

try/except gör din kod robust. \`finally\` körs alltid (bra för att städa upp resurser).`,
      examples: [
        {
          title: "Try / Except / Finally",
          code: `def dividera(a, b):
    try:
        resultat = a / b
    except ZeroDivisionError:
        print("Fel: Kan inte dividera med noll!")
        return None
    except TypeError:
        print("Fel: Båda måste vara tal!")
        return None
    else:
        print(f"{a} / {b} = {resultat}")
        return resultat
    finally:
        print("--- Klar ---")

dividera(10, 3)
dividera(10, 0)
dividera("a", 2)`,
        },
        {
          title: "Fånga flera exceptions",
          code: `import json

def parse_config(json_str):
    try:
        config = json.loads(json_str)
        lr = config["learning_rate"]
        return lr
    except json.JSONDecodeError:
        print("Fel: Ogiltig JSON")
        return None
    except KeyError as e:
        print(f"Fel: Saknar nyckel {e}")
        return None
    except Exception as e:
        print(f"Okänt fel: {e}")
        return None

# Test
print(parse_config('{"learning_rate": 0.001}'))  # OK
print(parse_config('{"epochs": 10}'))              # KeyError
print(parse_config('inte json'))                   # JSONDecodeError`,
        },
        {
          title: "Custom Exceptions",
          code: `class DataError(Exception):
    """Fel relaterat till data."""
    pass

class ModelError(Exception):
    """Fel relaterat till modell."""
    pass

def träna(data, epochs):
    if not data:
        raise DataError("Ingen träningsdata!")
    if epochs < 1:
        raise ModelError("Epochs måste vara >= 1")
    print(f"Tränar på {len(data)} punkter i {epochs} epochs")

# Test
for data, e in [([], 10), ([1,2,3], 0), ([1,2,3], 5)]:
    try:
        träna(data, e)
    except DataError as err:
        print(f"Data: {err}")
    except ModelError as err:
        print(f"Modell: {err}")`,
        },
      ],
      exercises: [
        {
          explanation: `try/except fångar fel som annars skulle krascha programmet.\n\nMönster:\ntry:\n    # kod som kan misslyckas\nexcept FelTyp:\n    # vad som händer vid fel\n\nint("42")   →  42  (fungerar)\nint("hej")  →  ValueError (kraschar utan try/except)\n\nDu kan returnera None som ett "inget värde"-signal när konverteringen misslyckas.`,
          question: "Skriv safe_int(s) som försöker konvertera s till int, eller returnerar None vid fel.",
          starter: `def safe_int(s):
    # Din kod här:
    pass

print(safe_int("42"))
print(safe_int("hej"))
print(safe_int("3.14"))`,
          solution: `def safe_int(s):
    try:
        return int(s)
    except (ValueError, TypeError):
        return None

print(safe_int("42"))
print(safe_int("hej"))
print(safe_int("3.14"))`,
          hint: "Fånga ValueError när int() misslyckas.",
          expected: "42\nNone\nNone",
        },
        {
          explanation: `Du kan skapa egna feltyper (exceptions) genom att ärva från Exception.\n\nclass MittFel(Exception):\n    pass\n\nraise MittFel("Beskrivning")  →  kastar felet\n\nFör att kolla om ett värde är ett tal, använd isinstance():\nisinstance(42, (int, float))    →  True\nisinstance("hej", (int, float)) →  False`,
          question: "Skapa custom exception DataError och en funktion som validerar att en lista inte är tom och bara innehåller tal.",
          starter: `class DataError(Exception):
    pass

def validera(data):
    # Din kod här:
    pass

# Testa
for d in [[1, 2, 3], [], [1, "två", 3]]:
    try:
        validera(d)
        print(f"{d} OK")
    except DataError as e:
        print(f"Fel i {d}: {e}")`,
          solution: `class DataError(Exception):
    pass

def validera(data):
    if not data:
        raise DataError("Tom lista")
    for x in data:
        if not isinstance(x, (int, float)):
            raise DataError(f"Inte ett tal: {x}")

for d in [[1, 2, 3], [], [1, "två", 3]]:
    try:
        validera(d)
        print(f"{d} OK")
    except DataError as e:
        print(f"Fel i {d}: {e}")`,
          hint: "Använd raise DataError(...) och isinstance() för typkoll.",
          expected: "[1, 2, 3] OK\nFel i []: Tom lista\nFel i [1, 'två', 3]: Inte ett tal: två",
        },
      ],
    },
    {
      id: "1-5",
      title: "OOP — Klasser & Arv",
      icon: "🏗️",
      theory: `Objektorienterad programmering är kritiskt i AI:
• **PyTorch**-modeller är klasser som ärver från \`nn.Module\`
• **scikit-learn**-estimatorer följer ett klassmönster
• **Datasets** och **DataLoaders** är klasser

Nyckelkoncept: \`__init__\`, \`self\`, metoder, arv via \`super()\`.`,
      examples: [
        {
          title: "Klasser & self",
          code: `class Dataset:
    """Enkel dataset-klass."""
    
    def __init__(self, namn, data):
        self.namn = namn
        self.data = data
    
    def storlek(self):
        return len(self.data)
    
    def medel(self):
        return sum(self.data) / len(self.data)
    
    def __str__(self):
        return f"Dataset('{self.namn}', {self.storlek()} punkter)"

ds = Dataset("temperaturer", [18.5, 22.1, 19.8, 25.3, 21.0])
print(ds)
print(f"Medel: {ds.medel():.2f}")`,
        },
        {
          title: "Arv — som PyTorch",
          code: `class Modell:
    """Basklass för alla modeller."""
    
    def __init__(self, namn):
        self.namn = namn
        self.tränad = False
    
    def träna(self, data):
        print(f"Tränar {self.namn}...")
        self.tränad = True
    
    def förutsäg(self, x):
        if not self.tränad:
            raise Exception("Träna modellen först!")

class LinjärRegression(Modell):
    def __init__(self):
        super().__init__("Linjär Regression")
        self.k = 0
        self.m = 0
    
    def träna(self, data):
        super().träna(data)
        self.k, self.m = 2.5, 1.0
        print(f"  k={self.k}, m={self.m}")
    
    def förutsäg(self, x):
        super().förutsäg(x)
        return self.k * x + self.m

modell = LinjärRegression()
modell.träna([1, 2, 3])
print(f"Prediktion för x=4: {modell.förutsäg(4)}")`,
        },
        {
          title: "Properties & Dunder-metoder",
          code: `class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    @property
    def längd(self):
        return (self.x**2 + self.y**2) ** 0.5
    
    def __add__(self, annan):
        return Vektor(self.x + annan.x, self.y + annan.y)
    
    def __repr__(self):
        return f"Vektor({self.x}, {self.y})"

v1 = Vektor(3, 4)
v2 = Vektor(1, 2)
print(v1)
print(f"Längd: {v1.längd}")
print(f"v1 + v2 = {v1 + v2}")`,
        },
      ],
      exercises: [
        {
          explanation: `En klass är en mall för objekt. __init__ körs automatiskt när du skapar ett objekt och sätter upp dess data.\n\nself refererar alltid till objektet självt.\n\nMönster:\nclass Bil:\n    def __init__(self, märke, hastighet):\n        self.märke = märke        # spara data på objektet\n        self.hastighet = hastighet\n    \n    def info(self):\n        return f"{self.märke}: {self.hastighet} km/h"\n\nbil = Bil("Volvo", 130)\nprint(bil.info())  →  "Volvo: 130 km/h"`,
          question: "Skapa klass Elev med namn, betyg (lista), och metoder medel() och högsta().",
          starter: `class Elev:
    # Din kod här:
    pass

elev = Elev("Anna", [85, 92, 78, 95, 88])
print(f"Namn: {elev.namn}")
print(f"Medel: {elev.medel()}")
print(f"Högsta: {elev.högsta()}")`,
          solution: `class Elev:
    def __init__(self, namn, betyg):
        self.namn = namn
        self.betyg = betyg
    
    def medel(self):
        return round(sum(self.betyg) / len(self.betyg), 1)
    
    def högsta(self):
        return max(self.betyg)

elev = Elev("Anna", [85, 92, 78, 95, 88])
print(f"Namn: {elev.namn}")
print(f"Medel: {elev.medel()}")
print(f"Högsta: {elev.högsta()}")`,
          hint: "__init__ tar self, namn, betyg. Sätt self.namn = namn osv.",
          expected: "Namn: Anna\nMedel: 87.6\nHögsta: 95",
        },
        {
          explanation: `Arv låter en klass ärva alla metoder och attribut från en annan klass.\n\nclass Barn(Förälder):\n    def __init__(self, ...):\n        super().__init__(...)  # kör förälderns __init__ först\n        # lägg sedan till barnets egna attribut\n\nsuper() refererar till föräldraklassen. Utan det missar du förälderns setup.`,
          question: "Skapa subklass AIElev som ärver Elev och lägger till specialisering.",
          starter: `class Elev:
    def __init__(self, namn, betyg):
        self.namn = namn
        self.betyg = betyg
    def medel(self):
        return round(sum(self.betyg) / len(self.betyg), 1)

class AIElev(Elev):
    # Din kod här:
    pass

e = AIElev("Erik", [90, 95, 88], "Deep Learning")
print(f"{e.namn} ({e.specialisering}): medel {e.medel()}")`,
          solution: `class Elev:
    def __init__(self, namn, betyg):
        self.namn = namn
        self.betyg = betyg
    def medel(self):
        return round(sum(self.betyg) / len(self.betyg), 1)

class AIElev(Elev):
    def __init__(self, namn, betyg, specialisering):
        super().__init__(namn, betyg)
        self.specialisering = specialisering

e = AIElev("Erik", [90, 95, 88], "Deep Learning")
print(f"{e.namn} ({e.specialisering}): medel {e.medel()}")`,
          hint: "Använd super().__init__(namn, betyg) i AIElev.__init__.",
          expected: "Erik (Deep Learning): medel 91.0",
        },
        {
          explanation: `En metod i en klass kan läsa och ändra objektets data via self.\n\nKomma ihåg:\n- self.saldo är kontobalansen lagrad på objektet\n- += lägger till, -= drar ifrån\n- Använd en if-sats för att kontrollera att uttaget är giltigt innan du drar av\n\nOm beloppet är för stort: skriv ut ett meddelande och gör ingenting (return False).`,
          question: "Skapa klass Konto med saldo, metoder sätt_in() och ta_ut() (får inte gå under 0).",
          starter: `class Konto:
    # Din kod här:
    pass

k = Konto(100)
k.sätt_in(50)
print(f"Saldo: {k.saldo}")
k.ta_ut(200)  # Ska misslyckas
print(f"Saldo: {k.saldo}")
k.ta_ut(100)
print(f"Saldo: {k.saldo}")`,
          solution: `class Konto:
    def __init__(self, saldo=0):
        self.saldo = saldo
    
    def sätt_in(self, belopp):
        self.saldo += belopp
    
    def ta_ut(self, belopp):
        if belopp > self.saldo:
            print(f"Otillräckligt saldo! ({self.saldo})")
            return False
        self.saldo -= belopp
        return True

k = Konto(100)
k.sätt_in(50)
print(f"Saldo: {k.saldo}")
k.ta_ut(200)
print(f"Saldo: {k.saldo}")
k.ta_ut(100)
print(f"Saldo: {k.saldo}")`,
          hint: "Kolla om belopp > self.saldo innan du drar av.",
          expected: "Saldo: 150\nOtillräckligt saldo! (150)\nSaldo: 150\nSaldo: 50",
        },
      ],
    },
  ],
  milestone: {
    title: "Statistikprogram",
    description: "Bygg ett CLI-program som tar en CSV-sträng, beräknar statistik per kolumn, hanterar fel elegant, och returnerar resultatet som JSON.",
    code: `import csv
import json
from io import StringIO

def analysera_csv(csv_text):
    """Analysera numerisk CSV-data och returnera statistik som JSON."""
    try:
        reader = csv.DictReader(StringIO(csv_text))
        rader = list(reader)
        if not rader:
            raise ValueError("Tom CSV")
        
        resultat = {}
        for kolumn in rader[0].keys():
            värden = []
            for rad in rader:
                try:
                    värden.append(float(rad[kolumn]))
                except (ValueError, TypeError):
                    continue
            
            if värden:
                resultat[kolumn] = {
                    "antal": len(värden),
                    "min": min(värden),
                    "max": max(värden),
                    "medel": round(sum(värden) / len(värden), 2),
                }
        
        return json.dumps(resultat, indent=2, ensure_ascii=False)
    except Exception as e:
        return json.dumps({"fel": str(e)})

# Test
data = """temperatur,luftfuktighet,tryck
22.5,45,1013
24.1,50,1010
21.8,48,1015
23.5,52,1012
25.0,47,1008"""

print(analysera_csv(data))`,
  },
};
