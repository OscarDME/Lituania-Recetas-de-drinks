// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Viso matomo nukreipimo puslapio (landing page) teksto šaltinis.
// Doc §7: Jokių „įsiūtų“ (hardcoded) tekstų komponentuose. Viskas, kas ekrane, yra čia.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Skaito Layout.astro) ──────────────────────────────────
  metadata: {
    lang: 'lt',
    title: '150 aukščiausios klasės kokteilių receptų namuose',
    description:
      'Vakarėliams paruošti kokteilių receptai — paprasti ingredientai, greitas paruošimas. Nustebink draugus, sutaupyk brangiems barams ir tapk vakaro žvaigžde. Įtraukti išskirtiniai bonusai.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'KOKTEILIŲ PASAULIS',
  },

  // ── 1. TIMER STICKY ANTRAŠTĖ ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Pasiūlymas galioja dar:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO (PAGRINDINĖ DALIS) ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Išskirtinis pasiūlymas',
    titleHighlight: '150 Puikių Kokteilių Receptų',
    titleConnector: 'tavo',
    titleHighlightGreen: 'Malonumui',
    titleEnd: 'Net jei niekad neplakei gėrimų',
    deliveryLabel: 'Gauk prieigą iš karto per',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'El. paštą', kind: 'email' },
    ],
    videoAlt: '150 naminių kokteilių receptų rinkinio pristatymas',
    ctaLabel: '✅ NORIU SAVO RECEPTŲ DABAR',
    ctaSub: '🔒 100% saugus pirkimas • Momentinė prieiga',
  },

  // ── 3. PRIVALUMAI ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Receptai, sukurti maksimaliam malonumui — paprasti ingredientai, greitas paruošimas,',
    introStrong: 'neįtikėtinas skonis ir vaizdas, kuris nustebins kiekvieną svečią!',
    items: [
      'Gaminti kiekvieną kokteilį be išankstinės barmeno patirties',
      'Kurti magiją be profesionalios įrangos ar prabangios virtuvės',
      'Mėgautis išbandytais receptais iš lengvai prieinamų ingredientų',
      'Tapti kiekvieno namų vakarėlio, išvykos į sodybą ar pasisėdėjimo su draugais žvaigžde',
    ],
    ctaLabel: '🍹 NORIU SAVO RECEPTŲ DABAR',
  },

  // ── 4. RECEPTŲ KARUSELĖ ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Dalis receptų, kuriais',
    titleHighlight: 'mėgausiesi su draugais!',
    slides: [
      { caption: 'Saldus bučinys', alt: 'Kokteilis Saldus bučinys' },
      {
        caption: 'Ispaniškas vynas su pasifloromis',
        alt: 'Kokteilis Ispaniškas vynas su pasifloromis',
      },
      { caption: 'Kremingas „MarakuBeats“', alt: 'Kokteilis Kremingas MarakuBeats' },
      { caption: 'Kokteilis su „Halls“ saldainiais', alt: 'Kokteilis su Halls saldainiais' },
      { caption: 'Vasaros brizas', alt: 'Kokteilis Vasaros brizas' },
      {
        caption: 'Kaipirinja su pasifloromis ir kava',
        alt: 'Kokteilis Kaipirinja su pasifloromis ir kava',
      },
    ],
    prevLabel: 'Ankstesnė skaidrė',
    nextLabel: 'Kita skaidrė',
    dotLabel: 'Į skaidrę',
  },

  // ── 5. BONUSAI ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 Ir, žinoma, tavęs laukia',
    titleHighlight: 'DOVANOS!',
    items: [
      {
        tag: '1 Dovana',
        title: '50 alkoholinių šotų ir punšų receptų',
        description: 'Tobuli vakarėlio gėrimai, kuriuos greitai paruoši ir pasidalinsi su visa kompanija.',
        alt: '50 alkoholinių šotų ir punšų receptų',
      },
      {
        tag: '2 Dovana',
        title: 'Išmanus pirkinių sąrašas — kaip sutaupyti',
        description:
          'Sužinok, kokius tiksliai ingredientus pirkti, norint sukurti „premium“ kokteilius ir nepalikti pusės algos brangiuose baruose.',
        alt: 'Pirkinių sąrašas ir skaičiuoklė',
      },
      {
        tag: '3 Dovana',
        title: '✅ Gidas: Kaip suorganizuoti tobulą kokteilių vakarą',
        description: 'Praktinės idėjos ir žingsniai, kaip sukurti nepamirštamą patirtį ir priblokšti svečius.',
        alt: 'Namų vakarėlio vadovas',
      },
      {
        tag: '4 Dovana',
        title: 'Vaizdo pamoka: Kaip papuošti ir patiekti kaip profesionalui',
        description:
          'Išmok gražaus pateikimo paslapčių, kurios paprastą gėrimą pavers 5 žvaigždučių šedevru.',
        alt: 'Vaizdo pamoka apie kokteilių dekoravimą',
      },
    ],
  },

  // ── 6. KAINOS ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'kainos',
    title: 'Išsirink, kaip nori pradėti šiandien:',
    complete: {
      badge: '⭐ Populiariausias',
      title: 'Pilnas Paketas: 150+ Kokteilių Receptų',
      descriptionLead: '150+ nuostabių naminių kokteilių receptų + visos',
      descriptionStrong: 'išskirtinės dovanos,',
      descriptionTail: 'kad taptum geriausiu namų barmenu.',
      mockupAlt: 'Pilno paketo su 150 receptų vizualizacija',
      includesLabel: '🎁 Įeina visos dovanos:',
      items: [
        '150+ aukščiausios klasės kokteilių receptų',
        'Pigios alternatyvos brangiems alkoholiniams gėrimams',
        'Išmanus pirkinių sąrašo gidas',
        'Tobulo namų vakarėlio vadovas',
        'Vaizdo pamoka apie profesionalų puošimą',
      ],
      strikePrice: 'Nuo 29.90 €',
      price: '8.90 €',
      priceNote: 'momentinė prieiga',
      ctaLabel: '🛒 NORIU PILNO PAKETO',
      footer: '✅ Momentinė prieiga · El. paštas + WhatsApp · 14 dienų garantija',
    },
  },

  // ── 7. GARANTIJA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 dienų visiška garantija',
    description:
      'Jei dėl kokios nors priežasties liksi nesužavėtas, grąžinsime pinigus iki paskutinio cento. Jokių klausimų ir jokio streso.',
  },

  // ── 8. DUK (Dažniausiai užduodami klausimai) ────────────────────────────────────────────────
  faq: {
    title: 'Dažniausiai užduodami',
    titleHighlight: 'klausimai:',
    items: [
      {
        q: 'Ar man reikia turėti patirties, norint juos pagaminti?',
        a: 'Griežtai ne! Receptai paaiškinti taip paprastai, kad juos paruoš bet kas, net jei gyvenime nesi plakęs jokio kokteilio.',
      },
      {
        q: 'Ar man reikės brangių plaktuvų ir profesionalios įrangos?',
        a: 'Nereikės. Viską gali pasidaryti namuose naudodamas įprastus virtuvės įrankius, kuriuos jau turi.',
      },
      {
        q: 'Kokioms progoms tinka šie kokteiliai?',
        a: 'Visoms! Nuo atsipalaidavimo po sunkios darbo dienos, romantiškos vakarienės, iki pašėlusio namų vakarėlio ar savaitgalio sodyboje.',
      },
      {
        q: 'Ar ingredientai yra brangūs?',
        a: 'Ne. Su mūsų išmaniu pirkinių sąrašu išmoksi išgauti „premium“ skonį su prieinamais produktais iš artimiausio prekybos centro.',
      },
      {
        q: 'Kaip gausiu prieigą po apmokėjimo?',
        a: 'Prieiga suteikiama iškart! Kai tik praeis mokėjimas, viską gausi tiesiai į savo el. paštą ir „WhatsApp“.',
      },
      {
        q: 'Ar yra garantija, jei man nepatiks?',
        a: 'Žinoma! Turi net 14 dienų visišką garantiją. Jei nebūsi patenkintas, grąžinsime 100% pinigų.',
      },
    ],
  },

  // ── 9. SKUBUMAS ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Neatidėliok — savaitgalis artėja, o su juo ir dar vienas nuobodus vakaras. Pakeisk tai jau dabar!',
  },

  // ── 10. FINALINIS CTA (KVIETIMAS VEIKTI) ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 NORIU PRIEIGOS PRIE 150 RECEPTŲ DABAR',
    subText: '🔒 Momentinė prieiga • 14 dienų garantija • Saugus mokėjimas',
  },

  // ── 11. SAUGUMAS (ženkliukai) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Apsauga' },
      { icon: '💳', label: 'Saugus mokėjimas' },
      { icon: '📲', label: 'Momentinė prieiga' },
    ],
  },

  // ── 12. FOOTER (PORAŠTĖ) ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · KOKTEILIŲ PASAULIS · Visos teisės saugomos',
  },

  // ── A11Y / pagalbinis tekstas ──
  a11y: {
    skipToContent: 'Pereiti prie pagrindinio turinio',
  },
};