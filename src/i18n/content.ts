// All page copy, per language. Panes marked `todo: true` are waiting for
// real information from the client: they render as dashed placeholders in
// `astro dev` and are left out of the production build.

export type Lang = 'sq' | 'en';

export type Pane =
  | { id: string; title: string; kind: 'text'; body: string[]; todo?: boolean }
  | { id: string; title: string; kind: 'areas'; items: { name: string; text: string }[]; todo?: boolean }
  | { id: string; title: string; kind: 'list'; items: string[]; todo?: boolean };

export interface Content {
  lang: Lang;
  locale: string;
  path: string;
  meta: { title: string; description: string };
  nav: { profile: string; practice: string; studio: string; contact: string };
  switchLabel: string;
  role: string;
  founder: string;
  labels: {
    tel: string;
    office: string;
    vcard: string;
    print: string;
    call: string;
    directions: string;
    hours: string;
    closed: string;
    days: string[]; // Monday first
    todo: string;
    menu: string;
  };
  intro: string;
  panes: Pane[];
  studio: { eyebrow: string; title: string; text: string; altEntrance: string; altDesk: string };
  contact: { eyebrow: string; title: string; text: string };
  portraitAlt: string;
  disclaimer: string;
  rights: string;
}

const sq: Content = {
  lang: 'sq',
  locale: 'sq_AL',
  path: '/',
  meta: {
    title: 'Av. Gentjan Gega – Studio Ligjore Gega, Tiranë',
    description:
      'Av. Gentjan Gega, avokat në Tiranë dhe themelues i Studio Ligjore Gega. Këshillim dhe përfaqësim ligjor për individë dhe biznese.',
  },
  nav: { profile: 'Profili', practice: 'Praktika', studio: 'Studio', contact: 'Kontakt' },
  switchLabel: 'English',
  role: 'Avokat',
  founder: 'Themelues, Studio Ligjore Gega',
  labels: {
    tel: 'Tel',
    office: 'Tiranë',
    vcard: 'vCard',
    print: 'Printo',
    call: 'Telefono',
    directions: 'Udhëzime në hartë',
    hours: 'Orari',
    closed: 'Mbyllur',
    days: ['E hënë', 'E martë', 'E mërkurë', 'E enjte', 'E premte', 'E shtunë', 'E diel'],
    todo: 'Për t’u plotësuar nga klienti',
    menu: 'Menu',
  },
  intro:
    'Këshillim dhe përfaqësim ligjor në Tiranë, me një qasje të drejtpërdrejtë: analizë e kujdesshme e çështjes, komunikim i qartë dhe përfaqësim i vendosur.',
  panes: [
    {
      id: 'biografia',
      title: 'Biografia',
      kind: 'text',
      body: [
        'Av. Gentjan Gega është avokat në Tiranë dhe themelues i Studio Ligjore Gega, një studio ligjore që ofron këshillim dhe përfaqësim për individë, familje dhe biznese.',
        'Puna e studios nis gjithmonë me një konsultim: çështja analizohet në detaje, klientit i shpjegohen qartë opsionet ligjore dhe rreziqet, dhe hartohet një plan veprimi para se të ndërmerret çdo hap.',
        'Studio ndodhet në qendër të Tiranës, në Rrugën Qemal Stafa, dhe pret klientë me takim gjatë ditëve të punës.',
      ],
    },
    {
      id: 'praktika',
      title: 'Fushat e praktikës',
      kind: 'areas',
      items: [
        { name: 'E drejta civile dhe kontratat', text: 'Hartim dhe shqyrtim kontratash, detyrime, dëmshpërblime dhe mosmarrëveshje civile.' },
        { name: 'E drejta tregtare', text: 'Themelim shoqërish, marrëveshje ortakësh, këshillim i vazhdueshëm për biznese.' },
        { name: 'E drejta penale', text: 'Mbrojtje në të gjitha fazat e procedimit penal, nga hetimi deri në gjykim.' },
        { name: 'Familja dhe trashëgimia', text: 'Zgjidhje martese, kujdestari, detyrime ushqimore, testamente dhe pjesëtim pasurie.' },
        { name: 'Pasuritë e paluajtshme', text: 'Shitblerje, regjistrim pronash, legalizime dhe mosmarrëveshje pronësie.' },
        { name: 'E drejta administrative', text: 'Ankime ndaj akteve administrative dhe përfaqësim para institucioneve publike.' },
        { name: 'E drejta e punës', text: 'Kontrata pune, largime nga puna dhe mosmarrëveshje mes punëdhënësit dhe punëmarrësit.' },
        { name: 'Gjyqësori', text: 'Përfaqësim para gjykatave të shkallës së parë, Gjykatës së Apelit dhe Gjykatës së Lartë.' },
      ],
    },
    { id: 'perfaqesime', title: 'Përfaqësime të spikatura', kind: 'list', items: [], todo: true },
    { id: 'arsimimi', title: 'Arsimimi', kind: 'list', items: [], todo: true },
    { id: 'licencimi', title: 'Licencimi', kind: 'list', items: ['Dhoma Kombëtare e Avokatisë, Shqipëri'] },
    { id: 'gjuhet', title: 'Gjuhët', kind: 'list', items: ['Shqip'], todo: true },
  ],
  studio: {
    eyebrow: 'Studio',
    title: 'Në qendër të Tiranës',
    text: 'Zyra e studios ndodhet në Pallatin SCY, Nr. 31, në Rrugën Qemal Stafa. Takimet bëhen me rezervim paraprak.',
    altEntrance: 'Hyrja e Studio Ligjore Gega, Pallati SCY nr. 31',
    altDesk: 'Zyra e Av. Gentjan Gega',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Caktoni një konsultim',
    text: 'Telefononi studion për të caktuar një takim. Ju lutemi mos dërgoni informacion konfidencial para se të keni konfirmuar përfaqësimin.',
  },
  portraitAlt: 'Av. Gentjan Gega në zyrën e tij',
  disclaimer:
    'Informacioni në këtë faqe ka karakter të përgjithshëm dhe nuk përbën këshillë ligjore. Kontakti përmes kësaj faqeje nuk krijon marrëdhënie avokat–klient.',
  rights: 'Të gjitha të drejtat e rezervuara.',
};

const en: Content = {
  lang: 'en',
  locale: 'en_US',
  path: '/en/',
  meta: {
    title: 'Gentjan Gega, Attorney at Law – Studio Ligjore Gega, Tirana',
    description:
      'Gentjan Gega, attorney in Tirana, Albania, and founder of Studio Ligjore Gega. Legal advice and representation for individuals and businesses.',
  },
  nav: { profile: 'Profile', practice: 'Practice', studio: 'Office', contact: 'Contact' },
  switchLabel: 'Shqip',
  role: 'Attorney at Law',
  founder: 'Founder, Studio Ligjore Gega',
  labels: {
    tel: 'Tel',
    office: 'Tirana',
    vcard: 'vCard',
    print: 'Print',
    call: 'Call',
    directions: 'Get directions',
    hours: 'Office hours',
    closed: 'Closed',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    todo: 'To be provided by the client',
    menu: 'Menu',
  },
  intro:
    'Legal advice and representation in Tirana, with a direct approach: careful analysis of every matter, clear communication and determined advocacy.',
  panes: [
    {
      id: 'biography',
      title: 'Biography',
      kind: 'text',
      body: [
        'Gentjan Gega is an attorney in Tirana, Albania, and the founder of Studio Ligjore Gega, a law studio advising and representing individuals, families and businesses.',
        'Every engagement starts with a consultation: the matter is reviewed in detail, the client’s legal options and risks are explained plainly, and a course of action is agreed before any step is taken.',
        'The studio is located in central Tirana, on Qemal Stafa Street, and meets clients by appointment on working days.',
      ],
    },
    {
      id: 'practice',
      title: 'Practice Areas',
      kind: 'areas',
      items: [
        { name: 'Civil Law & Contracts', text: 'Drafting and review of contracts, obligations, damages and civil disputes.' },
        { name: 'Commercial Law', text: 'Company formation, shareholder agreements and ongoing counsel for businesses.' },
        { name: 'Criminal Defense', text: 'Defense at every stage of criminal proceedings, from investigation to trial.' },
        { name: 'Family & Inheritance', text: 'Divorce, custody, maintenance, wills and division of estates.' },
        { name: 'Real Estate', text: 'Property sales, registration, legalisation and ownership disputes.' },
        { name: 'Administrative Law', text: 'Challenges to administrative acts and representation before public bodies.' },
        { name: 'Employment Law', text: 'Employment contracts, dismissals and employer–employee disputes.' },
        { name: 'Litigation', text: 'Representation before the courts of first instance, the Court of Appeal and the High Court.' },
      ],
    },
    { id: 'representations', title: 'Notable Representations', kind: 'list', items: [], todo: true },
    { id: 'education', title: 'Education', kind: 'list', items: [], todo: true },
    { id: 'admissions', title: 'Admissions', kind: 'list', items: ['National Chamber of Advocacy, Albania'] },
    { id: 'languages', title: 'Languages', kind: 'list', items: ['Albanian'], todo: true },
  ],
  studio: {
    eyebrow: 'Office',
    title: 'In the heart of Tirana',
    text: 'The studio is located at SCY Building, No. 31, on Qemal Stafa Street. Meetings are by appointment.',
    altEntrance: 'Entrance of Studio Ligjore Gega, SCY Building no. 31',
    altDesk: 'Office of Gentjan Gega',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Schedule a consultation',
    text: 'Call the studio to arrange a meeting. Please do not send confidential information before representation has been confirmed.',
  },
  portraitAlt: 'Gentjan Gega in his office',
  disclaimer:
    'The information on this website is general in nature and does not constitute legal advice. Contacting the studio through this website does not create an attorney–client relationship.',
  rights: 'All rights reserved.',
};

export const content = { sq, en } satisfies Record<Lang, Content>;
