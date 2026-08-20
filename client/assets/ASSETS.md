# Katalog grafik

Agent i człowiek mają czytać ten plik zamiast zgadywać po bitmapach / SVG.
Podmieniając plik zachowaj **tę samą nazwę**, albo zaktualizuj import w `client/src/config/assets.ts`.

## `client/assets/` — importowane w aplikacji

| Plik | Zastosowanie | Sugerowane proporcje |
| --- | --- | --- |
| `cassette.png` | Hero — animowana kaseta | ok. 4:3, przezroczyste tło |
| `about.jpg` | Portret w sekcji O mnie | 4:5 / 1:1, min. 800×800 |
| `slider-1.jpg` | Slajd 1 — set winylowy | 2:1 lub 4:3, min. 1200×800 |
| `slider-2.jpg` | Slajd 2 — klub / live | 2:1 lub 4:3 |
| `slider-3.jpg` | Slajd 3 — mikser **oraz tło sekcji Sets** | 2:1 lub 4:3 |
| `gallery-1.jpg` | Galeria, pozycja 1 (lightbox) | 4:3 |
| `gallery-2.jpg` | Galeria, pozycja 2 **oraz tło sekcji Kontakt** | 4:3 |
| `gallery-3.jpg` | Galeria, pozycja 3 | 4:3 |
| `gallery-4.jpg` | Galeria, pozycja 4 | 4:3 |

Źródło bieżących zdjęć: folder `new assets/` w korzeniu repo + `cassette.png` z mattcloudmusic.pl.

## `client/public/images/` — bez hasha Vite, ścieżka stała

| Plik | Zastosowanie |
| --- | --- |
| `og-image.jpg` | Open Graph / Facebook, Messenger (`index.html` → `og:image`). Źródło: `new assets/557623939_…_n.jpg` |

`favicon.svg` leży w `client/public/favicon.svg`.
