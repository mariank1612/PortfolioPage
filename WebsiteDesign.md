# Design Style

## 1. Visual Identity & Atmosphere
* **Design-Stil:** Minimalistischer High-Contrast Dark Mode mit Fokus auf Interaktivität.
* **Vibe:** "Engineering-led Design". Es wirkt präzise, professionell und hochgradig zugänglich (A11y).
* **Key Visual:** Ein radialer Gradient ("Spotlight"), der dem Mauszeiger folgt und die dunkle Oberfläche subtil beleuchtet.

## 2. Color Palette (Tailwind-basiert)
* **Background:** `#0f172a` (Deep Navy / Slate 950).
* **Text (Primary):** `#e2e8f0` (Slate 200) – Sehr helles Grau für hohen Kontrast.
* **Text (Secondary):** `#94a3b8` (Slate 400) – Gedämpftes Grau für Fließtext und Details.
* **Accent/Hover:** `#5eead4` (Teal 300) – Wird für Links, Tech-Tags und Highlights verwendet.
* **Card-Hover-Effect:** Ein sehr dezenter Background-Shift auf `#1e293b` (Slate 800) kombiniert mit dem Spotlight-Effekt.

## 3. Typography
* **Font Family:** `Inter` (Variable Font).
* **Hierarchy:**
    * **Main Heading:** Extrabold, enges Spacing.
    * **Subheadings:** Semibold, oft im All-Caps Style für Sektionen.
    * **Body:** Regular, hohe Zeilenhöhe (Leading) für maximale Lesbarkeit.
* **Rendering:** `-webkit-font-smoothing: antialiased`.

## 4. Layout & Structure
* **Grid-System:** 2-Spalten-Layout auf Desktop (Sticky Sidebar links, Scrolling Content rechts).
    * **Linke Spalte (Fixed):** Enthält Name, Titel, Kurzbeschreibung, Navigation und Social Links.
    * **Rechte Spalte (Scroll):** Enthält die Sektionen `About`, `Experience`, `Projects` und `Writing`.
* **Responsive Behavior:** * Mobile: Einspaltig, Header wird oben fixiert oder scrollt mit.
    * Desktop: Die Sidebar bleibt fixiert, während der Content rechts fließt.

## 5. Components & Elements
* **Navigation:** Aktive Sektionen werden durch eine horizontale Linie ("Active Indicator") hervorgehoben, die sich beim Scrollen (Intersection Observer) verlängert.
* **Experience-Cards:** * Links: Zeitraum (muted).
    * Rechts: Rolle, Firma, Beschreibung und Tech-Pills.
* **Tech-Pills:** Kleine Badges mit Hintergrund `#2dd4bf1a` (Teal mit 10% Opacity) und Text in Teal.
* **Project Cards:** Großflächige Hover-Zonen. Beim Hover wird die gesamte Karte leicht aufgehellt und das zugehörige Bild bekommt einen Fokus-Effekt.

## 6. Technical Stack (Engineered for Speed)
* **Framework:** Next.js (App Router).
* **Styling:** Tailwind CSS.
* **Deployment:** Vercel.
* **Performance:** Nahezu 100/100 Lighthouse Score durch statische Generierung und optimierte Assets.

## 7. Interactive Logic (Für PortfolioPage)
1.  **Spotlight-Effekt:** Implementiert via CSS `background: radial-gradient` gekoppelt an ein `mousemove` Event auf dem Root-Element.
2.  **Scroll-Spy:** Nutzt die `Intersection Observer API`, um die Navigation links basierend auf der aktuellen Scrollposition der rechten Sektionen zu aktualisieren.
3.  **Smooth Scrolling:** Natives CSS `scroll-behavior: smooth` mit einem Polyfill für ältere Browser.