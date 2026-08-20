# DJ Matt — wizytówka (wdrożenie) — 2026-08-20

Boilerplate lokalnego biznesu został przerobiony na ciemną stronę artysty Matt Cloud Music (Arek / MATT).

## Co powstało

- Jeden zablokowany motyw: czarne tło, primary `#E2453A`, akcent turkus `#2DD4BF`, Space Grotesk + Source Sans 3. Brak jasnego trybu, DevPanelu i 3 presetów.
- Hero split: MATT / CLOUD MUSIC, tagline HOUSE / FUNKY, animowana kaseta (`cassette.png` z mattcloudmusic.pl) i PLAY → `#sets`.
- Sekcja Sets: iframe playlisty Sound Corners + link zewnętrzny.
- About z bio z obecnej strony (EN + PL), portret z `new assets`.
- Slider i galeria na zdjęciach z `new assets`.
- Kontakt bez mapy i telefonu (placeholdery do uzupełnienia). Instagram i SoundCloud w stopce.
- Domyślny język: angielski; przełącznik EN/PL zostaje.
- RODO / cookies: wzmianka o skryptach SoundCloud.

## Kolejność sekcji

Hero → Sets → About → Slider → Gallery → Contact.

## Co jeszcze trzeba od Ciebie

- Telefon, e-mail, miasto, prawdziwy URL Instagrama — wpiszemy w `client/src/config/site.ts`.
- Folder `new assets/` można zostawić jako źródło; aplikacja czyta już kopie w `client/assets/`.

## Uruchomienie

`npm run dev` z korzenia repo. Build: `npm run build` → `dist/` na FTP.
