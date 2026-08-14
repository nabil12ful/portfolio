// Style reminder: Laravel Command Center — use emerald runtime accents, editorial hierarchy, and technical clarity.

export type Lang = "en" | "ar";

export type I18nText = {
  en: string;
  ar: string;
};

export const copy = {
  nav: {
    about: { en: "About", ar: "نبذة" },
    skills: { en: "Skills", ar: "المهارات" },
    experience: { en: "Experience", ar: "الخبرة" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  hero: {
    eyebrow: { en: "Full-Stack Developer · PHP / Laravel", ar: "مطور Full-Stack · PHP / Laravel" },
    headline: { en: "I build systems that stay fast when the business gets serious.", ar: "أبني أنظمة تحافظ على سرعتها عندما يكبر حجم العمل." },
    description: {
      en: "Senior Full-Stack Developer focused on Laravel, MySQL performance, secure payments, real-time features, and the engineering discipline behind dependable products.",
      ar: "مطور Full-Stack بخبرة متقدمة في Laravel وأداء MySQL والمدفوعات الآمنة وخصائص الوقت الحقيقي، مع تركيز على الهندسة التي تجعل المنتجات موثوقة وقابلة للتوسع.",
    },
    viewWork: { en: "Explore selected work", ar: "استكشف المشاريع" },
    download: { en: "Download résumé", ar: "تحميل السيرة الذاتية" },
    basedIn: { en: "Based in Giza, Egypt", ar: "مقيم في الجيزة، مصر" },
    status: { en: "Open to meaningful builds", ar: "منفتح على مشاريع مؤثرة" },
  },
  terminal: {
    title: { en: "nabil@portfolio:~", ar: "nabil@portfolio:~" },
    intro: { en: "A small command surface for a bigger engineering story.", ar: "واجهة أوامر صغيرة لقصة هندسية أكبر." },
    hint: { en: "Type a command or click a suggestion", ar: "اكتب أمراً أو اختر اقتراحاً" },
    run: { en: "Run", ar: "تنفيذ" },
    suggestions: { en: "Try these", ar: "جرّب هذه الأوامر" },
    commands: { en: ["php artisan about", "php artisan skills", "php artisan projects"], ar: ["php artisan about", "php artisan skills", "php artisan projects"] },
  },
  about: {
    kicker: { en: "01 / the brief", ar: "01 / الملخص" },
    title: { en: "Engineering with a product pulse.", ar: "هندسة تفهم نبض المنتج." },
    body: {
      en: "I design and ship enterprise-grade applications where clean architecture, database decisions, and user experience have to work as one system. My strongest work lives at the intersection of Laravel backends, optimized MySQL, secure integrations, and interfaces teams can actually operate.",
      ar: "أصمم وأطلق تطبيقات بمستوى المؤسسات، حيث يجب أن تعمل الهندسة النظيفة وقرارات قواعد البيانات وتجربة المستخدم كنظام واحد. أقوى أعمالي تقع عند تقاطع Laravel وMySQL المحسّن والتكاملات الآمنة والواجهات التي تستطيع الفرق تشغيلها فعلياً.",
    },
  },
  skills: {
    kicker: { en: "02 / capabilities", ar: "02 / الإمكانيات" },
    title: { en: "The stack is only useful when the system is sound.", ar: "التقنيات لا تصبح مفيدة إلا عندما يكون النظام متيناً." },
  },
  experience: {
    kicker: { en: "03 / track record", ar: "03 / المسار المهني" },
    title: { en: "From first schema to production signal.", ar: "من أول مخطط بيانات إلى إشارة الإنتاج." },
  },
  projects: {
    kicker: { en: "04 / selected systems", ar: "04 / أنظمة مختارة" },
    title: { en: "Real constraints. Practical architecture.", ar: "قيود حقيقية. هندسة عملية." },
    note: { en: "Selected work from enterprise, education, commerce, and operations platforms.", ar: "نماذج مختارة من منصات المؤسسات والتعليم والتجارة والعمليات." },
  },
  contact: {
    kicker: { en: "05 / next command", ar: "05 / الأمر التالي" },
    title: { en: "Have a complex system in mind?", ar: "هل لديك نظام معقد قيد التفكير؟" },
    body: { en: "Tell me where the pressure is — performance, architecture, delivery, or the whole product.", ar: "أخبرني أين يكمن التحدي — الأداء، الهندسة، التسليم، أم المنتج بالكامل." },
    email: { en: "Start a conversation", ar: "ابدأ محادثة" },
  },
  footer: {
    built: { en: "Built with Laravel thinking, React craft, and a bias for clarity.", ar: "صُمم بعقلية Laravel وحرفية React وانحياز دائم للوضوح." },
    back: { en: "Back to top", ar: "العودة إلى الأعلى" },
  },
} as const;

export const stats = [
  { value: "5+", label: { en: "years building", ar: "سنوات من البناء" } },
  { value: "15+", label: { en: "custom platforms", ar: "منصة مخصصة" } },
  { value: "5k+", label: { en: "concurrent learners", ar: "متعلم متزامن" } },
  { value: "4", label: { en: "devs led", ar: "مطورين تمت قيادتهم" } },
];

export const skillGroups = [
  { id: "backend", label: { en: "Backend & Architecture", ar: "الخلفية والهندسة" }, accent: "green", items: ["PHP", "Laravel", "Eloquent ORM", "MVC", "Clean Architecture", "SOLID", "RESTful APIs", "OOP", "Queues"] },
  { id: "data", label: { en: "Data & Performance", ar: "البيانات والأداء" }, accent: "gold", items: ["MySQL", "Normalization", "Complex Queries", "Indexing", "Query Scopes", "Redis", "Telescope", "Debugbar"] },
  { id: "frontend", label: { en: "Frontend & Mobile", ar: "الواجهة والموبايل" }, accent: "blue", items: ["React", "TypeScript", "Livewire", "Inertia.js", "Tailwind CSS", "Vite", "Flutter", "Dart"] },
  { id: "security", label: { en: "Security & Payments", ar: "الأمان والمدفوعات" }, accent: "red", items: ["OWASP Top 10", "JWT", "OAuth2", "Rate Limiting", "Encryption", "Apple Pay", "Stripe", "Webhooks"] },
  { id: "realtime", label: { en: "Realtime & DevOps", ar: "الوقت الحقيقي وDevOps" }, accent: "purple", items: ["WebSocket", "Laravel Echo", "Pusher", "Firebase", "Docker", "GitHub Actions", "Nginx", "SSL"] },
];

export const experiences = [
  {
    company: "Mdrscom Company",
    role: { en: "Senior Full-Stack Developer & Team Lead", ar: "مطور Full-Stack أول وقائد فريق" },
    period: "08/2023 — 06/2025",
    location: { en: "Remote", ar: "عن بُعد" },
    highlights: {
      en: ["Architected high-performance ERP-like eLearning systems for users, courses, billing, and analytics.", "Introduced Redis caching, queues, WebSockets, Firebase notifications, and Apple Pay / Stripe integrations.", "Led cross-functional delivery with Docker, GitHub Actions, SSL, and scheduled maintenance workflows."],
      ar: ["هندسة أنظمة تعليم إلكتروني عالية الأداء شبيهة بـ ERP لإدارة المستخدمين والدورات والفوترة والتحليلات.", "إضافة Redis وQueues وWebSockets وإشعارات Firebase وتكاملات Apple Pay وStripe.", "قيادة التسليم عبر فرق متعددة باستخدام Docker وGitHub Actions وSSL وجدولة مهام الصيانة."],
    },
  },
  {
    company: "Comma Codes",
    role: { en: "Senior Backend Engineer & DevOps · Freelancer", ar: "مهندس Backend وDevOps أول · مستقل" },
    period: "12/2022 — 07/2023",
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    highlights: {
      en: ["Designed relational data models across 15+ custom ERP and CRM platforms, accelerating data processing by 25%.", "Configured secure multi-domain Nginx / Apache servers with SSL on production Linux VPS environments.", "Built RESTful APIs with JWT authentication and input validation, tested through Postman."],
      ar: ["تصميم نماذج بيانات مترابطة لأكثر من 15 منصة ERP وCRM مخصصة، مع تسريع معالجة البيانات بنسبة 25%.", "تهيئة خوادم Nginx وApache آمنة متعددة النطاقات مع SSL على بيئات Linux VPS الإنتاجية.", "بناء RESTful APIs باستخدام JWT والتحقق من المدخلات واختبارها عبر Postman."],
    },
  },
  {
    company: "Independent / Remote",
    role: { en: "Backend Web Developer & Team Leader", ar: "مطور Backend وقائد فريق" },
    period: "03/2021 — Present",
    location: { en: "Remote", ar: "عن بُعد" },
    highlights: {
      en: ["Led a squad of four developers building large multi-vendor ERP systems from the ground up.", "Integrated multi-guard auth, multi-currency ledgers, Zoom APIs, WebSockets, and Laravel Echo / Pusher.", "Built responsive frontends with React, Livewire, jQuery, Sass, and Tailwind, plus cross-platform Flutter apps."],
      ar: ["قيادة فريق من أربعة مطورين لبناء أنظمة ERP كبيرة متعددة البائعين من الصفر.", "دمج المصادقة متعددة الحراس ودفاتر العملات المتعددة وZoom APIs وWebSockets وLaravel Echo / Pusher.", "بناء واجهات متجاوبة باستخدام React وLivewire وjQuery وSass وTailwind، إلى جانب تطبيقات Flutter متعددة المنصات."],
    },
  },
];

export const projects = [
  { number: "01", title: "9 Red Shield", type: { en: "ERP / Operations", ar: "ERP / عمليات" }, description: { en: "An ERP for firefighting companies covering maintenance contracts, branches, field teams, technicians, reminders, and compliance workflows.", ar: "نظام ERP لشركات مكافحة الحرائق يغطي عقود الصيانة والفروع وفرق العمل الميدانية والفنيين والتنبيهات ومسارات الامتثال." }, signal: { en: "Complex relationships · role-based permissions · automated renewals", ar: "علاقات معقدة · صلاحيات حسب الدور · تجديد آلي" }, stack: ["Laravel", "MySQL", "Redis", "Livewire", "JWT"] },
  { number: "02", title: "Zawaya Platform", type: { en: "Saudi eLearning", ar: "تعليم إلكتروني سعودي" }, description: { en: "A live learning platform supporting 5,000+ concurrent students with real-time sessions, localized payments, notifications, and multi-guard authentication.", ar: "منصة تعليم مباشر تدعم أكثر من 5,000 متعلم متزامن مع جلسات لحظية ومدفوعات محلية وإشعارات ومصادقة متعددة الحراس." }, signal: { en: "BBB API · PCI-DSS payments · WebSocket delivery", ar: "BBB API · مدفوعات PCI-DSS · تسليم عبر WebSocket" }, stack: ["Laravel", "MySQL", "Pusher", "Apple Pay", "Firebase"] },
  { number: "03", title: "Elhaffar Rig Store", type: { en: "E-commerce", ar: "تجارة إلكترونية" }, description: { en: "A heavy drilling equipment store with real-time inventory, Redis caching, secure payment gateways, and fast product search across thousands of items.", ar: "متجر لمعدات الحفر الثقيلة بمخزون لحظي وتخزين مؤقت عبر Redis وبوابات دفع آمنة وبحث سريع عبر آلاف المنتجات." }, signal: { en: "Inventory signal · indexed search · payment webhooks", ar: "إشارة المخزون · بحث مفهرس · Webhooks للمدفوعات" }, stack: ["Laravel", "Redis", "React", "Alpine.js", "Docker"] },
  { number: "04", title: "Machon Sama", type: { en: "Assessment Engine", ar: "نظام اختبارات" }, description: { en: "An automated exam system with real-time grading, anti-cheating time controls, encrypted data, and integrity-first access rules.", ar: "نظام اختبارات آلي مع تصحيح لحظي وضوابط زمنية لمنع الغش وبيانات مشفرة وقواعد وصول تحافظ على نزاهة التقييم." }, signal: { en: "Real-time grading · rate limiting · JWT security", ar: "تصحيح لحظي · Rate limiting · أمان JWT" }, stack: ["Laravel", "WebSocket", "JWT", "JSON Schema", "Docker"] },
  { number: "05", title: "Mdrscom Marketplace", type: { en: "Multi-vendor Marketplace", ar: "سوق متعدد البائعين" }, description: { en: "A peer-to-peer live session marketplace with asynchronous room allocation, multi-currency ledgers, notifications, and real-time updates.", ar: "سوق لجلسات مباشرة بين المستخدمين مع توزيع غير متزامن للغرف ودفاتر عملات متعددة وإشعارات وتحديثات لحظية." }, signal: { en: "Queues · multi-currency · Firebase FCM", ar: "Queues · عملات متعددة · Firebase FCM" }, stack: ["Laravel", "Queues", "Redis", "WebSocket", "Livewire"] },
];

export const contact = {
  email: "Nabilhamada421@gmail.com",
  phone: "+201118172639",
  phoneAlt: "+201007234695",
  github: "https://github.com/nabil12ful",
  linkedin: "https://linkedin.com/in/nabil7amada",
  resume: "/manus-storage/Nabil_Hamada_Resume-3_2fffebac.pdf",
};

export function text(value: I18nText, lang: Lang) {
  return value[lang];
}
