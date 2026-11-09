// Studio page copy. Albanian is the client's text ("Gentjan Gega.docx",
// second part); English is our translation.
import type { Lang } from './content';

interface Named {
  name: string;
  text: string;
}

export interface StudioContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; values: string; lead: string };
  intro: string[];
  emphasis: string;
  strengths: { title: string; items: Named[] };
  team: { title: string; subtitle: string; body: string[] };
  practice: {
    title: string;
    principleLabel: string;
    items: { name: string; tags?: string; body: string[]; principle?: string }[];
  };
  process: { title: string; steps: Named[] };
  lawyer: { eyebrow: string; role: string; body: string[]; languagesLabel: string; languages: string; link: string };
  standards: { title: string; items: Named[] };
  principle: { title: string; quote: string; text: string };
}

const sq: StudioContent = {
  meta: {
    title: 'Studio Ligjore Gega – Këshillim juridik dhe përfaqësim, Tiranë',
    description:
      'Studio Ligjore Gega ofron këshillim juridik dhe përfaqësim profesional për individë, familje dhe subjekte tregtare në Tiranë. Analizë. Strategji. Përfaqësim.',
  },
  hero: {
    eyebrow: 'Studio Ligjore Gega',
    title: 'Analizë. Strategji. Përfaqësim.',
    values: 'Forca e argumentit. Vlera e bashkëpunimit. Përgjegjësia ndaj klientit.',
    lead: 'Çdo çështje kërkon më shumë se njohjen e ligjit. Kërkon analizën e duhur, strategjinë e menduar dhe përgatitjen profesionale.',
  },
  intro: [
    'Studio Ligjore Gega ofron këshillim juridik dhe përfaqësim profesional për individë, familje dhe subjekte tregtare, duke e trajtuar çdo çështje në përputhje me natyrën e saj, kompleksitetin faktik dhe kuadrin ligjor të zbatueshëm.',
    'Qasja jonë mbështetet në analizën e thelluar të fakteve dhe dokumentacionit, vlerësimin e provave, identifikimin e çështjeve juridike vendimtare dhe përcaktimin e një strategjie të përshtatur për rrethanat konkrete.',
    'Ne e konsiderojmë përfaqësimin juridik një proces që kërkon përgatitje, mendim kritik, koordinim profesional dhe vëmendje ndaj çdo elementi që mund të ndikojë në mbrojtjen e të drejtave dhe interesave të ligjshme të klientit.',
  ],
  emphasis:
    'Nuk mjafton të identifikohet problemi juridik. Duhet të kuptohet thelbi i tij, të vlerësohen mundësitë ligjore dhe të ndërtohet rruga më e përshtatshme për trajtimin e tij.',
  strengths: {
    title: 'Pikat tona të forta',
    items: [
      { name: 'Analizë juridike e thelluar', text: 'Çdo çështje shqyrtohet në raport me faktet, provat, dokumentacionin dhe legjislacionin përkatës. Synojmë të identifikojmë jo vetëm pretendimet kryesore, por edhe elementet juridike dhe procedurale që mund të përcaktojnë ecurinë e çështjes.' },
      { name: 'Punë në staf dhe bashkëpunim profesional', text: 'Çështjet trajtohen përmes një qasjeje të organizuar në staf, ku bashkëpunimi dhe shkëmbimi i mendimeve profesionale ndihmojnë në shqyrtimin e problematikave nga këndvështrime të ndryshme. Koordinimi i punës synon të forcojë analizën, të identifikojë çështjet që kërkojnë vëmendje të veçantë dhe të ruajë koherencën e strategjisë së përfaqësimit.' },
      { name: 'Strategji e individualizuar', text: 'Çdo çështje ka rrethanat, objektivat dhe kufizimet e veta. Për këtë arsye, rruga juridike përcaktohet pas analizës së rastit konkret, duke vlerësuar alternativat, përfitimet e mundshme dhe rreziqet që shoqërojnë secilën prej tyre.' },
      { name: 'Vëmendje ndaj provave dhe detajeve', text: 'Dokumentet, kundërthëniet, afatet, barra e provës dhe elementet procedurale shqyrtohen me kujdes. Një hollësi mund të ndryshojë vlerësimin juridik të një pretendimi; ndaj, çdo element me rëndësi analizohet në kontekstin e plotë të çështjes.' },
      { name: 'Mendim kritik dhe përgatitje kundërshtuese', text: 'Përpara përcaktimit të strategjisë, vlerësojmë edhe argumentet që mund të ngrihen nga pala kundërshtare, dobësitë e mundshme të pozicionit juridik dhe pengesat procedurale. Kjo qasje ndihmon në ndërtimin e argumenteve më të plota dhe në përgatitjen për zhvillimet e mundshme të çështjes.' },
      { name: 'Integritet, konfidencialitet dhe komunikim i qartë', text: 'Marrëdhënia me klientin ndërtohet mbi besimin, respektimin e etikës profesionale dhe komunikimin e përgjegjshëm. Klienti duhet të kuptojë pozicionin e tij juridik, alternativat në dispozicion dhe rreziqet që duhen marrë në konsideratë.' },
    ],
  },
  team: {
    title: 'Forca e punës në staf',
    subtitle: 'Një çështje. Perspektiva të ndryshme. Një strategji e koordinuar.',
    body: [
      'Në Studio Ligjore Gega, puna në staf është pjesë e qasjes sonë ndaj trajtimit të çështjeve juridike. Bashkëpunimi profesional synon që problematikat të mos vlerësohen në mënyrë të njëanshme, por të shqyrtohen në aspektin faktik, material dhe procedural.',
      'Në varësi të natyrës dhe kompleksitetit të çështjes, puna mund të përfshijë shqyrtimin e dokumentacionit, analizën e dispozitave ligjore, vlerësimin e provave, identifikimin e kundërshtimeve të mundshme dhe përgatitjen e akteve juridike.',
      'Kjo mënyrë organizimi ka rëndësi të veçantë në çështjet penale, civile dhe tregtare, ku përgatitja kërkon shpesh trajtimin e njëkohshëm të disa problematikave juridike.',
      'Puna në staf nuk zëvendëson përgjegjësinë individuale të avokatit për çështjen që merr përsipër. Përkundrazi, ajo synon ta mbështesë atë përmes koordinimit, analizës së strukturuar dhe kontrollit profesional të argumentimit.',
      'Synimi ynë është që çdo çështje të trajtohet me përgatitje të kujdesshme, bashkëpunim profesional dhe përgjegjësi të qartë.',
    ],
  },
  practice: {
    title: 'Fushat kryesore të praktikës',
    principleLabel: 'Parimi ynë',
    items: [
      {
        name: 'E drejta penale',
        tags: 'Mbrojtje juridike · Hetim · Gjykim · Garanci procedurale',
        body: [
          'Çështjet penale kërkojnë analizë të kujdesshme të materialit provues, të fakteve dhe të rolit individual të personit. Vëmendje i kushtohet ligjshmërisë së veprimeve procedurale, përdorshmërisë së provave, kualifikimit juridik të veprës së pretenduar dhe respektimit të të drejtave të personit.',
          'Angazhimi mund të përfshijë mbrojtjen gjatë hetimit dhe gjykimit, kërkesat për veprime hetimore, kundërshtimin e provave, shqyrtimin e masave të sigurimit dhe ushtrimin e mjeteve të ankimit, sipas fazës dhe rrethanave të çështjes.',
        ],
        principle: 'Çdo pretendim duhet të shqyrtohet në raport me provat dhe standardet ligjore që zbatohen për çështjen.',
      },
      {
        name: 'E drejta civile',
        tags: 'Mosmarrëveshje · Pronësi · Detyrime · Dëmshpërblim',
        body: [
          'Trajtimi i çështjeve civile përqendrohet te identifikimi i së drejtës së pretenduar, përcaktimi i objektit dhe shkakut juridik të kërkimit dhe vlerësimi i mjeteve provuese.',
          'Praktika përfshin mosmarrëveshjet kontraktore, përgjegjësinë civile, detyrimet, pronësinë, pasuritë e paluajtshme, çështjet kadastrale, trashëgiminë dhe kërkimet për dëmshpërblim.',
        ],
        principle: 'Një kërkim juridik duhet të jetë i qartë, i provueshëm dhe i ndërtuar mbi bazën e duhur ligjore.',
      },
      {
        name: 'E drejta tregtare dhe kontraktore',
        tags: 'Kontrata · Detyrime tregtare · Mosmarrëveshje biznesi',
        body: [
          'Marrëdhëniet tregtare kërkojnë qartësi kontraktore, vlerësim të rreziqeve dhe mbrojtje të interesave ekonomike të ligjshme. Asistenca juridike mund të përfshijë hartimin dhe shqyrtimin e kontratave, analizën e mospërmbushjes së detyrimeve, përgjegjësinë kontraktore, mosmarrëveshjet ndërmjet subjekteve tregtare dhe përfaqësimin në procedurat përkatëse.',
        ],
        principle: 'Këshillimi juridik duhet të marrë parasysh jo vetëm dispozitat ligjore, por edhe pasojat konkrete që një vendim mund të sjellë për marrëdhënien tregtare.',
      },
      {
        name: 'E drejta administrative',
        body: [
          'Përfaqësim në mosmarrëveshjet me administratën publike, shqyrtim dhe kundërshtim të akteve administrative, si dhe mbrojtje të të drejtave të individëve dhe subjekteve në marrëdhëniet me organet publike, sipas kushteve ligjore të zbatueshme.',
        ],
      },
      {
        name: 'Pronësia dhe çështjet kadastrale',
        body: [
          'Trajtim juridik i mosmarrëveshjeve mbi pronësinë dhe të drejtat reale, dokumentacionin pronësor, regjistrimin e pasurive të paluajtshme dhe problematikave që lidhen me titujt e pronësisë.',
        ],
      },
      {
        name: 'Fusha të tjera të praktikës',
        body: [
          'Studioja trajton gjithashtu çështje të së drejtës familjare dhe trashëgimore, të drejtës kushtetuese, mbrojtjes së të drejtave të njeriut dhe këshillimit juridik për individë e biznese, në përputhje me natyrën e çështjes dhe kompetencat ligjore.',
        ],
      },
    ],
  },
  process: {
    title: 'Si e trajtojmë një çështje',
    steps: [
      { name: 'Njohja e fakteve dhe objektivave', text: 'Shqyrtojmë rrethanat, dokumentacionin dhe nevojat e klientit për të kuptuar çështjen në tërësinë e saj.' },
      { name: 'Analiza ligjore dhe procedurale', text: 'Identifikojmë bazën ligjore, afatet, kushtet procedurale, provat dhe çështjet që kërkojnë verifikim.' },
      { name: 'Vlerësimi kritik i mundësive dhe rreziqeve', text: 'Shqyrtojmë alternativat e mundshme dhe argumentet kundërshtare, duke dalluar mundësitë reale nga ato që nuk mbështeten mjaftueshëm në fakte ose ligj.' },
      { name: 'Hartimi i strategjisë juridike', text: 'Përcaktojmë hapat e përshtatshëm, kërkimet, argumentet dhe mjetet procedurale që mund të përdoren në funksion të mbrojtjes së interesave të klientit.' },
      { name: 'Përfaqësimi dhe ndjekja e çështjes', text: 'Zbatojmë strategjinë e përcaktuar, duke ruajtur koherencën e argumentimit, komunikimin me klientin dhe vëmendjen ndaj zhvillimeve të çështjes.' },
    ],
  },
  lawyer: {
    eyebrow: 'Avokati',
    role: 'Themelues dhe Drejtues',
    body: [
      'Av. Gentjan Gega është themelues dhe drejtues i Studio Ligjore Gega në Tiranë. Ai përfundoi studimet e larta në Fakultetin e Drejtësisë të Universitetit të Tiranës në vitin 2013 dhe ushtron profesionin e avokatit që prej vitit 2016.',
      'Përvoja e mëparshme në strukturat e Policisë së Shtetit, e ndërthurur me praktikën e avokatisë, përbën bazën e një qasjeje të orientuar drejt analizës së fakteve, vlerësimit të provave dhe trajtimit të kujdesshëm të çështjeve juridike.',
      'Formimi akademik përfshin dy programe master në fushën e së drejtës private, biznesit dhe së drejtës së biznesit. Av. Gentjan Gega është gjithashtu bashkautor i gjashtë publikimeve shkencore.',
    ],
    languagesLabel: 'Gjuhët',
    languages: 'Shqip · Anglisht · Italisht · Greqisht',
    link: 'Profili i plotë',
  },
  standards: {
    title: 'Standardet që na udhëheqin',
    items: [
      { name: 'Rigorozitet juridik', text: 'Vlerësim i kujdesshëm i ligjit, provave dhe procedurës.' },
      { name: 'Bashkëpunim profesional', text: 'Punë e koordinuar në staf dhe shqyrtim i çështjeve nga këndvështrime plotësuese.' },
      { name: 'Strategji e argumentuar', text: 'Vendime profesionale të bazuara në fakte dhe analizë.' },
      { name: 'Integritet dhe konfidencialitet', text: 'Respektim i etikës profesionale dhe i të drejtave të klientit.' },
      { name: 'Komunikim i përgjegjshëm', text: 'Informim i qartë për pozicionin juridik, alternativat dhe rreziqet.' },
      { name: 'Zgjidhje të përshtatura', text: 'Vlerësim i rrugës juridike më të përshtatshme për rrethanat konkrete.' },
    ],
  },
  principle: {
    title: 'Parimi ynë',
    quote: 'Ligji përcakton kornizën. Provat ndriçojnë faktet. Strategjia udhëheq veprimin.',
    text: 'Në Studio Ligjore Gega, çdo çështje meriton analizë të kujdesshme, bashkëpunim profesional dhe përfaqësim të përgjegjshëm. Synimi ynë është të identifikojmë zgjidhjet juridikisht të mbështetura dhe të mbrojmë të drejtat e interesat e ligjshme të klientëve, pa premtime të pambështetura dhe me vëmendje ndaj rrethanave reale të çdo rasti.',
  },
};

const en: StudioContent = {
  meta: {
    title: 'Studio Ligjore Gega – Legal Advice and Representation, Tirana',
    description:
      'Studio Ligjore Gega provides legal advice and professional representation for individuals, families and businesses in Tirana, Albania. Analysis. Strategy. Representation.',
  },
  hero: {
    eyebrow: 'Studio Ligjore Gega',
    title: 'Analysis. Strategy. Representation.',
    values: 'The strength of the argument. The value of collaboration. Responsibility to the client.',
    lead: 'Every matter requires more than knowledge of the law. It requires proper analysis, a considered strategy and professional preparation.',
  },
  intro: [
    'Studio Ligjore Gega provides legal advice and professional representation for individuals, families and businesses, handling each matter according to its nature, its factual complexity and the applicable legal framework.',
    'Our approach rests on in-depth analysis of the facts and documents, assessment of the evidence, identification of the decisive legal issues and a strategy tailored to the specific circumstances.',
    'We see legal representation as a process that requires preparation, critical thinking, professional coordination and attention to every element that may affect the protection of the client’s rights and legitimate interests.',
  ],
  emphasis:
    'Identifying the legal problem is not enough. Its core must be understood, the legal options assessed, and the most suitable route for resolving it built.',
  strengths: {
    title: 'Our strengths',
    items: [
      { name: 'In-depth legal analysis', text: 'Every matter is examined against the facts, the evidence, the documents and the relevant legislation. We aim to identify not only the main claims, but also the legal and procedural elements that may determine how the matter proceeds.' },
      { name: 'Teamwork and professional collaboration', text: 'Matters are handled through an organised team approach, where collaboration and the exchange of professional views help examine problems from different angles. Coordinated work strengthens the analysis, highlights the issues that need particular attention and keeps the representation strategy coherent.' },
      { name: 'Individual strategy', text: 'Every matter has its own circumstances, objectives and constraints. The legal route is therefore set after analysing the specific case, weighing the alternatives and the possible benefits and risks of each.' },
      { name: 'Attention to evidence and detail', text: 'Documents, contradictions, deadlines, the burden of proof and procedural elements are examined carefully. A single detail can change the legal assessment of a claim, so every relevant element is analysed in the full context of the matter.' },
      { name: 'Critical thinking and preparing for the other side', text: 'Before setting a strategy we also assess the arguments the opposing party may raise, possible weaknesses in the legal position and procedural obstacles. This helps build more complete arguments and prepare for how the matter may develop.' },
      { name: 'Integrity, confidentiality and clear communication', text: 'The relationship with the client is built on trust, respect for professional ethics and responsible communication. The client should understand their legal position, the alternatives available and the risks to consider.' },
    ],
  },
  team: {
    title: 'The strength of teamwork',
    subtitle: 'One matter. Different perspectives. One coordinated strategy.',
    body: [
      'At Studio Ligjore Gega, teamwork is part of how we handle legal matters. Professional collaboration ensures that problems are not assessed one-sidedly, but examined in their factual, substantive and procedural aspects.',
      'Depending on the nature and complexity of the matter, the work may include reviewing documents, analysing legal provisions, assessing evidence, identifying possible objections and preparing legal filings.',
      'This way of working is particularly important in criminal, civil and commercial matters, where preparation often means dealing with several legal issues at once.',
      'Teamwork does not replace the individual responsibility of the attorney for the matter they take on. On the contrary, it supports it through coordination, structured analysis and professional review of the arguments.',
      'Our aim is for every matter to be handled with careful preparation, professional collaboration and clear responsibility.',
    ],
  },
  practice: {
    title: 'Main practice areas',
    principleLabel: 'Our principle',
    items: [
      {
        name: 'Criminal Law',
        tags: 'Defence · Investigation · Trial · Procedural safeguards',
        body: [
          'Criminal matters require careful analysis of the evidence, the facts and the individual role of the person. Attention is paid to the lawfulness of procedural actions, the admissibility of evidence, the legal qualification of the alleged offence and respect for the rights of the person.',
          'The engagement may include defence during investigation and trial, requests for investigative actions, challenges to evidence, review of precautionary measures and appeals, depending on the stage and circumstances of the matter.',
        ],
        principle: 'Every allegation must be examined against the evidence and the legal standards that apply to the matter.',
      },
      {
        name: 'Civil Law',
        tags: 'Disputes · Property · Obligations · Damages',
        body: [
          'Civil matters focus on identifying the right being claimed, defining the subject and legal cause of the claim, and assessing the evidence.',
          'The practice covers contractual disputes, civil liability, obligations, ownership, real estate, cadastral matters, inheritance and claims for damages.',
        ],
        principle: 'A legal claim must be clear, provable and built on the right legal basis.',
      },
      {
        name: 'Commercial & Contract Law',
        tags: 'Contracts · Commercial obligations · Business disputes',
        body: [
          'Commercial relations require contractual clarity, risk assessment and protection of legitimate economic interests. Legal assistance may include drafting and reviewing contracts, analysing non-performance of obligations, contractual liability, disputes between businesses and representation in the relevant proceedings.',
        ],
        principle: 'Legal advice must consider not only the legal provisions, but also the concrete consequences a decision may have for the commercial relationship.',
      },
      {
        name: 'Administrative Law',
        body: [
          'Representation in disputes with the public administration, review and challenge of administrative acts, and protection of the rights of individuals and businesses in their dealings with public bodies, under the applicable legal conditions.',
        ],
      },
      {
        name: 'Property & Cadastral Matters',
        body: [
          'Legal handling of disputes over ownership and property rights, title documents, registration of real estate and issues relating to property titles.',
        ],
      },
      {
        name: 'Other practice areas',
        body: [
          'The studio also handles family and inheritance law, constitutional law, human rights protection and legal advice for individuals and businesses, in line with the nature of the matter and the applicable legal competences.',
        ],
      },
    ],
  },
  process: {
    title: 'How we handle a matter',
    steps: [
      { name: 'Understanding the facts and objectives', text: 'We review the circumstances, the documents and the client’s needs to understand the matter as a whole.' },
      { name: 'Legal and procedural analysis', text: 'We identify the legal basis, deadlines, procedural conditions, evidence and the issues that need verification.' },
      { name: 'Critical assessment of options and risks', text: 'We examine the possible alternatives and the opposing arguments, separating real options from those not sufficiently supported by the facts or the law.' },
      { name: 'Building the legal strategy', text: 'We set the appropriate steps, claims, arguments and procedural tools that can be used to protect the client’s interests.' },
      { name: 'Representation and follow-through', text: 'We carry out the agreed strategy, keeping the argument coherent, the client informed and a close eye on developments in the matter.' },
    ],
  },
  lawyer: {
    eyebrow: 'The Attorney',
    role: 'Founder and Head',
    body: [
      'Gentjan Gega is the founder and head of Studio Ligjore Gega in Tirana. He graduated from the Faculty of Law of the University of Tirana in 2013 and has practised as an attorney since 2016.',
      'His earlier experience in the structures of the Albanian State Police, combined with the practice of law, underpins an approach focused on analysis of the facts, assessment of the evidence and careful handling of legal matters.',
      'His academic background includes two master’s degrees in private law, business and business law, and he is co-author of six scientific publications.',
    ],
    languagesLabel: 'Languages',
    languages: 'Albanian · English · Italian · Greek',
    link: 'Full profile',
  },
  standards: {
    title: 'The standards that guide us',
    items: [
      { name: 'Legal rigour', text: 'Careful assessment of the law, the evidence and the procedure.' },
      { name: 'Professional collaboration', text: 'Coordinated teamwork and review of matters from complementary perspectives.' },
      { name: 'Reasoned strategy', text: 'Professional decisions based on facts and analysis.' },
      { name: 'Integrity and confidentiality', text: 'Respect for professional ethics and for the client’s rights.' },
      { name: 'Responsible communication', text: 'Clear information on the legal position, the alternatives and the risks.' },
      { name: 'Tailored solutions', text: 'Assessing the most suitable legal route for the specific circumstances.' },
    ],
  },
  principle: {
    title: 'Our principle',
    quote: 'The law sets the framework. The evidence sheds light on the facts. Strategy guides the action.',
    text: 'At Studio Ligjore Gega, every matter deserves careful analysis, professional collaboration and responsible representation. Our aim is to identify legally sound solutions and to protect our clients’ rights and legitimate interests, without unsupported promises and with attention to the real circumstances of each case.',
  },
};

export const studio = { sq, en } satisfies Record<Lang, StudioContent>;
