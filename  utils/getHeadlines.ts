const headlineMovies = [
  {
    title: 'The Forever Purge',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/e2b02e70-f1e3-11ec-b221-ab8de20f1a2f',
    id: 1,
    slug: '/film/the-forever-purge',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000350067/forever-purge-the_220x286_raw.jpg',
    madeYear: 2021,
    duration: '99 dk',
    description:
      "Kanun tanımaz bir grup insan, tek gecelik anarşiyle yetinmek istemez ve hiç bitmeyecek bir katliamla Amerika'yı ele geçirmeye karar verir. ",
  },
  {
    title: 'Best Sellers',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/65772f70-f1e4-11ec-b221-ab8de20f1a2f',
    id: 2,
    slug: '/film/cok-satanlar',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000349730/best-sellers_220x286_raw.jpg',
    madeYear: 2021,
    duration: '97 dk',
    description:
      'Genç bir yayıncıya yardım etmek için isteksizce son bir kitap turuna çıkan huysuz, emekli bir yazarın hikayesi. ',
  },
  {
    title: 'F9: The Fast Saga',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/e477a7f0-f2a7-11ec-89fd-4df7c453ee7a',
    id: 3,
    slug: '/film/f9-the-fast-saga',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000350064/f9-the-fast-saga_220x286_raw.jpg',
    madeYear: 2021,
    duration: '136 dk',
    description:
      "Serinin 9. filminde, Dominic ve arkadaşları, bu kez Dom'un kişisel geçmişinden gelen bir tehdide karşı mücadele ediyor.",
  },
  {
    title: 'The Electrical Life of Lois Wain',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/91f32a80-f1e5-11ec-b221-ab8de20f1a2f',
    id: 4,
    slug: '/film/louis-wainin-renkli-dunyasi',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000283546/electrical-life-of-louis-wain_220x286_raw.jpg',
    madeYear: 2021,
    duration: '106 dk',
    description:
      "Kendi ruh halinin yansımalarını da taşıyan kedi resimleriyle tanınan sanatçı Louis Wain'in hikayesi.",
  },
  {
    title: 'The Courier',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/f081f780-a842-11ec-853b-2556623f8110',
    id: 5,
    slug: '/film/kurye-v2',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000303656/courier-the-turkce_220x286_raw.jpg',
    madeYear: 2020,
    duration: '106 dk',
    description:
      "Wynne, Soğuk Savaş'ın en gergin zamanlarında Küba Füze Krizi'nin daha fazla büyümemesi için, MI-6 ve CIA tarafından Sovyetlerden istihbarat toplamakla görevlendirilir.",
  },

  {
    title: 'Halloween Kills',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/033dc4f0-1f83-11ed-a0b5-01deccad06c0',
    id: 6,
    slug: '/film/halloween-kills',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000350096/halloween-kills_220x286_raw.jpg',
    madeYear: 2021,
    duration: '100 dk',
    description:
      "Michael Myers'ın hayatta kalan kurbanları, onun hala yaşadığını öğrendikten sonra kanunsuz bir mafya grubu kurup, bu terör saltanatına son vermeye yemin ederler.",
  },
  {
    title: 'Meander',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/71266e20-bf22-11ec-a4f3-4f8d980faf78',
    id: 7,
    slug: '/film/tup',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000349731/meander-2020-turkce_220x286_raw.jpg',
    madeYear: 2020,
    duration: '87 dk',
    description:
      'Genç bir kadın, uyandığında kendini ölümcül tuzaklarla dolu bir tüpün içinde bulur. Hayatta kalmak ve kurtulmak için müthiş bir mücadeleye girişir.',
  },
  {
    title: 'Fatale',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/3fb9cb30-9b81-11ec-b16e-4d2e3c5e6024',
    id: 8,
    slug: '/film/fatale',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000325085/fatale-2020_220x286_raw.jpg',
    madeYear: 2020,
    duration: '98 dk',
    description:
      'Evli bir adam, tek gecelik bir ilişkiden sonra kendisini kurnaz bir dedektifin son cinayet soruşturmasının içinde bulur. ',
  },
  {
    title: 'Mainstream',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/fabfb9f0-6e2f-11ec-bc79-8fb997780b11',
    id: 9,
    slug: '/film/mainstream',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000280028/mainstream-2020_220x286_raw.jpg',
    madeYear: 2020,
    duration: '90 dk',
    description:
      'Fenomen olmaya çalışırken, kendi kişiliklerinden uzaklaşan genç bir kadın ve arkadaşlarının hikayesi.',
  },
  {
    title: 'A Taste Of Hunger',
    posterUrl:
      'https://media-designman.beinconnect.com.tr/a0241fb0-23b8-11ed-953b-05ed129d9ad1',
    id: 10,
    slug: '/film/a-taste-of-hunger',
    imageUrl:
      'https://mediacms01.digiturkplay.com/sa_bc/PT0000350303/taste-of-hunger-a-turkce_220x286_raw.jpg',
    madeYear: 2021,
    duration: '98 dk',
    description:
      'Usta şef Carsten ve eşi Maggie, mutfak dünyasının en yüksek ödülü olan Michelin yıldızına taliptir. Ancak hayat, ikilinin istediği gibi gitmeyecektir.',
  },
];

export function getHeadlines() {
  return headlineMovies;
}
