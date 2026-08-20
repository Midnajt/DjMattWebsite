# Belka zmiany motywu — 2026-08-20

Nad nawigacją jest stała belka „Zmień motyw” z trzema przyciskami: Matt (obecny pomarańcz + turkus), Swap (te same kolory zamienione) i Pulse (indygo + limonka). Wybór zapisuje się w `localStorage`.

Animowane bąbelki są dostępne w każdym motywie (kolory z aktywnego presetu). Włącza je osobny przycisk na belce; wyłączone zostaje statyczne `page-glow`. Wybór motywu i animacji zapisuje się w `localStorage`.

Aktualizacja: kulki w Pulse ruszają się szybciej (ok. 8–13 s zamiast 14–24 s) i jest ich więcej, od bardzo małych po duże.

Aktualizacja: przyciski Play w navbarze i hero przewijają do `#sets` i uruchamiają widget SoundCloud (API `play()`). Bez zgody na cookies otwiera się baner; po akceptacji odtwarzanie rusza samo.

Zdjęcia w tle sekcji (`SectionPhoto`, np. Sety i Kontakt) mają rozmyte górną i dolną krawędź maską gradientu, żeby nie odcinały się ostro od tła strony.

Na belce są trzy zestawy czcionek: Grotesk (Space Grotesk + Source Sans 3), Syne (Syne + Outfit) i Instrument (Instrument Serif + Instrument Sans). Play w hero odpala mix bez przewijania do `#sets`.
