import cassette from "../../assets/cassette.png?url";
import about from "../../assets/about.jpg?url";
import slider1 from "../../assets/slider-1.jpg?url";
import slider2 from "../../assets/slider-2.jpg?url";
import slider3 from "../../assets/slider-3.jpg?url";
import gallery1 from "../../assets/gallery-1.jpg?url";
import gallery2 from "../../assets/gallery-2.jpg?url";
import gallery3 from "../../assets/gallery-3.jpg?url";
import gallery4 from "../../assets/gallery-4.jpg?url";

export const images = {
  cassette,
  about,
  slider: [
    { src: slider1, altKey: "slider.alts.vinyl" },
    { src: slider2, altKey: "slider.alts.club" },
    { src: slider3, altKey: "slider.alts.decks" },
  ],
  gallery: [
    { src: gallery1, altKey: "gallery.alts.hand" },
    { src: gallery2, altKey: "gallery.alts.bass" },
    { src: gallery3, altKey: "gallery.alts.city" },
    { src: gallery4, altKey: "gallery.alts.vinyl" },
  ],
  sectionBg: {
    decks: slider3,
    bass: gallery2,
  },
} as const;
