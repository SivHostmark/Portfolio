# AI-assistenten — onboarding (utkast til case study)

Arbeidsdokument. Bygget fra notatbilder + personaer. Ekte navn (produkt, kunde,
selskap) skal IKKE med i den publiserte versjonen — vi kaller den «AI-assistenten».
[?] = usikker tyding av håndskrift, du retter.

---

## Hero
- **Tittel:** Onboarding til en stemmestyrt regnskapsassistent  *(foreløpig)*
- **Meta:** Oppstartsselskap · 4 uker · App  *(hele sommerjobben var 8 uker; ditt prosjekt 3–4 uker; rolle: UX-designer og prosjektleder; vikar for UX-er i pappaperm)*
- **Anonymiserings-note (under hero):** Selskaps- og produktnavn er anonymisert av hensyn til arbeidsgiver.
- **Beskrivelse:** En onboarding-studie om hvordan man får folk komfortable med å
  snakke med en AI-assistent, og hvordan den bør prate for å føles naturlig.

## 01 — Problemet
Oppgaven: designe onboardingen til en stemmestyrt AI-assistent som gjør regnskap
enklere for små bedrifter (budsjettvennlig; «assistenten gjør jobben for deg»).
Kjernen: folk er ikke komfortable med å snakke til en AI, og det er uklart hvordan
den bør «prate» for å føles naturlig — varm og vennlig, men slik at folk faktisk
vil bruke den.
- Bakgrunnsinnsikt fra notatene: å starte/registrere og drive en liten bedrift er
  tungvint (Altinn, Brønnøysundregisteret, Innovasjon Norge) — «går tregt, seigt,
  tungvint, vanskelig», og «vanskelig å få forståelse for prosessen hvis man er
  helt fersk».

## 02 — Research
**To innsiktsdager.** Strukturerte innsikten (i Notion[?]) og la vekt på å
presentere den så folk faktisk gadd å lese den.

**Teoretisk fundament (rammeverk jeg lente meg på):**
- **Microsofts 18 retningslinjer for menneske–AI-interaksjon** (20+ års forskning): ved *start* skal systemet vise tydelig hva det kan og hvor godt det gjør det; *underveis* tilpasse kontekst og sosiale normer; *ved feil* være lett å korrigere + forklare hvorfor; *over tid* lære og be om tilbakemelding. → Særlig relevant for onboarding, som jo *er* «starten på interaksjonen».
- **Human-Centered AI (HCAI)** (Interaction Design Foundation): empati/brukerforståelse, etikk og bias, brukerinvolvering, transparens/forklarbarhet, kontinuerlig tilbakemelding, og balanse mellom automasjon og menneskelig kontroll.
- **CASA / Media Equation (Reeves & Nass):** folk behandler stemmeassistenter som *sosiale aktører* og bruker sosiale regler på dem — derfor betyr det så mye *hvordan* den snakker (varme, naturlighet). Teoretisk anker for kjernen din. Beslektet funn: skriftlige svar kan oppleves tryggere enn bare stemme → støtter valget om både muntlig og skriftlig. (Kilde: Bassett-avhandling om tillit/opplevd intelligens i stemmeassistenter — kun denne ideen er relevant, resten er for akademisk for porteføljen.)
- **Stemme og kjønn:** Forskningen viser at stemmeassistenter ofte får kvinnestemme som standard, blant annet fordi kvinnestemmer forbindes med trygghet og imøtekommenhet. UNESCOs rapport «I'd Blush if I Could» (2019) peker samtidig på baksiden: en innebygd, kvinnekjønnet føyelighet kan forsterke kjønnsstereotypier. Nass og Brave («Wired for Speech», 2005) fant at folk tillegger datastemmer kjønn og reagerer på dem ut fra stereotypier. Det er samme forskningsmiljø som CASA-funnene over. Denne spenningen var jeg bevisst på i arbeidet med assistentens stemme og personlighet.
- **Metode:** kombinere selvrapportering (intervju/spørreskjema) og observasjon; ta hensyn til samtykke, dataminimering og etikk.
- Kilde også: PDF «artikkel om stemmestyring» (ikke lest inn ennå — venter på tekst/oppsummering).

**Hva jeg undersøkte:**
- Testet et eksisterende regnskapsverktøy, Fiken — opplevdes lett, få opplysninger å føre inn.
- Sammenliknet med Altinn / Brønnøysund / Innovasjon Norge → tungvint, mange steg, vanskelig for ferske.
- Landskap/konkurrenter: andre regnskapsaktører, stemme-aktører, character.ai, sesame.com[?], og hvordan Google/OpenAI/manus bruker AI-UX i kommersiell setting.

**Personaer (hypoteser, ikke fasit — til felles diskusjon):** Jonas (frilanser, 34),
Laila (småbedriftseier, 49), Marcus (gründer, 26). + user stories («Som en …, vil jeg …, slik at …»).

**Innspill fra team/stakeholdere:** UX-kollega (Paul[?]), Aditi[?], CTO (Are[?]),
Philippa[?] — feedback på personaer og prosess.

**Funn / temaer:**
- Sosial kontekst: ubehagelig å snakke høyt til AI i åpent landskap → bruke stemmen diskré
- Naturlig stemme: «robotstemmer» føles unaturlig → varm, menneskelig (men ikke «perfekt») stemme; ikke lat som den er et menneske
- Bekreftelse: trygghet på at den faktisk forsto
- Ikke møte folk med «vegg av tekst»
- Tillit og data: oversikt og kontroll over hva som deles

**Scenario (Jonas):** Jonas åpner appen for første gang og ser at det finnes en
AI-assistent, men det er uklart hva den gjør. Han er vant med effektive digitale
verktøy, men forventer ikke å bli undervist – han vil få gjort noe konkret. Uansett
er han opptatt av om dette faktisk gjør regnskap enklere – nå, ikke på sikt.

## 03 — Designprosess
**Bygge personlighet/stemme:**
- Konfigurerte en system-prompt på en språkmodell (LLM), testet ut personlighet og «brand».
- Simulerte samtaler («User: How can you help me?»), lagde en test-«kunde» for å se hvordan det funker i praksis.
- Jobbet med både muntlig og skriftlig tone.

**Plattform-disiplin:**
- Designet parallelt for iOS og Android, og fulgte plattformenes egne retningslinjer (Human Interface Guidelines og Material Design). Sikret at appen føltes hjemme på begge plattformene, ikke som et frittstående konsept.

**Designvalg / spørsmål jeg utforsket:**
- Aktiv (taleintro) vs passiv (ved forespørsel) møte med brukeren?
- Alltid tilgjengelig «snakke-knapp»; skille oss ut fra standard.
- Hva skjer ved «rotete» tale / slang?
- Hvor mye skal den forklare? («Hei, vil du loggføre en utgift?» vs forklare mer)
- Latency i flyten; viktig med første inntrykk.
- La folk skippe steg, eller ta en «tutorial-flyt»; designe fra «sign up».
- Customer journey / samtale-flyt («spor» kunden går i); storyboard med lyder.

**Min rolle:** ledet planlegging og faciliterte en workshop. Tok «et steg tilbake for å tenke på brukeren».

## 04 — Løsningen  (skjermer å gjenskape i Figma)
Skjermer vi har foto av: onboarding-flyt, dashboard («Good morning, …» med
kontrakter/frister, beløp, «betal alle nå»), stemme-chat («Snakk med …»).

Iterasjons-feedback fra notatene (kan bli en fin «hva jeg endret»-del):
- Logo for liten / uklart hva produktet er
- Mindre tekst; «Se mer» i stedet for knapper
- Folk var usikre på om de skulle scrolle
- «Vil du prøve å snakke» → heller «[AI-en] kan ta deg gjennom»
- Assistenten opplevdes for treig

[å gjøre: gjenskape 3–5 nøkkelskjermer, med «AI-assistenten» i stedet for ekte navn]

## 05 — Refleksjoner
Råstoff fra notatene (din egen stemme, til å bearbeide):
- Ble litt utålmodig; «orker ikke» når prosesser er tunge og uoversiktlige som fersk.
- [å fylle inn: hva du lærte, hva du ville gjort videre]

---

## Usikre tydinger å bekrefte
- (Fiken bekreftet ✓) · «ikke så intens som Maja»? · sesame.com?
- Kollegaer: Paul, Aditi, Are (CTO), Philippa? · «phonemi»? · «Soul/shape of UX»?
