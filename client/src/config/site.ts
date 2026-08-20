export const site = {
  name: "Matt Cloud Music",
  legalName: "Matt Cloud Music",
  city: "",
  phone: "",
  phoneHref: "",
  email: "",
  emailHref: "",
  address: {
    street: "",
    postal: "",
    city: "",
    full: "",
  },
  hours: [] as { daysPl: string; daysEn: string; hours: string }[],
  social: {
    soundcloud: "https://soundcloud.com/mattmusicaroundthetown/sets/sound-corners",
    soundcloudProfile: "https://soundcloud.com/mattmusicaroundthetown",
    instagram: "https://instagram.com/",
  },
  soundcloudEmbed:
    "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/mattmusicaroundthetown/sets/sound-corners&color=%23E2453A&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  mapEmbed: "",
  mapLink: "",
  addPattern: {
    name: "AddPattern Marcin Krzysztoszek",
    url: "https://addpattern.pl",
  },
} as const;
