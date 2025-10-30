import { e as createComponent, r as renderTemplate, k as renderSlot, l as renderHead, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, n as renderComponent, o as Fragment } from '../chunks/astro/server_BnOxxs30.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3([`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#ffffff" id="theme-color-meta"><title>KDSX POS | Run every shift in sync</title><meta name="description" content="All\u2011in\u2011one POS for modern restaurants. Automate orders, track spend in real time, and keep the floor and kitchen moving together\u2014every shift."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title" content="KDSX POS | Run every shift in sync"><meta property="og:description" content="All\u2011in\u2011one POS for modern restaurants. Automate orders, track spend in real time, and keep the floor and kitchen moving together\u2014every shift."><meta property="og:url" content="https://kdsx-7xa05cei2-bekzods-projects-a2170551.vercel.app"><meta property="og:image" content="/logo.png"><meta property="og:image:alt" content="KDSX logo"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="KDSX POS | Run every shift in sync"><meta name="twitter:description" content="All\u2011in\u2011one POS for modern restaurants. Automate orders, track spend in real time, and keep the floor and kitchen moving together\u2014every shift."><meta name="twitter:image" content="/logo.png"><link rel="icon" href="/logo.png"><meta name="color-scheme" content="light dark"><script>
      // Initialize theme before paint to prevent flash
      (function () {
        try {
          const THEME_KEY = 'theme';
          const DARK_COLOR = '#121212';
          const LIGHT_COLOR = '#ffffff';
          const stored = localStorage.getItem(THEME_KEY);
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const resolved = !stored || stored === 'system'
            ? (prefersDark ? 'dark' : 'light')
            : stored;

          if (resolved === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          document.documentElement.setAttribute('data-theme', resolved);

          const meta = document.querySelector('meta[name="theme-color"]');
          if (meta) {
            meta.setAttribute('content', resolved === 'dark' ? DARK_COLOR : LIGHT_COLOR);
          }
        } catch (_) {}
      })();
    <\/script>`, '</head> <body class="min-h-screen bg-brand-bg dark:bg-brand-bg-dark text-brand-text dark:text-brand-text-dark font-sans antialiased"> ', " <script>\n      // Ensure page starts at top on refresh\n      if (history.scrollRestoration) {\n        history.scrollRestoration = 'manual';\n      }\n      window.addEventListener('beforeunload', function() {\n        window.scrollTo(0, 0);\n      });\n    <\/script> </body> </html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/bekzod/Documents/code/kdsx_landing/src/layouts/Layout.astro", void 0);

const en = {
  brandTagline: "Everything your restaurant runs on, in one place",
  navFeatures: "Features",
  navPricing: "Pricing",
  navFaq: "FAQ",
  navThemeToggle: "Toggle theme",
  heroBadge: "Restaurant POS platform",
  heroHeading: "Manage your finances and operations from one KDSX hub",
  heroBody: "Automate orders, track spend in real time, and keep the floor and kitchen in sync—every shift.",
  heroPrimaryCta: "Activate Free Month",
  heroSecondaryCta: "Book a walkthrough",
  heroMetricDowntimeTitle: "Fewer delays",
  heroMetricDowntimeCopy: "Multi-location teams cut ticket delays in their first month on KDSX.",
  heroMetricInventoryTitle: "Accurate inventory",
  heroMetricInventoryCopy: "Live counts keep prep, stock, and the dining room in sync.",
  heroMetricRoiTitle: "Fast ROI",
  heroMetricRoiCopy: "Most operators recoup their investment before the first quarter ends.",
  logosBadge: "Trusted by teams",
  logosHeading: "Trusted by high‑performing restaurant groups",
  logosBody: "Teams across three continents rely on KDSX to keep every shift running smoothly.",
  businessBadge: "Why teams choose KDSX",
  businessHeading: "A control center for every shift",
  businessBody: "KDSX unifies orders, staffing, and inventory so you can finally retire scattered spreadsheets and apps.",
  businessCard1Title: "Actionable insights",
  businessCard1Heading: "Make decisions with real‑time data",
  businessCard1Body: "Targeted alerts flag unusual spend or prep so you can adjust staffing on the spot.",
  businessCard2Title: "Unified management",
  businessCard2Heading: "Everything in one workspace",
  businessCard2Body: "Update menus, reconcile tabs, and monitor the kitchen board—without app‑hopping.",
  businessCard3Title: "Team experience",
  businessCard3Heading: "Your team wins back hours",
  businessCard3Body: "Training takes minutes, updates sync instantly, and service stays calm—even when orders spike.",
  featuresBadge: "All‑in‑one suite",
  featuresHeading: "A live operations panel for every location",
  featuresBody: "KDSX connects orders, production, and profitability so you catch bottlenecks early and move faster.",
  featuresCard1Tag: "Command center",
  featuresCard1Title: "One dashboard for mission‑critical signals",
  featuresCard1Body: "See revenue trends, line speed, and guest sentiment in a single live view so you can decide with confidence.",
  featuresCard1Pill1: "Shift forecasts",
  featuresCard1Pill2: "Live KPIs",
  featuresCard1Pill3: "Service alerts",
  featuresCard2Tag: "Front of house",
  featuresCard2Title: "Menus that adapt to every guest",
  featuresCard2Body: "Upsells, modifiers, and payments flow smoothly at the table, counter, or online.",
  featuresCard3Tag: "Kitchen display",
  featuresCard3Title: "Every station stays on pace",
  featuresCard3Body: "Tickets arrive with timers, allergen flags, and priorities so the next move is clear.",
  featuresCard4Tag: "Mobile service",
  featuresCard4Title: "Pocket-ready control for floor teams",
  featuresCard4Body: "Staff take orders, comps, and payments without leaving guests; prep screens update instantly.",
  howBadge: "How it works",
  howHeading: "Launch over a weekend—show results Monday",
  howBody: "KDSX streamlines rollout for lean teams.",
  howStep1Tag: "Setup",
  howStep1Title: "Create your workspace",
  howStep1Body: "Import menus, configure stations, and invite staff with role-based permissions in minutes.",
  howStep2Tag: "Sync",
  howStep2Title: "Link devices and data",
  howStep2Body: "Connect tablets, phones, and printers while KDSX syncs inventory and historical sales.",
  howStep3Tag: "Optimize",
  howStep3Title: "Launch and iterate fast",
  howStep3Body: "Track performance dashboards in real time, adjust prep, and share learnings instantly.",
  testimonialsBadge: "From our users",
  testimonialsHeading: "Hospitality leaders on what changed with KDSX",
  testimonialsBody: "Operators trust us to remove friction so they can focus on guests—not software.",
  testimonialsSubheading: "What our users are saying",
  testimonialsCard1Tag: "Fine Dining Group",
  testimonialsCard1Quote: '"KDSX let us retire four separate tools. Ticket visibility jumped overnight and waste dropped by 28%."',
  testimonialsCard1Author: "Farida Orujova · Operations Director",
  testimonialsCard2Tag: "Fast Casual Chain",
  testimonialsCard2Quote: '"Our managers finally have one source of truth. Prep boards, POS, and analytics update as fast as service moves."',
  testimonialsCard2Author: "Ahmed Hassan · Multi-unit Owner",
  testimonialsCard3Tag: "Multi-Site Bistro",
  testimonialsCard3Quote: '"Inventory recounts went from nightly chaos to a 10-minute spot check. The finance sync is magic."',
  testimonialsCard3Author: "Maria Rodriguez · Beverage Lead",
  testimonialsCard4Tag: "Cloud Kitchen Collective",
  testimonialsCard4Quote: '"Because KDSX automates routing and reporting, we redeployed two full-time ops roles to guest experience."',
  testimonialsCard4Author: "David Chen · Founder",
  testimonialsCard5Tag: "Finance Lead",
  testimonialsCard5Quote: '"The reporting features are incredible. I can see exactly where my money goes and make better business decisions."',
  testimonialsCard5Author: "Sarah Johnson · Finance Lead",
  pricingBadge: "Pricing",
  pricingHeading: "Flexible plans that scale with your service",
  pricingBody: "Start lean and grow when you’re ready. Every plan includes hands‑on onboarding from the KDSX team.",
  pricingStarterLabel: "Starter",
  pricingStarterRibbon: "",
  pricingStarterPrice: "Free",
  pricingStarterSubtitle: "First month on us",
  pricingStarterBody: "Everything you need to launch a single location with confidence—your first month is completely free.",
  pricingStarterB1: "1 register/station, unlimited logins",
  pricingStarterB2: "Order, table, and guest tracking",
  pricingStarterB3: "Core dashboards and nightly summary emails",
  pricingStarterB4: "Manual inventory counts + alerts",
  pricingStarterB5: "After your first month, continue with the Pro plan",
  pricingStarterB6: "Email support with 24-hour response",
  pricingStarterCta: "Activate Free Month",
  pricingProLabel: "Pro",
  pricingProRibbon: "Most popular",
  pricingProPrice: "$30",
  pricingProPeriod: "/mo",
  pricingProBody: "Add automation, multi‑location controls, and proactive guidance from our team.",
  pricingProB1: "Unlimited registers with role-based controls",
  pricingProB2: "Automated inventory + supplier syncing",
  pricingProB3: "Advanced analytics & profitability dashboards",
  pricingProB4: "Priority chat & phone support",
  pricingProB5: "Dedicated Customer Success Manager",
  pricingProCta: "Get Started — $30/mo",
  pricingEnterpriseTitle: "Enterprise",
  pricingEnterpriseRibbon: "Custom",
  pricingEnterpriseHeading: "Scale with confidence across regions",
  pricingEnterpriseBody: "Unlock API access, warehouse orchestration, and white-glove launch support for complex rollouts.",
  pricingEnterpriseCta: "Contact Sales",
  pricingImplementTag: "Need a tailored rollout?",
  pricingImplementHeading: "Partner with our implementation team",
  pricingImplementBody: "We’ll audit your operations, stage the hardware, and train staff across every location.",
  pricingImplementB1: "Launch playbook customized to each venue",
  pricingImplementB2: "On-site and remote training programs",
  pricingImplementB3: "Seasonal menu + promo support",
  pricingFinalHeading: "Ready to run every shift with less stress?",
  pricingFinalCta: "Start my rollout",
  footerBrandDescription: "Total restaurant control. Unify your operations with our integrated POS ecosystem.",
  footerContactTitle: "Contact Info",
  footerFollowTitle: "Follow Us",
  footerQuickLinksTitle: "Quick Links",
  footerQuickLinkFeatures: "Features",
  footerQuickLinkPricing: "Pricing",
  footerQuickLinkTerms: "Terms",
  footerQuickLinkPrivacy: "Privacy",
  footerRightsReserved: "All rights reserved.",
  footerAccessibility: "Mobile Responsive & Accessible",
  wizardTitle: "Get your free demo account",
  wizardSubtitle: "Answer a few quick questions — we’ll set up a demo and share credentials.",
  wizardTitleStarter: "Activate your free Starter month",
  wizardTitlePro: "Get started with Pro",
  wizardTitleEnterprise: "Talk to Sales — Enterprise",
  wizardTitleGeneric: "Request a demo",
  wizardPlanPrefix: "Plan:",
  wizardStepTemplate: "Step {current} of {total}",
  wizardNameLabel: "What’s your name?",
  wizardNamePlaceholder: "e.g., Alex Kim",
  wizardBusinessLabel: "What’s your restaurant’s or market’s name?",
  wizardBusinessPlaceholder: "e.g., Green Leaf Bistro",
  wizardLocationsLabel: "How many locations do you operate?",
  wizardLocationsOption1: "1 location",
  wizardLocationsOption2: "2–5 locations",
  wizardLocationsOption3: "6–10 locations",
  wizardLocationsOption4: "11+ locations",
  wizardCurrentPosLabel: "Which POS or systems are you using today?",
  wizardCurrentPosPlaceholder: "e.g., Toast, Square, custom",
  wizardPhoneLabel: "Your phone number",
  wizardPhonePlaceholder: "+82 10-1234-5678",
  wizardEmailLabel: "Your email address (optional)",
  wizardEmailPlaceholder: "you@company.com",
  wizardTelegramLabel: "Telegram (optional)",
  wizardTelegramPlaceholder: "@yourhandle",
  wizardKakaoLabel: "KakaoTalk (optional)",
  wizardKakaoPlaceholder: "ID or phone",
  wizardUsernameLabel: "Preferred username",
  wizardUsernamePlaceholder: "e.g., alex.kim",
  wizardPasswordLabel: "Preferred password",
  wizardPasswordPlaceholder: "At least 8 characters",
  wizardBack: "Back",
  wizardNext: "Next",
  wizardSubmit: "Request demo",
  wizardSuccessMessage: "Thanks — we’ve received your request. A demo account with username and password will be shared via your preferred contact. To continue beyond the demo, you can switch to the Pro plan at any time.",
  wizardServiceStyleLabel: "What best describes your service style?",
  wizardServiceStyleOption0: "Select one…",
  wizardServiceStyleOptionCafe: "Cafe",
  wizardServiceStyleOptionBistro: "Bistro",
  wizardServiceStyleOptionQuick: "Quick‑service",
  wizardServiceStyleOptionFull: "Full‑service",
  wizardServiceStyleOptionBar: "Bar",
  wizardServiceStyleOptionMarket: "Market",
  wizardServiceStyleOptionOther: "Other",
  wizardSubmitting: "Submitting…",
  wizardError: "Something went wrong. Please try again.",
  wizardSuccessCta: "Close",
  faqBadge: "FAQ",
  faqHeading: "Answers to common questions",
  faqBody: "Everything you need to know about getting started, devices, pricing, and support.",
  faqQ1: "How fast can we go live?",
  faqA1: "Most teams launch over a weekend. We guide setup, device linking, and a quick staff run‑through so you can show results by Monday.",
  faqQ2: "Can this run on any device?",
  faqA2: "Yes. KDSX works on modern tablets and smartphones with an internet connection. Use iOS, Android, or the web—no special hardware required.",
  faqQ3: "What does onboarding include?",
  faqA3: "We help import menus, configure stations, connect printers, and train staff. You’ll get a clear rollout plan tailored to each location.",
  faqQ4: "How is pricing structured?",
  faqA4: "Start with our free month on the Starter plan. Upgrade to Pro for automation and multi‑location controls. Enterprise options are available for complex rollouts.",
  faqQ5: "What support is available?",
  faqA5: "All customers receive responsive support and rollout guidance. Pro adds priority chat and phone support, and Enterprise includes white‑glove assistance."
};

const uz = {
  brandTagline: "Restoran uchun kerak bo'lgan hamma narsa — bir joyda",
  navFeatures: "Imkoniyatlar",
  navPricing: "Narxlar",
  navFaq: "Savol-javob",
  navThemeToggle: "Rangni o'zgartirish",
  heroBadge: "Restoran POS tizimi",
  heroHeading: "Moliya va operatsiyalarni KDSX yagona markazidan boshqaring",
  heroBody: "Buyurtmalarni avtomatlashtiring, xarajatlarni real vaqtda kuzating, zal va oshxonani har smenada sinxronlashtirib turing.",
  heroPrimaryCta: "Bepul oyni faollashtirish",
  heroSecondaryCta: "Demo bron qilish",
  heroMetricDowntimeTitle: "Kamroq kechikishlar",
  heroMetricDowntimeCopy: "Ko'p filialli jamoalar KDSX bilan birinchi oyning o'zida chek vaqtlarini qisqartiradi.",
  heroMetricInventoryTitle: "Aniq hisob",
  heroMetricInventoryCopy: "Jonli hisoblar tayyorlov, ombor va zal o'rtasida doimo sinxron bo'ladi.",
  heroMetricRoiTitle: "Tez to'lanadi",
  heroMetricRoiCopy: "Ko'pchilik jamoalar investitsiyalarini birinchi chorak tugashidan oldin qoplaydi.",
  logosBadge: "Bizga ishonishadi",
  logosHeading: "Eng yaxshi restoran jamoalarining tanlovi",
  logosBody: "Uch qit'adagi hamkorlar KDSX yordamida har bir smenani barqaror boshqarmoqda.",
  businessBadge: "Nega KDSXni tanlashadi",
  businessHeading: "Har smena uchun boshqaruv markazi",
  businessBody: "KDSX buyurtmalar, xodimlar va inventarni bir joyga to'playdi — tarqoq jadvallar va ilovalardan voz keching.",
  businessCard1Title: "Real ma'lumotlar",
  businessCard1Heading: "Dolzarb ma'lumotlarga asoslanib qaror qabul qiling",
  businessCard1Body: "Ortiqcha xarajat yoki tayyorgarlik bilan bog'liq muammolar haqida darhol xabar olasiz — smenani tezda moslashtiring.",
  businessCard2Title: "Birlashtirilgan boshqaruv",
  businessCard2Heading: "Hammasi bitta ishchi maydonida",
  businessCard2Body: "Menyuni yangilang, hisoblarni tekshiring va oshxona ekranini kuzating — dasturlar orasida o'tishsiz.",
  businessCard3Title: "Jamoa uchun qulay",
  businessCard3Heading: "Xodimlar vaqtdan tejashadi",
  businessCard3Body: "O'rganish bir necha daqiqa, yangilanishlar zudlik bilan sinxronlanadi, pik vaqtda ham xizmat barqaror.",
  featuresBadge: "Hammasi bir joyda",
  featuresHeading: "Barcha nuqtalar uchun real vaqt operatsion panel",
  featuresBody: "KDSX buyurtmalar, ishlab chiqarish va foyda o'rtasida bog'lanish yaratadi — muammolarni erta ko'rib, tezroq harakat qiling.",
  featuresCard1Tag: "Boshqaruv markazi",
  featuresCard1Title: "Barcha muhim ko'rsatkichlar bitta ekranda",
  featuresCard1Body: "Daromad, oshxona tezligi va mijozlar fikri — hammasi bir ko'rinishda, ishonch bilan qaror qabul qilish uchun.",
  featuresCard1Pill1: "Smena prognozi",
  featuresCard1Pill2: "Jonli KPI",
  featuresCard1Pill3: "Xizmat xabarlari",
  featuresCard2Tag: "Zal xizmati",
  featuresCard2Title: "Har mehmon uchun moslashgan menyu",
  featuresCard2Body: "Qo'shimcha sotuvlar, modifikatorlar va to'lovlar stol, kassa yoki onlayn bo'lishidan qat'i nazar silliq ishlaydi.",
  featuresCard3Tag: "Oshxona displeyi",
  featuresCard3Title: "Har stansiya bir tempda ishlaydi",
  featuresCard3Body: "Buyurtmalar taymer, allergen eslatmalar va ustuvorliklar bilan keladi — keyingi qadam doim aniq.",
  featuresCard4Tag: "Mobil xizmat",
  featuresCard4Title: "Zal jamoasi uchun cho'ntakdagi boshqaruv",
  featuresCard4Body: "Xodimlar zaldan chiqmasdan buyurtma oladi, chegirmalar beradi va to'lov qabul qiladi — hammasi displeylarda zudlik bilan yangilanadi.",
  howBadge: "Qanday ishlaydi",
  howHeading: "Dam olish kunlarida ishga tushiring — dushanbadan natija",
  howBody: "KDSX kichik jamoalar uchun ham oson joriy qilinadi.",
  howStep1Tag: "Sozlash",
  howStep1Title: "Ish maydonini yarating",
  howStep1Body: "Menyularni import qiling, stansiyalarni sozlang va rol asosida kirish huquqlarini bir necha daqiqada bering.",
  howStep2Tag: "Sinxronlash",
  howStep2Title: "Qurilmalar va ma'lumotlarni ulang",
  howStep2Body: "Planshet, telefon va printerlani ulang, KDSX esa inventar va savdo tarixini sinxronlaydi.",
  howStep3Tag: "Optimallashtirish",
  howStep3Title: "Tez ishga tushiring va yaxshilang",
  howStep3Body: "Natijalarni real vaqtda kuzating, tayyorlovni moslang va xulosalarni darhol baham ko'ring.",
  testimonialsBadge: "Mijozlar fikri",
  testimonialsHeading: "Restoran rahbarlari KDSX ta'sirini aytib berishadi",
  testimonialsBody: "Biz jarayonlarni soddalashtiriramiz — siz mehmonlarga e'tibor qarating.",
  testimonialsSubheading: "Foydalanuvchilarimizning fikrlari",
  testimonialsCard1Tag: "Premium restoran guruhi",
  testimonialsCard1Quote: `"KDSX to'rtta alohida vositadan voz kechishimizga yordam berdi. Buyurtma ko'rinishi darhol yaxshilandi, isrof esa 28% ga kamaydi."`,
  testimonialsCard1Author: "Farida Orujova · Operatsiyalar direktori",
  testimonialsCard2Tag: "Fast casual tarmog'i",
  testimonialsCard2Quote: `"Menejerlar endi yagona haqiqat manbaiga ega bo'ldi. Tayyorlov, kassa va analitika xizmat tezligida yangilanadi."`,
  testimonialsCard2Author: "Ahmed Hassan · Ko'p filial egasi",
  testimonialsCard3Tag: "Ko'p filialli bistro",
  testimonialsCard3Quote: `"Inventar qayta hisobi tungi tanglikdan 10 daqiqalik tekshiruvga aylandi. Moliyaviy sinxronizatsiya zo'r ishlaydi."`,
  testimonialsCard3Author: "Maria Rodriges · Bar menejeri",
  testimonialsCard4Tag: "Cloud Kitchen jamoasi",
  testimonialsCard4Quote: '"KDSX marshrutlash va hisobotlarni avtomatlashtirgani uchun ikkita to‘liq stavkali operatorni mehmon tajribasiga yo‘naltirdik."',
  testimonialsCard4Author: "Devid Chen · Asoschi",
  testimonialsCard5Tag: "Moliya yetakchisi",
  testimonialsCard5Quote: '"Hisobot imkoniyatlari zo‘r. Mablag‘ qayerga ketayotganini aniq ko‘rib, ishonch bilan qaror qilaman."',
  testimonialsCard5Author: "Sara Jonson · Moliya yetakchisi",
  pricingBadge: "Narxlar",
  pricingHeading: "Xizmat ritmiga moslashadigan rejalar",
  pricingBody: "Keraklisidan boshlang, tayyor bo‘lganda kengaytiring. Har tarifda KDSX jamoasining amaliy ko‘magi bor.",
  pricingStarterLabel: "Starter",
  pricingStarterRibbon: "",
  pricingStarterPrice: "Bepul",
  pricingStarterSubtitle: "Birinchi oy bizdan",
  pricingStarterBody: "Bir lokatsiyani ishonch bilan ishga tushiring — birinchi oy to‘liq bepul.",
  pricingStarterB1: "1 kassa/stansiya, cheksiz foydalanuvchi",
  pricingStarterB2: "Buyurtma, stol va mehmon kuzatuvi",
  pricingStarterB3: "Asosiy panel va kechki e’lonlar",
  pricingStarterB4: "Qo‘lda inventar + ogohlantirishlar",
  pricingStarterB5: "Birinchi oydan so‘ng Pro tarifida davom eting",
  pricingStarterB6: "24 soat ichida javob beriladigan e-pochta yordami",
  pricingStarterCta: "Bepul oyni faollashtirish",
  pricingProLabel: "Pro",
  pricingProRibbon: "Eng ommabop",
  pricingProPrice: "$30",
  pricingProPeriod: "/oy",
  pricingProBody: "Avtomatlashtirish, ko‘p filialli boshqaruv va faol tavsiyalarni qo‘shing.",
  pricingProB1: "Cheksiz kassalar va rollar bo‘yicha nazorat",
  pricingProB2: "Avtomatik inventar va yetkazib beruvchi sinxroni",
  pricingProB3: "Kengaytirilgan analitika va foyda paneli",
  pricingProB4: "Ustuvor chat va telefon yordami",
  pricingProB5: "Shaxsiy mijoz muvaffaqiyati menejeri",
  pricingProCta: "Boshlash — $30/oy",
  pricingEnterpriseTitle: "Enterprise",
  pricingEnterpriseRibbon: "Maxsus",
  pricingEnterpriseHeading: "Hududlar bo‘yicha ishonch bilan kengayish",
  pricingEnterpriseBody: "Murakkab joriy etishlar uchun API, ombor orkestratsiyasi va to‘liq hamrohlikni oling.",
  pricingEnterpriseCta: "Savdo bilan bog‘lanish",
  pricingImplementTag: "Maxsus joriy etish kerakmi?",
  pricingImplementHeading: "Bizning joriy etish jamoamiz bilan ishlang",
  pricingImplementBody: "Operatsiyangizni tahlil qilamiz, jihozlarni tayyorlaymiz va har lokatsiyada xodimlarni o‘qitamiz.",
  pricingImplementB1: "Har filial uchun moslangan start rejasi",
  pricingImplementB2: "Joyida va masofaviy trening dasturi",
  pricingImplementB3: "Mavsumiy menyu va promo yordami",
  pricingFinalHeading: "Har bir smenani kamroq stress bilan boshqaring",
  pricingFinalCta: "Boshlash",
  footerBrandDescription: "Restoran ustidan to‘liq nazorat. Integratsiyalashgan POS ekotizimi bilan jarayonlarni birlashtiring.",
  footerContactTitle: "Bog‘lanish",
  footerFollowTitle: "Ijtimoiy tarmoqlar",
  footerQuickLinksTitle: "Tezkor havolalar",
  footerQuickLinkFeatures: "Imkoniyatlar",
  footerQuickLinkPricing: "Narxlar",
  footerQuickLinkTerms: "Shartlar",
  footerQuickLinkPrivacy: "Maxfiylik",
  footerRightsReserved: "Barcha huquqlar himoyalangan.",
  footerAccessibility: "Mobilga mos va kirish mumkin",
  wizardTitle: "Bepul demo akkaunt oling",
  wizardSubtitle: "Bir nechta qisqa savolga javob bering — demo tayyorlab, kirish ma’lumotlarini yuboramiz.",
  wizardPlanPrefix: "Tarif:",
  wizardTitleStarter: "Starter tarifida bepul oyni faollashtiring",
  wizardTitlePro: "Pro bilan boshlang",
  wizardTitleEnterprise: "Savdo bo‘limi bilan bog‘laning — Enterprise",
  wizardTitleGeneric: "Demo so‘rash",
  wizardStepTemplate: "Bosqich {current} / {total}",
  wizardNameLabel: "Ismingiz qanday?",
  wizardNamePlaceholder: "masalan, Alex Kim",
  wizardBusinessLabel: "Restoraningiz yoki market nomi?",
  wizardBusinessPlaceholder: "masalan, Green Leaf Bistro",
  wizardLocationsLabel: "Nechta lokatsiyada ishlaysiz?",
  wizardLocationsOption1: "1 ta lokatsiya",
  wizardLocationsOption2: "2–5 ta lokatsiya",
  wizardLocationsOption3: "6–10 ta lokatsiya",
  wizardLocationsOption4: "11+ ta lokatsiya",
  wizardCurrentPosLabel: "Hozir qaysi POS yoki tizimlardan foydalanasiz?",
  wizardCurrentPosPlaceholder: "masalan, Toast, Square yoki maxsus",
  wizardPhoneLabel: "Telefon raqamingiz",
  wizardPhonePlaceholder: "+998 90 123 45 67",
  wizardEmailLabel: "Email (ixtiyoriy)",
  wizardEmailPlaceholder: "you@company.com",
  wizardTelegramLabel: "Telegram (ixtiyoriy)",
  wizardTelegramPlaceholder: "@yourhandle",
  wizardKakaoLabel: "KakaoTalk (ixtiyoriy)",
  wizardKakaoPlaceholder: "ID yoki telefon",
  wizardUsernameLabel: "Istalgan foydalanuvchi nomi",
  wizardUsernamePlaceholder: "masalan, alex.kim",
  wizardPasswordLabel: "Istalgan parol",
  wizardPasswordPlaceholder: "Kamida 8 ta belgidan iborat",
  wizardBack: "Ortga",
  wizardNext: "Keyingi",
  wizardSubmit: "Demo so‘rash",
  wizardSuccessMessage: "Rahmat! So‘rovingiz qabul qilindi. Demo akkaunt (login/parol) tanlangan aloqa orqali yuboriladi. Demo davridan keyin davom etish uchun Pro tarifiga o‘tishingiz mumkin.",
  wizardServiceStyleLabel: "Qaysi xizmat turi sizga mos?",
  wizardServiceStyleOption0: "Tanlang…",
  wizardServiceStyleOptionCafe: "Kafe",
  wizardServiceStyleOptionBistro: "Bistro",
  wizardServiceStyleOptionQuick: "Tezkor xizmat",
  wizardServiceStyleOptionFull: "To‘liq xizmat",
  wizardServiceStyleOptionBar: "Bar",
  wizardServiceStyleOptionMarket: "Market",
  wizardServiceStyleOptionOther: "Boshqa",
  wizardSubmitting: "Yuborilmoqda…",
  wizardError: "Xatolik yuz berdi. Iltimos, yana urinib ko‘ring.",
  wizardSuccessCta: "Yopish",
  faqBadge: "Savol-javob",
  faqHeading: "Ko‘p so‘raladigan savollarga javoblar",
  faqBody: "Boshlash, qurilmalar, narxlar va qo‘llab-quvvatlash haqida bilishingiz kerak bo‘lgan hamma narsa.",
  faqQ1: "Qancha vaqtda ishga tushamiz?",
  faqA1: "Ko‘pchilik jamoalar dam olish kunlarida ishga tushiradi. Sozlash, qurilmalarni ulash va tezkor trening orqali dushanbagacha natija ko‘rsatasiz.",
  faqQ2: "Bu istalgan qurilmada ishlaydimi?",
  faqA2: "Ha. KDSX internetga ulangan zamonaviy planshet va smartfonlarda ishlaydi. iOS, Android yoki veb — maxsus uskuna shart emas.",
  faqQ3: "Onboarding nimalarni o‘z ichiga oladi?",
  faqA3: "Menyularni import qilamiz, stansiyalarni sozlaymiz, printerlarni ulang va xodimlarni o‘qitamiz. Har lokatsiya uchun aniq rollout rejasi beriladi.",
  faqQ4: "Narxlash qanday tuzilgan?",
  faqA4: "Starter tarifida bir oy bepul. Avtomatlashtirish va ko‘p filial nazorati uchun Pro ga o‘ting. Murakkab joriy etishlar uchun Enterprise mavjud.",
  faqQ5: "Qanday yordam bor?",
  faqA5: "Barcha mijozlarga tezkor yordam va joriy etish bo‘yicha yo‘riqnoma beriladi. Pro — ustuvor chat va telefon, Enterprise — to‘liq hamrohlikni qo‘shadi."
};

const ru = {
  brandTagline: "Всё для ресторана в одном месте",
  navFeatures: "Возможности",
  navPricing: "Тарифы",
  navFaq: "Вопросы",
  navThemeToggle: "Сменить тему",
  heroBadge: "POS-система для ресторанов",
  heroHeading: "Управляйте финансами и операциями из единого центра KDSX",
  heroBody: "Автоматизируйте заказы, отслеживайте расходы в реальном времени и синхронизируйте работу зала и кухни каждую смену.",
  heroPrimaryCta: "Активировать бесплатный месяц",
  heroSecondaryCta: "Заказать демо",
  heroMetricDowntimeTitle: "Меньше простоев",
  heroMetricDowntimeCopy: "Сетевые рестораны сокращают задержки уже в первый месяц работы с KDSX.",
  heroMetricInventoryTitle: "Точный учёт",
  heroMetricInventoryCopy: "Остатки синхронизируются между кухней, складом и залом в реальном времени.",
  heroMetricRoiTitle: "Быстрая окупаемость",
  heroMetricRoiCopy: "Большинство окупают инвестиции ещё до конца первого квартала.",
  logosBadge: "Нам доверяют",
  logosHeading: "Выбор лучших ресторанных команд",
  logosBody: "Команды на трёх континентах используют KDSX для бесперебойной работы каждую смену.",
  businessBadge: "Почему выбирают KDSX",
  businessHeading: "Центр управления для каждой смены",
  businessBody: "KDSX объединяет заказы, персонал и инвентарь — больше никаких разрозненных таблиц и приложений.",
  businessCard1Title: "Аналитика в действии",
  businessCard1Heading: "Принимайте решения на основе актуальных данных",
  businessCard1Body: "Система сразу сообщит о лишних тратах или проблемах с подготовкой — вы успеете скорректировать смену.",
  businessCard2Title: "Всё в одном месте",
  businessCard2Heading: "Единое рабочее пространство",
  businessCard2Body: "Обновляйте меню, сверяйте счета и следите за кухней — всё без переключения между программами.",
  businessCard3Title: "Удобство для команды",
  businessCard3Heading: "Персонал экономит часы работы",
  businessCard3Body: "Обучение занимает минуты, обновления синхронизируются моментально, сервис остаётся стабильным даже в пик.",
  featuresBadge: "Всё в одном",
  featuresHeading: "Панель управления для всех точек в реальном времени",
  featuresBody: "KDSX связывает заказы, производство и прибыль — вы заметите узкие места раньше и будете действовать быстрее.",
  featuresCard1Tag: "Командный центр",
  featuresCard1Title: "Все ключевые показатели на одном экране",
  featuresCard1Body: "Выручка, скорость работы кухни и отзывы гостей — всё в одном окне для уверенных решений.",
  featuresCard1Pill1: "Прогноз смен",
  featuresCard1Pill2: "Онлайн KPI",
  featuresCard1Pill3: "Уведомления",
  featuresCard2Tag: "Зал",
  featuresCard2Title: "Меню под каждого гостя",
  featuresCard2Body: "Допродажи, модификаторы и оплата работают гладко — за столом, у стойки или онлайн.",
  featuresCard3Tag: "Экран кухни",
  featuresCard3Title: "Все посты работают синхронно",
  featuresCard3Body: "Заказы приходят с таймерами, отметками об аллергенах и приоритетами — следующий шаг всегда понятен.",
  featuresCard4Tag: "Мобильный сервис",
  featuresCard4Title: "Управление прямо в кармане официанта",
  featuresCard4Body: "Персонал принимает заказы и платежи, не отходя от гостей; экраны кухни обновляются мгновенно.",
  howBadge: "Как это работает",
  howHeading: "Запуск за выходные — результаты с понедельника",
  howBody: "Даже небольшие команды легко запускают KDSX.",
  howStep1Tag: "Настройка",
  howStep1Title: "Создайте рабочее пространство",
  howStep1Body: "Загрузите меню, настройте станции и назначьте права доступа по ролям за считанные минуты.",
  howStep2Tag: "Синхронизация",
  howStep2Title: "Подключите устройства и данные",
  howStep2Body: "Подключите планшеты, телефоны и принтеры, пока KDSX синхронизирует остатки и историю продаж.",
  howStep3Tag: "Оптимизация",
  howStep3Title: "Запускайтесь и улучшайте на ходу",
  howStep3Body: "Отслеживайте показатели в реальном времени, корректируйте подготовку и делитесь результатами сразу.",
  testimonialsBadge: "Отзывы клиентов",
  testimonialsHeading: "Лидеры индустрии рассказывают, что изменилось с KDSX",
  testimonialsBody: "Мы устраняем трения, чтобы вы думали о гостях, а не о программах.",
  testimonialsSubheading: "Что говорят наши клиенты",
  testimonialsCard1Tag: "Премиум-рестораны",
  testimonialsCard1Quote: '"KDSX заменил четыре отдельных инструмента. Видимость заказов улучшилась моментально, а списания сократились на 28%."',
  testimonialsCard1Author: "Фарида Оруджова · Операционный директор",
  testimonialsCard2Tag: "Сеть fast casual",
  testimonialsCard2Quote: '"У менеджеров наконец появился единый источник правды. Кухня, касса и аналитика обновляются с той же скоростью, что и сервис."',
  testimonialsCard2Author: "Ахмед Хассан · Владелец сети",
  testimonialsCard3Tag: "Сеть бистро",
  testimonialsCard3Quote: '"Инвентаризация превратилась из ночного кошмара в 10-минутную проверку. Финансовая синхронизация работает идеально."',
  testimonialsCard3Author: "Мария Родригес · Менеджер бара",
  testimonialsCard4Tag: "Cloud Kitchen",
  testimonialsCard4Quote: '"Автоматизация маршрутизации и отчётов освободила двух сотрудников — мы направили их на улучшение гостевого опыта."',
  testimonialsCard4Author: "Дэвид Чен · Основатель",
  testimonialsCard5Tag: "Финансы",
  testimonialsCard5Quote: '"Отчётность на высоте. Я вижу движение денег и принимаю решения уверенно."',
  testimonialsCard5Author: "Сара Джонсон · Финансовый директор",
  pricingBadge: "Тарифы",
  pricingHeading: "Гибкие тарифы под любую смену",
  pricingBody: "Начните с малого и развивайтесь когда будете готовы. Каждый план включает практическую поддержку от команды KDSX.",
  pricingStarterLabel: "Starter",
  pricingStarterRibbon: "",
  pricingStarterPrice: "Бесплатно",
  pricingStarterSubtitle: "Первый месяц за наш счёт",
  pricingStarterBody: "Всё необходимое для запуска одной точки с уверенностью — первый месяц полностью бесплатный.",
  pricingStarterB1: "1 касса/станция, неограниченное число пользователей",
  pricingStarterB2: "Учёт заказов, столов и гостей",
  pricingStarterB3: "Базовые дашборды и вечерние сводки",
  pricingStarterB4: "Ручной учёт остатков + уведомления",
  pricingStarterB5: "После первого месяца продолжайте на тарифе Pro",
  pricingStarterB6: "Поддержка по email с ответом в течение 24 часов",
  pricingStarterCta: "Активировать бесплатный месяц",
  pricingProLabel: "Pro",
  pricingProRibbon: "Самый популярный",
  pricingProPrice: "$30",
  pricingProPeriod: "/мес",
  pricingProBody: "Добавьте автоматизацию, управление несколькими точками и проактивную помощь нашей команды.",
  pricingProB1: "Неограниченное число касс с контролем прав доступа",
  pricingProB2: "Автоматический учёт остатков + синхронизация с поставщиками",
  pricingProB3: "Расширенная аналитика и дашборд прибыльности",
  pricingProB4: "Приоритетная поддержка в чате и по телефону",
  pricingProB5: "Выделенный менеджер по работе с клиентами",
  pricingProCta: "Начать — $30/мес",
  pricingEnterpriseTitle: "Enterprise",
  pricingEnterpriseRibbon: "Индивидуально",
  pricingEnterpriseHeading: "Масштабируйтесь уверенно по всем регионам",
  pricingEnterpriseBody: "Доступ к API, управление складами и белоперчаточное сопровождение для сложных развёртываний.",
  pricingEnterpriseCta: "Связаться с отделом продаж",
  pricingImplementTag: "Нужно индивидуальное внедрение?",
  pricingImplementHeading: "Работайте с нашей командой внедрения",
  pricingImplementBody: "Мы проверим ваши процессы, подготовим оборудование и обучим персонал на каждой точке.",
  pricingImplementB1: "План запуска под каждое заведение",
  pricingImplementB2: "Обучение на месте и дистанционно",
  pricingImplementB3: "Поддержка сезонных меню и акций",
  pricingFinalHeading: "Готовы проводить смены без лишнего стресса?",
  pricingFinalCta: "Начать внедрение",
  footerBrandDescription: "Полный контроль над рестораном. Объедините все процессы в единой POS-системе.",
  footerContactTitle: "Контакты",
  footerFollowTitle: "Мы в соцсетях",
  footerQuickLinksTitle: "Быстрые ссылки",
  footerQuickLinkFeatures: "Возможности",
  footerQuickLinkPricing: "Тарифы",
  footerQuickLinkTerms: "Условия использования",
  footerQuickLinkPrivacy: "Конфиденциальность",
  footerRightsReserved: "Все права защищены.",
  footerAccessibility: "Удобный и доступный интерфейс",
  wizardTitle: "Получите демо‑доступ бесплатно",
  wizardSubtitle: "Ответьте на несколько вопросов — мы подготовим демо и отправим доступы.",
  wizardPlanPrefix: "Тариф:",
  wizardTitleStarter: "Активируйте бесплатный месяц на Starter",
  wizardTitlePro: "Начните работу на Pro",
  wizardTitleEnterprise: "Свяжитесь с отделом продаж — Enterprise",
  wizardTitleGeneric: "Запросить демо",
  wizardStepTemplate: "Шаг {current} из {total}",
  wizardNameLabel: "Как вас зовут?",
  wizardNamePlaceholder: "например, Алексей Ким",
  wizardBusinessLabel: "Как называется ваш ресторан или магазин?",
  wizardBusinessPlaceholder: "например, Green Leaf Bistro",
  wizardLocationsLabel: "Сколько у вас локаций?",
  wizardLocationsOption1: "1 локация",
  wizardLocationsOption2: "2–5 локаций",
  wizardLocationsOption3: "6–10 локаций",
  wizardLocationsOption4: "11+ локаций",
  wizardCurrentPosLabel: "Какие POS или системы используете сейчас?",
  wizardCurrentPosPlaceholder: "например, Toast, Square, своя",
  wizardPhoneLabel: "Ваш номер телефона",
  wizardPhonePlaceholder: "+7 999 123‑45‑67",
  wizardEmailLabel: "Ваш e‑mail (необязательно)",
  wizardEmailPlaceholder: "you@company.com",
  wizardTelegramLabel: "Telegram (необязательно)",
  wizardTelegramPlaceholder: "@вашник",
  wizardKakaoLabel: "KakaoTalk (необязательно)",
  wizardKakaoPlaceholder: "ID или телефон",
  wizardUsernameLabel: "Предпочтительное имя пользователя",
  wizardUsernamePlaceholder: "например, alex.kim",
  wizardPasswordLabel: "Предпочтительный пароль",
  wizardPasswordPlaceholder: "Не менее 8 символов",
  wizardBack: "Назад",
  wizardNext: "Далее",
  wizardSubmit: "Запросить демо",
  wizardSuccessMessage: "Спасибо! Мы получили запрос. Доступ к демо (логин и пароль) придёт по указанному контакту. Чтобы продолжить после демо, переключитесь на тариф Pro.",
  wizardServiceStyleLabel: "Какой формат обслуживания вам ближе?",
  wizardServiceStyleOption0: "Выберите…",
  wizardServiceStyleOptionCafe: "Кафе",
  wizardServiceStyleOptionBistro: "Бистро",
  wizardServiceStyleOptionQuick: "Фаст‑фуд",
  wizardServiceStyleOptionFull: "Полный сервис",
  wizardServiceStyleOptionBar: "Бар",
  wizardServiceStyleOptionMarket: "Маркет",
  wizardServiceStyleOptionOther: "Другое",
  wizardSubmitting: "Отправляем…",
  wizardError: "Что‑то пошло не так. Повторите попытку.",
  wizardSuccessCta: "Закрыть",
  faqBadge: "Вопросы и ответы",
  faqHeading: "Ответы на частые вопросы",
  faqBody: "Всё что нужно знать о начале работы, устройствах, тарифах и поддержке.",
  faqQ1: "Как быстро мы сможем запуститься?",
  faqA1: "Большинство команд запускаются за выходные. Мы поможем с настройкой, подключением устройств и быстрым обучением персонала, чтобы к понедельнику уже показать результаты.",
  faqQ2: "Работает ли на любых устройствах?",
  faqA2: "Да. KDSX работает на современных планшетах и смартфонах с доступом в интернет. Используйте iOS, Android или веб — никакого специального оборудования не требуется.",
  faqQ3: "Что включает в себя онбординг?",
  faqA3: "Мы поможем импортировать меню, настроить станции, подключить принтеры и обучить персонал. Вы получите чёткий план развёртывания под каждую точку.",
  faqQ4: "Как устроены тарифы?",
  faqA4: "Начните с бесплатного месяца на тарифе Starter. Перейдите на Pro для автоматизации и управления несколькими точками. Для сложных проектов доступен Enterprise.",
  faqQ5: "Какая поддержка доступна?",
  faqA5: "Все клиенты получают оперативную поддержку и помощь при запуске. План Pro добавляет приоритетную поддержку в чате и по телефону, а Enterprise включает белоперчаточное сопровождение."
};

const ko = {
  brandTagline: "레스토랑 운영의 모든 것, 한 곳에서",
  navFeatures: "기능",
  navPricing: "요금제",
  navFaq: "자주 묻는 질문",
  navThemeToggle: "테마 전환",
  heroBadge: "레스토랑 POS 시스템",
  heroHeading: "KDSX 하나로 재무와 운영을 관리하세요",
  heroBody: "주문을 자동화하고 실시간으로 지출을 추적하며, 매 근무마다 홀과 주방을 완벽하게 동기화하세요.",
  heroPrimaryCta: "무료 한 달 활성화",
  heroSecondaryCta: "데모 예약하기",
  heroMetricDowntimeTitle: "대기시간 단축",
  heroMetricDowntimeCopy: "다점포 운영팀도 KDSX 도입 첫 달에 주문 지연을 줄입니다.",
  heroMetricInventoryTitle: "정확한 재고",
  heroMetricInventoryCopy: "실시간 재고가 조리대, 창고, 홀을 하나로 연결합니다.",
  heroMetricRoiTitle: "빠른 ROI",
  heroMetricRoiCopy: "대부분의 운영자가 첫 분기 안에 투자를 회수합니다.",
  logosBadge: "신뢰받는 브랜드",
  logosHeading: "성과 중심 레스토랑의 선택",
  logosBody: "세 대륙의 팀들이 KDSX로 매 근무를 안정적으로 운영합니다.",
  businessBadge: "KDSX를 선택하는 이유",
  businessHeading: "모든 근무를 위한 관제센터",
  businessBody: "KDSX는 주문, 인력, 재고를 하나로 통합해 흩어진 스프레드시트와 앱들을 정리합니다.",
  businessCard1Title: "실행 가능한 인사이트",
  businessCard1Heading: "실시간 데이터로 의사결정하기",
  businessCard1Body: "이상 지출이나 조리 상황을 즉시 알려 현장에서 바로 인력을 조정할 수 있습니다.",
  businessCard2Title: "통합 관리",
  businessCard2Heading: "하나의 작업 공간에 모든 것",
  businessCard2Body: "메뉴 업데이트, 계산서 정산, 주방 화면 모니터링을 앱 전환 없이 처리하세요.",
  businessCard3Title: "팀 경험",
  businessCard3Heading: "팀이 시간을 되찾습니다",
  businessCard3Body: "교육은 몇 분이면 충분하고, 업데이트는 즉시 반영되며, 주문이 몰려도 서비스는 침착합니다.",
  featuresBadge: "올인원 시스템",
  featuresHeading: "모든 지점의 실시간 운영 패널",
  featuresBody: "KDSX는 주문, 생산, 수익성을 연결해 병목을 조기에 발견하고 더 빠르게 움직이게 합니다.",
  featuresCard1Tag: "관제센터",
  featuresCard1Title: "핵심 지표를 한 화면에",
  featuresCard1Body: "매출 추세, 조리 속도, 고객 반응을 실시간 한 화면에서 보고 확신있게 결정하세요.",
  featuresCard1Pill1: "근무 예측",
  featuresCard1Pill2: "실시간 KPI",
  featuresCard1Pill3: "서비스 알림",
  featuresCard2Tag: "프런트",
  featuresCard2Title: "모든 고객에게 맞춤 메뉴",
  featuresCard2Body: "업셀, 옵션 선택, 결제가 테이블이든 카운터든 온라인이든 매끄럽게 진행됩니다.",
  featuresCard3Tag: "주방 디스플레이",
  featuresCard3Title: "모든 스테이션이 같은 박자로",
  featuresCard3Body: "주문이 타이머, 알레르기 표시, 우선순위와 함께 전달되어 다음 동작이 명확합니다.",
  featuresCard4Tag: "모바일 서비스",
  featuresCard4Title: "홀 팀을 위한 포켓 제어",
  featuresCard4Body: "직원이 자리를 떠나지 않고 주문, 할인, 결제를 처리하면 조리 화면이 즉시 업데이트됩니다.",
  howBadge: "작동 방식",
  howHeading: "주말에 설치 — 월요일부터 결과",
  howBody: "소규모 팀도 KDSX를 빠르게 도입합니다.",
  howStep1Tag: "설정",
  howStep1Title: "작업 공간 만들기",
  howStep1Body: "메뉴를 가져오고, 스테이션을 구성하고, 역할별 권한을 부여하세요. 몇 분이면 완료됩니다.",
  howStep2Tag: "동기화",
  howStep2Title: "기기와 데이터 연결",
  howStep2Body: "태블릿, 휴대폰, 프린터를 연결하는 동안 KDSX가 재고와 판매 이력을 동기화합니다.",
  howStep3Tag: "최적화",
  howStep3Title: "빠르게 시작하고 개선하기",
  howStep3Body: "실시간 성과 대시보드를 추적하고 조리를 조정하며 결과를 즉시 공유하세요.",
  testimonialsBadge: "고객 후기",
  testimonialsHeading: "업계 리더들이 말하는 KDSX의 변화",
  testimonialsBody: "우리는 마찰을 없애고, 여러분은 고객에게 집중하세요.",
  testimonialsSubheading: "사용자들의 이야기",
  testimonialsCard1Tag: "파인 다이닝 그룹",
  testimonialsCard1Quote: '"KDSX로 네 개의 도구를 정리했습니다. 주문 가시성이 즉시 향상되었고 낭비가 28% 줄었어요."',
  testimonialsCard1Author: "파리다 오루조바 · 운영이사",
  testimonialsCard2Tag: "패스트 캐주얼 체인",
  testimonialsCard2Quote: '"매니저들이 드디어 단일 진실의 원천을 갖게 됐습니다. 조리대, POS, 분석이 서비스 속도에 맞춰 업데이트됩니다."',
  testimonialsCard2Author: "아흐메드 하산 · 다점포 대표",
  testimonialsCard3Tag: "다지점 비스트로",
  testimonialsCard3Quote: '"재고 재점검이 야간 혼란에서 10분 점검으로 바뀌었습니다. 재무 동기화가 마법 같아요."',
  testimonialsCard3Author: "마리아 로드리게스 · 음료 리드",
  testimonialsCard4Tag: "클라우드 키친 협동조합",
  testimonialsCard4Quote: '"KDSX가 라우팅과 보고를 자동화해서 정규직 운영 인력 두 명을 고객 경험으로 재배치했습니다."',
  testimonialsCard4Author: "데이비드 첸 · 대표",
  testimonialsCard5Tag: "재무",
  testimonialsCard5Quote: '"보고가 강력합니다. 자금 흐름이 명확해져 확신을 갖고 결정합니다."',
  testimonialsCard5Author: "사라 존슨 · 재무이사",
  pricingBadge: "요금제",
  pricingHeading: "모든 근무에 맞춰 확장되는 유연한 요금제",
  pricingBody: "작게 시작해서 준비되면 키우세요. 모든 요금제에 KDSX 팀의 실무 온보딩이 포함됩니다.",
  pricingStarterLabel: "Starter",
  pricingStarterRibbon: "",
  pricingStarterPrice: "무료",
  pricingStarterSubtitle: "첫 달은 저희가 제공합니다",
  pricingStarterBody: "한 지점 시작에 필요한 모든 것—첫 달은 완전 무료입니다.",
  pricingStarterB1: "1개 계산대/스테이션, 무제한 로그인",
  pricingStarterB2: "주문, 테이블, 고객 추적",
  pricingStarterB3: "기본 대시보드와 야간 요약 이메일",
  pricingStarterB4: "수동 재고 카운트 + 알림",
  pricingStarterB5: "첫 달 이후에는 Pro 요금제로 계속 이용",
  pricingStarterB6: "24시간 응답 이메일 지원",
  pricingStarterCta: "무료 한 달 활성화",
  pricingProLabel: "Pro",
  pricingProRibbon: "가장 인기",
  pricingProPrice: "$30",
  pricingProPeriod: "/월",
  pricingProBody: "자동화, 다지점 제어, 팀의 능동적 가이드를 추가하세요.",
  pricingProB1: "무제한 계산대와 역할 기반 제어",
  pricingProB2: "자동 재고 + 공급업체 동기화",
  pricingProB3: "고급 분석 & 수익성 대시보드",
  pricingProB4: "우선 순위 채팅 & 전화 지원",
  pricingProB5: "전담 고객 성공 매니저",
  pricingProCta: "시작하기 — $30/월",
  pricingEnterpriseTitle: "Enterprise",
  pricingEnterpriseRibbon: "맞춤형",
  pricingEnterpriseHeading: "지역별 확장을 자신 있게",
  pricingEnterpriseBody: "API 액세스, 창고 오케스트레이션, 복잡한 도입을 위한 화이트글러브 지원을 제공합니다.",
  pricingEnterpriseCta: "영업팀 문의",
  pricingImplementTag: "맞춤형 도입이 필요하신가요?",
  pricingImplementHeading: "전문 구현팀과 협력하기",
  pricingImplementBody: "운영을 감사하고, 하드웨어를 준비하고, 모든 지점에서 직원을 교육합니다.",
  pricingImplementB1: "각 매장별 맞춤 도입 플랜",
  pricingImplementB2: "현장 및 원격 교육 프로그램",
  pricingImplementB3: "시즌 메뉴 + 프로모션 지원",
  pricingFinalHeading: "모든 근무를 스트레스 없이 운영할 준비 되셨나요?",
  pricingFinalCta: "도입 시작하기",
  footerBrandDescription: "레스토랑 운영을 완전히 통합하세요. 하나의 POS 시스템으로 모든 프로세스를 연결합니다.",
  footerContactTitle: "연락처",
  footerFollowTitle: "팔로우",
  footerQuickLinksTitle: "바로가기",
  footerQuickLinkFeatures: "기능",
  footerQuickLinkPricing: "요금제",
  footerQuickLinkTerms: "이용 약관",
  footerQuickLinkPrivacy: "개인정보 처리방침",
  footerRightsReserved: "All rights reserved.",
  footerAccessibility: "모바일 반응형 및 접근성 설계",
  wizardTitle: "무료 데모 계정을 받아보세요",
  wizardSubtitle: "몇 가지 질문에 답해 주세요. 데모를 준비해 계정 정보를 보내드립니다.",
  wizardPlanPrefix: "플랜:",
  wizardTitleStarter: "Starter 무료 한 달 활성화",
  wizardTitlePro: "Pro로 시작하기",
  wizardTitleEnterprise: "영업팀과 상담하기 — Enterprise",
  wizardTitleGeneric: "데모 요청",
  wizardStepTemplate: "단계 {current} / {total}",
  wizardNameLabel: "성함을 알려주세요.",
  wizardNamePlaceholder: "예: Alex Kim",
  wizardBusinessLabel: "매장(레스토랑/마켓)명을 알려주세요.",
  wizardBusinessPlaceholder: "예: Green Leaf Bistro",
  wizardLocationsLabel: "운영 중인 매장 수는 몇 곳인가요?",
  wizardLocationsOption1: "1개 매장",
  wizardLocationsOption2: "2–5개 매장",
  wizardLocationsOption3: "6–10개 매장",
  wizardLocationsOption4: "11개 이상",
  wizardCurrentPosLabel: "현재 사용 중인 POS 또는 시스템은 무엇인가요?",
  wizardCurrentPosPlaceholder: "예: Toast, Square, 자체 시스템",
  wizardPhoneLabel: "연락처(전화번호)",
  wizardPhonePlaceholder: "+82 10-1234-5678",
  wizardEmailLabel: "이메일(선택)",
  wizardEmailPlaceholder: "you@company.com",
  wizardTelegramLabel: "텔레그램(선택)",
  wizardTelegramPlaceholder: "@yourhandle",
  wizardKakaoLabel: "카카오톡(선택)",
  wizardKakaoPlaceholder: "ID 또는 전화번호",
  wizardUsernameLabel: "원하는 사용자명",
  wizardUsernamePlaceholder: "예: alex.kim",
  wizardPasswordLabel: "원하는 비밀번호",
  wizardPasswordPlaceholder: "8자 이상",
  wizardBack: "이전",
  wizardNext: "다음",
  wizardSubmit: "데모 요청",
  wizardSuccessMessage: "요청이 접수되었습니다. 데모 계정 정보(아이디/비밀번호)는 지정하신 채널로 안내드립니다. 데모 이후 계속 이용하시려면 Pro 플랜으로 전환해 주세요.",
  wizardServiceStyleLabel: "가장 가까운 서비스 형태를 선택해 주세요.",
  wizardServiceStyleOption0: "선택하세요…",
  wizardServiceStyleOptionCafe: "카페",
  wizardServiceStyleOptionBistro: "비스트로",
  wizardServiceStyleOptionQuick: "패스트/퀵서비스",
  wizardServiceStyleOptionFull: "풀서비스",
  wizardServiceStyleOptionBar: "바",
  wizardServiceStyleOptionMarket: "마켓",
  wizardServiceStyleOptionOther: "기타",
  wizardSubmitting: "제출 중…",
  wizardError: "문제가 발생했습니다. 다시 시도해 주세요.",
  wizardSuccessCta: "닫기",
  faqBadge: "FAQ",
  faqHeading: "자주 묻는 질문 답변",
  faqBody: "시작하기, 기기, 요금제, 지원에 대해 알아야 할 모든 것.",
  faqQ1: "얼마나 빨리 시작할 수 있나요?",
  faqA1: "대부분의 팀이 주말에 시작합니다. 설정, 기기 연결, 빠른 직원 교육을 안내해 월요일에 결과를 보여드릴 수 있습니다.",
  faqQ2: "모든 기기에서 실행되나요?",
  faqA2: "네. KDSX는 인터넷 연결이 있는 최신 태블릿과 스마트폰에서 작동합니다. iOS, Android, 웹 모두 사용 가능—특수 하드웨어 불필요.",
  faqQ3: "온보딩에는 무엇이 포함되나요?",
  faqA3: "메뉴 가져오기, 스테이션 구성, 프린터 연결, 직원 교육을 도와드립니다. 각 지점별로 명확한 도입 계획을 받으실 수 있습니다.",
  faqQ4: "요금제는 어떻게 구성되어 있나요?",
  faqA4: "Starter 요금제의 무료 한 달로 시작하세요. 자동화와 다지점 제어를 위해 Pro로 업그레이드하고, 복잡한 도입에는 Enterprise 옵션이 있습니다.",
  faqQ5: "어떤 지원을 받을 수 있나요?",
  faqA5: "모든 고객이 신속한 지원과 도입 가이드를 받습니다. Pro는 우선 순위 채팅과 전화 지원을 추가하며, Enterprise는 화이트글러브 지원을 포함합니다."
};

const translations = {
  en,
  uz,
  ru,
  ko
};
const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "uz", label: "Oʻzbekcha" },
  { value: "ru", label: "Русский" },
  { value: "ko", label: "한국어" }
];
const DEFAULT_LANGUAGE = "en";

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const languageOptions = LANGUAGE_OPTIONS;
  const translationsJSON = JSON.stringify(translations);
  const fallbackLanguage = DEFAULT_LANGUAGE;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header class="sticky top-0 z-50 px-2 sm:px-6"> <div class="max-w-6xl mx-auto"> <div class="mt-6 flex items-center justify-between rounded-full border border-brand-cta-text/15 dark:border-brand-cta-text-dark/20 bg-brand-bg/85 dark:bg-brand-bg-dark/50 px-4 py-3 backdrop-blur-2xl shadow-[0_20px_80px_-60px_rgba(26,77,26,0.65)]"> <div class="flex items-center gap-3 text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark"> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-cta-text dark:text-brand-cta-text">KDSX</span> </div> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-[0.35em] text-brand-text/80 dark:text-brand-text-dark/70"> <a href="#features" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navFeatures">\nFeatures\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> <a href="#pricing" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navPricing">\nPricing\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> <a href="#faq" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navFaq">\nFAQ\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> </nav> <div class="hidden md:flex items-center gap-3 text-xs font-semibold text-brand-text/80 dark:text-brand-text-dark/80"> <label class="sr-only" for="desktop-lang-select">Language</label> <div class="relative"> <select id="desktop-lang-select" class="lang-select appearance-none rounded-full border border-brand-cta-text/25 dark:border-brand-cta-text-dark/30 bg-white/70 px-4 py-2 pr-10 text-xs font-semibold uppercase tracking-[0.25em] text-brand-text shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-white/10 dark:text-brand-text-dark" aria-label="Language switcher"> ', ' </select> <svg class="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-text/60 dark:text-brand-text-dark/60" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <!-- Segmented Theme Switcher (Desktop) --> <div data-theme-group class="inline-flex items-center gap-1 rounded-full border border-brand-cta-text/20 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10"> <button data-theme-option="light" type="button" aria-label="Use light theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> <span>Light</span> </button> <button data-theme-option="system" type="button" aria-label="Match system theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> <span>System</span> </button> <button data-theme-option="dark" type="button" aria-label="Use dark theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> <span>Dark</span> </button> </div> </div> <!-- Mobile controls --> <div class="flex items-center gap-2 md:hidden"> <label class="sr-only" for="mobile-lang-select">Language</label> <div class="relative"> <select id="mobile-lang-select" class="lang-select appearance-none rounded-full border border-brand-cta-text/20 bg-white/80 px-3 py-2 pr-9 text-xs font-semibold uppercase tracking-[0.25em] text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-white/10 dark:text-brand-text-dark" aria-label="Language switcher"> ', ' </select> <svg class="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-text/60 dark:text-brand-text-dark/60" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <!-- Compact Theme Cycle Button (Mobile) --> <button type="button" data-theme-cycle aria-label="Theme" class="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cta-text/25 bg-white/70 text-brand-text shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-brand-cta dark:border-white/15 dark:bg-white/10 dark:text-brand-text-dark"> <span data-icon="light" class="block"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> </span> <span data-icon="system" class="hidden"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> </span> <span data-icon="dark" class="hidden"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> </span> </button> <button id="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu" class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-cta/15 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-brand-cta-text-dark/20 dark:text-brand-text-dark"> <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> </div> <!-- Mobile dropdown --> <div id="mobile-menu" class="md:hidden hidden px-4 sm:px-6"> <nav class="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-3xl border border-brand-cta-text/15 bg-brand-bg/95 px-4 py-6 text-sm font-medium text-brand-text shadow-lg dark:border-brand-cta-text-dark/20 dark:bg-brand-bg-dark/90 dark:text-brand-text-dark"> <a href="#features" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navFeatures">Features</a> <a href="#pricing" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navPricing">Pricing</a> <a href="#faq" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navFaq">FAQ</a> <div class="rounded-2xl border border-brand-cta-text/12 bg-white/80 p-4 shadow-inner dark:border-brand-cta-text-dark/20 dark:bg-white/10"> <div class="flex items-center justify-between gap-3"> <span class="uppercase tracking-[0.25em] text-sm font-semibold text-brand-text dark:text-brand-text-dark" data-i18n="navThemeToggle">Theme</span> <div data-theme-group class="inline-flex items-center gap-1 rounded-full border border-brand-cta-text/20 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10"> <button data-theme-option="light" type="button" aria-label="Light" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> </button> <button data-theme-option="system" type="button" aria-label="System" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> </button> <button data-theme-option="dark" type="button" aria-label="Dark" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> </button> </div> </div> </div> </nav> </div> </header> <script type="application/json" id="translations-data"', ">", `<\/script> <script>
  (function setupHeader() {
    const LANGUAGE_STORAGE_KEY = "preferred-lang";
    const translationsNode = document.getElementById("translations-data");
    const TRANSLATION_FALLBACK = (translationsNode?.dataset?.fallback) || "en";
    let translations = {};
    try {
      translations = translationsNode ? JSON.parse(translationsNode.textContent || "{}") : {};
    } catch (error) {
      console.error("Failed to parse translations", error);
      translations = {};
    }

    const applyTranslations = (lang) => {
      const dictionary = translations[lang] || translations[TRANSLATION_FALLBACK] || {};
      const fallbackDictionary = translations[TRANSLATION_FALLBACK] || {};
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (!key) return;
        // Keys are standardized to camelCase across the codebase; look up directly with a simple fallback.
        const value = dictionary[key] ?? fallbackDictionary[key];
        if (value !== undefined) {
          node.textContent = value;
        }
      });
    };

    const applyLanguage = (lang) => {
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch (_) {}
      document.querySelectorAll(".lang-select").forEach((select) => {
        if (select.value !== lang) {
          select.value = lang;
        }
      });
      applyTranslations(lang);
    };

    const bindLanguage = () => {
      const selects = document.querySelectorAll(".lang-select");
      if (!selects.length) {
        applyTranslations(document.documentElement.getAttribute("lang") || TRANSLATION_FALLBACK);
        return;
      }

      selects.forEach((select) => {
        if ((select)._boundLang) return;
        select.addEventListener("change", (event) => {
          const target = event.target;
          const lang = target.value || TRANSLATION_FALLBACK;
          applyLanguage(lang);
        });
        (select)._boundLang = true;
      });

      let storedLang;
      try {
        storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      } catch (_) {
        storedLang = undefined;
      }
      const initialLang = storedLang || document.documentElement.getAttribute("lang") || TRANSLATION_FALLBACK;
      applyLanguage(initialLang);
    };

    const bindTheme = () => {
      const html = document.documentElement;
      const THEME_KEY = 'theme'; // 'light' | 'dark' | 'system'
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const DARK_COLOR = '#121212';
      const LIGHT_COLOR = '#ffffff';

      const getStoredTheme = () => {
        try { return localStorage.getItem(THEME_KEY) || 'system'; } catch (_) { return 'system'; }
      };
      const setStoredTheme = (value) => { try { localStorage.setItem(THEME_KEY, value); } catch (_) {} };

      const syncThemeArtifacts = (effective) => {
        html.setAttribute('data-theme', effective);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
          meta.setAttribute('content', effective === 'dark' ? DARK_COLOR : LIGHT_COLOR);
        }
      };

      const applyTheme = (mode) => {
        const effective = mode === 'system' ? (prefersDark.matches ? 'dark' : 'light') : mode;
        if (effective === 'dark') html.classList.add('dark'); else html.classList.remove('dark');
        syncThemeArtifacts(effective);
        updateThemeUI(mode);
      };

      const updateThemeUI = (mode) => {
        document.querySelectorAll('[data-theme-option]').forEach((btn) => {
          const val = btn.getAttribute('data-theme-option');
          const active = val === mode;
          btn.classList.toggle('bg-brand-cta', active);
          btn.classList.toggle('text-brand-cta-text', active);
          btn.classList.toggle('shadow', active);
        });

        // Update compact cycle button icon and aria-label
        const cycleBtn = document.querySelector('[data-theme-cycle]');
        if (cycleBtn) {
          cycleBtn.setAttribute('aria-label', \`Theme: \${mode}\`);
          cycleBtn.querySelectorAll('[data-icon]')?.forEach((el) => {
            const show = el.getAttribute('data-icon') === mode;
            el.classList.toggle('hidden', !show);
            el.classList.toggle('block', show);
          });
        }
      };

      const current = getStoredTheme();
      applyTheme(current);

      // Respond to system changes when in system mode
      if (!(bindTheme._boundMatch)) {
        prefersDark.addEventListener('change', () => {
          if (getStoredTheme() === 'system') applyTheme('system');
        });
        bindTheme._boundMatch = true;
      }

      // Bind segmented controls
      document.querySelectorAll('[data-theme-group]').forEach((group) => {
        if (group._boundTheme) return;
        group.addEventListener('click', (e) => {
          const target = e.target.closest('[data-theme-option]');
          if (!target) return;
          const val = target.getAttribute('data-theme-option');
          setStoredTheme(val);
          applyTheme(val);
        });
        group._boundTheme = true;
      });

      // Bind cycle button (mobile navbar)
      const cycleBtn = document.querySelector('[data-theme-cycle]');
      if (cycleBtn && !cycleBtn._boundThemeCycle) {
        cycleBtn.addEventListener('click', () => {
          const order = ['light', 'system', 'dark'];
          const current = getStoredTheme();
          const idx = Math.max(0, order.indexOf(current));
          const next = order[(idx + 1) % order.length];
          setStoredTheme(next);
          applyTheme(next);
        });
        cycleBtn._boundThemeCycle = true;
      }
    };

    const bindMenu = () => {
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      if (menuToggle && mobileMenu && !(menuToggle)._boundMenu) {
        menuToggle.addEventListener('click', () => {
          const isOpen = !mobileMenu.classList.contains('hidden');
          if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open menu');
          } else {
            mobileMenu.classList.remove('hidden');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Close menu');
          }
        });
        (menuToggle)._boundMenu = true;
      }
    };

    // Run immediately and on pageshow (for bfcache)
    bindTheme();
    bindMenu();
    bindLanguage();
    window.addEventListener('pageshow', () => {
      bindTheme();
      bindMenu();
      bindLanguage();
    });
  })();
<\/script>`], ["", '<header class="sticky top-0 z-50 px-2 sm:px-6"> <div class="max-w-6xl mx-auto"> <div class="mt-6 flex items-center justify-between rounded-full border border-brand-cta-text/15 dark:border-brand-cta-text-dark/20 bg-brand-bg/85 dark:bg-brand-bg-dark/50 px-4 py-3 backdrop-blur-2xl shadow-[0_20px_80px_-60px_rgba(26,77,26,0.65)]"> <div class="flex items-center gap-3 text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark"> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-cta-text dark:text-brand-cta-text">KDSX</span> </div> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-[0.35em] text-brand-text/80 dark:text-brand-text-dark/70"> <a href="#features" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navFeatures">\nFeatures\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> <a href="#pricing" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navPricing">\nPricing\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> <a href="#faq" class="group relative transition-colors duration-300 hover:text-brand-cta" data-i18n="navFaq">\nFAQ\n<span class="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-cta transition-transform duration-300 group-hover:scale-x-100"></span> </a> </nav> <div class="hidden md:flex items-center gap-3 text-xs font-semibold text-brand-text/80 dark:text-brand-text-dark/80"> <label class="sr-only" for="desktop-lang-select">Language</label> <div class="relative"> <select id="desktop-lang-select" class="lang-select appearance-none rounded-full border border-brand-cta-text/25 dark:border-brand-cta-text-dark/30 bg-white/70 px-4 py-2 pr-10 text-xs font-semibold uppercase tracking-[0.25em] text-brand-text shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-white/10 dark:text-brand-text-dark" aria-label="Language switcher"> ', ' </select> <svg class="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-text/60 dark:text-brand-text-dark/60" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <!-- Segmented Theme Switcher (Desktop) --> <div data-theme-group class="inline-flex items-center gap-1 rounded-full border border-brand-cta-text/20 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10"> <button data-theme-option="light" type="button" aria-label="Use light theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> <span>Light</span> </button> <button data-theme-option="system" type="button" aria-label="Match system theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> <span>System</span> </button> <button data-theme-option="dark" type="button" aria-label="Use dark theme" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> <span>Dark</span> </button> </div> </div> <!-- Mobile controls --> <div class="flex items-center gap-2 md:hidden"> <label class="sr-only" for="mobile-lang-select">Language</label> <div class="relative"> <select id="mobile-lang-select" class="lang-select appearance-none rounded-full border border-brand-cta-text/20 bg-white/80 px-3 py-2 pr-9 text-xs font-semibold uppercase tracking-[0.25em] text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-white/10 dark:text-brand-text-dark" aria-label="Language switcher"> ', ' </select> <svg class="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-text/60 dark:text-brand-text-dark/60" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <!-- Compact Theme Cycle Button (Mobile) --> <button type="button" data-theme-cycle aria-label="Theme" class="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cta-text/25 bg-white/70 text-brand-text shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-brand-cta dark:border-white/15 dark:bg-white/10 dark:text-brand-text-dark"> <span data-icon="light" class="block"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> </span> <span data-icon="system" class="hidden"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> </span> <span data-icon="dark" class="hidden"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> </span> </button> <button id="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu" class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-cta/15 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-cta dark:bg-brand-cta-text-dark/20 dark:text-brand-text-dark"> <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> </div> <!-- Mobile dropdown --> <div id="mobile-menu" class="md:hidden hidden px-4 sm:px-6"> <nav class="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-3xl border border-brand-cta-text/15 bg-brand-bg/95 px-4 py-6 text-sm font-medium text-brand-text shadow-lg dark:border-brand-cta-text-dark/20 dark:bg-brand-bg-dark/90 dark:text-brand-text-dark"> <a href="#features" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navFeatures">Features</a> <a href="#pricing" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navPricing">Pricing</a> <a href="#faq" class="flex items-center justify-between rounded-2xl px-4 py-3 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-brand-cta/10" data-i18n="navFaq">FAQ</a> <div class="rounded-2xl border border-brand-cta-text/12 bg-white/80 p-4 shadow-inner dark:border-brand-cta-text-dark/20 dark:bg-white/10"> <div class="flex items-center justify-between gap-3"> <span class="uppercase tracking-[0.25em] text-sm font-semibold text-brand-text dark:text-brand-text-dark" data-i18n="navThemeToggle">Theme</span> <div data-theme-group class="inline-flex items-center gap-1 rounded-full border border-brand-cta-text/20 bg-white/60 p-1 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10"> <button data-theme-option="light" type="button" aria-label="Light" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22L5.64 5.64m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78L5.64 18.36m12.72-12.72l1.42-1.42" stroke-linecap="round"></path></svg> </button> <button data-theme-option="system" type="button" aria-label="System" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 17h10"></path></svg> </button> <button data-theme-option="dark" type="button" aria-label="Dark" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-brand-text/80 transition-colors duration-200 hover:bg-brand-cta/10 dark:text-brand-text-dark/85"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> </button> </div> </div> </div> </nav> </div> </header> <script type="application/json" id="translations-data"', ">", `<\/script> <script>
  (function setupHeader() {
    const LANGUAGE_STORAGE_KEY = "preferred-lang";
    const translationsNode = document.getElementById("translations-data");
    const TRANSLATION_FALLBACK = (translationsNode?.dataset?.fallback) || "en";
    let translations = {};
    try {
      translations = translationsNode ? JSON.parse(translationsNode.textContent || "{}") : {};
    } catch (error) {
      console.error("Failed to parse translations", error);
      translations = {};
    }

    const applyTranslations = (lang) => {
      const dictionary = translations[lang] || translations[TRANSLATION_FALLBACK] || {};
      const fallbackDictionary = translations[TRANSLATION_FALLBACK] || {};
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (!key) return;
        // Keys are standardized to camelCase across the codebase; look up directly with a simple fallback.
        const value = dictionary[key] ?? fallbackDictionary[key];
        if (value !== undefined) {
          node.textContent = value;
        }
      });
    };

    const applyLanguage = (lang) => {
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch (_) {}
      document.querySelectorAll(".lang-select").forEach((select) => {
        if (select.value !== lang) {
          select.value = lang;
        }
      });
      applyTranslations(lang);
    };

    const bindLanguage = () => {
      const selects = document.querySelectorAll(".lang-select");
      if (!selects.length) {
        applyTranslations(document.documentElement.getAttribute("lang") || TRANSLATION_FALLBACK);
        return;
      }

      selects.forEach((select) => {
        if ((select)._boundLang) return;
        select.addEventListener("change", (event) => {
          const target = event.target;
          const lang = target.value || TRANSLATION_FALLBACK;
          applyLanguage(lang);
        });
        (select)._boundLang = true;
      });

      let storedLang;
      try {
        storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      } catch (_) {
        storedLang = undefined;
      }
      const initialLang = storedLang || document.documentElement.getAttribute("lang") || TRANSLATION_FALLBACK;
      applyLanguage(initialLang);
    };

    const bindTheme = () => {
      const html = document.documentElement;
      const THEME_KEY = 'theme'; // 'light' | 'dark' | 'system'
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const DARK_COLOR = '#121212';
      const LIGHT_COLOR = '#ffffff';

      const getStoredTheme = () => {
        try { return localStorage.getItem(THEME_KEY) || 'system'; } catch (_) { return 'system'; }
      };
      const setStoredTheme = (value) => { try { localStorage.setItem(THEME_KEY, value); } catch (_) {} };

      const syncThemeArtifacts = (effective) => {
        html.setAttribute('data-theme', effective);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
          meta.setAttribute('content', effective === 'dark' ? DARK_COLOR : LIGHT_COLOR);
        }
      };

      const applyTheme = (mode) => {
        const effective = mode === 'system' ? (prefersDark.matches ? 'dark' : 'light') : mode;
        if (effective === 'dark') html.classList.add('dark'); else html.classList.remove('dark');
        syncThemeArtifacts(effective);
        updateThemeUI(mode);
      };

      const updateThemeUI = (mode) => {
        document.querySelectorAll('[data-theme-option]').forEach((btn) => {
          const val = btn.getAttribute('data-theme-option');
          const active = val === mode;
          btn.classList.toggle('bg-brand-cta', active);
          btn.classList.toggle('text-brand-cta-text', active);
          btn.classList.toggle('shadow', active);
        });

        // Update compact cycle button icon and aria-label
        const cycleBtn = document.querySelector('[data-theme-cycle]');
        if (cycleBtn) {
          cycleBtn.setAttribute('aria-label', \\\`Theme: \\\${mode}\\\`);
          cycleBtn.querySelectorAll('[data-icon]')?.forEach((el) => {
            const show = el.getAttribute('data-icon') === mode;
            el.classList.toggle('hidden', !show);
            el.classList.toggle('block', show);
          });
        }
      };

      const current = getStoredTheme();
      applyTheme(current);

      // Respond to system changes when in system mode
      if (!(bindTheme._boundMatch)) {
        prefersDark.addEventListener('change', () => {
          if (getStoredTheme() === 'system') applyTheme('system');
        });
        bindTheme._boundMatch = true;
      }

      // Bind segmented controls
      document.querySelectorAll('[data-theme-group]').forEach((group) => {
        if (group._boundTheme) return;
        group.addEventListener('click', (e) => {
          const target = e.target.closest('[data-theme-option]');
          if (!target) return;
          const val = target.getAttribute('data-theme-option');
          setStoredTheme(val);
          applyTheme(val);
        });
        group._boundTheme = true;
      });

      // Bind cycle button (mobile navbar)
      const cycleBtn = document.querySelector('[data-theme-cycle]');
      if (cycleBtn && !cycleBtn._boundThemeCycle) {
        cycleBtn.addEventListener('click', () => {
          const order = ['light', 'system', 'dark'];
          const current = getStoredTheme();
          const idx = Math.max(0, order.indexOf(current));
          const next = order[(idx + 1) % order.length];
          setStoredTheme(next);
          applyTheme(next);
        });
        cycleBtn._boundThemeCycle = true;
      }
    };

    const bindMenu = () => {
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      if (menuToggle && mobileMenu && !(menuToggle)._boundMenu) {
        menuToggle.addEventListener('click', () => {
          const isOpen = !mobileMenu.classList.contains('hidden');
          if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open menu');
          } else {
            mobileMenu.classList.remove('hidden');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Close menu');
          }
        });
        (menuToggle)._boundMenu = true;
      }
    };

    // Run immediately and on pageshow (for bfcache)
    bindTheme();
    bindMenu();
    bindLanguage();
    window.addEventListener('pageshow', () => {
      bindTheme();
      bindMenu();
      bindLanguage();
    });
  })();
<\/script>`])), maybeRenderHead(), languageOptions.map(({ value, label }) => renderTemplate`<option${addAttribute(value, "value")}>${label}</option>`), languageOptions.map(({ value, label }) => renderTemplate`<option${addAttribute(value, "value")}>${label}</option>`), addAttribute(fallbackLanguage, "data-fallback"), unescapeHTML(translationsJSON));
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full px-2 sm:px-6 py-12 sm:pt-20 sm:pb-16"> <div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-cta/10 to-transparent opacity-60"></div> <div class="max-w-6xl mx-auto section-shell px-3 sm:px-8 md:px-12 py-8 sm:py-16 md:py-20"> <div class="flex flex-col items-center gap-10 sm:gap-14"> <!-- Visual --> <div class="relative flex w-full items-center justify-center"> <div class="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-brand-cta/12 via-white/30 to-transparent blur-3xl"></div> <img loading="lazy" src="/app_images/TABLE_MOCKUP_POS_MENU_VIEW.png" alt="Immersive tabletop POS experience presenting curated menu pathways" class="relative w-full max-w-[1200px] rounded-[36px]"> </div> <!-- Copy --> <div class="flex w-full flex-col items-center text-center"> <span class="badge-pill mb-4 sm:mb-6" data-i18n="heroBadge">Restaurant POS system</span> <h1 class="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] sm:leading-[1.05] text-brand-text dark:text-brand-text-dark" data-i18n="heroHeading">
Run your restaurant's finances and operations from one KDSX hub
</h1> <p class="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-brand-text/80 dark:text-brand-text-dark/75" data-i18n="heroBody">
Automate ordering, watch spend in real time, and keep every guest-facing moment in sync with the kitchen behind it.
</p> <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center sm:items-center sm:gap-4 gap-3 w-full sm:w-auto px-2 sm:px-0"> <button data-plan-trigger="starter" class="inline-flex items-center justify-center rounded-full bg-brand-cta px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_20px_40px_-20px_rgba(26,77,26,0.55)] transition-transform duration-300 hover:scale-[1.02]"> <span data-i18n="pricingStarterCta">Activate Free Month</span> </button> </div> <dl class="mt-10 sm:mt-14 grid gap-3 sm:gap-4 w-full max-w-4xl sm:grid-cols-3 px-2 sm:px-0"> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark"> <dt class="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cta-text dark:text-brand-cta" data-i18n="heroMetricDowntimeTitle">Cut downtime</dt> <dd class="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold">-32%</dd> <p class="mt-2 text-xs sm:text-sm text-brand-text/70 dark:text-brand-text-dark/70 leading-relaxed" data-i18n="heroMetricDowntimeCopy">Multi-site teams trim ticket times within their first month on KDSX.</p> </div> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark"> <dt class="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cta-text dark:text-brand-cta" data-i18n="heroMetricInventoryTitle">Inventory accuracy</dt> <dd class="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold">98.4%</dd> <p class="mt-2 text-xs sm:text-sm text-brand-text/70 dark:text-brand-text-dark/70 leading-relaxed" data-i18n="heroMetricInventoryCopy">Live counts stay aligned between prep stations, storage, and the floor.</p> </div> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark"> <dt class="text-xs font-semibold uppercase tracking-[0.35em] text-brand-cta-text dark:text-brand-cta" data-i18n="heroMetricRoiTitle">ROI in</dt> <dd class="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold">90 days</dd> <p class="mt-2 text-xs sm:text-sm text-brand-text/70 dark:text-brand-text-dark/70 leading-relaxed" data-i18n="heroMetricRoiCopy">Most crews earn back their rollout costs by the end of the first quarter.</p> </div> </dl> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/Hero.astro", void 0);

const $$LogoMarquee = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-2 sm:px-6 py-12 sm:pt-20 sm:pb-16"> <div class="max-w-6xl mx-auto section-shell px-6 sm:px-8 md:px-10 py-12 sm:py-16"> <div class="flex flex-col items-center text-center gap-6"> <span class="badge-pill" data-i18n="logosBadge">Trusted teams</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark" data-i18n="logosHeading">
Preferred by top-performing hospitality groups
</h2> <p class="max-w-2xl text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="logosBody">
Groups across three continents rely on KDSX to orchestrate every service window without losing the warmth guests expect.
</p> </div> <div class="relative mt-12 overflow-hidden rounded-[28px] border border-white/20 bg-white/60 p-6 dark:border-white/10 dark:bg-white/10"> <div class="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/40 to-transparent dark:from-black/40"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/40 to-transparent dark:from-black/40"></div> <div class="flex flex-wrap items-center justify-center gap-10 sm:gap-12"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> <img src="/logo.png" alt="Partner logo" class="h-10 w-auto rounded-full border border-white/30 bg-white/90 p-2 opacity-70 shadow-sm dark:border-white/10 dark:bg-white/10"> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/LogoMarquee.astro", void 0);

const $$BusinessSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-2 sm:px-6 py-12 sm:pt-20 sm:pb-16"> <div class="max-w-6xl mx-auto section-shell px-4 sm:px-10 py-14 sm:py-20"> <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start"> <div class="space-y-6"> <span class="badge-pill" data-i18n="businessBadge">Why teams switch</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark" data-i18n="businessHeading">
A command center that flexes with every service window
</h2> <p class="text-base sm:text-lg text-brand-text/75 dark:text-brand-text-dark/70 max-w-xl" data-i18n="businessBody">
KDSX pulls order flow, labor, and inventory into one place so you can drop the mix of spreadsheets and point solutions slowing everyone down.
</p> <div class="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-cta-text dark:text-brand-cta-text"> <span class="rounded-full bg-brand-cta/15 px-4 py-2">POS</span> <span class="rounded-full bg-brand-cta/15 px-4 py-2">Kitchen Display</span> <span class="rounded-full bg-brand-cta/15 px-4 py-2">Inventory</span> <span class="rounded-full bg-brand-cta/15 px-4 py-2">Analytics</span> </div> </div> <div class="grid gap-6 sm:grid-cols-2"> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="businessCard1Title">Actionable insights</div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="businessCard1Heading">Act on every shift’s data</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="businessCard1Body">
Targeted alerts flag unusual spend or prep volume so you can rebalance staff before the rush.
</p> </div> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="businessCard2Title">Unified control</div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="businessCard2Heading">Everything in one workspace</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="businessCard2Body">
Update menus, sync counts, and check on prep boards without jumping between apps.
</p> </div> <div class="surface-card p-4 sm:p-6 text-left text-brand-text dark:text-brand-text-dark sm:col-span-2"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="businessCard3Title">Team Experience</div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="businessCard3Heading">Staff love getting time back</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="businessCard3Body">
Onboarding takes minutes, updates cascade instantly, and service stays calm even when orders spike.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/BusinessSection.astro", void 0);

const $$FeaturesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features" class="w-full px-2 sm:px-6 py-12 sm:pb-24"> <div class="max-w-6xl mx-auto section-shell px-3 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20"> <div class="flex flex-col items-start gap-4 sm:gap-6 text-left"> <span class="badge-pill" data-i18n="featuresBadge">Cutting-edge suite</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark" data-i18n="featuresHeading">
Every touchpoint fused into a real-time operations dashboard
</h2> <p class="max-w-3xl text-base sm:text-lg leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="featuresBody">
KDSX keeps teams aligned with a living snapshot of orders, prep, and profitability. Surface issues faster, adjust on the fly, and deliver faster service shifts your guests notice.
</p> </div> <div class="mt-8 sm:mt-12 space-y-6 sm:space-y-10"> <div class="feature-panel overflow-hidden text-brand-text dark:text-brand-text-dark"> <div class="relative"> <div class="absolute -top-12 right-12 h-36 w-36 rounded-full bg-brand-cta/25 blur-3xl"></div> <img loading="lazy" src="/app_images/PC_MOCKUP_DASH_VIEW.png" alt="Operations dashboard displaying revenue, prep, and guest sentiment metrics" class="block w-full object-cover"> </div> <div class="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 md:pt-8"> <div class="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="featuresCard1Tag">Command center</div> <h3 class="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold" data-i18n="featuresCard1Title">One dashboard for every mission-critical signal</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="featuresCard1Body">
Watch revenue trends, prep pace, and guest feedback in one live view so you can call the next move with confidence.
</p> <div class="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-4"> <div class="rounded-xl sm:rounded-2xl border-0 sm:border sm:border-white/20 bg-white/70 px-3 sm:px-4 py-2 sm:py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cta-text shadow-sm sm:shadow-[0_12px_30px_-24px_rgba(26,77,26,0.5)] dark:border-white/20 dark:bg-white/15 dark:text-brand-cta-text-dark"> <span data-i18n="featuresCard1Pill1">Shift Forecasts</span> </div> <div class="rounded-xl sm:rounded-2xl border-0 sm:border sm:border-white/20 bg-white/70 px-3 sm:px-4 py-2 sm:py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cta-text shadow-sm sm:shadow-[0_12px_30px_-24px_rgba(26,77,26,0.5)] dark:border-white/20 dark:bg-white/15 dark:text-brand-cta-text-dark"> <span data-i18n="featuresCard1Pill2">Live KPIs</span> </div> <div class="rounded-xl sm:rounded-2xl border-0 sm:border sm:border-white/20 bg-white/70 px-3 sm:px-4 py-2 sm:py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cta-text shadow-sm sm:shadow-[0_12px_30px_-24px_rgba(26,77,26,0.5)] dark:border-white/20 dark:bg-white/15 dark:text-brand-cta-text-dark"> <span data-i18n="featuresCard1Pill3">Service Alerts</span> </div> </div> </div> </div> <div class="feature-panel overflow-hidden text-left text-brand-text dark:text-brand-text-dark"> <img loading="lazy" src="/app_images/TABLE_MOCKUP_POS_MENU_VIEW.png" alt="Table-side POS tablet presenting menu and modifiers" class="block w-full object-cover"> <div class="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 md:pt-8"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="featuresCard2Tag">Front-of-house</div> <h3 class="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold" data-i18n="featuresCard2Title">Menus that flex with every guest</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="featuresCard2Body">
Guided upsells, modifiers, and payments stay smooth whether the order starts tableside, at the counter, or online.
</p> </div> </div> <div class="feature-panel overflow-hidden text-left text-brand-text dark:text-brand-text-dark"> <img loading="lazy" src="/app_images/TABLE_MOCKUP_KITCHEN_ORDER_VIEW.png" alt="Kitchen display tablet showing synchronized order queues" class="block w-full object-cover"> <div class="px-6 pt-6 pb-8"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="featuresCard3Tag">Kitchen display</div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="featuresCard3Title">Keep every station in lockstep</h3> <p class="mt-3 text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="featuresCard3Body">
Tickets route with timers, allergen callouts, and prep priorities so the line always knows what’s next.
</p> </div> </div> <div class="feature-panel overflow-hidden text-left text-brand-text dark:text-brand-text-dark md:hidden"> <img loading="lazy" src="/app_images/PHONE_MOCKUP_POS_MENU_VIEW.png" alt="Mobile ordering interface highlighting quick table-side actions" class="block w-full object-cover"> <div class="px-7 pt-7 pb-8"> <div class="flex items-center justify-between"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="featuresCard4Tag">Mobile service</div> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text">Live</span> </div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="featuresCard4Title">Pocket-ready control for floor teams</h3> <p class="mt-3 text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="featuresCard4Body">
Team members fire orders, apply discounts, and take payments without leaving the floor—every change syncs across displays in seconds.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/FeaturesSection.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-2 sm:px-6 py-12 sm:pt-20 sm:pb-16"> <div class="max-w-6xl mx-auto section-shell px-4 sm:px-10 py-14 sm:py-20"> <div class="flex flex-col items-center text-center gap-6"> <span class="badge-pill" data-i18n="howBadge">How it works</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark" data-i18n="howHeading">
Go live in a weekend—deliver impact on Monday
</h2> <p class="max-w-3xl text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="howBody">
From onboarding to full operational sync, KDSX keeps deployment effortless for lean teams.
</p> </div> <div class="mt-14 grid gap-8 md:grid-cols-3"> <div class="surface-card p-4 text-left text-brand-text dark:text-brand-text-dark"> <div class="flex items-center justify-between"> <span class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta">Step 01</span> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text" data-i18n="howStep1Tag">Setup</span> </div> <h3 class="mt-5 text-2xl font-semibold" data-i18n="howStep1Title">Create your workspace</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="howStep1Body">Import menus, configure stations, and invite staff with role-based permissions in minutes.</p> </div> <div class="surface-card p-4 text-left text-brand-text dark:text-brand-text-dark"> <div class="flex items-center justify-between"> <span class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta">Step 02</span> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text" data-i18n="howStep2Tag">Sync</span> </div> <h3 class="mt-5 text-2xl font-semibold" data-i18n="howStep2Title">Link devices and data</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="howStep2Body">Connect tablets, phones, and printers while KDSX syncs inventory and historical sales.</p> </div> <div class="surface-card p-4 text-left text-brand-text dark:text-brand-text-dark"> <div class="flex items-center justify-between"> <span class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta">Step 03</span> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text" data-i18n="howStep3Tag">Optimize</span> </div> <h3 class="mt-5 text-2xl font-semibold" data-i18n="howStep3Title">Launch and iterate fast</h3> <p class="mt-3 text-sm leading-relaxed text-brand-text/75 dark:text-brand-text-dark/70" data-i18n="howStep3Body">Track performance dashboards in real time, adjust prep, and share learnings instantly.</p> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/HowItWorks.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="w-full px-3 sm:px-6 py-12 sm:pb-24"> <div class="max-w-6xl mx-auto section-shell px-2 sm:px-10 py-12 sm:py-16"> <div class="max-w-6xl mx-auto px-2 sm:px-4 text-center"> <span class="badge-pill" data-i18n="testimonialsBadge">From our users</span> <h2 class="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark px-2" data-i18n="testimonialsHeading">
Hospitality leaders share what changed with KDSX
</h2> <p class="mt-4 text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70 px-2" data-i18n="testimonialsSubheading">
What our users are saying
</p> <div class="relative mx-auto mt-10 sm:mt-14 max-w-3xl"> <!-- Mobile: cleaner look with reduced decorations --> <div class="testimonial-container relative overflow-hidden rounded-none sm:rounded-[32px] border-0 sm:border sm:border-white/20 bg-transparent sm:bg-white/70 text-left shadow-none sm:shadow-[0_40px_120px_-70px_rgba(26,77,26,0.55)] backdrop-blur-0 sm:backdrop-blur-2xl dark:border-white/15 dark:bg-white/10"> <div class="testimonial-track" style="display: flex; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);"> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="0" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard1Quote">
"KDSX let us retire four separate tools. Ticket visibility jumped overnight and waste dropped by 28%."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard1Author">
Farida Orujova \xB7 Operations Director
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="1" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard2Quote">
"Our managers finally have one source of truth. Prep boards, POS, and analytics update as fast as service moves."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard2Author">
Ahmed Hassan \xB7 Multi-unit Owner
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="2" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard3Quote">
"Inventory recounts went from nightly chaos to a 10-minute spot check. The finance sync is magic."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard3Author">
Maria Rodriguez \xB7 Beverage Lead
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="3" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard4Quote">
"Because KDSX automates routing and reporting, we redeployed two full-time ops roles to guest experience."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard4Author">
David Chen \xB7 Founder
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="4" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard5Quote">
"The reporting features are incredible. I can see exactly where my money goes and make better business decisions."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard5Author">
Sarah Johnson \xB7 Finance Lead
</p> </div> </div> </div> <div class="mt-5 sm:mt-6 flex items-center justify-between px-1"> <button id="prev-testimonial" class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-cta/30 sm:border-brand-cta/40 bg-white/90 sm:bg-white/80 text-brand-text shadow-md sm:shadow-lg transition-transform duration-300 hover:-translate-x-1 hover:bg-white active:scale-95 dark:border-white/15 dark:sm:border-white/20 dark:bg-white/15 dark:sm:bg-white/10 dark:text-brand-text-dark" aria-label="Previous testimonial"> <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> <div class="flex items-center gap-1.5 sm:gap-2" aria-hidden="true"> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/70 transition-all duration-300" data-slider-dot="0"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="1"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="2"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="3"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="4"></span> </div> <button id="next-testimonial" class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-cta text-brand-cta-text shadow-md sm:shadow-lg transition-transform duration-300 hover:translate-x-1 active:scale-95" aria-label="Next testimonial"> <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> </div> </div> </section> <script>
  (function initTestimonialSlider() {
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    if (!nextBtn || !prevBtn) return;

    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const dots = Array.from(document.querySelectorAll('[data-slider-dot]'));
    if (!track || slides.length === 0) return;

    let index = 0;
    let autoRotate;

    const setIndex = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      
      // Slide horizontally by translating the track
      track.style.transform = \`translateX(-\${index * 100}%)\`;
      
      // Update dots
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
          dot.classList.remove('bg-brand-cta/20');
          dot.classList.add('bg-brand-cta/70');
        } else {
          dot.classList.remove('bg-brand-cta/70');
          dot.classList.add('bg-brand-cta/20');
        }
      });
    };

    const next = () => setIndex(index + 1);
    const prev = () => setIndex(index - 1);

    const startAutoRotate = () => {
      clearInterval(autoRotate);
      autoRotate = setInterval(next, 7000);
    };

    const stopAutoRotate = () => clearInterval(autoRotate);

    nextBtn.addEventListener('click', () => {
      next();
      startAutoRotate();
    });
    prevBtn.addEventListener('click', () => {
      prev();
      startAutoRotate();
    });

    const container = document.querySelector('.testimonial-container');
    if (container) {
      container.addEventListener('mouseenter', stopAutoRotate);
      container.addEventListener('mouseleave', startAutoRotate);
    }

    setIndex(0);
    startAutoRotate();
  })();
<\/script>`], ["", `<section class="w-full px-3 sm:px-6 py-12 sm:pb-24"> <div class="max-w-6xl mx-auto section-shell px-2 sm:px-10 py-12 sm:py-16"> <div class="max-w-6xl mx-auto px-2 sm:px-4 text-center"> <span class="badge-pill" data-i18n="testimonialsBadge">From our users</span> <h2 class="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark px-2" data-i18n="testimonialsHeading">
Hospitality leaders share what changed with KDSX
</h2> <p class="mt-4 text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70 px-2" data-i18n="testimonialsSubheading">
What our users are saying
</p> <div class="relative mx-auto mt-10 sm:mt-14 max-w-3xl"> <!-- Mobile: cleaner look with reduced decorations --> <div class="testimonial-container relative overflow-hidden rounded-none sm:rounded-[32px] border-0 sm:border sm:border-white/20 bg-transparent sm:bg-white/70 text-left shadow-none sm:shadow-[0_40px_120px_-70px_rgba(26,77,26,0.55)] backdrop-blur-0 sm:backdrop-blur-2xl dark:border-white/15 dark:bg-white/10"> <div class="testimonial-track" style="display: flex; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);"> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="0" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard1Quote">
"KDSX let us retire four separate tools. Ticket visibility jumped overnight and waste dropped by 28%."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard1Author">
Farida Orujova \xB7 Operations Director
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="1" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard2Quote">
"Our managers finally have one source of truth. Prep boards, POS, and analytics update as fast as service moves."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard2Author">
Ahmed Hassan \xB7 Multi-unit Owner
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="2" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard3Quote">
"Inventory recounts went from nightly chaos to a 10-minute spot check. The finance sync is magic."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard3Author">
Maria Rodriguez \xB7 Beverage Lead
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="3" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard4Quote">
"Because KDSX automates routing and reporting, we redeployed two full-time ops roles to guest experience."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard4Author">
David Chen \xB7 Founder
</p> </div> <div class="testimonial-slide px-4 py-5 sm:px-6 sm:py-8" data-slide="4" style="flex-shrink: 0; width: 100%;"> <blockquote class="text-lg sm:text-2xl font-semibold leading-relaxed text-brand-text dark:text-brand-text-dark" data-i18n="testimonialsCard5Quote">
"The reporting features are incredible. I can see exactly where my money goes and make better business decisions."
</blockquote> <p class="mt-5 sm:mt-6 text-xs sm:text-sm font-medium sm:uppercase tracking-wider sm:tracking-[0.25em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="testimonialsCard5Author">
Sarah Johnson \xB7 Finance Lead
</p> </div> </div> </div> <div class="mt-5 sm:mt-6 flex items-center justify-between px-1"> <button id="prev-testimonial" class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brand-cta/30 sm:border-brand-cta/40 bg-white/90 sm:bg-white/80 text-brand-text shadow-md sm:shadow-lg transition-transform duration-300 hover:-translate-x-1 hover:bg-white active:scale-95 dark:border-white/15 dark:sm:border-white/20 dark:bg-white/15 dark:sm:bg-white/10 dark:text-brand-text-dark" aria-label="Previous testimonial"> <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> <div class="flex items-center gap-1.5 sm:gap-2" aria-hidden="true"> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/70 transition-all duration-300" data-slider-dot="0"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="1"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="2"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="3"></span> <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-cta/20 transition-all duration-300" data-slider-dot="4"></span> </div> <button id="next-testimonial" class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-cta text-brand-cta-text shadow-md sm:shadow-lg transition-transform duration-300 hover:translate-x-1 active:scale-95" aria-label="Next testimonial"> <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> </div> </div> </div> </section> <script>
  (function initTestimonialSlider() {
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    if (!nextBtn || !prevBtn) return;

    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const dots = Array.from(document.querySelectorAll('[data-slider-dot]'));
    if (!track || slides.length === 0) return;

    let index = 0;
    let autoRotate;

    const setIndex = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      
      // Slide horizontally by translating the track
      track.style.transform = \\\`translateX(-\\\${index * 100}%)\\\`;
      
      // Update dots
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
          dot.classList.remove('bg-brand-cta/20');
          dot.classList.add('bg-brand-cta/70');
        } else {
          dot.classList.remove('bg-brand-cta/70');
          dot.classList.add('bg-brand-cta/20');
        }
      });
    };

    const next = () => setIndex(index + 1);
    const prev = () => setIndex(index - 1);

    const startAutoRotate = () => {
      clearInterval(autoRotate);
      autoRotate = setInterval(next, 7000);
    };

    const stopAutoRotate = () => clearInterval(autoRotate);

    nextBtn.addEventListener('click', () => {
      next();
      startAutoRotate();
    });
    prevBtn.addEventListener('click', () => {
      prev();
      startAutoRotate();
    });

    const container = document.querySelector('.testimonial-container');
    if (container) {
      container.addEventListener('mouseenter', stopAutoRotate);
      container.addEventListener('mouseleave', startAutoRotate);
    }

    setIndex(0);
    startAutoRotate();
  })();
<\/script>`])), maybeRenderHead());
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$WizardForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Plan Signup Wizard Modal -->", `<div id="plan-wizard" class="fixed inset-0 z-[60] hidden" data-endpoint="/api/lead" data-email="info@kdsx.uz,bekzodturgunoff@gmail.com"> <div class="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/70"></div> <div class="relative mx-auto my-10 max-w-lg px-4"> <div role="dialog" aria-modal="true" aria-labelledby="wizard-title" aria-describedby="wizard-subtitle" class="rounded-3xl border bg-[var(--color-brand-bg)] p-6 sm:p-7 md:p-8 shadow-2xl dark:border-white/20"> <div class="flex items-start justify-between"> <div> <h3 id="wizard-title" class="text-xl font-semibold text-[var(--color-brand-text)]" data-i18n="wizardTitle">Get your free demo account</h3> <p id="wizard-subtitle" class="mt-1 text-sm text-[var(--color-brand-text)] opacity-70" data-i18n="wizardSubtitle">Answer a couple of quick questions \u2014 we'll set up a demo and share credentials.</p> </div> <button type="button" id="wizard-close" aria-label="Close" data-i18n-aria-label="wizardSuccessCta" class="ml-4 rounded-full p-2 text-[var(--color-brand-text)] opacity-60 hover:bg-brand-cta/10 hover:opacity-100"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6" stroke-linecap="round"></path></svg> </button> </div> <div class="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-brand-text)] opacity-70"> <span id="wizard-step-label">Step 1 of 7</span> <span class="mx-2 h-1 w-1 rounded-full bg-[var(--color-brand-text)] opacity-40"></span> <span id="wizard-plan-label" class="truncate" data-i18n="wizardPlanPrefix">Plan:</span> </div> <form id="wizard-form" class="mt-6 space-y-6"> <!-- Step 1: Name --> <div data-step="0" class="step-panel"> <label for="fullName" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardNameLabel">What's your name?</label> <input id="fullName" name="fullName" type="text" required data-i18n-placeholder="wizardNamePlaceholder" placeholder="e.g., Alex Kim" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 2: Business name --> <div data-step="1" class="step-panel hidden"> <label for="businessName" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardBusinessLabel">What's your restaurant's or market's name?</label> <input id="businessName" name="businessName" type="text" required data-i18n-placeholder="wizardBusinessPlaceholder" placeholder="e.g., Green Leaf Bistro" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 3: Locations --> <div data-step="2" class="step-panel hidden"> <label for="locations" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardLocationsLabel">How many locations do you operate?</label> <select id="locations" name="locations" required class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white"> <option value="1" data-i18n="wizardLocationsOption1">1 location</option> <option value="2-5" data-i18n="wizardLocationsOption2">2\u20135 locations</option> <option value="6-10" data-i18n="wizardLocationsOption3">6\u201310 locations</option> <option value="11+" data-i18n="wizardLocationsOption4">11+ locations</option> </select> </div> <!-- Step 4: Service style / industry --> <div data-step="3" class="step-panel hidden"> <label for="serviceStyle" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardServiceStyleLabel">What best describes your service style?</label> <select id="serviceStyle" name="serviceStyle" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white"> <option value="" data-i18n="wizardServiceStyleOption0">Select one\u2026</option> <option value="cafe" data-i18n="wizardServiceStyleOptionCafe">Cafe</option> <option value="bistro" data-i18n="wizardServiceStyleOptionBistro">Bistro</option> <option value="quick" data-i18n="wizardServiceStyleOptionQuick">Quick\u2011service</option> <option value="full" data-i18n="wizardServiceStyleOptionFull">Full\u2011service</option> <option value="bar" data-i18n="wizardServiceStyleOptionBar">Bar</option> <option value="market" data-i18n="wizardServiceStyleOptionMarket">Market</option> <option value="other" data-i18n="wizardServiceStyleOptionOther">Other</option> </select> </div> <!-- Step 5: Current POS --> <div data-step="4" class="step-panel hidden"> <label for="currentPos" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardCurrentPosLabel">Which POS or systems are you using today?</label> <input id="currentPos" name="currentPos" type="text" data-i18n-placeholder="wizardCurrentPosPlaceholder" placeholder="e.g., Toast, Square, custom" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 6: Credentials --> <div data-step="5" class="step-panel hidden"> <div class="grid gap-4"> <div> <label for="desiredUsername" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardUsernameLabel">Preferred username</label> <input id="desiredUsername" name="desiredUsername" type="text" required pattern="^[a-zA-Z0-9._-]{3,20}$" data-i18n-placeholder="wizardUsernamePlaceholder" placeholder="e.g., alex.kim" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="desiredPassword" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardPasswordLabel">Preferred password</label> <input id="desiredPassword" name="desiredPassword" type="password" required minlength="8" data-i18n-placeholder="wizardPasswordPlaceholder" placeholder="At least 8 characters" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> </div> </div> <!-- Step 7: Contact details --> <div data-step="6" class="step-panel hidden"> <div class="grid gap-4"> <div> <label for="phone" class="block text-sm font-medium text-[var(--color-brand-text)]"><span data-i18n="wizardPhoneLabel">Your phone number</span><span class="text-brand-cta"> *</span></label> <input id="phone" name="phone" type="tel" required data-i18n-placeholder="wizardPhonePlaceholder" placeholder="e.g., +82 10-1234-5678" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="email" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardEmailLabel">Your email address (optional)</label> <input id="email" name="email" type="email" data-i18n-placeholder="wizardEmailPlaceholder" placeholder="e.g., you@company.com" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="telegram" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardTelegramLabel">Telegram (optional)</label> <input id="telegram" name="telegram" type="text" data-i18n-placeholder="wizardTelegramPlaceholder" placeholder="@yourhandle" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="kakaotalk" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardKakaoLabel">KakaoTalk (optional)</label> <input id="kakaotalk" name="kakaotalk" type="text" data-i18n-placeholder="wizardKakaoPlaceholder" placeholder="ID or phone" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> </div> </div> <!-- Controls --> <div class="flex items-center justify-between"> <button type="button" id="wizard-back" class="rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition disabled:opacity-60 border-brand-cta/30 bg-white/80 text-brand-text hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-[var(--color-brand-text)] dark:hover:bg-white/15" disabled data-i18n="wizardBack">Back</button> <div class="flex items-center gap-3"> <button type="button" id="wizard-next" class="rounded-full bg-brand-cta px-6 py-2.5 text-sm font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_16px_40px_-20px_rgba(26,77,26,0.55)] transition hover:scale-[1.02] disabled:opacity-60" data-i18n="wizardNext">Next</button> <button type="submit" id="wizard-submit" class="hidden rounded-full bg-brand-cta px-6 py-2.5 text-sm font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_16px_40px_-20px_rgba(26,77,26,0.55)] transition hover:scale-[1.02] disabled:opacity-60" data-i18n="wizardSubmit">Request demo</button> </div> </div> </form> <div id="wizard-success" class="mt-6 hidden rounded-xl border bg-[var(--color-brand-bg)] p-4 text-sm text-[var(--color-brand-text)] shadow-sm dark:border-white/20"> <div class="flex items-start gap-3"> <svg class="mt-0.5 h-5 w-5 text-brand-cta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p data-i18n="wizardSuccessMessage">Thanks \u2014 we've received your request. A demo account with username and password will be shared via your preferred contact. To continue beyond the demo, you can switch to the Pro plan at any time.</p> </div> <div class="mt-4 flex justify-end"> <button type="button" id="wizard-success-close" class="rounded-full bg-brand-cta px-5 py-2 text-sm font-semibold text-brand-cta-text" data-i18n="wizardSuccessCta">Close</button> </div> </div> </div> </div> </div> <script>
  (function planWizard(){
    const modal = document.getElementById('plan-wizard');
    const form = document.getElementById('wizard-form');
    const back = document.getElementById('wizard-back');
    const next = document.getElementById('wizard-next');
    const submitBtn = document.getElementById('wizard-submit');
    const closeBtn = document.getElementById('wizard-close');
    const stepLabel = document.getElementById('wizard-step-label');
    const planLabel = document.getElementById('wizard-plan-label');
    const titleEl = document.getElementById('wizard-title');
    const dialog = modal?.querySelector('[role="dialog"]');
    const panels = Array.from(form?.querySelectorAll('.step-panel') || []);
    let step = 0;
    let plan = '';
    const LS_KEY = 'kdsx-wizard-state';
    const CONFIG_ENDPOINT = modal?.getAttribute('data-endpoint') || '';
    let lastActive = null;
    let keydownHandler = null;
    const analytics = (event, data={}) => {
      try { window.dispatchEvent(new CustomEvent('kdsx.analytics', { detail: { event, ...data } })); } catch(_) {}
      try { console.info('[analytics]', event, data); } catch(_) {}
    };

    const sendMailFallback = (payload) => {
      try {
        const to = modal?.getAttribute('data-email') || 'info@kdsx.uz';
        const subject = encodeURIComponent(\`KDSX Lead \u2014 \${payload.plan || 'N/A'}\`);
        const bodyLines = [
          \`Plan: \${payload.plan}\`,
          \`Name: \${payload.fullName}\`,
          \`Business: \${payload.businessName}\`,
          \`Locations: \${payload.locations}\`,
          \`Service style: \${payload.serviceStyle}\`,
          \`Current POS: \${payload.currentPos}\`,
          \`Username: \${payload.desiredUsername}\`,
          \`Phone: \${payload.phone}\`,
          \`Email: \${payload.email}\`,
          \`Telegram: \${payload.telegram}\`,
          \`KakaoTalk: \${payload.kakaotalk}\`,
          \`Submitted: \${payload.timestamp}\`,
        ];
        const body = encodeURIComponent(bodyLines.join('\\n'));
        const mailto = \`mailto:\${to}?subject=\${subject}&body=\${body}\`;
        window.location.href = mailto;
      } catch (_) {}
    };

    const translationsNode = document.getElementById('translations-data');
    const fallbackLang = translationsNode?.dataset?.fallback || 'en';
    let dictionaries = {};
    try { dictionaries = translationsNode ? JSON.parse(translationsNode.textContent || '{}') : {}; } catch(_) { dictionaries = {}; }
    const currentLang = document.documentElement.getAttribute('lang') || fallbackLang;
    const t = (key) => {
      const dict = dictionaries[currentLang] || dictionaries[fallbackLang] || {};
      return (dict[key] ?? '');
    };

    const applyPlaceholders = () => {
      document.querySelectorAll('[data-i18n-placeholder]')?.forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        const val = t(key);
        if (val) el.setAttribute('placeholder', val);
      });
    };

    const applyAriaLabels = () => {
      document.querySelectorAll('[data-i18n-aria-label]')?.forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (!key) return;
        const val = t(key);
        if (val) el.setAttribute('aria-label', val);
      });
    };

    const setBodyScroll = (lock) => {
      const html = document.documentElement;
      if (lock) html.classList.add('overflow-hidden'); else html.classList.remove('overflow-hidden');
    };

    const showStep = (idx) => {
      step = Math.max(0, Math.min(idx, panels.length - 1));
      panels.forEach((p, i) => p.classList.toggle('hidden', i !== step));
      back.disabled = step === 0;
      next.classList.toggle('hidden', step === panels.length - 1);
      submitBtn.classList.toggle('hidden', step !== panels.length - 1);
      const template = t('wizardStepTemplate') || 'Step {current} of {total}';
      stepLabel.textContent = template.replace('{current}', String(step + 1)).replace('{total}', String(panels.length));
      analytics('wizard_step_view', { step });
    };

    const getFocusable = () => {
      if (!dialog) return [];
      return Array.from(dialog.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
    };

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      const f = getFocusable();
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const open = (planName) => {
      lastActive = document.activeElement;
      plan = planName;
      const planDisplay = (() => {
        if (planName === 'starter') return t('pricingStarterLabel') || 'Starter';
        if (planName === 'pro') return t('pricingProLabel') || 'Pro';
        if (planName === 'enterprise') return t('pricingEnterpriseTitle') || 'Enterprise';
        return t('pricingProLabel') || (planName[0]?.toUpperCase() + planName.slice(1));
      })();
      if (planLabel) planLabel.textContent = \`\${t('wizardPlanPrefix') || 'Plan:'} \${planDisplay}\`;
      if (titleEl) {
        const titleMap = {
          starter: t('wizardTitleStarter') || 'Get your free month \u2014 Starter',
          pro: t('wizardTitlePro') || 'Get started with Pro',
          enterprise: t('wizardTitleEnterprise') || 'Talk to sales \u2014 Enterprise',
          cta: t('wizardTitleGeneric') || 'Request a demo',
        };
        titleEl.textContent = titleMap[planName] || (t('wizardTitleGeneric') || 'Request a demo');
      }
      modal.classList.remove('hidden');
      showStep(0);
      setBodyScroll(true);
      requestAnimationFrame(() => {
        const first = panels[0].querySelector('input');
        first && first.focus && first.focus();
      });
      applyPlaceholders();
      applyAriaLabels();
      keydownHandler = (e) => {
        if (e.key === 'Escape') { close(); return; }
        trapFocus(e);
      };
      document.addEventListener('keydown', keydownHandler);
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
        if (saved && saved.plan === planName) {
          form.fullName && (form.fullName.value = saved.fullName || '');
          form.businessName && (form.businessName.value = saved.businessName || '');
          form.locations && (form.locations.value = saved.locations || '');
          form.currentPos && (form.currentPos.value = saved.currentPos || '');
          form.desiredUsername && (form.desiredUsername.value = saved.desiredUsername || '');
          form.serviceStyle && (form.serviceStyle.value = saved.serviceStyle || '');
          form.phone && (form.phone.value = saved.phone || '');
          form.email && (form.email.value = saved.email || '');
          form.telegram && (form.telegram.value = saved.telegram || '');
          form.kakaotalk && (form.kakaotalk.value = saved.kakaotalk || '');
        }
      } catch(_) {}
      analytics('wizard_open', { plan: planName });
    };

    const close = () => {
      modal.classList.add('hidden');
      setBodyScroll(false);
      form?.reset();
      const success = document.getElementById('wizard-success');
      success?.classList.add('hidden');
      if (keydownHandler) { document.removeEventListener('keydown', keydownHandler); keydownHandler = null; }
      if (lastActive && lastActive.focus) {
        try { lastActive.focus(); } catch(_) {}
      }
      analytics('wizard_close', { plan });
    };

    document.querySelectorAll('[data-plan-trigger]')?.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = el.getAttribute('data-plan-trigger') || 'starter';
        open(planName);
      });
    });

    closeBtn?.addEventListener('click', close);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    back?.addEventListener('click', () => showStep(step - 1));
    next?.addEventListener('click', () => {
      const currentPanel = panels[step];
      const requiredInputs = Array.from(currentPanel.querySelectorAll('input[required]'));
      for (const input of requiredInputs) {
        if (!input.value.trim()) { input.focus(); return; }
      }
      const requiredSelects = Array.from(currentPanel.querySelectorAll('select[required]'));
      for (const sel of requiredSelects) {
        if (!sel.value) { sel.focus(); return; }
      }
      try {
        const state = {
          plan,
          fullName: form.fullName?.value || '',
          businessName: form.businessName?.value || '',
          locations: form.locations?.value || '',
          currentPos: form.currentPos?.value || '',
          desiredUsername: form.desiredUsername?.value || '',
          serviceStyle: form.serviceStyle?.value || '',
          phone: form.phone?.value || '',
          email: form.email?.value || '',
          telegram: form.telegram?.value || '',
          kakaotalk: form.kakaotalk?.value || '',
        };
        localStorage.setItem(LS_KEY, JSON.stringify(state));
      } catch(_) {}
      analytics('wizard_step_next', { step });
      showStep(step + 1);
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const phone = form.querySelector('#phone');
      if (phone && !phone.value.trim()) { phone.focus(); return; }

      const payload = {
        plan,
        fullName: form.fullName?.value || '',
        businessName: form.businessName?.value || '',
        locations: form.locations?.value || '',
        serviceStyle: form.serviceStyle?.value || '',
        currentPos: form.currentPos?.value || '',
        desiredUsername: form.desiredUsername?.value || '',
        desiredPassword: form.desiredPassword?.value || '',
        phone: form.phone?.value || '',
        email: form.email?.value || '',
        telegram: form.telegram?.value || '',
        kakaotalk: form.kakaotalk?.value || '',
        timestamp: new Date().toISOString(),
      };

      try {
        analytics('wizard_submit', { plan });
        submitBtn.disabled = true;
        next.disabled = true;
        back.disabled = true;
        submitBtn.textContent = t('wizardSubmitting') || 'Submitting\u2026';
        if (CONFIG_ENDPOINT) {
          const response = await fetch(CONFIG_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            const err = new Error(\`Lead endpoint returned \${response.status}\`);
            err.status = response.status;
            throw err;
          }
        } else {
          console.warn('[wizard] No lead endpoint configured. Set data-endpoint on #plan-wizard. Payload:', payload);
          // Fallback: compose an email with the submission so you still receive the lead.
          sendMailFallback(payload);
          await new Promise((res)=> setTimeout(res, 400));
        }

        form.classList.add('hidden');
        const success = document.getElementById('wizard-success');
        success?.classList.remove('hidden');
        try { localStorage.removeItem(LS_KEY); } catch(_) {}
      } catch (err) {
        console.error('Failed to submit lead', err);
        analytics('wizard_submit_error', { plan, status: err?.status || null });
        sendMailFallback(payload);
        submitBtn.disabled = false;
        next.disabled = false;
        back.disabled = step === 0;
        submitBtn.textContent = t('wizardSubmit') || 'Request demo';
        alert(t('wizardError') || 'Something went wrong. Please try again. We opened your email client so you can send the request manually.');
      }
    });

    document.getElementById('wizard-success-close')?.addEventListener('click', close);

    document.querySelectorAll('.lang-select')?.forEach((sel) => {
      sel.addEventListener('change', () => setTimeout(() => { applyPlaceholders(); applyAriaLabels(); }, 50));
    });
    applyPlaceholders();
    applyAriaLabels();
  })();
<\/script>`], ["<!-- Plan Signup Wizard Modal -->", `<div id="plan-wizard" class="fixed inset-0 z-[60] hidden" data-endpoint="/api/lead" data-email="info@kdsx.uz,bekzodturgunoff@gmail.com"> <div class="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/70"></div> <div class="relative mx-auto my-10 max-w-lg px-4"> <div role="dialog" aria-modal="true" aria-labelledby="wizard-title" aria-describedby="wizard-subtitle" class="rounded-3xl border bg-[var(--color-brand-bg)] p-6 sm:p-7 md:p-8 shadow-2xl dark:border-white/20"> <div class="flex items-start justify-between"> <div> <h3 id="wizard-title" class="text-xl font-semibold text-[var(--color-brand-text)]" data-i18n="wizardTitle">Get your free demo account</h3> <p id="wizard-subtitle" class="mt-1 text-sm text-[var(--color-brand-text)] opacity-70" data-i18n="wizardSubtitle">Answer a couple of quick questions \u2014 we'll set up a demo and share credentials.</p> </div> <button type="button" id="wizard-close" aria-label="Close" data-i18n-aria-label="wizardSuccessCta" class="ml-4 rounded-full p-2 text-[var(--color-brand-text)] opacity-60 hover:bg-brand-cta/10 hover:opacity-100"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6" stroke-linecap="round"></path></svg> </button> </div> <div class="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--color-brand-text)] opacity-70"> <span id="wizard-step-label">Step 1 of 7</span> <span class="mx-2 h-1 w-1 rounded-full bg-[var(--color-brand-text)] opacity-40"></span> <span id="wizard-plan-label" class="truncate" data-i18n="wizardPlanPrefix">Plan:</span> </div> <form id="wizard-form" class="mt-6 space-y-6"> <!-- Step 1: Name --> <div data-step="0" class="step-panel"> <label for="fullName" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardNameLabel">What's your name?</label> <input id="fullName" name="fullName" type="text" required data-i18n-placeholder="wizardNamePlaceholder" placeholder="e.g., Alex Kim" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 2: Business name --> <div data-step="1" class="step-panel hidden"> <label for="businessName" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardBusinessLabel">What's your restaurant's or market's name?</label> <input id="businessName" name="businessName" type="text" required data-i18n-placeholder="wizardBusinessPlaceholder" placeholder="e.g., Green Leaf Bistro" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 3: Locations --> <div data-step="2" class="step-panel hidden"> <label for="locations" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardLocationsLabel">How many locations do you operate?</label> <select id="locations" name="locations" required class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white"> <option value="1" data-i18n="wizardLocationsOption1">1 location</option> <option value="2-5" data-i18n="wizardLocationsOption2">2\u20135 locations</option> <option value="6-10" data-i18n="wizardLocationsOption3">6\u201310 locations</option> <option value="11+" data-i18n="wizardLocationsOption4">11+ locations</option> </select> </div> <!-- Step 4: Service style / industry --> <div data-step="3" class="step-panel hidden"> <label for="serviceStyle" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardServiceStyleLabel">What best describes your service style?</label> <select id="serviceStyle" name="serviceStyle" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white"> <option value="" data-i18n="wizardServiceStyleOption0">Select one\u2026</option> <option value="cafe" data-i18n="wizardServiceStyleOptionCafe">Cafe</option> <option value="bistro" data-i18n="wizardServiceStyleOptionBistro">Bistro</option> <option value="quick" data-i18n="wizardServiceStyleOptionQuick">Quick\u2011service</option> <option value="full" data-i18n="wizardServiceStyleOptionFull">Full\u2011service</option> <option value="bar" data-i18n="wizardServiceStyleOptionBar">Bar</option> <option value="market" data-i18n="wizardServiceStyleOptionMarket">Market</option> <option value="other" data-i18n="wizardServiceStyleOptionOther">Other</option> </select> </div> <!-- Step 5: Current POS --> <div data-step="4" class="step-panel hidden"> <label for="currentPos" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardCurrentPosLabel">Which POS or systems are you using today?</label> <input id="currentPos" name="currentPos" type="text" data-i18n-placeholder="wizardCurrentPosPlaceholder" placeholder="e.g., Toast, Square, custom" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <!-- Step 6: Credentials --> <div data-step="5" class="step-panel hidden"> <div class="grid gap-4"> <div> <label for="desiredUsername" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardUsernameLabel">Preferred username</label> <input id="desiredUsername" name="desiredUsername" type="text" required pattern="^[a-zA-Z0-9._-]{3,20}$" data-i18n-placeholder="wizardUsernamePlaceholder" placeholder="e.g., alex.kim" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="desiredPassword" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardPasswordLabel">Preferred password</label> <input id="desiredPassword" name="desiredPassword" type="password" required minlength="8" data-i18n-placeholder="wizardPasswordPlaceholder" placeholder="At least 8 characters" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> </div> </div> <!-- Step 7: Contact details --> <div data-step="6" class="step-panel hidden"> <div class="grid gap-4"> <div> <label for="phone" class="block text-sm font-medium text-[var(--color-brand-text)]"><span data-i18n="wizardPhoneLabel">Your phone number</span><span class="text-brand-cta"> *</span></label> <input id="phone" name="phone" type="tel" required data-i18n-placeholder="wizardPhonePlaceholder" placeholder="e.g., +82 10-1234-5678" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="email" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardEmailLabel">Your email address (optional)</label> <input id="email" name="email" type="email" data-i18n-placeholder="wizardEmailPlaceholder" placeholder="e.g., you@company.com" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="telegram" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardTelegramLabel">Telegram (optional)</label> <input id="telegram" name="telegram" type="text" data-i18n-placeholder="wizardTelegramPlaceholder" placeholder="@yourhandle" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> <div> <label for="kakaotalk" class="block text-sm font-medium text-[var(--color-brand-text)]" data-i18n="wizardKakaoLabel">KakaoTalk (optional)</label> <input id="kakaotalk" name="kakaotalk" type="text" data-i18n-placeholder="wizardKakaoPlaceholder" placeholder="ID or phone" class="mt-2 w-full rounded-xl border px-4 py-3 shadow-sm outline-none transition focus:ring-2 border-brand-cta-text/25 bg-white text-[#1a1a1a] placeholder:text-gray-500 focus:border-brand-cta focus:ring-brand-cta/40 dark:border-white/20 dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-400"> </div> </div> </div> <!-- Controls --> <div class="flex items-center justify-between"> <button type="button" id="wizard-back" class="rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition disabled:opacity-60 border-brand-cta/30 bg-white/80 text-brand-text hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-[var(--color-brand-text)] dark:hover:bg-white/15" disabled data-i18n="wizardBack">Back</button> <div class="flex items-center gap-3"> <button type="button" id="wizard-next" class="rounded-full bg-brand-cta px-6 py-2.5 text-sm font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_16px_40px_-20px_rgba(26,77,26,0.55)] transition hover:scale-[1.02] disabled:opacity-60" data-i18n="wizardNext">Next</button> <button type="submit" id="wizard-submit" class="hidden rounded-full bg-brand-cta px-6 py-2.5 text-sm font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_16px_40px_-20px_rgba(26,77,26,0.55)] transition hover:scale-[1.02] disabled:opacity-60" data-i18n="wizardSubmit">Request demo</button> </div> </div> </form> <div id="wizard-success" class="mt-6 hidden rounded-xl border bg-[var(--color-brand-bg)] p-4 text-sm text-[var(--color-brand-text)] shadow-sm dark:border-white/20"> <div class="flex items-start gap-3"> <svg class="mt-0.5 h-5 w-5 text-brand-cta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p data-i18n="wizardSuccessMessage">Thanks \u2014 we've received your request. A demo account with username and password will be shared via your preferred contact. To continue beyond the demo, you can switch to the Pro plan at any time.</p> </div> <div class="mt-4 flex justify-end"> <button type="button" id="wizard-success-close" class="rounded-full bg-brand-cta px-5 py-2 text-sm font-semibold text-brand-cta-text" data-i18n="wizardSuccessCta">Close</button> </div> </div> </div> </div> </div> <script>
  (function planWizard(){
    const modal = document.getElementById('plan-wizard');
    const form = document.getElementById('wizard-form');
    const back = document.getElementById('wizard-back');
    const next = document.getElementById('wizard-next');
    const submitBtn = document.getElementById('wizard-submit');
    const closeBtn = document.getElementById('wizard-close');
    const stepLabel = document.getElementById('wizard-step-label');
    const planLabel = document.getElementById('wizard-plan-label');
    const titleEl = document.getElementById('wizard-title');
    const dialog = modal?.querySelector('[role="dialog"]');
    const panels = Array.from(form?.querySelectorAll('.step-panel') || []);
    let step = 0;
    let plan = '';
    const LS_KEY = 'kdsx-wizard-state';
    const CONFIG_ENDPOINT = modal?.getAttribute('data-endpoint') || '';
    let lastActive = null;
    let keydownHandler = null;
    const analytics = (event, data={}) => {
      try { window.dispatchEvent(new CustomEvent('kdsx.analytics', { detail: { event, ...data } })); } catch(_) {}
      try { console.info('[analytics]', event, data); } catch(_) {}
    };

    const sendMailFallback = (payload) => {
      try {
        const to = modal?.getAttribute('data-email') || 'info@kdsx.uz';
        const subject = encodeURIComponent(\\\`KDSX Lead \u2014 \\\${payload.plan || 'N/A'}\\\`);
        const bodyLines = [
          \\\`Plan: \\\${payload.plan}\\\`,
          \\\`Name: \\\${payload.fullName}\\\`,
          \\\`Business: \\\${payload.businessName}\\\`,
          \\\`Locations: \\\${payload.locations}\\\`,
          \\\`Service style: \\\${payload.serviceStyle}\\\`,
          \\\`Current POS: \\\${payload.currentPos}\\\`,
          \\\`Username: \\\${payload.desiredUsername}\\\`,
          \\\`Phone: \\\${payload.phone}\\\`,
          \\\`Email: \\\${payload.email}\\\`,
          \\\`Telegram: \\\${payload.telegram}\\\`,
          \\\`KakaoTalk: \\\${payload.kakaotalk}\\\`,
          \\\`Submitted: \\\${payload.timestamp}\\\`,
        ];
        const body = encodeURIComponent(bodyLines.join('\\\\n'));
        const mailto = \\\`mailto:\\\${to}?subject=\\\${subject}&body=\\\${body}\\\`;
        window.location.href = mailto;
      } catch (_) {}
    };

    const translationsNode = document.getElementById('translations-data');
    const fallbackLang = translationsNode?.dataset?.fallback || 'en';
    let dictionaries = {};
    try { dictionaries = translationsNode ? JSON.parse(translationsNode.textContent || '{}') : {}; } catch(_) { dictionaries = {}; }
    const currentLang = document.documentElement.getAttribute('lang') || fallbackLang;
    const t = (key) => {
      const dict = dictionaries[currentLang] || dictionaries[fallbackLang] || {};
      return (dict[key] ?? '');
    };

    const applyPlaceholders = () => {
      document.querySelectorAll('[data-i18n-placeholder]')?.forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        const val = t(key);
        if (val) el.setAttribute('placeholder', val);
      });
    };

    const applyAriaLabels = () => {
      document.querySelectorAll('[data-i18n-aria-label]')?.forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (!key) return;
        const val = t(key);
        if (val) el.setAttribute('aria-label', val);
      });
    };

    const setBodyScroll = (lock) => {
      const html = document.documentElement;
      if (lock) html.classList.add('overflow-hidden'); else html.classList.remove('overflow-hidden');
    };

    const showStep = (idx) => {
      step = Math.max(0, Math.min(idx, panels.length - 1));
      panels.forEach((p, i) => p.classList.toggle('hidden', i !== step));
      back.disabled = step === 0;
      next.classList.toggle('hidden', step === panels.length - 1);
      submitBtn.classList.toggle('hidden', step !== panels.length - 1);
      const template = t('wizardStepTemplate') || 'Step {current} of {total}';
      stepLabel.textContent = template.replace('{current}', String(step + 1)).replace('{total}', String(panels.length));
      analytics('wizard_step_view', { step });
    };

    const getFocusable = () => {
      if (!dialog) return [];
      return Array.from(dialog.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
    };

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      const f = getFocusable();
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const open = (planName) => {
      lastActive = document.activeElement;
      plan = planName;
      const planDisplay = (() => {
        if (planName === 'starter') return t('pricingStarterLabel') || 'Starter';
        if (planName === 'pro') return t('pricingProLabel') || 'Pro';
        if (planName === 'enterprise') return t('pricingEnterpriseTitle') || 'Enterprise';
        return t('pricingProLabel') || (planName[0]?.toUpperCase() + planName.slice(1));
      })();
      if (planLabel) planLabel.textContent = \\\`\\\${t('wizardPlanPrefix') || 'Plan:'} \\\${planDisplay}\\\`;
      if (titleEl) {
        const titleMap = {
          starter: t('wizardTitleStarter') || 'Get your free month \u2014 Starter',
          pro: t('wizardTitlePro') || 'Get started with Pro',
          enterprise: t('wizardTitleEnterprise') || 'Talk to sales \u2014 Enterprise',
          cta: t('wizardTitleGeneric') || 'Request a demo',
        };
        titleEl.textContent = titleMap[planName] || (t('wizardTitleGeneric') || 'Request a demo');
      }
      modal.classList.remove('hidden');
      showStep(0);
      setBodyScroll(true);
      requestAnimationFrame(() => {
        const first = panels[0].querySelector('input');
        first && first.focus && first.focus();
      });
      applyPlaceholders();
      applyAriaLabels();
      keydownHandler = (e) => {
        if (e.key === 'Escape') { close(); return; }
        trapFocus(e);
      };
      document.addEventListener('keydown', keydownHandler);
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
        if (saved && saved.plan === planName) {
          form.fullName && (form.fullName.value = saved.fullName || '');
          form.businessName && (form.businessName.value = saved.businessName || '');
          form.locations && (form.locations.value = saved.locations || '');
          form.currentPos && (form.currentPos.value = saved.currentPos || '');
          form.desiredUsername && (form.desiredUsername.value = saved.desiredUsername || '');
          form.serviceStyle && (form.serviceStyle.value = saved.serviceStyle || '');
          form.phone && (form.phone.value = saved.phone || '');
          form.email && (form.email.value = saved.email || '');
          form.telegram && (form.telegram.value = saved.telegram || '');
          form.kakaotalk && (form.kakaotalk.value = saved.kakaotalk || '');
        }
      } catch(_) {}
      analytics('wizard_open', { plan: planName });
    };

    const close = () => {
      modal.classList.add('hidden');
      setBodyScroll(false);
      form?.reset();
      const success = document.getElementById('wizard-success');
      success?.classList.add('hidden');
      if (keydownHandler) { document.removeEventListener('keydown', keydownHandler); keydownHandler = null; }
      if (lastActive && lastActive.focus) {
        try { lastActive.focus(); } catch(_) {}
      }
      analytics('wizard_close', { plan });
    };

    document.querySelectorAll('[data-plan-trigger]')?.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = el.getAttribute('data-plan-trigger') || 'starter';
        open(planName);
      });
    });

    closeBtn?.addEventListener('click', close);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    back?.addEventListener('click', () => showStep(step - 1));
    next?.addEventListener('click', () => {
      const currentPanel = panels[step];
      const requiredInputs = Array.from(currentPanel.querySelectorAll('input[required]'));
      for (const input of requiredInputs) {
        if (!input.value.trim()) { input.focus(); return; }
      }
      const requiredSelects = Array.from(currentPanel.querySelectorAll('select[required]'));
      for (const sel of requiredSelects) {
        if (!sel.value) { sel.focus(); return; }
      }
      try {
        const state = {
          plan,
          fullName: form.fullName?.value || '',
          businessName: form.businessName?.value || '',
          locations: form.locations?.value || '',
          currentPos: form.currentPos?.value || '',
          desiredUsername: form.desiredUsername?.value || '',
          serviceStyle: form.serviceStyle?.value || '',
          phone: form.phone?.value || '',
          email: form.email?.value || '',
          telegram: form.telegram?.value || '',
          kakaotalk: form.kakaotalk?.value || '',
        };
        localStorage.setItem(LS_KEY, JSON.stringify(state));
      } catch(_) {}
      analytics('wizard_step_next', { step });
      showStep(step + 1);
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const phone = form.querySelector('#phone');
      if (phone && !phone.value.trim()) { phone.focus(); return; }

      const payload = {
        plan,
        fullName: form.fullName?.value || '',
        businessName: form.businessName?.value || '',
        locations: form.locations?.value || '',
        serviceStyle: form.serviceStyle?.value || '',
        currentPos: form.currentPos?.value || '',
        desiredUsername: form.desiredUsername?.value || '',
        desiredPassword: form.desiredPassword?.value || '',
        phone: form.phone?.value || '',
        email: form.email?.value || '',
        telegram: form.telegram?.value || '',
        kakaotalk: form.kakaotalk?.value || '',
        timestamp: new Date().toISOString(),
      };

      try {
        analytics('wizard_submit', { plan });
        submitBtn.disabled = true;
        next.disabled = true;
        back.disabled = true;
        submitBtn.textContent = t('wizardSubmitting') || 'Submitting\u2026';
        if (CONFIG_ENDPOINT) {
          const response = await fetch(CONFIG_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            const err = new Error(\\\`Lead endpoint returned \\\${response.status}\\\`);
            err.status = response.status;
            throw err;
          }
        } else {
          console.warn('[wizard] No lead endpoint configured. Set data-endpoint on #plan-wizard. Payload:', payload);
          // Fallback: compose an email with the submission so you still receive the lead.
          sendMailFallback(payload);
          await new Promise((res)=> setTimeout(res, 400));
        }

        form.classList.add('hidden');
        const success = document.getElementById('wizard-success');
        success?.classList.remove('hidden');
        try { localStorage.removeItem(LS_KEY); } catch(_) {}
      } catch (err) {
        console.error('Failed to submit lead', err);
        analytics('wizard_submit_error', { plan, status: err?.status || null });
        sendMailFallback(payload);
        submitBtn.disabled = false;
        next.disabled = false;
        back.disabled = step === 0;
        submitBtn.textContent = t('wizardSubmit') || 'Request demo';
        alert(t('wizardError') || 'Something went wrong. Please try again. We opened your email client so you can send the request manually.');
      }
    });

    document.getElementById('wizard-success-close')?.addEventListener('click', close);

    document.querySelectorAll('.lang-select')?.forEach((sel) => {
      sel.addEventListener('change', () => setTimeout(() => { applyPlaceholders(); applyAriaLabels(); }, 50));
    });
    applyPlaceholders();
    applyAriaLabels();
  })();
<\/script>`])), maybeRenderHead());
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/WizardForm.astro", void 0);

const $$PricingTable = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="w-full px-2 sm:px-6 py-12 sm:pt-20 sm:pb-16"> <div class="max-w-6xl mx-auto section-shell px-4 sm:px-10 py-16"> <div class="flex flex-col items-center text-center gap-6"> <span class="badge-pill" data-i18n="pricingBadge">Pricing</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark" data-i18n="pricingHeading">
Flexible plans that scale with every service shift
</h2> <p class="max-w-3xl text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingBody">
Start lean and grow when you’re ready. Every plan comes with hands-on onboarding from the KDSX crew.
</p> </div> <div class="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]"> <div class="surface-card p-10 text-center text-brand-text dark:text-brand-text-dark"> <div class="flex items-center justify-center text-sm font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark"> <span data-i18n="pricingStarterLabel">Starter</span> </div> <div class="mt-6 text-5xl font-bold text-brand-cta-text dark:text-brand-cta-text" data-i18n="pricingStarterPrice">Free</div> <div class="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="pricingStarterSubtitle">First month on us</div> <p class="mt-4 text-base text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingStarterBody">Everything you need to launch a single location with confidence—your first month is completely free.</p> <ul class="mt-8 space-y-3 text-left text-sm leading-relaxed"> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB1">1 register/station, unlimited logins</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB2">Order, table, and guest tracking</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB3">Core dashboards and nightly summary emails</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB4">Manual inventory counts + alerts</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB5">Keep rolling after month one for only $15/month</span></li> <li class="flex items-start gap-3"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-cta"></span><span data-i18n="pricingStarterB6">Email support with 24-hour response</span></li> </ul> <div class="mt-10"> <a href="mailto:info@kdsx.uz?subject=KDSX%20Starter%20Plan%20Inquiry" data-plan-trigger="starter" class="inline-flex items-center justify-center rounded-full border border-brand-cta/40 bg-white/70 px-8 py-4 text-base font-semibold text-brand-text shadow-[0_20px_40px_-25px_rgba(26,77,26,0.45)] transition-transform duration-300 hover:scale-[1.02] dark:bg-white/10 dark:text-brand-cta-text"> <span data-i18n="pricingStarterCta">Activate Free Month</span> </a> </div> </div> <div class="pro-card"> <div class="pro-card__inner"> <div class="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark"> <span data-i18n="pricingProLabel">Pro</span> <span class="rounded-full bg-brand-cta px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-lg" data-i18n="pricingProRibbon">Most popular</span> </div> <div class="mt-6 text-5xl font-bold text-brand-cta-text dark:text-brand-cta"> <span data-i18n="pricingProPrice">$30</span><span class="ml-1 align-top text-base font-normal text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingProPeriod">/mo</span> </div> <p class="mt-4 text-base text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingProBody">Add automation, multi-location controls, and proactive guidance from our team.</p> <ul class="mt-8 space-y-3 text-left text-sm leading-relaxed"> <li class="flex items-start gap-3"><svg class="mt-1 h-4 w-4 text-brand-cta" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="pricingProB1">Unlimited registers with role-based controls</span></li> <li class="flex items-start gap-3"><svg class="mt-1 h-4 w-4 text-brand-cta" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="pricingProB2">Automated inventory + supplier syncing</span></li> <li class="flex items-start gap-3"><svg class="mt-1 h-4 w-4 text-brand-cta" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="pricingProB3">Advanced analytics & profitability dashboards</span></li> <li class="flex items-start gap-3"><svg class="mt-1 h-4 w-4 text-brand-cta" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="pricingProB4">Priority chat & phone support</span></li> <li class="flex items-start gap-3"><svg class="mt-1 h-4 w-4 text-brand-cta" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg><span data-i18n="pricingProB5">Dedicated Customer Success Manager</span></li> </ul> <div class="mt-10"> <a href="mailto:info@kdsx.uz?subject=KDSX%20Pro%20Plan%20Inquiry" data-plan-trigger="pro" class="inline-flex items-center justify-center rounded-full bg-brand-cta px-10 py-4 text-lg font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_30px_60px_-30px_rgba(26,77,26,0.55)] transition-transform duration-300 hover:scale-[1.03]"> <span data-i18n="pricingProCta">Get Started — $30/mo</span> </a> </div> </div> </div> </div> <div class="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"> <div class="surface-card p-4 text-left text-brand-text dark:text-brand-text-dark"> <div class="flex items-center justify-between"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="pricingEnterpriseTitle">Enterprise</div> <span class="rounded-full bg-brand-cta/20 px-3 py-1 text-xs font-semibold text-brand-cta-text dark:text-brand-cta-text" data-i18n="pricingEnterpriseRibbon">Custom</span> </div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="pricingEnterpriseHeading">Scale with confidence across regions</h3> <p class="mt-3 text-sm sm:text-base leading-relaxed text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingEnterpriseBody">Unlock API access, warehouse orchestration, and white-glove launch support for complex rollouts.</p> <a href="mailto:info@kdsx.uz?subject=KDSX%20Enterprise%20Plan%20Inquiry" data-plan-trigger="enterprise" class="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-cta/40 px-6 py-3 text-sm font-semibold text-brand-text transition-colors duration-300 hover:bg-brand-cta/10 dark:text-brand-text-dark"> <span data-i18n="pricingEnterpriseCta">Contact Sales</span> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"></path></svg> </a> </div> <div class="surface-card p-4 text-left text-brand-text dark:text-brand-text-dark"> <div class="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cta-text dark:text-brand-cta-text-dark" data-i18n="pricingImplementTag">Need a tailored roll-out?</div> <h3 class="mt-4 text-2xl font-semibold" data-i18n="pricingImplementHeading">Partner with our implementation team</h3> <p class="mt-3 text-sm sm:text-base leading-relaxed text-brand-text/70 dark:text-brand-text-dark/70" data-i18n="pricingImplementBody">We’ll audit your operations, stage the hardware, and train staff across every location.</p> <ul class="mt-4 space-y-2 text-sm text-brand-text/70 dark:text-brand-text-dark/70"> <li>✔ <span data-i18n="pricingImplementB1">Launch playbook customized to each venue</span></li> <li>✔ <span data-i18n="pricingImplementB2">On-site and remote training programs</span></li> <li>✔ <span data-i18n="pricingImplementB3">Seasonal menu + promo support</span></li> </ul> </div> </div> <div class="mt-16 text-center"> <h3 class="text-2xl md:text-3xl font-semibold text-brand-text dark:text-brand-text-dark mb-6 max-w-3xl mx-auto leading-relaxed" data-i18n="pricingFinalHeading">Ready to run every shift with less stress?</h3> <a href="mailto:info@kdsx.uz?subject=KDSX%20Pro%20Plan%20Free%20Trial" data-plan-trigger="cta" class="inline-flex items-center justify-center rounded-full bg-brand-cta px-10 py-4 text-lg font-semibold text-brand-cta-text dark:text-brand-cta-text shadow-[0_30px_60px_-30px_rgba(26,77,26,0.6)] transition-transform duration-300 hover:scale-[1.03]"> <span data-i18n="pricingFinalCta">Start my rollout</span> </a> </div> <!-- FAQ placed before footer --> <div class="mt-20"> ${renderSlot($$result, $$slots["faq"])} </div> <footer class="mt-16 pt-12 border-t border-white/20 text-brand-text dark:text-brand-text-dark"> <!-- Main Footer Content --> <div class="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8"> <!-- Brand Section --> <div class="flex flex-col items-start"> <div class="flex items-center gap-2 mb-4"> <span class="font-bold text-2xl text-brand-text dark:text-brand-text-dark">KDSX</span> <img src="/logo.png" alt="KDSX Logo" class="w-8 h-8"> </div> <p class="text-sm opacity-75 max-w-xs" data-i18n="footerBrandDescription">Total restaurant control. Unify your operations with our integrated POS ecosystem.</p> </div> <!-- Contact Information --> <div class="flex flex-col items-start"> <h4 class="font-semibold text-brand-text dark:text-brand-text-dark mb-4" data-i18n="footerContactTitle">Contact Info</h4> <div class="space-y-3"> <a href="tel:+998941500330" class="flex items-center gap-3 text-brand-text hover:text-brand-cta dark:text-brand-text-dark"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path> </svg> <span class="text-sm">+998941500330</span> </a> <a href="tel:+821079328573" class="flex items-center gap-3 text-brand-text hover:text-brand-cta dark:text-brand-text-dark"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path> </svg> <span class="text-sm">+821079328573</span> </a> <a href="mailto:support@kdsx.uz" class="flex items-center gap-3 text-brand-text hover:text-brand-cta dark:text-brand-text-dark"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path> </svg> <span class="text-sm">support@kdsx.uz</span> </a> </div> </div> <!-- Social Media --> <div class="flex flex-col items-start"> <h4 class="font-semibold text-brand-text dark:text-brand-text-dark mb-4" data-i18n="footerFollowTitle">Follow Us</h4> <div class="flex gap-4"> <a href="#" class="p-2 rounded-lg text-brand-cta hover:bg-brand-cta hover:text-brand-cta-text transition-all" aria-label="Telegram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path> </svg> </a> <a href="#" class="p-2 rounded-lg text-brand-cta hover:bg-brand-cta hover:text-brand-cta-text transition-all" aria-label="YouTube"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> <a href="#" class="p-2 rounded-lg text-brand-cta hover:bg-brand-cta hover:text-brand-cta-text transition-all" aria-label="Instagram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div class="flex flex-col items-start"> <h4 class="font-semibold text-brand-text dark:text-brand-text-dark mb-4" data-i18n="footerQuickLinksTitle">Quick Links</h4> <div class="space-y-2"> <a href="#features" class="text-sm hover:text-brand-cta transition-colors" data-i18n="footerQuickLinkFeatures">Features</a> <a href="#pricing" class="text-sm hover:text-brand-cta transition-colors" data-i18n="footerQuickLinkPricing">Pricing</a> <a href="#" class="text-sm hover:text-brand-cta transition-colors" data-i18n="footerQuickLinkTerms">Terms</a> <a href="#" class="text-sm hover:text-brand-cta transition-colors" data-i18n="footerQuickLinkPrivacy">Privacy</a> </div> </div> </div> <!-- Bottom Footer --> <div class="pt-6 border-t border-brand-cta-text/20 dark:border-brand-cta-text-dark/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75"> <span>&copy; 2025 KDSX. <span data-i18n="footerRightsReserved">All rights reserved.</span></span> <span data-i18n="footerAccessibility">Mobile Responsive &amp; Accessible</span> </div> </footer> </div> </section> ${renderComponent($$result, "WizardForm", $$WizardForm, {})}`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/PricingTable.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="w-full px-2 sm:px-6 py-12 sm:py-20 bg-brand-bg dark:bg-brand-bg-dark text-brand-text dark:text-brand-text-dark"> <div class="max-w-5xl mx-auto"> <!-- Header with minimal padding on mobile for maximum content space --> <div class="flex flex-col items-center text-center gap-3 sm:gap-6 px-2 sm:px-6"> <span class="badge-pill" data-i18n="faqBadge">FAQ</span> <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-text dark:text-brand-text-dark leading-tight" data-i18n="faqHeading">
Answers to common questions
</h2> <p class="max-w-2xl text-base sm:text-lg text-brand-text/70 dark:text-brand-text-dark/70 leading-relaxed" data-i18n="faqBody">
Everything you need to know about getting started, devices, pricing, and support.
</p> </div> <!-- FAQ Grid: Single column on mobile, two columns on tablet+ --> <div class="mt-8 sm:mt-12 grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 px-2 sm:px-6"> <!-- Q1 --> <div class="surface-card p-4 sm:p-6 text-left"> <h3 class="text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark leading-snug" data-i18n="faqQ1">How fast can we go live?</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/75" data-i18n="faqA1">
Most teams launch over a weekend. We guide setup, device linking, and a quick staff run‑through so you can show results by Monday.
</p> </div> <!-- Q2 --> <div class="surface-card p-4 sm:p-6 text-left"> <h3 class="text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark leading-snug" data-i18n="faqQ2">Can this run on any device?</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/75" data-i18n="faqA2">
Yes. KDSX works on modern tablets and smartphones with an internet connection. Use iOS, Android, or the web—no special hardware required.
</p> </div> <!-- Q3 --> <div class="surface-card p-4 sm:p-6 text-left"> <h3 class="text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark leading-snug" data-i18n="faqQ3">What does onboarding include?</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/75" data-i18n="faqA3">
We help import menus, configure stations, connect printers, and train staff. You'll get a clear rollout plan tailored to each location.
</p> </div> <!-- Q4 --> <div class="surface-card p-4 sm:p-6 text-left"> <h3 class="text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark leading-snug" data-i18n="faqQ4">How is pricing structured?</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/75" data-i18n="faqA4">
Start with our free month on the Starter plan. Upgrade to Pro for automation and multi‑location controls. Enterprise options are available for complex rollouts.
</p> </div> <!-- Q5 --> <div class="surface-card p-4 sm:p-6 text-left md:col-span-2"> <h3 class="text-base sm:text-lg font-semibold text-brand-text dark:text-brand-text-dark leading-snug" data-i18n="faqQ5">What support is available?</h3> <p class="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-brand-text/75 dark:text-brand-text-dark/75" data-i18n="faqA5">
All customers receive responsive support and rollout guidance. Pro adds priority chat and phone support, and Enterprise includes white‑glove assistance.
</p> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/components/FAQ.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="space-y-0"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "LogoMarquee", $$LogoMarquee, {})} ${renderComponent($$result2, "BusinessSection", $$BusinessSection, {})} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "PricingTable", $$PricingTable, {}, { "faq": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "faq" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "FAQ", $$FAQ, {})} ` })}` })} </main> ` })}`;
}, "/Users/bekzod/Documents/code/kdsx_landing/src/pages/index.astro", void 0);

const $$file = "/Users/bekzod/Documents/code/kdsx_landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
