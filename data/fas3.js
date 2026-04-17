export const fas3 = {
  id: 3,
  title: "Klassisk Machine Learning",
  weeks: "Vecka 8–12",
  icon: "🤖",
  accent: "#F59E0B",
  description: "Bygg riktiga ML-modeller med scikit-learn. Förstå både teorin och hur du använder API:et.",
  requiresPackages: ["numpy", "pandas", "scikit-learn", "matplotlib"],
  lessons: [
    {
      id: "3-1",
      title: "ML-koncept & Workflow",
      icon: "🎯",
      theory: `Machine Learning handlar om att låta datorn hitta mönster i data istället för att du programmerar reglerna.

**Huvudtyper:**
• **Supervised** — du har etiketterade exempel (klassificering, regression)
• **Unsupervised** — hitta struktur utan etiketter (klustring)

**Standard ML-workflow:**
1. Samla & rensa data
2. Dela upp: train / test
3. Välj modell
4. Träna (\`fit\`)
5. Utvärdera på test
6. Optimera & iterera

**Viktiga begrepp:**
• **Features (X)** — inputs, kolumnerna du tränar på
• **Target (y)** — det du vill förutsäga
• **Overfitting** — modellen memoriserar istället för att generalisera`,
      examples: [
        {
          title: "Train/Test Split",
          code: `import numpy as np
from sklearn.model_selection import train_test_split

# Skapa enkelt dataset
np.random.seed(42)
X = np.random.randn(100, 3)  # 100 exempel, 3 features
y = (X[:, 0] + X[:, 1] > 0).astype(int)  # binär klass

# Dela 80/20
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Träning: {X_train.shape}")
print(f"Test: {X_test.shape}")
print(f"Klassfördelning träning: {np.bincount(y_train)}")
print(f"Klassfördelning test: {np.bincount(y_test)}")`,
        },
        {
          title: "Första ML-modellen",
          code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Skapa syntetisk data
X, y = make_classification(
    n_samples=200, n_features=4, 
    n_informative=3, random_state=42
)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Träna modell
model = LogisticRegression()
model.fit(X_train, y_train)

# Utvärdera
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)
print(f"Accuracy: {acc:.2%}")

# Confidence
y_proba = model.predict_proba(X_test[:5])
print(f"\\nFörsta 5 prediktionerna:")
for i, (true, pred, prob) in enumerate(zip(y_test[:5], y_pred[:5], y_proba)):
    print(f"  Sann: {true}, Pred: {pred}, Säkerhet: {prob.max():.2%}")`,
        },
      ],
      exercises: [
        {
          question: "Dela upp data i 70% träning, 30% test med scikit-learn. Skriv ut storlekarna.",
          starter: `import numpy as np
from sklearn.model_selection import train_test_split

np.random.seed(1)
X = np.random.randn(150, 2)
y = np.random.randint(0, 2, 150)

# Din kod här:


print(f"X_train: {X_train.shape}")
print(f"X_test: {X_test.shape}")`,
          solution: `import numpy as np
from sklearn.model_selection import train_test_split

np.random.seed(1)
X = np.random.randn(150, 2)
y = np.random.randint(0, 2, 150)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)
print(f"X_train: {X_train.shape}")
print(f"X_test: {X_test.shape}")`,
          hint: "Använd test_size=0.3",
          expected: "X_train: (105, 2)\nX_test: (45, 2)",
        },
      ],
    },
    {
      id: "3-2",
      title: "Regression",
      icon: "📉",
      theory: `Regression förutsäger ett kontinuerligt värde (pris, temperatur, ålder).

**Linjär regression** — hitta bästa räta linjen genom punkterna:  
\`y = w₁x₁ + w₂x₂ + ... + b\`

**Utvärderingsmått:**
• **MSE** (Mean Squared Error) — genomsnittlig kvadrerat fel
• **RMSE** — roten ur MSE (samma enhet som y)
• **R²** — hur mycket av variansen modellen förklarar (0 till 1)`,
      examples: [
        {
          title: "Linjär Regression",
          code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Skapa data: y ≈ 2x + 5 + brus
np.random.seed(42)
X = np.random.rand(50, 1) * 10
y = 2 * X.ravel() + 5 + np.random.randn(50) * 2

# Träna
model = LinearRegression()
model.fit(X, y)

print(f"Lutning (w): {model.coef_[0]:.3f}")
print(f"Intercept (b): {model.intercept_:.3f}")

# Prediktioner
y_pred = model.predict(X)
print(f"MSE: {mean_squared_error(y, y_pred):.3f}")
print(f"R²: {r2_score(y, y_pred):.3f}")

# Plot
plt.figure(figsize=(8, 4))
plt.scatter(X, y, alpha=0.6, color="#14B8A6", label="Data")
plt.plot(X, y_pred, color="#EC4899", linewidth=2, label="Modell")
plt.xlabel("x")
plt.ylabel("y")
plt.title(f"Linjär Regression (R²={r2_score(y, y_pred):.3f})")
plt.legend()
plt.show()`,
        },
        {
          title: "Multi-feature regression",
          code: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Simulerad husdata
np.random.seed(42)
n = 200
df = pd.DataFrame({
    "kvm": np.random.normal(100, 30, n).clip(30, 200),
    "rum": np.random.choice([1, 2, 3, 4, 5], n),
    "ålder": np.random.uniform(0, 50, n),
    "avstånd_city": np.random.exponential(5, n),
})
# Priset beror på features
df["pris"] = (df["kvm"] * 30000 + df["rum"] * 50000 
              - df["ålder"] * 5000 
              - df["avstånd_city"] * 20000
              + np.random.randn(n) * 100000)

X = df[["kvm", "rum", "ålder", "avstånd_city"]]
y = df["pris"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"R² på test: {r2_score(y_test, y_pred):.3f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):,.0f} kr")

print("\\nFeature-vikter:")
for feature, vikt in zip(X.columns, model.coef_):
    print(f"  {feature}: {vikt:,.0f}")`,
        },
      ],
      exercises: [
        {
          question: "Träna en LinearRegression på y = 3x - 2 + brus. Skriv ut lutning och intercept.",
          starter: `import numpy as np
from sklearn.linear_model import LinearRegression

np.random.seed(0)
X = np.random.rand(100, 1) * 10
y = 3 * X.ravel() - 2 + np.random.randn(100) * 0.5

# Din kod här:
model = 


print(f"Lutning: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")`,
          solution: `import numpy as np
from sklearn.linear_model import LinearRegression

np.random.seed(0)
X = np.random.rand(100, 1) * 10
y = 3 * X.ravel() - 2 + np.random.randn(100) * 0.5

model = LinearRegression()
model.fit(X, y)
print(f"Lutning: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")`,
          hint: "LinearRegression() sedan .fit(X, y)",
          expected: "Lutning: 3.00\nIntercept: -2.00",
        },
        {
          question: "Träna regression och beräkna RMSE och R² på testdata.",
          starter: `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

np.random.seed(42)
X = np.random.rand(100, 2) * 10
y = X[:, 0] * 2 + X[:, 1] * 3 + np.random.randn(100)

# Din kod här:


print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")`,
          solution: `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

np.random.seed(42)
X = np.random.rand(100, 2) * 10
y = X[:, 0] * 2 + X[:, 1] * 3 + np.random.randn(100)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)
print(f"RMSE: {rmse:.3f}")
print(f"R²: {r2:.3f}")`,
          hint: "np.sqrt(mean_squared_error(y_test, y_pred)) för RMSE.",
          expected: "RMSE: ~1.0\nR²: ~0.99",
        },
      ],
    },
    {
      id: "3-3",
      title: "Klassificering",
      icon: "🏷️",
      theory: `Klassificering förutsäger en kategori (spam/inte spam, katt/hund, 0-9).

**Populära algoritmer:**
• **Logistic Regression** — snabb, tolkbar, bra baseline
• **Decision Tree** — lätt att förstå, lätt att overfitta
• **Random Forest** — många trees röstar, väldigt bra
• **SVM** — kraftfull för mindre dataset

**Utvärdering:**
• **Accuracy** — andel rätt (OK för balanserade dataset)
• **Precision / Recall / F1** — för obalanserade dataset
• **Confusion Matrix** — visar var modellen misstar sig`,
      examples: [
        {
          title: "Iris-klassificering (klassiskt dataset)",
          code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Ladda iris-datasetet (3 blomsorter, 4 features)
iris = load_iris()
X, y = iris.data, iris.target

print(f"Shape: {X.shape}")
print(f"Klasser: {iris.target_names}")
print(f"Features: {iris.feature_names}")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Random Forest
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"\\nAccuracy: {accuracy_score(y_test, y_pred):.2%}")
print(f"\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))`,
        },
        {
          title: "Jämför flera modeller",
          code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

X, y = make_classification(n_samples=500, n_features=10, 
                            n_informative=6, random_state=42)

modeller = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "Random Forest": RandomForestClassifier(random_state=42),
    "SVM": SVC(),
}

print("5-fold Cross Validation (accuracy):")
for namn, modell in modeller.items():
    scores = cross_val_score(modell, X, y, cv=5, scoring="accuracy")
    print(f"  {namn:20s}: {scores.mean():.3f} (±{scores.std():.3f})")`,
        },
        {
          title: "Confusion Matrix",
          code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt
import numpy as np

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)

model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)

# Visualisera
fig, ax = plt.subplots(figsize=(6, 5))
im = ax.imshow(cm, cmap="Blues")
ax.set_xticks(range(3))
ax.set_yticks(range(3))
ax.set_xticklabels(iris.target_names)
ax.set_yticklabels(iris.target_names)
ax.set_xlabel("Predikterad")
ax.set_ylabel("Sann")
ax.set_title("Confusion Matrix")

for i in range(3):
    for j in range(3):
        ax.text(j, i, cm[i,j], ha="center", va="center",
                color="white" if cm[i,j] > cm.max()/2 else "black",
                fontweight="bold")

plt.colorbar(im)
plt.tight_layout()
plt.show()`,
        },
      ],
      exercises: [
        {
          question: "Träna en Logistic Regression på iris och skriv ut accuracy.",
          starter: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

iris = load_iris()
# Din kod här:


print(f"Accuracy: {acc:.2%}")`,
          solution: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)
acc = accuracy_score(y_test, model.predict(X_test))
print(f"Accuracy: {acc:.2%}")`,
          hint: "LogisticRegression(max_iter=200), .fit(X_train, y_train)",
          expected: "Accuracy: 100.00%",
        },
        {
          question: "Jämför Decision Tree och Random Forest med 5-fold cross validation.",
          starter: `from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

iris = load_iris()
X, y = iris.data, iris.target

# Din kod här:


print(f"Decision Tree: {dt_scores.mean():.3f}")
print(f"Random Forest: {rf_scores.mean():.3f}")`,
          solution: `from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

iris = load_iris()
X, y = iris.data, iris.target

dt_scores = cross_val_score(DecisionTreeClassifier(random_state=42), X, y, cv=5)
rf_scores = cross_val_score(RandomForestClassifier(random_state=42), X, y, cv=5)
print(f"Decision Tree: {dt_scores.mean():.3f}")
print(f"Random Forest: {rf_scores.mean():.3f}")`,
          hint: "cross_val_score(model, X, y, cv=5)",
          expected: "Decision Tree: ~0.95\nRandom Forest: ~0.97",
        },
      ],
    },
    {
      id: "3-4",
      title: "Klustring (Unsupervised)",
      icon: "🎨",
      theory: `Klustring hittar grupper i data utan att du säger vilka grupperna är.

**Användning:**
• Kundsegmentering
• Anomalidetektering  
• Dimensionsreducering som förbehandling

**K-Means** är enklast:
1. Välj K (antal kluster)
2. Placera K centrumpunkter slumpmässigt
3. Tilldela varje punkt till närmaste centrum
4. Flytta centrum till medelpunkten av sina punkter
5. Upprepa tills stabilt`,
      examples: [
        {
          title: "K-Means",
          code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# Skapa 3 syntetiska kluster
X, y_true = make_blobs(n_samples=300, centers=3, 
                        cluster_std=0.8, random_state=42)

# Kör K-Means utan att veta antalet
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
y_pred = kmeans.fit_predict(X)

print(f"Inertia (lägre=bättre): {kmeans.inertia_:.2f}")
print(f"Centrumpunkter:\\n{kmeans.cluster_centers_}")

# Plotta
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

axes[0].scatter(X[:, 0], X[:, 1], c=y_true, cmap="viridis", alpha=0.6)
axes[0].set_title("Sanna klasser")

axes[1].scatter(X[:, 0], X[:, 1], c=y_pred, cmap="viridis", alpha=0.6)
axes[1].scatter(kmeans.cluster_centers_[:, 0], 
                kmeans.cluster_centers_[:, 1],
                s=300, c="red", marker="X", label="Centrum")
axes[1].set_title("K-Means prediktion")
axes[1].legend()

plt.tight_layout()
plt.show()`,
        },
        {
          title: "Välj antal kluster — Elbow Method",
          code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

X, _ = make_blobs(n_samples=300, centers=4, random_state=42)

# Prova K från 1 till 10
inertias = []
for k in range(1, 11):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)

plt.figure(figsize=(8, 4))
plt.plot(range(1, 11), inertias, marker="o", color="#8B5CF6", linewidth=2)
plt.axvline(4, color="red", linestyle="--", alpha=0.5, label="Elbow vid K=4")
plt.xlabel("Antal kluster (K)")
plt.ylabel("Inertia")
plt.title("Elbow Method")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

print("Välj K där kurvan börjar plana ut ('armbågen')")`,
        },
      ],
      exercises: [
        {
          question: "Kör K-Means med K=4 på blob-data och skriv ut antal punkter per kluster.",
          starter: `import numpy as np
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

X, _ = make_blobs(n_samples=200, centers=4, random_state=0)

# Din kod här:


print(f"Punkter per kluster: {antal}")`,
          solution: `import numpy as np
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

X, _ = make_blobs(n_samples=200, centers=4, random_state=0)

km = KMeans(n_clusters=4, random_state=42, n_init=10)
labels = km.fit_predict(X)
antal = np.bincount(labels)
print(f"Punkter per kluster: {antal}")`,
          hint: "np.bincount(labels) räknar element per värde.",
          expected: "Punkter per kluster: [50 50 50 50]",
        },
      ],
    },
    {
      id: "3-5",
      title: "Feature Engineering & Skalning",
      icon: "⚙️",
      theory: `80% av tiden i ML går åt till data-arbete, inte modellering. Feature engineering är konsten att förbereda data.

**Kritiska steg:**
• **Skalning** — algoritmer som SVM och neural nets kräver skalade features
• **Encoding** — kategoriska features måste bli numeriska
• **Feature creation** — skapa nya features från befintliga
• **Feature selection** — ta bort irrelevanta features`,
      examples: [
        {
          title: "StandardScaler",
          code: `import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Data med olika skalor
X = np.array([
    [100, 0.5, 10000],
    [200, 0.8, 15000],
    [150, 0.3, 12000],
    [300, 1.0, 20000],
])

print("Original:")
print(X)
print(f"Medel: {X.mean(axis=0)}")
print(f"Std:  {X.std(axis=0)}")

# StandardScaler: medel=0, std=1
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("\\nStandardiserad:")
print(X_scaled.round(2))
print(f"Medel: {X_scaled.mean(axis=0).round(2)}")
print(f"Std:  {X_scaled.std(axis=0).round(2)}")

# MinMaxScaler: 0 till 1
mm = MinMaxScaler()
X_mm = mm.fit_transform(X)
print("\\nMinMax (0-1):")
print(X_mm.round(2))`,
        },
        {
          title: "One-Hot Encoding",
          code: `import pandas as pd

df = pd.DataFrame({
    "stad": ["Sthlm", "Göteborg", "Sthlm", "Malmö", "Göteborg"],
    "storlek": ["S", "L", "M", "S", "L"],
    "pris": [100, 200, 150, 80, 250]
})

print("Original:")
print(df)

# One-hot encoding med pandas
df_encoded = pd.get_dummies(df, columns=["stad", "storlek"], dtype=int)
print("\\nEfter one-hot encoding:")
print(df_encoded)`,
        },
        {
          title: "Pipeline — allt i en kedja",
          code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score

iris = load_iris()
X, y = iris.data, iris.target

# Utan pipeline - lätt att glömma skalning
model_no_scale = LogisticRegression(max_iter=200)
scores_no_scale = cross_val_score(model_no_scale, X, y, cv=5)

# Med pipeline
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", LogisticRegression(max_iter=200))
])
scores_scaled = cross_val_score(pipe, X, y, cv=5)

print(f"Utan skalning: {scores_no_scale.mean():.3f}")
print(f"Med skalning:  {scores_scaled.mean():.3f}")
print("\\nPipeline ser till att skalningen görs rätt per fold!")`,
        },
      ],
      exercises: [
        {
          question: "Skala denna data så att varje kolumn har medel=0 och std=1.",
          starter: `import numpy as np
from sklearn.preprocessing import StandardScaler

X = np.array([[1, 100], [2, 200], [3, 300], [4, 400]], dtype=float)

# Din kod här:


print(X_scaled.round(3))
print(f"Medel: {X_scaled.mean(axis=0).round(3)}")
print(f"Std: {X_scaled.std(axis=0).round(3)}")`,
          solution: `import numpy as np
from sklearn.preprocessing import StandardScaler

X = np.array([[1, 100], [2, 200], [3, 300], [4, 400]], dtype=float)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print(X_scaled.round(3))
print(f"Medel: {X_scaled.mean(axis=0).round(3)}")
print(f"Std: {X_scaled.std(axis=0).round(3)}")`,
          hint: "StandardScaler() sedan .fit_transform(X)",
          expected: "[[-1.342 -1.342]\n [-0.447 -0.447]\n [ 0.447  0.447]\n [ 1.342  1.342]]\nMedel: [0. 0.]\nStd: [1. 1.]",
        },
        {
          question: "Konvertera kategoriska kolumner till one-hot med pd.get_dummies.",
          starter: `import pandas as pd

df = pd.DataFrame({
    "färg": ["röd", "blå", "grön", "röd", "blå"],
    "pris": [100, 200, 150, 120, 180]
})

# Din kod här:
df_encoded = 

print(df_encoded)`,
          solution: `import pandas as pd

df = pd.DataFrame({
    "färg": ["röd", "blå", "grön", "röd", "blå"],
    "pris": [100, 200, 150, 120, 180]
})

df_encoded = pd.get_dummies(df, columns=["färg"], dtype=int)
print(df_encoded)`,
          hint: "pd.get_dummies(df, columns=['färg'])",
          expected: "   pris  färg_blå  färg_grön  färg_röd\n0   100         0          0         1\n1   200         1          0         0\n2   150         0          1         0\n3   120         0          0         1\n4   180         1          0         0",
        },
      ],
    },
    {
      id: "3-6",
      title: "Hyperparameter Tuning",
      icon: "🎛️",
      theory: `Modeller har **hyperparametrar** — inställningar som INTE lärs från data.
Exempel: max_depth, n_estimators, learning_rate, C i SVM.

Fel hyperparametrar = dålig modell. Metoder:

• **GridSearchCV** — prova alla kombinationer (långsamt men grundligt)
• **RandomizedSearchCV** — prova slumpmässigt urval (snabbare)
• **Cross-validation** — alltid, för att undvika overfitting`,
      examples: [
        {
          title: "GridSearchCV",
          code: `from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, train_test_split

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

# Hyperparameter-grid att söka igenom
param_grid = {
    "n_estimators": [50, 100, 200],
    "max_depth": [3, 5, 10, None],
    "min_samples_split": [2, 5, 10]
}
# Totalt: 3 * 4 * 3 = 36 kombinationer × 5 folds = 180 modeller

grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring="accuracy", n_jobs=-1
)
grid.fit(X_train, y_train)

print(f"Bästa parametrar: {grid.best_params_}")
print(f"Bästa CV-score: {grid.best_score_:.3f}")
print(f"Test-score: {grid.score(X_test, y_test):.3f}")`,
        },
      ],
      exercises: [
        {
          question: "Använd GridSearchCV för att hitta bästa 'C' för LogisticRegression (prova C=[0.01, 0.1, 1, 10]).",
          starter: `from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV

iris = load_iris()

# Din kod här:


print(f"Bästa C: {grid.best_params_}")
print(f"Bästa score: {grid.best_score_:.3f}")`,
          solution: `from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GridSearchCV

iris = load_iris()

param_grid = {"C": [0.01, 0.1, 1, 10]}
grid = GridSearchCV(
    LogisticRegression(max_iter=500),
    param_grid, cv=5
)
grid.fit(iris.data, iris.target)
print(f"Bästa C: {grid.best_params_}")
print(f"Bästa score: {grid.best_score_:.3f}")`,
          hint: "param_grid = {'C': [...]}, sedan GridSearchCV(model, param_grid, cv=5)",
          expected: "Bästa C: {'C': 10}\nBästa score: ~0.97",
        },
      ],
    },
  ],
  milestone: {
    title: "Komplett ML-pipeline",
    description: "Bygg en end-to-end ML-lösning: ladda data, rensa, skala, träna flera modeller, välj bästa med cross-validation, utvärdera på test-set.",
    code: `import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix

# 1. Ladda data
data = load_breast_cancer()
X, y = data.data, data.target
print(f"Dataset: {X.shape}, klasser: {np.bincount(y)}")

# 2. Dela upp
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 3. Jämför modeller med pipelines
modeller = {
    "LogReg": LogisticRegression(max_iter=1000),
    "RandomForest": RandomForestClassifier(random_state=42),
    "SVM": SVC(),
}

print("\\nCross-validation scores:")
for namn, clf in modeller.items():
    pipe = Pipeline([("scaler", StandardScaler()), ("clf", clf)])
    scores = cross_val_score(pipe, X_train, y_train, cv=5)
    print(f"  {namn:15s}: {scores.mean():.3f} (±{scores.std():.3f})")

# 4. Tune bästa modellen
print("\\nTuning Random Forest...")
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", RandomForestClassifier(random_state=42))
])
param_grid = {
    "clf__n_estimators": [50, 100],
    "clf__max_depth": [5, 10, None]
}
grid = GridSearchCV(pipe, param_grid, cv=5, n_jobs=-1)
grid.fit(X_train, y_train)
print(f"Bästa: {grid.best_params_}")

# 5. Utvärdera på test
y_pred = grid.predict(X_test)
print("\\n=== Slutresultat på test-set ===")
print(classification_report(y_test, y_pred, 
      target_names=data.target_names))
print(f"Confusion Matrix:\\n{confusion_matrix(y_test, y_pred)}")`,
  },
};
