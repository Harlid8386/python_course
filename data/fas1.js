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
      theory: `Python har fyra grundläggande sätt att lagra samlingar av data. Det här är verktygen du bygger allt annat med — från en enkel att-göra-lista till ett helt system.

**Listor** \`[1, 2, 3]\` — en ordnad samling där du kan lägga till, ta bort och ändra saker. Tänk dig en inköpslista, en topplista i ett spel, eller en lista över elever i en klass. Varje sak har sin plats (första är plats 0, andra är plats 1, och så vidare) och du kan hämta dem i samma ordning som de ligger. Listor är den datastruktur du kommer använda oftast i Python.

**Dictionaries** \`{"namn": "Anna"}\` — ett sätt att koppla ihop ett *namn* (kallas *nyckel*) med ett *värde*. Tänk på en kontaktbok: namnet är nyckeln, telefonnumret är värdet. Eller en prislista i en affär: produktnamnet som nyckel, priset som värde. Till skillnad från listor — där du letar efter plats 3 — letar du här efter nyckeln \`"äpple"\` och får tillbaka priset direkt.

**Tuples** \`(10, 20)\` — en lista som är *låst*. När du har skapat den kan du inte ändra innehållet. Bra för saker som hör ihop och inte ska ändras: koordinater \`(x, y)\` på en karta, en RGB-färg \`(255, 0, 0)\` som betyder rött, eller ett datum \`(2026, 4, 18)\`. Du använder också tuples när en funktion ska returnera flera saker samtidigt.

**Sets** \`{1, 2, 3}\` — en samling med *bara unika* värden. Lägger du till "äpple" två gånger så finns det ändå bara en gång. Perfekt för att hitta unika besökare på en webbsida, ta bort dubbletter ur en mejllista, eller snabbt kolla "har jag sett det här värdet förut?".

## List comprehensions — ett smartare sätt att bygga listor

En list comprehension är ett Python-knep för att skapa en ny lista från en befintlig — på en enda rad istället för tre-fyra. Istället för att skriva:

\`\`\`
billiga = []
for bok in böcker:
    if bok["pris"] < 200:
        billiga.append(bok)
\`\`\`

...skriver du:

\`\`\`
billiga = [bok for bok in böcker if bok["pris"] < 200]
\`\`\`

Läs det som: *"För varje \`bok\` i \`böcker\`, om bokens pris är mindre än 200, ta med den."*

Konkreta vardagliga scenarion där du använder detta:

• **Filtrera:** Hämta alla böcker som kostar mindre än 200 kr från en katalog
• **Ändra varje element:** Räkna om alla temperaturer från Celsius till Fahrenheit
• **Rensa data:** Behåll bara de e-postadresser som innehåller ett @-tecken
• **Förkorta:** Plocka ut bara namnen ur en lista med kontaktuppgifter

Varför spelar det här roll senare i kursen? När du senare ska arbeta med AI kommer du ha *enorma* mängder data — kanske tusentals bilder eller miljontals textmeddelanden — som måste filtreras, räknas om och rensas innan programmet kan använda dem. List comprehensions är både snabbare och mer lättläst än vanliga for-loopar, och du kommer se dem i nästan all Python-kod du stöter på.`,
      examples: [
        {
          title: "Listor & List Comprehensions",
          explanation: `Här ser du fyra saker samtidigt — skapa en lista, lägga till ett element, hämta enskilda element med index, och till sist använda list comprehension för att filtrera och ändra alla element.

Tänk på listan som en inköpskorg: du lägger saker i den, du kan titta på plats 0 (första), plats -1 (sista — räknat bakifrån) eller plocka ut ett spann med plats 1–2 (slicing). List comprehension-raderna nedanför visar hur du kan bygga en *ny* lista från den första utan en for-loop.`,
          code: `# Skapa en lista
inköp = ["äpple", "banan", "citron"]
inköp.append("druva")      # lägg till i slutet
print(inköp[0])            # första elementet: "äpple"
print(inköp[-1])           # sista elementet: "druva"
print(inköp[1:3])          # plats 1 till 2: ["banan", "citron"]

# List comprehension — plocka ut bara de jämna talen
tal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
jämna = [t for t in tal if t % 2 == 0]
print(jämna)               # [2, 4, 6, 8, 10]

# List comprehension — räkna om varje tal (här: kvadrera)
kvadrater = [t ** 2 for t in tal]
print(kvadrater)           # [1, 4, 9, 16, ...]`,
        },
        {
          title: "Dictionaries",
          explanation: `En dictionary är som en liten anteckningsbok där varje rad har ett namn (nyckel) och ett värde. Här är exemplet en person med namn, ålder och vilka programmeringsspråk hon kan.

Du ser fyra vanliga saker man gör: hämta ett värde med sin nyckel, hämta med ett standardvärde om nyckeln saknas (så programmet inte kraschar), loopa genom alla nyckel/värde-par, och till sist en *dict comprehension* — samma idé som list comprehension men den bygger en dict istället för en lista.`,
          code: `# En dictionary — nyckel: värde
person = {
    "namn": "Anna",
    "ålder": 28,
    "språk": ["Python", "JavaScript"]
}

# Hämta ett värde med dess nyckel
print(person["namn"])              # Anna

# Hämta med standardvärde om nyckeln saknas
print(person.get("jobb", "Okänt")) # Okänt

# Loopa genom alla nyckel/värde-par
for nyckel, värde in person.items():
    print(f"{nyckel}: {värde}")

# Dict comprehension — bygg en dict från en lista
ord_lista = ["hej", "hund", "programmering"]
längder = {o: len(o) for o in ord_lista}
print(längder)  # {"hej": 3, "hund": 4, "programmering": 13}`,
        },
        {
          title: "Tuples & Sets",
          explanation: `Två datastrukturer till: *tuples* för saker som hör ihop och ska vara låsta, och *sets* för att jobba med unika värden.

Första delen visar en koordinat \`(x, y)\` — perfekt för en tuple eftersom koordinater inte ska gå sönder av misstag. *Unpacking* betyder att du lägger ihop ett tuple-värde i flera variabler på en rad.

Andra delen visar två färg-sets från två personers favoritfärger, och hur du hittar gemensamma (&), alla tillsammans (|) och bara de som är unika för den ena (-).`,
          code: `# Tuple — en koordinat som inte ska ändras
punkt = (10, 20)
x, y = punkt              # unpacking — delar upp i två variabler
print(f"x={x}, y={y}")    # x=10, y=20

# Set — två personers favoritfärger
färger_anna = {"röd", "blå", "grön"}
färger_björn = {"blå", "gul", "röd"}

# Gemensamma färger
print(färger_anna & färger_björn)  # {"röd", "blå"}

# Alla färger (utan dubbletter)
print(färger_anna | färger_björn)  # {"röd", "blå", "grön", "gul"}

# Färger bara Anna gillar
print(färger_anna - färger_björn)  # {"grön"}`,
        },
      ],
      exercises: [
        {
          explanation: `Tänk dig att du har en sökruta på en hemsida och vill ignorera alla för korta sökord (t.ex. "a" eller "i") innan du matar in dem i sökmotorn. En list comprehension är perfekt för just det — bygg en ny lista där bara orden som uppfyller ditt villkor är med.

Syntax:  [uttryck for element in lista if villkor]

Litet exempel:
sökord = ["a", "hus", "om"]
långa = [s for s in sökord if len(s) > 2]   →   ["hus"]

len(s) ger antalet tecken i strängen s — perfekt att använda i villkoret.

I övningen nedan är det samma idé — men med en längre ordlista där du ska plocka ut orden med fler än 3 bokstäver.`,
          question: "Skapa en list comprehension som returnerar bara ord med fler än 3 bokstäver från listan.",
          starter: `ordlista = ["det", "sol", "hund", "ja", "stol", "nej", "kanske", "kaffe"]
# Din kod här:
långa =

print(långa)`,
          solution: `ordlista = ["det", "sol", "hund", "ja", "stol", "nej", "kanske", "kaffe"]
långa = [o for o in ordlista if len(o) > 3]
print(långa)`,
          hint: "Skriv [o for o in ordlista if len(o) > 3].",
          expected: "['hund', 'stol', 'kanske', 'kaffe']",
        },
        {
          explanation: `Dict comprehension fungerar precis som list comprehension — men istället för en lista bygger den en dictionary (nyckel/värde-par).

Tänk dig ett "sifferlexikon" där varje tal är parat med sitt kvadrat-värde: 1 hör ihop med 1, 2 hör ihop med 4, 3 hör ihop med 9, osv. En dict comprehension är det snabbaste sättet att bygga upp ett sånt lexikon i Python.

Syntax:  {nyckel: värde for element i lista}

Litet exempel:
kvadrater = {n: n**2 for n in range(1, 4)}   →   {1: 1, 2: 4, 3: 9}

Bra att veta:
• range(1, 6) ger talen 1, 2, 3, 4, 5 (sista värdet exkluderas!)
• n**2 betyder "n upphöjt till 2" (kvadraten av n)

I övningen nedan ska du göra precis samma sak — men för talen 1 till 5.`,
          question: "Skapa en dictionary som kopplar varje tal 1-5 till sin kvadrat (1→1, 2→4, 3→9, 4→16, 5→25).",
          starter: `# Din kod här:
kvadrater =

print(kvadrater)`,
          solution: `kvadrater = {n: n**2 for n in range(1, 6)}
print(kvadrater)`,
          hint: "{n: n**2 for n in range(1, 6)}",
          expected: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
        },
        {
          explanation: `Föreställ dig att två vänner har varsin spellista med låtar de gillar, och du vill hitta låtarna som finns i BÅDA listorna. Det är precis vad ett *set*-snitt är till för.

När du konverterar en lista till ett set händer två saker: dubbletter tas bort, och du får tillgång till tre operatorer:

  &   gemensamma element (snittet)
  |   alla element samlade (unionen)
  -   element bara i den ena

Litet exempel:
annas_låtar = ["Imagine", "Yesterday", "Thriller"]
björns_låtar = ["Yesterday", "Umbrella", "Thriller"]
båda = set(annas_låtar) & set(björns_låtar)   →   {"Yesterday", "Thriller"}

I övningen nedan används tal istället för låtar — tänk dig att det är id-nummer på spellåtarna.`,
          question: "Hitta talen som finns i BÅDA listorna (utan dubbletter).",
          starter: `lista_a = [1, 2, 3, 4, 5, 3, 2]
lista_b = [4, 5, 6, 7, 8, 5]
# Din kod här:
gemensamma =

print(sorted(gemensamma))`,
          solution: `lista_a = [1, 2, 3, 4, 5, 3, 2]
lista_b = [4, 5, 6, 7, 8, 5]
gemensamma = set(lista_a) & set(lista_b)
print(sorted(gemensamma))`,
          hint: "set(lista_a) & set(lista_b) ger snittet.",
          expected: "[4, 5]",
        },
        {
          explanation: `Tänk dig att du har en text och vill räkna hur många gånger varje bokstav förekommer — t.ex. för en statistikfunktion eller ett enkelt krypto-spel. Det enklaste sättet i Python är en dictionary där nyckeln är bokstaven och värdet är antalet.

Tricket ligger i .get(nyckel, standardvärde) — om nyckeln inte finns ännu returneras standardvärdet istället för ett fel. Så här kan du göra utan att skriva en if-sats:

räknare = {}
for bokstav in "hej":
    räknare[bokstav] = räknare.get(bokstav, 0) + 1

→  {'h': 1, 'e': 1, 'j': 1}

Första gången bokstaven syns finns den inte i räknare, så .get returnerar 0 — som vi ökar till 1. Nästa gång finns den redan och ökar från sitt nuvarande värde.

I övningen nedan är det samma mönster — men på ett längre ord.`,
          question: "Räkna hur många gånger varje bokstav förekommer i ordet 'programmering'.",
          starter: `text = "programmering"
# Din kod här:
räknare = {}


print(räknare)`,
          solution: `text = "programmering"
räknare = {}
for b in text:
    räknare[b] = räknare.get(b, 0) + 1
print(räknare)`,
          hint: "Loopa igenom text och använd räknare[b] = räknare.get(b, 0) + 1.",
          expected: "{'p': 1, 'r': 3, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'e': 1, 'i': 1, 'n': 1}",
        },
      ],
    },
    {
      id: "1-2",
      title: "Funktioner & Lambda",
      icon: "⚡",
      theory: `Funktioner är som *recept* i koden — du bygger dem en gång och använder dem igen och igen. Istället för att skriva samma logik på tio ställen packar du den i en funktion och anropar den när du behöver.

Vardagliga exempel: en funktion som räknar ut totalsumman på ett kvitto (anropas för varje nytt köp), en funktion som formaterar ett telefonnummer enligt samma mall, eller en funktion som kollar om en e-postadress är giltig. Så snart du märker att du skriver samma rader fler än en gång — lägg dem i en funktion.

**def namn(parametrar):** så skapar du en funktion. **return** skickar tillbaka ett resultat. Parametrar är värdena du skickar in; variabler som skapas *inne* i funktionen är bara synliga där.

**Lambda** är en kortform för väldigt små funktioner på en rad. Istället för \`def dubbla(x): return x * 2\` kan du skriva \`dubbla = lambda x: x * 2\`. Praktiskt när du behöver en snabb hjälpfunktion att skicka med till \`sorted\`, \`map\` eller \`filter\`.

**\\*args och \\*\\*kwargs** låter en funktion ta emot *hur många argument som helst*. Tänk: en funktion som ska kunna ta ett eller fem värden, eller en profilfunktion som samlar in valfria inställningar från användaren. \`*args\` paketerar vanliga argument till en tuple, \`**kwargs\` paketerar namngivna argument till en dictionary.

**map, filter och zip** är tre inbyggda genvägar du kommer använda ofta:
• \`map(funk, lista)\` — kör en funktion på varje element (som list comprehension, fast med en färdig funktion)
• \`filter(villkor, lista)\` — behåll bara element där villkoret är sant
• \`zip(a, b)\` — pussla ihop två listor parvis, t.ex. namn + poäng → namn:poäng-par

Varför är det här viktigt senare i kursen? När du börjar jobba med större datamängder kommer du skriva massor av små hjälpfunktioner — för att rensa en kolumn, räkna medelvärden per grupp eller formatera data innan den visas. Funktioner och lambda är de byggstenar som gör din kod läsbar även när projektet växer.`,
      examples: [
        {
          title: "Grundläggande funktioner",
          explanation: `En funktion tar in värden, gör något med dem och skickar tillbaka ett resultat. Här räknar vi ut medelbetyget för en elev utifrån hennes provresultat.

\`avrunda=2\` är ett *defaultvärde* — om du inte skickar med det används 2 automatiskt. Det är praktiskt när funktionen ofta används på samma sätt men ibland behöver justeras.

Andra halvan visar ett trick: en funktion kan returnera *flera värden* på en gång genom att skicka tillbaka dem kommaseparerat. Sedan packar du upp dem i tre variabler på en rad: \`lo, hi, medel = statistik(data)\`.`,
          code: `def beräkna_medel(tal, avrunda=2):
    """Räknar ut medelvärde med valfri avrundning."""
    resultat = sum(tal) / len(tal)
    return round(resultat, avrunda)

betyg = [85.5, 92.3, 78.1, 95.7]
print(beräkna_medel(betyg))        # 87.9
print(beräkna_medel(betyg, 0))     # 88 (ingen decimal)

# En funktion kan returnera flera värden på en gång
def statistik(tal):
    return min(tal), max(tal), sum(tal) / len(tal)

lo, hi, medel = statistik(betyg)
print(f"Min: {lo}, Max: {hi}, Medel: {medel:.1f}")`,
        },
        {
          title: "*args och **kwargs",
          explanation: `Ibland vet du inte på förhand hur många argument någon vill skicka till din funktion. Då är *args och **kwargs dina bästa vänner.

Första funktionen \`summa\` tar emot hur många tal som helst — \`*tal\` paketerar ihop alla till en *tuple* inne i funktionen. Du kan anropa den med 2, 3, eller 100 tal.

Andra funktionen \`skapa_profil\` tar emot namngivna inställningar via \`**inställningar\` som blir en dictionary. Användare kan skicka med så många (eller få) inställningar de vill, utan att du behöver ändra funktionens definition.`,
          code: `# *args — valfritt antal vanliga argument
def summa(*tal):
    return sum(tal)

print(summa(1, 2, 3))             # 6
print(summa(10, 20, 30, 40))      # 100

# **kwargs — valfritt antal namngivna argument
def skapa_profil(namn, **inställningar):
    print(f"Profil: {namn}")
    for inställning, värde in inställningar.items():
        print(f"  {inställning} = {värde}")

skapa_profil("Anna",
    stad="Stockholm",
    jobb="Utvecklare",
    favoritfärg="blå"
)`,
        },
        {
          title: "Lambda, map, filter, zip",
          explanation: `Tre inbyggda genvägar i Python för att jobba med listor — och lambda, en kortform för små funktioner på en rad.

• \`map(funk, lista)\` — kör \`funk\` på varje element. Här kvadreras alla tal.
• \`filter(villkor, lista)\` — behåll bara element där villkoret är sant. Här filtreras de positiva talen.
• \`zip(a, b)\` — pussla ihop två listor parvis. Här matchas varje namn med sin poäng → \`{"Alice": 92, ...}\`.

Lambda (\`lambda x: x * 2\`) är precis som \`def\` men på en enda rad utan namn. Perfekt som "snabb hjälpfunktion" till map/filter/sorted, där du inte behöver en fullständig \`def\`.`,
          code: `# Lambda — en liten funktion på en rad
dubbla = lambda x: x * 2
print(dubbla(5))                  # 10

# map — kör en funktion på varje element
tal = [1, 2, 3, 4, 5]
kvadrater = list(map(lambda x: x**2, tal))
print(kvadrater)                  # [1, 4, 9, 16, 25]

# filter — behåll bara element där villkoret är sant
positiva = list(filter(lambda x: x > 0, [-3, -1, 0, 2, 5]))
print(positiva)                   # [2, 5]

# zip — pussla ihop två listor parvis
namn = ["Alice", "Bob", "Charlie"]
poäng = [92, 87, 95]
resultat = dict(zip(namn, poäng))
print(resultat)                   # {"Alice": 92, "Bob": 87, "Charlie": 95}`,
        },
      ],
      exercises: [
        {
          explanation: `Tänk dig att du har haft en termometer ute under en veckas tid och vill snabbt få fram en sammanfattning: lägsta, högsta och medeltemperaturen. Men du vet inte på förhand hur många mätningar det blir — ibland 5, ibland 50.

Det är precis vad \`*args\` är perfekt för. Funktionen kan ta emot hur många tal som helst, och du behandlar dem som en vanlig tuple inne i funktionen.

Litet exempel:
def summera(*tal):
    return sum(tal)

summera(1, 2, 3)        →  6
summera(10, 20, 30, 40) →  100

Användbara inbyggda funktioner: min(), max(), sum(), len().

I övningen nedan bygger du en liknande funktion som returnerar flera värden — som en dictionary.`,
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
          hint: "Returnera en dict med tre nycklar: min(tal), max(tal), sum(tal)/len(tal).",
          expected: "{'min': 10, 'max': 50, 'medel': 30.0}",
        },
        {
          explanation: `Tänk dig att du bygger en väderapp som visar temperaturer i både Celsius och Fahrenheit — du har en lista på temperaturer och vill räkna om alla på en gång.

map() kör en funktion på varje element i en lista. lambda är en kortform för små funktioner på en rad — perfekt att skicka med till map.

Litet exempel:
celsius = [0, 100]
fahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))   →   [32.0, 212.0]

Obs: map() returnerar ett map-objekt (inte en lista), därför wrappar du det med list() för att få tillbaka en vanlig lista.

I övningen nedan gör du samma sak — men på fyra temperaturer.`,
          question: "Använd map() och lambda för att konvertera Celsius till Fahrenheit (F = C*9/5 + 32).",
          starter: `celsius = [0, 20, 37, 100]
# Din kod här:
fahrenheit =

print(fahrenheit)`,
          solution: `celsius = [0, 20, 37, 100]
fahrenheit = list(map(lambda c: c * 9/5 + 32, celsius))
print(fahrenheit)`,
          hint: "list(map(lambda c: c * 9/5 + 32, celsius))",
          expected: "[32.0, 68.0, 98.6, 212.0]",
        },
        {
          explanation: `Tänk dig att du har en admin-panel med en användarlista, och användaren vill kunna klicka på antingen "Namn" eller "Ålder" för att sortera listan efter olika kolumner. Då behöver du en sorteringsfunktion som tar emot *vilken* nyckel den ska sortera på.

sorted() sorterar en lista. Med \`key=...\` talar du om *vad* den ska sortera efter. För en lista med dicts skickar du in en lambda som plockar ut rätt värde.

Litet exempel:
personer = [{"namn": "Bo", "ålder": 30}, {"namn": "Anna", "ålder": 25}]
sorted(personer, key=lambda p: p["ålder"])   →   [Anna, Bo]  (yngst först)

I övningen nedan bygger du en funktion \`sortera\` där parametern \`nyckel\` har defaultvärdet "namn" — så den sorterar på namn om inget annat anges.`,
          question: "Skriv en funktion sortera(personer, nyckel='namn') som sorterar en lista av dicts efter vald nyckel.",
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
          hint: "return sorted(personer, key=lambda p: p[nyckel])",
          expected: "{'namn': 'Alice', 'ålder': 25}\n{'namn': 'Charlie', 'ålder': 30}\n{'namn': 'Bob', 'ålder': 35}",
        },
        {
          explanation: `*Fakultet* är ett matematiskt begrepp: 5! = 5 × 4 × 3 × 2 × 1 = 120. Det dyker upp i sannolikhetslära, kombinatorik och mycket annat — t.ex. "hur många olika sätt kan jag placera 5 böcker i en hylla?".

Det smarta är att fakulteten av 5 kan uttryckas som 5 × fakulteten av 4. Och fakulteten av 4 är 4 × fakulteten av 3. Och så vidare ner till 1. En funktion som anropar sig själv så här kallas *rekursiv*.

En rekursiv funktion behöver alltid två saker:
1. Ett **basfall** — när ska den sluta? (här: n är 1 eller mindre)
2. Ett **rekursivt steg** — hur reduceras problemet? (här: n × fakultet(n-1))

Mönstret:
def fakultet(n):
    if n <= 1:                        # basfall
        return 1
    return n * fakultet(n - 1)        # rekursivt steg

I övningen nedan bygger du den här funktionen.`,
          question: "Skriv en rekursiv funktion fakultet(n) som räknar ut n × (n-1) × (n-2) × ... × 1.",
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
          hint: "Basfall: om n <= 1 returnera 1. Annars: n * fakultet(n-1).",
          expected: "120\n3628800",
        },
      ],
    },
    {
      id: "1-3",
      title: "Filhantering & Data I/O",
      icon: "📁",
      theory: `Data finns överallt omkring oss — kontakter på telefonen, inställningar i en app, recept i en kokbok, en lista över löpartider. När du bygger program behöver du kunna *läsa in* data från filer och *spara* ner data till filer, så att informationen inte försvinner när programmet stängs.

Tre vanliga filformat du kommer se överallt:

**Textfiler (.txt)** — bara ren text, det enklaste formatet. Perfekt för en loggfil, en att-göra-lista eller en dagboksanteckning.

**CSV (.csv)** — "Comma-Separated Values" — ett enkelt sätt att lagra tabelldata. Första raden är kolumnrubriker, resten är data. Excel sparar i CSV, väderstationer exporterar CSV, och de flesta program som har en "exportera till fil"-knapp ger dig en CSV.

**JSON (.json)** — "JavaScript Object Notation" — ett format för att skicka *strukturerad* data (dicts och listor) mellan program. Varje gång en app på mobilen hämtar vädret, en spellista eller växelkurser från internet kommer svaret nästan alltid som JSON.

Bra att veta:

• **Encoding:** svenska tecken (å, ä, ö) kräver UTF-8. Python hanterar det för det mesta automatiskt, men det är bra att känna till.
• **\`with open(...) as fil:\`** är det säkra sättet att öppna en fil — då stängs filen automatiskt när du är klar, även om något går fel i mellan.

*Obs:* Eftersom kursen körs i webbläsaren kan vi inte skapa riktiga filer på din dator. Istället använder vi \`StringIO\` som "låtsas vara en fil i minnet". All kod funkar precis som med riktiga filer — när du väl kör Python lokalt byter du bara \`StringIO(text)\` mot \`open("fil.txt")\`.

Varför är det viktigt senare i kursen? All data du senare ska använda — kundrecensioner, bilder, mätvärden, tabeller — kommer in via filer i just något av dessa format. Att kunna öppna, läsa och skriva dem är steg ett innan du kan analysera eller bygga något smart av datan.`,
      examples: [
        {
          title: "Textfiler (simulerat)",
          explanation: `Här läser vi en enkel textfil rad för rad — tänk dig en dagboksanteckning eller en att-göra-lista som ligger sparad på disk.

\`StringIO\` låtsas vara en fil i minnet (eftersom vi kör i webbläsaren). När du senare kör Python lokalt byter du bara ut det mot \`open("fil.txt")\` — resten funkar likadant.

\`rad.strip()\` tar bort radslut (\\n) från slutet av raden. \`text.split()\` delar upp en sträng i en lista med ord (splittar på mellanslag som standard), så \`len(text.split())\` ger antalet ord.`,
          code: `# I webbläsaren simulerar vi en fil med StringIO
from io import StringIO

innehåll = """Måndag: köp mjölk och bröd
Tisdag: ring morfar
Onsdag: träna löpning 5 km"""

# Läs filen rad för rad
fil = StringIO(innehåll)
for rad in fil:
    print(rad.strip())

# Läs hela innehållet på en gång och räkna antal ord
fil = StringIO(innehåll)
text = fil.read()
print(f"\\nAntal ord: {len(text.split())}")`,
        },
        {
          title: "CSV-filer",
          explanation: `CSV är det klassiska tabellformatet — första raden är rubriker, resten är data. Tänk dig en klasslista exporterad från lärarplattformen, eller en exporterad Excel-tabell.

\`csv.DictReader\` gör magin: den läser raden med kolumnrubriker och gör sedan varje efterföljande rad till en dictionary med rubrikerna som nycklar. Istället för \`rad[2]\` kan du skriva \`rad["poäng"]\` — mycket tydligare.

Viktigt: CSV-värden är alltid *strängar*. Du måste själv konvertera till \`int\` eller \`float\` innan du räknar med dem. Därav \`int(rad["poäng"])\` nedanför.`,
          code: `import csv
from io import StringIO

# Simulerad CSV-fil — en klasslista
csv_data = """namn,ålder,poäng
Alice,25,92
Bob,30,87
Charlie,28,95"""

# Läs varje rad som en dict
reader = csv.DictReader(StringIO(csv_data))
for rad in reader:
    namn = rad["namn"]
    poäng = int(rad["poäng"])         # OBS: CSV-värden är strängar
    print(f"{namn}: {poäng} poäng")

# Räkna ut medelpoängen för hela klassen
reader = csv.DictReader(StringIO(csv_data))
poäng_lista = [int(r["poäng"]) for r in reader]
print(f"\\nMedelpoäng: {sum(poäng_lista)/len(poäng_lista):.1f}")`,
        },
        {
          title: "JSON",
          explanation: `JSON är det vanligaste formatet för att skicka data mellan program. Tänk dig att du bygger en app med användarinställningar — favoritfärg, språk, notiser på/av — och vill spara det i en fil eller skicka till en server. JSON är det naturliga valet.

Två nyckelfunktioner:
• \`json.dumps(data)\` — förvandlar en Python-dict/lista till en JSON-*sträng* (som du sedan kan spara till en fil eller skicka över internet).
• \`json.loads(text)\` — gör motsatsen: läser en JSON-sträng och ger tillbaka en Python-dict/lista.

\`indent=2\` gör JSON-strängen snygg och läsbar med indrag. \`ensure_ascii=False\` gör så att svenska tecken (å, ä, ö) behålls istället för att kodas om till \\uXXXX.`,
          code: `import json

# En Python-dict med användarinställningar
inställningar = {
    "användare": "anna_87",
    "version": 1.0,
    "preferenser": {
        "språk": "svenska",
        "mörkt_läge": True,
        "notiser": False
    },
    "favoritfärger": ["blå", "grön", "lila"]
}

# Omvandla till en JSON-sträng (t.ex. för att spara eller skicka)
json_text = json.dumps(inställningar, indent=2, ensure_ascii=False)
print(json_text)

# Läs tillbaka JSON till en Python-dict
data = json.loads(json_text)
print(f"\\nSpråk: {data['preferenser']['språk']}")
print(f"Första favoritfärg: {data['favoritfärger'][0]}")`,
        },
      ],
      exercises: [
        {
          explanation: `Tänk dig att du är lärare och precis fått in en exporterad klasslista från skolans system — som en CSV-fil med kolumner för namn och provpoäng. Nu vill du snabbt plocka ut vilka elever som klarade gränsen (>= 85 poäng).

csv.DictReader läser CSV:en och gör varje rad till en dictionary med kolumnrubrikerna som nycklar. Då kan du filtrera raderna precis som vilken annan lista av dicts som helst.

Litet exempel:
data = "namn,poäng\\nAnna,90\\nBo,60"
reader = csv.DictReader(StringIO(data))
höga = [r["namn"] for r in reader if int(r["poäng"]) >= 85]   →   ["Anna"]

OBS: Alla CSV-värden är strängar! Du måste göra int(r["poäng"]) innan du jämför med ett tal.

I övningen nedan ska du göra precis detta — bygg en lista med namnen på de elever som har 85 poäng eller mer.`,
          question: "Parsa CSV-datan och skapa en lista med namnen på de elever som har minst 85 poäng.",
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
          hint: "reader = csv.DictReader(StringIO(data)) och sedan [r['namn'] for r in reader if int(r['poäng']) >= 85]",
          expected: "['Alice', 'Charlie', 'Erik']",
        },
        {
          explanation: `Tänk dig att du bygger en liten bok-app som ska spara användarens boksamling till disk, och sedan kunna läsa tillbaka listan nästa gång appen öppnas. JSON är perfekt för det — du skickar en lista av dicts fram och tillbaka.

Två nyckelfunktioner:
• json.dumps(data)  →  omvandlar Python-objekt till JSON-sträng (redo att sparas eller skickas)
• json.loads(text)  →  omvandlar JSON-sträng tillbaka till Python-objekt

Litet exempel:
data = {"namn": "Anna", "ålder": 25}
text = json.dumps(data)       →   '{"namn": "Anna", "ålder": 25}'
json.loads(text)["namn"]      →   "Anna"

I övningen nedan ska du:
1. Konvertera listan \`böcker\` till en JSON-sträng.
2. Parsa tillbaka den, loopa igenom listan och skriv ut titeln på varje bok.`,
          question: "Skapa en JSON-sträng från en lista av 3 böcker och läs sedan tillbaka och skriv ut titlarna.",
          starter: `import json

böcker = [
    {"titel": "Harry Potter", "år": 1997},
    {"titel": "Sagan om ringen", "år": 1954},
    {"titel": "Pelle Svanslös", "år": 1939},
]

# 1. Konvertera till JSON-sträng
json_str =

# 2. Parsa tillbaka och skriv ut titlarna
# Din kod här:
`,
          solution: `import json

böcker = [
    {"titel": "Harry Potter", "år": 1997},
    {"titel": "Sagan om ringen", "år": 1954},
    {"titel": "Pelle Svanslös", "år": 1939},
]

json_str = json.dumps(böcker)
data = json.loads(json_str)
for bok in data:
    print(bok["titel"])`,
          hint: "json.dumps(böcker) för att serialisera, json.loads(json_str) för att parsa tillbaka, sedan loopa.",
          expected: "Harry Potter\nSagan om ringen\nPelle Svanslös",
        },
      ],
    },
    {
      id: "1-4",
      title: "Felhantering",
      icon: "🛡️",
      theory: `Fel händer hela tiden i programmering — en användare skriver "hej" där du förväntade dig ett tal, en fil saknas på disk, internetuppkopplingen bryts mitt i ett anrop. Utan felhantering kraschar programmet tvärt. Med felhantering kan du ta hand om situationen snyggt — visa ett tydligt felmeddelande, försöka igen, eller välja ett vettigt standardvärde.

Python hanterar fel med **try/except**. Tänk på det som: "försök göra det här, och om det går åt skogen, gör det här istället."

\`\`\`
try:
    nummer = int(input("Ange ett tal: "))
except ValueError:
    print("Det var inte ett giltigt tal!")
\`\`\`

Fyra delar att känna till:

• **try:** blocket med kod som kan misslyckas
• **except FelTyp:** vad som ska hända om ett visst fel uppstår
• **else:** körs bara om INGET fel uppstod (valfri)
• **finally:** körs *alltid*, oavsett om det blev fel eller inte — praktiskt för att städa upp, stänga filer, osv. (valfri)

Några vanliga inbyggda feltyper:

• \`ValueError\` — värdet gick inte att tolka (t.ex. \`int("hej")\`)
• \`TypeError\` — fel typ (t.ex. \`"a" + 3\`)
• \`ZeroDivisionError\` — division med noll
• \`KeyError\` — nyckeln fanns inte i en dictionary
• \`FileNotFoundError\` — filen finns inte

Du kan också skapa **egna feltyper** genom att ärva från \`Exception\`. T.ex. \`OgiltigtLösenordError\` eller \`TomKorgError\` — det gör koden tydligare och gör det lätt att fånga bara just den sortens fel.

Varför är det viktigt senare i kursen? När du jobbar med stora mängder data kommer det alltid finnas trasiga rader, saknade värden eller oväntade format. Felhantering låter dig hoppa över eller laga trasig data istället för att hela programmet kraschar på rad 47 av 100 000.`,
      examples: [
        {
          title: "Try / Except / Finally",
          explanation: `Här ser du alla fyra delarna av try-satsen samtidigt i en divisionsfunktion.

• \`try:\` gör själva divisionen — som kan gå fel på två sätt.
• \`except ZeroDivisionError:\` fångar när någon försöker dividera med 0.
• \`except TypeError:\` fångar om någon skickar in en sträng istället för ett tal.
• \`else:\` körs bara om inget fel uppstod — här skrivs resultatet ut.
• \`finally:\` körs alltid, sist av allt — oavsett om det gick bra eller dåligt.

Kör och titta på utskriften: du ser "--- Klar ---" tre gånger (en gång per anrop), men "10 / 3 = 3.33..." bara en gång.`,
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
          explanation: `Tänk dig att du får in JSON från en extern källa — t.ex. en prislista från en leverantör — och vill plocka ut priset. Men JSON-strängen kan vara trasig, eller så kan nyckeln "pris" saknas helt.

Genom att lista flera \`except\`-block efter varandra kan du hantera olika typer av fel på olika sätt:

• \`json.JSONDecodeError\` — om strängen inte är giltig JSON
• \`KeyError\` — om JSON är OK men nyckeln saknas
• \`Exception\` — en "catch-all" för allt annat oförutsett (ska komma *sist*)

Körningen nedan visar alla tre scenarion: ett lyckat fall, ett där nyckeln saknas, och ett där strängen inte är giltig JSON.`,
          code: `import json

def hämta_pris(json_str):
    try:
        produkt = json.loads(json_str)
        return produkt["pris"]
    except json.JSONDecodeError:
        print("Fel: Ogiltig JSON")
        return None
    except KeyError as e:
        print(f"Fel: Saknar nyckel {e}")
        return None
    except Exception as e:
        print(f"Okänt fel: {e}")
        return None

# Testa tre scenarion
print(hämta_pris('{"pris": 99}'))              # OK  →  99
print(hämta_pris('{"namn": "Bok"}'))           # KeyError (saknar "pris")
print(hämta_pris('inte json'))                 # JSONDecodeError`,
        },
        {
          title: "Egna feltyper (custom exceptions)",
          explanation: `Ibland vill du skapa *dina egna* feltyper som passar just ditt program. Tänk dig en inloggningsfunktion — det kan bli fel av flera olika skäl: användaren skrev fel lösenord, kontot är låst, rollen finns inte. Med egna feltyper kan du skilja på dem i koden som använder funktionen.

Du skapar en ny feltyp genom att ärva från \`Exception\`:

\`\`\`
class MittEgetFel(Exception):
    pass
\`\`\`

Sedan använder du \`raise MittEgetFel("beskrivning")\` för att kasta felet när något går snett. Den som anropar funktionen kan välja att fånga just den typen med \`except MittEgetFel\`.

I exemplet nedan har vi två egna feltyper — en för inloggningsfel och en för behörighetsfel — och testar tre olika scenarion.`,
          code: `class InloggningsError(Exception):
    """Fel vid inloggning (fel lösenord, tomma fält, osv)."""
    pass

class BehörighetsError(Exception):
    """Användaren har inte rätt behörighet."""
    pass

def logga_in(användarnamn, lösenord, roll):
    if not användarnamn or not lösenord:
        raise InloggningsError("Användarnamn och lösenord måste anges")
    if roll not in ("admin", "användare", "gäst"):
        raise BehörighetsError(f"Okänd roll: {roll}")
    print(f"Välkommen {användarnamn}! (roll: {roll})")

# Testa tre scenarion
försök = [
    ("", "1234", "admin"),          # saknar användarnamn
    ("anna", "pass", "root"),       # okänd roll
    ("anna", "pass", "admin"),      # OK
]
for uid, pw, roll in försök:
    try:
        logga_in(uid, pw, roll)
    except InloggningsError as err:
        print(f"Inloggning: {err}")
    except BehörighetsError as err:
        print(f"Behörighet: {err}")`,
        },
      ],
      exercises: [
        {
          explanation: `Tänk dig att du har ett formulär där användaren ska skriva in sin ålder. Ibland skriver de "25", ibland "tjugofem", ibland lämnar de fältet tomt. Om du bara gör \`int(svar)\` rakt av kraschar programmet så fort någon skriver något dumt. Lösningen: en "säker" konverteringsfunktion som försöker omvandla till int — och returnerar \`None\` om det inte går.

int("42")    →   42  (går bra)
int("hej")   →   ValueError (kraschar utan try/except)
int("3.14")  →   ValueError (decimaltecken funkar inte direkt till int)

Mönster:
try:
    # kod som kan misslyckas
except FelTyp:
    # vad som händer istället

I övningen nedan ska du skriva \`safe_int(s)\` som försöker göra \`int(s)\`, och returnerar \`None\` om det inte går.`,
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
          hint: "try: return int(s)  /  except (ValueError, TypeError): return None",
          expected: "42\nNone\nNone",
        },
        {
          explanation: `Tänk dig att du skrivit en statistikfunktion som ska räkna ut medelvärdet av en lista. Innan du räknar vill du vara säker på att listan 1) inte är tom, och 2) bara innehåller tal — annars kraschar funktionen eller ger nonsens-resultat.

Istället för att returnera en otydlig boolean (True/False) eller skriva en massa if-satser i anroparen, kastar du en egen \`DataError\` med ett tydligt meddelande om vad som är fel. Då kan anroparen fånga det med \`try/except\` och visa meddelandet för användaren.

Bra att veta:
• \`raise DataError("meddelande")\` kastar felet.
• \`isinstance(x, (int, float))\` är \`True\` om x är ett tal, annars \`False\`.
• \`not data\` är \`True\` om listan är tom.

Litet exempel:
if not data:
    raise DataError("Tom lista")

I övningen nedan ska du skapa klassen \`DataError\` (redan startad åt dig) och en funktion \`validera\` som kastar ett tydligt fel vid tom lista eller icke-tal.`,
          question: "Skriv en funktion validera(data) som kastar DataError om listan är tom eller innehåller något som inte är ett tal.",
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
          hint: "Kolla 'if not data' först. Loopa sedan igenom med 'isinstance(x, (int, float))' för varje värde.",
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
