// All copy and content for the site lives here so it is easy to change per client.

export const CAFE = {
  name: "Jharoka",
  urdu: "جھروکہ",
  area: "M.M. Alam Road, Gulberg III, Lahore",
  phoneDisplay: "+92 335 4679492",
  whatsapp: "923354679492",
  instagram: "https://instagram.com/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=M.M.+Alam+Road+Gulberg+III+Lahore",
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: "1559496417-e7f25cb247f3",
  window: "1445116572660-236099ec97a0",
  bar: "1453614512568-c4024d13c247",
  terrace: "1600093463592-8e36ae95ef56",
  pourOver: "1442512595331-e89e73853f31",
  cake: "1565958011703-44f9829ba187",
  breakfast: "1513442542250-854d436a73f2",
  spread: "1504754524776-8f4f37790ca0",
  latte: "1541167760496-1628856ab772",
  chocolate: "1578985545062-69928b1d9587",
  room: "1521017432531-fbd92d768814",
};

export type MenuItem = { name: string; note: string; price: string };
export type MenuSection = {
  id: string;
  label: string;
  hours: string;
  photo: string;
  photoAlt: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "morning",
    label: "Breakfast",
    hours: "Served 8 am to 1 pm",
    photo: PHOTOS.breakfast,
    photoAlt: "Poached egg with avocado and sourdough",
    items: [
      { name: "Desi omelette on sourdough", note: "Masala omelette, green chutney, toasted house sourdough", price: "1,450" },
      { name: "Avocado toast", note: "Chilli oil, poached egg, pickled onion", price: "1,890" },
      { name: "Shakshuka", note: "Slow tomato and pepper sauce, feta, za'atar flatbread", price: "1,690" },
      { name: "Ricotta pancakes", note: "Berry compote, whipped butter, maple", price: "1,550" },
      { name: "Sunday halwa puri", note: "Chana, aloo bhujia, suji halwa, achar. Sundays only", price: "1,850" },
    ],
  },
  {
    id: "coffee",
    label: "Coffee & chai",
    hours: "All day",
    photo: PHOTOS.latte,
    photoAlt: "Milk being poured into a latte",
    items: [
      { name: "Espresso", note: "House blend, Brazil and Ethiopia", price: "650" },
      { name: "Flat white", note: "Double ristretto, silky milk", price: "890" },
      { name: "Spanish latte", note: "Condensed milk, hot or iced", price: "990" },
      { name: "Pistachio latte", note: "Our own pistachio paste, no syrups", price: "1,090" },
      { name: "Cardamom cold brew", note: "Steeped for 18 hours, green cardamom", price: "950" },
      { name: "Kashmiri chai", note: "Pink chai, crushed pistachio, bun maska on the side", price: "690" },
    ],
  },
  {
    id: "sweet",
    label: "Desserts",
    hours: "All day",
    photo: PHOTOS.cake,
    photoAlt: "Slice of layered cake with raspberries",
    items: [
      { name: "Basque cheesecake", note: "Burnt top, soft centre, served warm or cold", price: "1,250" },
      { name: "Gulab jamun tres leches", note: "Milk-soaked sponge, gulab jamun, rose cream", price: "1,190" },
      { name: "Pistachio kunafa", note: "Crisp kataifi, akawi cheese, sugar syrup", price: "1,390" },
      { name: "Chocolate fudge cake", note: "Dark chocolate, salted caramel", price: "1,150" },
    ],
  },
  {
    id: "evening",
    label: "Evenings",
    hours: "Served 6 pm to close",
    photo: PHOTOS.room,
    photoAlt: "Warmly lit café dining room in the evening",
    items: [
      { name: "Chapli burger", note: "Peshawari chapli patty, mint mayo, brioche", price: "2,150" },
      { name: "Smoked chicken sliders", note: "Three sliders, pickled slaw, chipotle", price: "1,750" },
      { name: "Lahori fish tacos", note: "Masala fried fish, lime crema, salsa", price: "1,950" },
      { name: "Truffle fries", note: "Parmesan, truffle oil, garlic aioli", price: "1,190" },
    ],
  },
];

export const HOURS = [
  { days: "Monday to Thursday", time: "8 am – 1 am" },
  { days: "Friday", time: "8 am – 12:30 pm, then 2 pm – 1 am" },
  { days: "Saturday and Sunday", time: "8 am – 2 am" },
];
