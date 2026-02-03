# Deployment auf Netlify

Diese Landingpage ist für das einfache Deployment auf Netlify vorbereitet.

## Schritte zum Deployment

1. **Lade den Ordner herunter**: Lade den gesamten Projektordner herunter.
2. **Erstelle einen Netlify Account**: Gehe auf [netlify.com](https://www.netlify.com) und erstelle einen kostenlosen Account (falls du noch keinen hast).
3. **Drag & Drop Deployment (Einfachste Methode)**:
   - Führe auf deinem Computer den Befehl `npm run build` aus (dafür muss Node.js installiert sein).
   - Ziehe den entstandenen `dist` Ordner einfach in das "Sites" Feld in deinem Netlify Dashboard.
   
4. **Git Deployment (Empfohlene Methode)**:
   - Lade diesen Code auf GitHub hoch.
   - Verknüpfe dein Netlify Konto mit GitHub.
   - Wähle das Repository aus.
   - Netlify erkennt automatisch die Einstellungen aus der `netlify.toml` Datei.
   - Klicke auf "Deploy Site".

## Einstellungen (automatisch konfiguriert in netlify.toml)

- **Build Command**: `npm run build`
- **Publish Directory**: `dist/public`

## Wichtige Hinweise

- Die Seite verwendet React und Vite.
- Alle Bilder liegen im `public` Ordner.
- Das Design ist responsive und für alle Geräte optimiert.
