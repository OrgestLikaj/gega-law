// Profile page copy, per language. Based on the client's own text
// ("Gentjan Gega.docx", Nov 2026), rewritten in the third person at the
// user's request; the English is our translation.
// Panes marked `todo: true` are waiting for real information from the client:
// they render as dashed placeholders in `astro dev` and are left out of the
// production build while they are empty.

export type Lang = 'sq' | 'en';
export type Page = 'home' | 'studio';

export interface Pane {
  id: string;
  title: string;
  intro?: string[];
  items?: string[];
  areas?: { name: string; text: string }[];
  outro?: string[];
  todo?: boolean;
}

export interface Content {
  lang: Lang;
  locale: string;
  routes: Record<Page, string>;
  meta: { title: string; description: string };
  nav: { profile: string; studio: string; practice: string; contact: string };
  practiceAnchor: string; // id of the practice section on the studio page
  switchLabel: string;
  role: string;
  founder: string;
  labels: {
    tel: string;
    office: string;
    since: string;
    vcard: string;
    print: string;
    call: string;
    directions: string;
    hours: string;
    closed: string;
    days: string[]; // Monday first
    todo: string;
    more: string;
    menu: string;
  };
  intro: string;
  panes: Pane[];
  quote: string;
  studio: { eyebrow: string; title: string; text: string; altEntrance: string; altDesk: string };
  contact: { eyebrow: string; title: string; text: string };
  portraitAlt: string;
  disclaimer: string;
  rights: string;
  credit: string;
}

const sq: Content = {
  lang: 'sq',
  locale: 'sq_AL',
  routes: { home: '/', studio: '/studio/' },
  meta: {
    title: 'Av. Gentjan Gega – Studio Ligjore Gega, Tiranë',
    description:
      'Av. Gentjan Gega, themelues dhe drejtues i Studio Ligjore Gega në Tiranë. Avokat që prej vitit 2016: e drejta penale, civile, administrative, tregtare, pronësia dhe trashëgimia.',
  },
  nav: { profile: 'Profili', studio: 'Studio', practice: 'Praktika', contact: 'Kontakt' },
  practiceAnchor: 'praktika',
  switchLabel: 'English',
  role: 'Avokat',
  founder: 'Themelues dhe Drejtues, Studio Ligjore Gega',
  labels: {
    tel: 'Tel',
    office: 'Zyra',
    since: 'Avokat që prej',
    vcard: 'vCard',
    print: 'Printo',
    call: 'Telefono',
    directions: 'Udhëzime në hartë',
    hours: 'Orari',
    closed: 'Mbyllur',
    days: ['E hënë', 'E martë', 'E mërkurë', 'E enjte', 'E premte', 'E shtunë', 'E diel'],
    todo: 'Për t’u plotësuar nga klienti',
    more: 'Njihuni me studion',
    menu: 'Menuja',
  },
  intro:
    'Që prej vitit 2016, Av. Gentjan Gega ushtron profesionin e avokatit dhe drejton Studio Ligjore Gega, duke e orientuar veprimtarinë e tij drejt përfaqësimit juridik, këshillimit ligjor dhe ndërtimit të zgjidhjeve të argumentuara, të përshtatura sipas specifikave të çdo rasti.',
  panes: [
    {
      id: 'biografia',
      title: 'Biografia',
      intro: [
        'Av. Gentjan Gega është themelues dhe drejtues i Studio Ligjore Gega, me seli në Tiranë, Shqipëri. Formimi i tij akademik, përvoja institucionale dhe ushtrimi i profesionit të avokatit përbëjnë bazën e një qasjeje profesionale të orientuar drejt analizës së thelluar juridike, strategjisë së përfaqësimit dhe mbrojtjes së të drejtave dhe interesave të ligjshme të klientëve.',
        'Rrugëtimi i tij profesional është karakterizuar nga ndërthurja e përvojës në strukturat e Policisë së Shtetit me ushtrimin e pavarur të profesionit të avokatit. Kjo përvojë i ka ndihmuar të ndërtojë një këndvështrim praktik mbi zbatimin e ligjit, funksionimin institucional dhe rëndësinë e analizës së kujdesshme të fakteve, provave dhe rrethanave që përcaktojnë trajtimin juridik të një çështjeje.',
        'Që prej vitit 2016, ai ushtron profesionin e avokatit dhe drejton Studio Ligjore Gega, duke e orientuar veprimtarinë e tij drejt përfaqësimit juridik, këshillimit ligjor dhe ndërtimit të zgjidhjeve të argumentuara, të përshtatura sipas specifikave të çdo rasti.',
        'Në ushtrimin e profesionit, Av. Gega i kushton rëndësi të veçantë përgatitjes profesionale, rigorozitetit në interpretimin dhe zbatimin e ligjit, analizës së provave dhe vlerësimit të kujdesshëm të mundësive procedurale. Ai beson se çdo çështje kërkon një qasje individuale, një strategji të menduar dhe një përfaqësim të mbështetur në argumente juridike të qëndrueshme.',
      ],
    },
    {
      id: 'fushat',
      title: 'Fushat e praktikës',
      intro: [
        'Praktika e tij profesionale përfshin disa fusha të së drejtës, me fokus në përfaqësimin juridik, këshillimin ligjor dhe trajtimin e mosmarrëveshjeve të individëve, familjeve dhe subjekteve tregtare.',
      ],
      areas: [
        { name: 'E drejta penale', text: 'Mbrojtja dhe përfaqësimi juridik në çështjet penale, me vëmendje të veçantë ndaj garancive procedurale, të drejtave të personit, analizës së provave dhe zbatimit të ligjit penal material dhe procedural.' },
        { name: 'E drejta civile', text: 'Trajtimi i mosmarrëveshjeve civile, marrëdhënieve të detyrimeve, përgjegjësisë juridike dhe kërkimeve për mbrojtjen e të drejtave subjektive dhe interesave të ligjshme.' },
        { name: 'E drejta administrative', text: 'Përfaqësimi në mosmarrëveshjet me administratën publike, shqyrtimi dhe kundërshtimi i akteve administrative, si dhe mbrojtja e të drejtave të personave në marrëdhëniet juridike administrative.' },
        { name: 'E drejta tregtare dhe kontraktore', text: 'Këshillimi juridik në marrëdhëniet tregtare dhe kontraktore, analiza e detyrimeve ndërmjet palëve dhe trajtimi i problematikave ligjore që lidhen me veprimtarinë e subjekteve tregtare.' },
        { name: 'Pronësia dhe çështjet kadastrale', text: 'Trajtimi i mosmarrëveshjeve mbi pronësinë dhe të drejtat reale, çështjeve të regjistrimit të pasurive të paluajtshme dhe problematikave që lidhen me dokumentacionin pronësor dhe marrëdhëniet juridike mbi pasurinë.' },
        { name: 'E drejta familjare dhe trashëgimore', text: 'Trajtimi i çështjeve që lidhen me marrëdhëniet familjare, pasojat pasurore, të drejtat trashëgimore dhe problematikat juridike që lindin në fushën e familjes dhe trashëgimisë.' },
        { name: 'E drejta kushtetuese dhe të drejtat e njeriut', text: 'Analiza e çështjeve që lidhen me të drejtat dhe liritë themelore, garancitë e procesit të rregullt ligjor dhe standardet e Konventës Evropiane për të Drejtat e Njeriut, sipas kushteve dhe procedurave të zbatueshme për çdo rast.' },
        { name: 'Këshillimi juridik për biznese', text: 'Asistenca juridike në marrëdhëniet tregtare, kontratat, detyrimet dhe vlerësimin e rreziqeve ligjore që mund të ndikojnë në veprimtarinë e subjekteve të biznesit.' },
      ],
      outro: [
        'Në çdo fushë, synimi është të ofrohet një trajtim juridik i strukturuar, i mbështetur në analizën e fakteve dhe dokumentacionit, interpretimin e ligjit dhe vlerësimin e mundësive konkrete për mbrojtjen e interesave të klientit.',
      ],
    },
    {
      id: 'arsimimi',
      title: 'Arsimimi',
      intro: [
        'Formimi i tij akademik juridik nisi në Fakultetin e Drejtësisë të Universitetit të Tiranës, ku përfundoi studimet e larta në vitin 2013. Në vijim, ka përfunduar dy programe master, duke zgjeruar njohuritë dhe formimin e tij në fushat e së drejtës private, biznesit dhe së drejtës së biznesit.',
      ],
      items: [
        'Master i Shkencave në të Drejtën Private dhe të Biznesit',
        'Master në Business Law (E Drejta e Biznesit)',
        'Fakulteti i Drejtësisë, Universiteti i Tiranës, 2013',
      ],
      outro: [
        'Ky formim akademik përbën një bazë të rëndësishme për trajtimin e marrëdhënieve juridike private, detyrimeve kontraktore, mosmarrëveshjeve tregtare dhe problematikave ligjore që lidhen me veprimtarinë e subjekteve të biznesit.',
        'Ndërthurja e studimeve juridike me përvojën institucionale dhe praktikën profesionale përforcon qasjen e tij ndaj çështjeve që kërkojnë jo vetëm njohjen e dispozitave ligjore, por edhe interpretimin e tyre në raport me faktet, dokumentacionin dhe pasojat juridike konkrete.',
      ],
    },
    {
      id: 'pervoja',
      title: 'Përvoja',
      intro: [
        'Përpara se t’i përkushtohej ushtrimit të profesionit të avokatit, Av. Gega ka punuar në strukturat e Policisë së Shtetit. Kjo periudhë përbën një pjesë të rëndësishme të rrugëtimit të tij profesional dhe ka kontribuar në formimin e një perspektive praktike mbi zbatimin e ligjit dhe funksionimin e institucioneve.',
        'Që prej vitit 2016, veprimtaria e tij profesionale është përqendruar në ushtrimin e profesionit të avokatit dhe drejtimin e Studio Ligjore Gega. Në këtë kuadër, angazhimi i tij përfshin analizimin e problematikave juridike, identifikimin e bazës ligjore të kërkimeve, vlerësimin e provave dhe dokumentacionit, si dhe ndërtimin e strategjive të përshtatura për mbrojtjen e interesave të ligjshme të klientëve.',
        'Çdo çështje trajtohet duke marrë në konsideratë rrethanat konkrete, legjislacionin e zbatueshëm dhe kërkesat procedurale përkatëse. Përgatitja e kujdesshme, parashikimi i kundërshtimeve të mundshme dhe argumentimi i strukturuar janë elemente thelbësore të kësaj qasjeje.',
      ],
    },
    {
      id: 'publikime',
      title: 'Publikime',
      intro: ['Përveç ushtrimit të profesionit të avokatit, Av. Gega është bashkautor i gjashtë publikimeve shkencore.'],
      outro: [
        'Ky kontribut pasqyron interesin e tij për studimin e çështjeve juridike dhe zhvillimin e mendimit shkencor në fushën e së drejtës. Veprimtaria akademike dhe ajo profesionale plotësojnë njëra-tjetrën, duke theksuar rëndësinë e analizës së argumentuar, interpretimit të kujdesshëm të dispozitave ligjore dhe vlerësimit kritik të problematikave që paraqiten në praktikë.',
        'Ai e konsideron zhvillimin e vazhdueshëm profesional një pjesë të rëndësishme të përgjegjësisë së avokatit, veçanërisht në kushtet e ndryshimeve legjislative dhe zhvillimit të jurisprudencës.',
      ],
    },
    {
      id: 'filozofia',
      title: 'Filozofia profesionale',
      intro: [
        'Filozofia e tij profesionale mbështetet në katër shtylla kryesore: analizën juridike, strategjinë e përfaqësimit, integritetin profesional dhe përgjegjësinë ndaj klientit.',
        'Përfaqësimi juridik cilësor kërkon më shumë sesa njohjen formale të ligjit. Ai kërkon kuptimin e plotë të rrethanave faktike, shqyrtimin e dokumentacionit, identifikimin e argumenteve vendimtare dhe vlerësimin paraprak të kundërshtimeve që mund të paraqiten gjatë procedurës.',
        'Për këtë arsye, çdo çështje duhet të trajtohet me kujdes, duke përcaktuar bazën juridike, objektivat e përfaqësimit dhe rrugët procedurale që mund të ndiqen. Një strategji e qëndrueshme ndërtohet mbi fakte të verifikueshme, argumente ligjore dhe një vlerësim realist të mundësive dhe rreziqeve.',
        'Në marrëdhënien me klientët, ai i kushton rëndësi komunikimit të qartë, konfidencialitetit profesional dhe informimit mbi pozicionin juridik të çështjes. Ai beson se marrëdhënia profesionale duhet të ndërtohet mbi besimin, transparencën dhe kuptimin e qartë të të drejtave, detyrimeve dhe alternativave ligjore në dispozicion.',
        'Av. Gega e konsideron profesionin e avokatit një përgjegjësi që kërkon integritet, përgatitje të vazhdueshme, vëmendje ndaj hollësive dhe respektim të parimeve themelore të drejtësisë. Angazhimi i tij është që çdo çështje e marrë përsipër të trajtohet me seriozitet, analizë të kujdesshme dhe argumentim juridik të strukturuar, duke i ofruar klientit një vlerësim profesional të pozicionit të tij dhe të rrugëve ligjore në dispozicion.',
      ],
    },
    {
      id: 'gjuhet',
      title: 'Gjuhët',
      items: ['Shqip', 'Anglisht', 'Italisht', 'Greqisht'],
      outro: [
        'Njohja e këtyre gjuhëve mundëson komunikimin me klientë vendas dhe ndërkombëtarë dhe lehtëson trajtimin e marrëdhënieve profesionale në kontekste ndërgjuhësore.',
      ],
    },
    { id: 'perfaqesime', title: 'Përfaqësime të spikatura', todo: true },
  ],
  quote:
    'Përfaqësimi juridik cilësor ndërtohet mbi njohjen e ligjit, analizën e fakteve, forcën e argumentit dhe përgjegjësinë profesionale.',
  studio: {
    eyebrow: 'Studio',
    title: 'Studio Ligjore Gega',
    text: 'Studio Ligjore Gega ofron këshillim juridik dhe përfaqësim profesional për individë, familje dhe subjekte tregtare, duke e trajtuar çdo çështje në përputhje me natyrën e saj, kompleksitetin faktik dhe kuadrin ligjor të zbatueshëm.',
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
  credit: 'Dizajnuar dhe zhvilluar nga',
};

const en: Content = {
  lang: 'en',
  locale: 'en_US',
  routes: { home: '/en/', studio: '/en/studio/' },
  meta: {
    title: 'Gentjan Gega, Attorney at Law – Studio Ligjore Gega, Tirana',
    description:
      'Gentjan Gega, founder and head of Studio Ligjore Gega in Tirana, Albania. Attorney since 2016: criminal, civil, administrative, commercial, property and inheritance law.',
  },
  nav: { profile: 'Profile', studio: 'The Studio', practice: 'Practice', contact: 'Contact' },
  practiceAnchor: 'practice',
  switchLabel: 'Shqip',
  role: 'Attorney at Law',
  founder: 'Founder and Head, Studio Ligjore Gega',
  labels: {
    tel: 'Tel',
    office: 'Office',
    since: 'Attorney since',
    vcard: 'vCard',
    print: 'Print',
    call: 'Call',
    directions: 'Get directions',
    hours: 'Office hours',
    closed: 'Closed',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    todo: 'To be provided by the client',
    more: 'About the studio',
    menu: 'Menu',
  },
  intro:
    'Since 2016 Gentjan Gega has practised as an attorney and led Studio Ligjore Gega, focusing his work on legal representation, legal advice and well-argued solutions tailored to the specifics of each case.',
  panes: [
    {
      id: 'biography',
      title: 'Biography',
      intro: [
        'Gentjan Gega is an attorney and the founder and head of Studio Ligjore Gega, based in Tirana, Albania. His academic background, institutional experience and practice as an attorney form the basis of a professional approach focused on in-depth legal analysis, representation strategy and the protection of his clients’ rights and legitimate interests.',
        'His professional path combines experience in the structures of the Albanian State Police with the independent practice of law. This experience has helped him build a practical perspective on law enforcement, on how institutions work, and on the importance of carefully analysing the facts, evidence and circumstances that determine the legal treatment of a matter.',
        'Since 2016 he has practised as an attorney and led Studio Ligjore Gega, focusing his work on legal representation, legal advice and well-argued solutions tailored to the specifics of each case.',
        'In his practice he places particular importance on professional preparation, rigour in interpreting and applying the law, analysis of evidence and careful assessment of procedural options. He believes every matter requires an individual approach, a considered strategy and representation built on sound legal arguments.',
      ],
    },
    {
      id: 'practice-areas',
      title: 'Practice Areas',
      intro: [
        'His practice covers several areas of law, focusing on legal representation, legal advice and the resolution of disputes for individuals, families and businesses.',
      ],
      areas: [
        { name: 'Criminal Law', text: 'Defence and legal representation in criminal matters, with particular attention to procedural safeguards, the rights of the person, analysis of evidence and the application of substantive and procedural criminal law.' },
        { name: 'Civil Law', text: 'Civil disputes, obligations, legal liability and claims to protect subjective rights and legitimate interests.' },
        { name: 'Administrative Law', text: 'Representation in disputes with the public administration, review and challenge of administrative acts, and protection of individuals’ rights in administrative legal relations.' },
        { name: 'Commercial & Contract Law', text: 'Legal advice on commercial and contractual relations, analysis of obligations between parties, and legal issues arising from the activity of businesses.' },
        { name: 'Property & Cadastral Matters', text: 'Disputes over ownership and property rights, registration of real estate, and issues concerning title documents and legal relations over property.' },
        { name: 'Family & Inheritance Law', text: 'Family relations and their property consequences, inheritance rights and the legal issues that arise in family and succession matters.' },
        { name: 'Constitutional Law & Human Rights', text: 'Matters concerning fundamental rights and freedoms, due-process guarantees and the standards of the European Convention on Human Rights, subject to the conditions and procedures applicable in each case.' },
        { name: 'Legal Advice for Businesses', text: 'Legal assistance with commercial relations, contracts, obligations and the assessment of legal risks that may affect a business.' },
      ],
      outro: [
        'In every area, the aim is a structured legal approach, grounded in analysis of the facts and documents, interpretation of the law and a realistic assessment of the options for protecting the client’s interests.',
      ],
    },
    {
      id: 'education',
      title: 'Education',
      intro: [
        'His legal education began at the Faculty of Law of the University of Tirana, where he graduated in 2013. He went on to complete two master’s programmes, broadening his knowledge of private law, business and business law.',
      ],
      items: [
        'Master of Science in Private and Business Law',
        'Master in Business Law',
        'Faculty of Law, University of Tirana, 2013',
      ],
      outro: [
        'This academic background is an important foundation for handling private legal relations, contractual obligations, commercial disputes and the legal issues connected with business activity.',
        'Combining legal studies with institutional experience and professional practice strengthens his approach to matters that require not only knowledge of the law, but also its interpretation in light of the facts, the documents and the concrete legal consequences.',
      ],
    },
    {
      id: 'experience',
      title: 'Experience',
      intro: [
        'Before dedicating himself to the practice of law, Gentjan Gega worked in the structures of the Albanian State Police. This period is an important part of his professional path and helped form a practical perspective on law enforcement and on how institutions work.',
        'Since 2016 his work has focused on practising as an attorney and leading Studio Ligjore Gega. This includes analysing legal problems, identifying the legal basis of claims, assessing evidence and documents, and building strategies tailored to protect his clients’ legitimate interests.',
        'Every matter is handled in light of its specific circumstances, the applicable legislation and the relevant procedural requirements. Careful preparation, anticipating possible objections and structured argument are essential to this approach.',
      ],
    },
    {
      id: 'publications',
      title: 'Publications',
      intro: ['Alongside his practice, Gentjan Gega is co-author of six scientific publications.'],
      outro: [
        'This work reflects his interest in the study of legal issues and the development of legal scholarship. Academic and professional work complement each other, underlining the importance of reasoned analysis, careful interpretation of legal provisions and critical assessment of the problems that arise in practice.',
        'He considers continuous professional development an important part of an attorney’s responsibility, especially as legislation changes and case law evolves.',
      ],
    },
    {
      id: 'philosophy',
      title: 'Professional Philosophy',
      intro: [
        'His professional philosophy rests on four pillars: legal analysis, representation strategy, professional integrity and responsibility to the client.',
        'Quality legal representation requires more than formal knowledge of the law. It requires a full understanding of the facts, review of the documents, identification of the decisive arguments and anticipation of the objections that may arise during the proceedings.',
        'For this reason every matter must be handled with care, establishing the legal basis, the objectives of the representation and the procedural routes available. A sound strategy is built on verifiable facts, legal arguments and a realistic assessment of opportunities and risks.',
        'In his relationship with clients he values clear communication, professional confidentiality and keeping them informed of the legal position of their matter. He believes the professional relationship must be built on trust, transparency and a clear understanding of the rights, obligations and legal alternatives available.',
        'He regards the legal profession as a responsibility that demands integrity, continuous preparation, attention to detail and respect for the fundamental principles of justice. His commitment is that every matter he takes on is handled with seriousness, careful analysis and structured legal argument, giving the client a professional assessment of their position and of the legal routes available.',
      ],
    },
    {
      id: 'languages',
      title: 'Languages',
      items: ['Albanian', 'English', 'Italian', 'Greek'],
      outro: [
        'Knowledge of these languages makes it possible to work with both local and international clients and eases professional relations across languages.',
      ],
    },
    { id: 'representations', title: 'Notable Representations', todo: true },
  ],
  quote:
    'Quality legal representation is built on knowledge of the law, analysis of the facts, the strength of the argument and professional responsibility.',
  studio: {
    eyebrow: 'The Studio',
    title: 'Studio Ligjore Gega',
    text: 'Studio Ligjore Gega provides legal advice and professional representation for individuals, families and businesses, handling each matter according to its nature, its factual complexity and the applicable legal framework.',
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
  credit: 'Designed and developed by',
};

export const content = { sq, en } satisfies Record<Lang, Content>;
