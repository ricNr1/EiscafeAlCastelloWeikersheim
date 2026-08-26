# Domain-Umzug: eiscafe-al-castello-weikersheim.de → francescas-weikersheim.de

Schritt-für-Schritt-Anleitung, um die neue Domain bei Strato einzurichten und die
Google-Platzierung der alten Domain auf die neue zu übertragen.

**Die Reihenfolge ist wichtig.** Erst muss die neue Seite unter der neuen Domain
erreichbar sein, dann wird umgeleitet, dann Google informiert.

---

## Phase 1: Neue Domain bei Strato registrieren

1. Bei Strato einloggen: https://www.strato.de → **Kunden-Login**.
2. Im Kundenbereich auf **Domains** → **Domain bestellen** (bzw. im bestehenden
   Paket „Domain hinzufügen“ – je nach Tarif ist eine weitere .de-Domain inklusive
   oder kostet ~0,50–1 €/Monat).
3. `francescas-weikersheim.de` suchen und registrieren.
4. Warten, bis die Domain im Kundenbereich als „aktiv“ erscheint (meist wenige Minuten).

## Phase 2: DNS der neuen Domain auf GitHub Pages zeigen

5. Im Strato-Kundenbereich: **Domains** → **Domainverwaltung** →
   `francescas-weikersheim.de` → Zahnrad/**Einstellungen** → **DNS-Einstellungen** → **A-Record verwalten**.
6. Dort „eigene IP-Adresse verwenden“ wählen und diese vier A-Records eintragen
   (das sind die offiziellen GitHub-Pages-Server):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Falls Strato nur EINE IP zulässt: `185.199.108.153` eintragen – das reicht.
7. Für die Subdomain `www`: **CNAME-Record** auf `<DEIN-GITHUB-BENUTZERNAME>.github.io.`
   setzen (der Name steht in der GitHub-Repo-URL, z. B. `erich123.github.io.` –
   den Punkt am Ende mit eintragen, falls Strato ihn nicht selbst ergänzt).

## Phase 3: GitHub Pages auf die neue Domain umstellen

8. Die neue Website pushen (die Datei `CNAME` im Repo enthält bereits
   `francescas-weikersheim.de`).
9. Auf GitHub: Repo → **Settings** → **Pages** → unter **Custom domain**
   `francescas-weikersheim.de` eintragen (falls nicht automatisch übernommen)
   und speichern.
10. Warten, bis GitHub das SSL-Zertifikat ausgestellt hat (bis zu 1 Stunde),
    dann dort **Enforce HTTPS** aktivieren.
11. Testen: `https://francescas-weikersheim.de` muss die neue Seite zeigen.

> ⚠️ Ab diesem Schritt zeigt die ALTE Domain ins Leere (GitHub kennt pro Repo nur
> eine Domain). Deshalb direkt mit Phase 4 weitermachen.

## Phase 4: Alte Domain per 301 weiterleiten (der SEO-entscheidende Schritt)

12. Strato-Kundenbereich: **Domainverwaltung** → `eiscafe-al-castello-weikersheim.de`
    → **Einstellungen** → **Umleitung einrichten**.
13. Ziel: `https://francescas-weikersheim.de/`
14. Als Umleitungstyp unbedingt **„Umleitung mit Adressänderung“ / permanent (HTTP 301)**
    wählen – **niemals** die „Frame-Weiterleitung“ (dabei bliebe die alte URL in der
    Adresszeile stehen und Google wertet den Umzug nicht).
15. Die Umleitung auch für `www.eiscafe-al-castello-weikersheim.de` aktivieren.
16. Testen (nach ca. 15–60 Min. DNS-Wartezeit): Beide alten Adressen im Browser
    aufrufen – sie müssen automatisch auf der neuen Seite landen. Wichtig: auch
    `https://` mit altem Domainnamen testen. Falls dabei eine Zertifikatswarnung
    kommt, bei Strato prüfen, ob für die alte Domain noch ein SSL-Zertifikat
    aktiv ist (bei Strato meist inklusive und mit einem Klick aktivierbar).

## Phase 5: Google über den Umzug informieren

### Search Console einrichten (beide Domains)

17. https://search.google.com/search-console öffnen (mit Google-Konto anmelden –
    am besten dasselbe, das auch das Business Profile verwaltet).
18. **Property hinzufügen** → Typ **„Domain“** → `francescas-weikersheim.de`.
19. Google zeigt einen TXT-Record (`google-site-verification=...`). Diesen bei
    Strato in den **DNS-Einstellungen → TXT-Record** der neuen Domain eintragen,
    dann in der Search Console auf **Bestätigen** klicken (kann 1 Stunde dauern).
20. Das Gleiche für die alte Domain `eiscafe-al-castello-weikersheim.de` wiederholen
    (eigene Property, eigener TXT-Record).
21. In der neuen Property: **Sitemaps** → `https://francescas-weikersheim.de/sitemap.xml`
    einreichen.

### Adressänderung melden

22. In der Search Console die Property der ALTEN Domain öffnen →
    **Einstellungen** (Zahnrad) → **Adressänderung**.
23. Als neue Website die Property `francescas-weikersheim.de` auswählen und die
    Umzugsanfrage absenden. Google validiert dabei die 301-Weiterleitung aus Phase 4.
24. Fertig – Google überträgt das Ranking in den folgenden Wochen. Der Hinweis
    „Umzug wird verarbeitet“ bleibt bis zu 6 Monate stehen; das ist normal.

### Google Business Profile aktualisieren (für eine Eisdiele das Wichtigste!)

25. https://business.google.com → den bestehenden Eintrag „Eiscafé Al Castello“ öffnen.
26. Ändern:
    - **Name**: Francesca's (Achtung: Eine Namensänderung kann eine erneute
      Verifizierung auslösen – z. B. per Video oder Postkarte. Das ist normal,
      einfach durchführen.)
    - **Website**: `https://francescas-weikersheim.de/`
    - **Öffnungszeiten**: Mo 13–18, Di+Mi geschlossen, Do 13–18, Fr 12–19, Sa 13–19, So 13–19
    - **Telefonnummer**: 0152 384 77090
    - Neue Fotos hochladen (die Bilder von Konrad Olesch).
27. Falls vorhanden: auch Facebook-Seite, TripAdvisor, Speisekarten-Portale etc.
    auf neuen Namen + neue URL umstellen. Jede alte Erwähnung, die auf die
    301-Weiterleitung trifft, ist ok – aber direkte Aktualisierung ist besser.

## Phase 6: Laufend beobachten

28. Die alte Domain **mindestens 12 Monate** behalten und weiterleiten lassen
    (also bis mindestens **September 2027**), erst danach ggf. bei Strato kündigen.
    Solange die Weiterleitung läuft, gehen keine alten Links und kein Ranking verloren.
29. Alle paar Wochen in der Search Console prüfen:
    - Neue Property: Steigen die Impressionen/Klicks?
    - Alte Property: Fallen sie entsprechend ab? (Das ist das gewünschte Bild.)
30. Nach 6–12 Monaten sollte `francesca's weikersheim` UND `eiscafe al castello
    weikersheim` beide die neue Seite finden – der Titel der neuen Seite enthält
    dafür bewusst den Zusatz „ehemals Eiscafé Al Castello“.

---

## Kurz-Checkliste

- [ ] Neue Domain bei Strato registriert
- [ ] A-Records der neuen Domain auf GitHub Pages (185.199.108/109/110/111.153)
- [ ] CNAME `www` → `<benutzername>.github.io`
- [ ] Website gepusht, Custom Domain in GitHub-Settings, HTTPS erzwungen
- [ ] Alte Domain: 301-Weiterleitung (KEINE Frame-Weiterleitung!) inkl. www
- [ ] Search Console: beide Domains per DNS-TXT bestätigt
- [ ] Sitemap eingereicht
- [ ] Adressänderung in der Search Console beantragt
- [ ] Google Business Profile: Name, URL, Zeiten, Fotos aktualisiert
- [ ] Alte Domain bis mind. September 2027 behalten
