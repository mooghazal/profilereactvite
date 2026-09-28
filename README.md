# البورتفوليو — Mohamed Khamis

بورتفوليو شخصي مبني بـ **React + TypeScript + Tailwind CSS v4 + Vite**.
الموقع **صفحة واحدة طويلة** (Single Page): بتعمل scroll وبتشوف كل الأقسام بالترتيب من غير ما تدوس على لينك.
الهيرو وقسم About مبنيين بالكامل، وباقي الأقسام (Skills / Projects / Contact) placeholders جاهزة للبناء.

---

## 1. التشغيل

```bash
npm install      # تحميل الحزم
npm run dev      # تشغيل السيرفر محلياً
npm run lint     # فحص الكود بـ oxlint
npm run build    # فحص الأنواع (tsc) + بناء نسخة الإنتاج
```

## 2. التقنيات المستخدمة

| التقنية | الاستخدام |
| --- | --- |
| React 19 | بناء الواجهات كمكونات |
| TypeScript | أنواع بيانات واضحة ومنع الأخطاء |
| Tailwind CSS v4 | التنسيق من داخل الـ JSX بدون ملف CSS منفصل لكل صفحة |
| React Router | تشغيل الصفحة الواحدة (وكمان أي رابط قديم يفتح الموقع) |
| react-icons | أيقونات التواصل الاجتماعي |
| Vite | سيرفر التطوير والبناء |
| oxlint | فحص الكود |

## 3. هيكل المشروع

```text
src/
├── assets/images/                    صور الهيرو والمشاريع (hero.jfif, card1..3.png)
├── components/
│   ├── About/About.tsx               قسم About
│   ├── AboutCard/AboutCard.tsx       كارت واحد في قسم About
│   ├── Button/Button.tsx             زرار موحّد (لينك / زرار إرسال / تحميل CV)
│   ├── Contact/Contact.tsx           قسم التواصل (النص + الكروت + الفورم)
│   ├── ContactForm/ContactForm.tsx   فورم التواصل
│   ├── ContactInfoCard/ContactInfoCard.tsx  كارت تواصل واحد (أيقونة + label + قيمة)
│   ├── Footer/Footer.tsx         الفوتر المشترك (بين قسم Contact وأسفل الصفحة)
│   ├── Hero/Hero.tsx                 قسم الهيرو (أول الصفحة)
│   ├── Layout/Layout.tsx             الهيكل المشترك: النافبار + الصفحة + الفوتر
│   ├── Navbar/Navbar.tsx             شريط التنقل + قائمة الموبايل + تتبّع القسم الحالي
│   ├── ProjectCard/ProjectCard.tsx   كارت مشروع واحد (صورة + عنوان + وصف + pills)
│   ├── Projects/Projects.tsx         قسم المشاريع
│   ├── Section/Section.tsx           غلاف موحّد لكل قسم (id + عرض الحاوية + عنوان اختياري)
│   ├── SkillCard/SkillCard.tsx       كارت مهارة واحدة (أيقونة + اسم)
│   └── Skills/Skills.tsx             قسم المهارات
├── data/
│   ├── aboutCards.ts                 بيانات كروت قسم About
│   ├── contactLinks.ts               بيانات التواصل (label + قيمة + رابط + أيقونة)
│   ├── navigation.ts                 روابط التنقل (أسماء الأقسام و id بتاعها)
│   ├── projects.ts                   بيانات المشاريع (عنوان + وصف + صورة + تقنيات)
│   ├── skills.ts                     بيانات مهارات الـ Skills (اسم + أيقونة)
│   └── socialLinks.ts                روابط التواصل الاجتماعي
├── pages/
│   └── Home/Home.tsx              الصفحة الواحدة: بيرتّب كل الأقسام
├── routes/
│   └── routes.tsx                 تعريف الـ Routes
├── App.tsx                        بيستدعي ملف الـ routes
├── index.css                      توكنز التصميم + الأنيميشن
└── main.tsx                       نقطة البداية (BrowserRouter)
```

## 4. نظام التصميم (Design Tokens)

كل الألوان والخطوط والأنيميشن معرّفة **مرة واحدة** في `src/index.css` داخل `@theme`،
ولذلك نستخدمها بأسماء Tailwind العادية (`bg-accent` / `text-muted`) بدل قيم عشوائية مثل `bg-[#00E599]`
مكرّرة في كل ملف.

```css
@theme {
  --color-background: #0b0f0e;   /* خلفية الموقع          → bg-background */
  --color-accent: #00e599;       /* اللون المميّز         → text-accent   */
  --color-primary: #ffffff;      /* العناوين              → text-primary  */
  --color-muted: #a1a1aa;        /* النصوص الثانوية       → text-muted    */

  --font-heading: 'Syne', ...;   /* خط العناوين           → font-heading  */
  --font-sans: 'Inter', ...;     /* خط النصوص             → font-sans     */

  --animate-fade-up: fade-up 0.7s ease-out both;  /* ظهور تدريجي للأقسام */
  --animate-glow: glow 6s ease-in-out infinite;  /* توهج الصورة ببطء     */
}
```

أيضاً في نفس الملف:

- تنسيق عام لكل العناصر: `focus-visible` يعطي إطار واضح، و`prefers-reduced-motion` يوقف الأنيميشن لمن طلب تقليل الحركة.

---

# سجل البرومبتات (شغل اتعمل في كل مرحلة)

## البرومبت 1 — خلّي الهيرو يبان كامل في الديسكتوب + ريسبونسيف بـ Tailwind بس

### المطلوب

1. الهيرو في الديسكتوب يبان كامل من غير ما أعمل scroll عشان أوصل للزرار.
2. الريسبونسيف يتعمل بـ Tailwind **من غير ما أكرر نفس الكود** للـ desktop والـ mobile (أي ممنوع نعمل كومبوننت موبايل منفصل).

### المشكلة اللي كانت موجودة

الـ Hero كان بياخد ارتفاع كبير على الديسكتوب:
`pt-20` فوق و `pb-32` تحت، مع `h1` بحجم `lg:text-7xl` ومحتوى كتير
(عنوان + فقرة + زرارين + شارة التوافر + أيقونات) = تقريبًا **756px** محتوى، بينما المساحة المتاحة
في شاشة لاب توب 768px بعد النافبار حوالي **691px** فقط → الزرارين كانوا تحت الشاشة.

### الحل: توكين واحد لارتفاع النافبار

النافبار كان ارتفاعه متغيّر (`py-4` + محتوى)، فمش ممكن نحسب المساحة المتبقية منه بدقة.
لذلك ثبّتنا ارتفاعه في توكين واحد داخل Tailwind:

```css
/* src/index.css */
@theme {
  /* النافبار sticky، يعني بياخد من ارتفاع الشاشة.
     저장نا ارتفاعه في توكين واحد عشان أي قسم يحسب المساحة اللي فاضلة منه. */
  --spacing-navbar: 4.75rem;
}
```

ولأن التوكين في مساحة `spacing` في Tailwind v4، Tailwind ولّدـ لنا Utility جاهز اسمه `h-navbar`:

```tsx
// src/components/Navbar/Navbar.tsx
{/* ارتفاع ثابت للنافبار عشان أي صفحة تحسب المساحة الباقية منه */}
<div className="mx-auto flex h-navbar w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
```

استبدلنا `py-4` بـ `h-navbar`، فالنافبار بقى له ارتفاع واحد ثابت في كل الصفحات.

### الحل: القسم ياخد المساحة المتبقية بالظبط

```tsx
// src/components/Hero/Hero.tsx
<section className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-20 pt-12 sm:px-8 sm:pb-24
                    lg:min-h-[calc(100svh-var(--spacing-navbar))] lg:justify-center lg:px-8 lg:pb-10 lg:pt-10">
```

- `min-h-[calc(100svh-var(--spacing-navbar))]` = ارتفاع الشاشة (`100svh`) ناقص ارتفاع النافبار.
  ده معناه إن الهيرو بياخد **بالظبط** المساحة اللي فاضلة تحت النافبار، فمش بيحصل scroll.
  - `svh` مش `vh` لأن `svh` هو أصغر ارتفاع للشاشة (بيتفادى مشكلة شريط المتصفح في الموبايل).
  - `min-h` مش `h` عشان لو المحتوى كبر في أي حالة، القسم يكبر ولا يقص المحتوى.
- `flex-col` + `lg:justify-center` = ابتداءً من `lg` المحتوى بيتحط في نص المساحة المتاحة عموديًا (متوسيط).
- على الموبايل بيفضل `py-20`-واحد عادي مع `flex-col` (العمود بيبقى تحت بعض).

### الحل: المقاسات بتتصغّر مع ارتفاع الشاشة (من غير تكرار كود)

بدل ما نكتب نسخة مختلفة للموبايل، بنخلي **نفس** العناصر تاخد أحجام متغيرة:

```tsx
// العنوان: يصغر مع ارتفاع الشاشة على الديسكتوب
<h1 className="... text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,6.8svh,4rem)]">

// الصورة: عرضها مرتبط بارتفاع الشاشة
<div className="... lg:w-[min(20rem,46svh)] lg:max-w-full lg:shrink-0">
```

- `clamp(2.5rem, 6.8svh, 4rem)` = أصغر حد `2.5rem`، قيمة متغيرة حسب ارتفاع الشاشة `6.8svh`، وأقصى حد `4rem`.
  يعني على شاشة 600px ارتفاع العنوان بيصغر تلقائيًا، وعلى شاشة كبيرة بيفضل 4rem — **بدون أي كود مكرر**.
- `min(20rem, 46svh)` = الصورة بتبقى بعرض 320px بحد أقصى، أو أصغر لو الشاشة قصيرة.

### تنظيم الأعمدة (Flexbox بدل Duplicate Markup)

```tsx
<div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-10">
  {/* الصورة: فوق على الموبايل، يمين على الديسكتوب */}
  <div className="order-1 ... lg:order-2"> ... </div>
  {/* المحتوى: تحت الصورة على الموبايل، شمال على الديسكتوب */}
  <div className="order-2 ... lg:order-1"> ... </div>
</div>
```

- على الموبايل `flex-col` فالترتيب من فوق لتحت.
- على الديسكتوب `lg:flex-row`، و`order` بيقلب الترتيب: المحتوى يبقى شمال والصورة يمين.
- **نفس الـ JSX** بيخدم الشاشتين — وده بالظبط اللي اتطلب (Tailwind بدل كتابة الموضوع مرتين).

### النتيجة

- الديسكتوب: الهيرو كامل (الصورة + الاسم + الفقرة + الزرارين + شارة التوافر + الأيقونات) باين بدون scroll.
- الموبايل: نفس الكود بالظبط، بس الأعمدة فوق بعض.

---

## البرومبت 2 — تكبير صورة الهيرو في الديسكتوب

### المطلوب
صورة الهيرو في الديسكتوب تكون أكبر شوية.

### التنفيذ
بدل ما نكبّر الصورة على طول (وده هيخليها تطلع بره الشاشة من جديد)، ربطنا العرض **بمقدار ثابت وبارتفاع الشاشة**:

```tsx
// قبل
lg:w-[min(17rem,40svh)]
// بعد
lg:w-[min(20rem,46svh)]
```

### ليه ده أفضل من تكبير ثابت؟

- `20rem` = 320px عرض أقصى (أكبر من 17rem = 272px).
- `46svh` = لو الشاشة قصيرة (لاب توب 1366×600 مثلاً) الصورة بتتصغّر تلقائيًا بدل ما تزق الزرارين تحت الشاشة.
- بفضل نستخدم `min()` و `clamp()` بدل media queries إضافية، عشان يفضل **كود واحد** لكل المقاسات.

---

## البرومبت 3 — صفحة About

### المطلوب
صفحة About فيها: عنوان `ABOUT ME` + فقرة تعريفية + **3 كروت** (ITI / Udemy / Self Development)، متجاوبة completely (عمودي على الموبايل، أفقي على التابلت والديسكتوب)، وبنفس ألوان الموقع، ومن غير مكتبات جديدة أو أنيميشن زيادة.

### الملفات اللي اتعملت

```
src/data/aboutCards.ts              بيانات الكروت الثلاثة
src/components/AboutCard/AboutCard.tsx  كارت واحد reusable
src/pages/About/About.tsx           الصفحة نفسها
```

### 1) البيانات في ملف منفصل — `src/data/aboutCards.ts`

```ts
export type AboutCardItem = {
  /** كارتين بنفس العنوان، فكل واحد محتاج مفتاح فريد. */
  id: string
  title: string
  /** اسم مصدر التعلم، بيظهر كـ label صغير فوق العنوان (اختياري). */
  subtitle?: string
  description: string
}

export const aboutCards: AboutCardItem[] = [
  { id: 'react-iti',    title: 'React Development', subtitle: 'ITI',   description: 'Completed a React Development course through ITI.' },
  { id: 'react-udemy',  title: 'React Development', subtitle: 'Udemy', description: 'Completed a React Development course through Udemy.' },
  { id: 'self-development', title: 'Self Development', description: 'Continuously improving my skills through self-learning and practical projects.' },
]
```

- فايدة الفصل: المحتوى التابت في `data/` والـ UI بس في `components/`. نفس أسلوب `navigation.ts` و `socialLinks.ts` الموجود في المشروع.
- `subtitle` اختياري (`?`) لأن الكارت الثالث مالوش مصدر.
- `id` موجود لأن كارتين عندهم نفس `title` ("React Development")، و React بيحتاج `key` فريد لكل عنصر في الـ list.

### 2) كارت واحد قابل لإعادة الاستخدام — `src/components/AboutCard/AboutCard.tsx`

```tsx
export default function AboutCard({ title, subtitle, description }: AboutCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6
                        transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      {subtitle && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{subtitle}</p>
      )}

      <h2 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-primary
                      sm:text-xl lg:text-2xl">{title}</h2>

      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  )
}
```

شرح الكروت:

- `<article>` =HTMLElement دلالي لكل كارت (مفيد للـ SEO و قارئات الشاشة).
- العنوان `<h2>` مش `<h3>`: الصفحة فيها `h1` واحد بس، فالتسلسل الصح هو `h1` ثم `h2`.
- `flex h-full flex-col` + الحاوية `grid` = **كل الكروت ليها نفس الارتفاع** حتى لو النص مختلف.
- `p-6` padding واحد لكل الكروت، `rounded-2xl` + `border-white/10` يعطي شكل نظيف من غير تشطيبات زيادة.
- الهوفر مجرد CSS transition بسيط (`transition` + `hover:border-accent/40` + `hover:-translate-y-1`) — **من غير أي مكتبة أنيميشن**.
- الألوان `text-accent` / `text-primary` / `text-muted` جاية من توكنز `index.css`، فمفيش لون مكتوب يدوي هنا.

### 3) الصفحة نفسها — `src/pages/About/About.tsx`

```tsx
export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
        About Me
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        I am a Computer Science student at Minya National University, ... continuously learning.
      </p>

      {/* عمود واحد على الموبايل، وثلاثة جنب بعض من التابلت لفوق */}
      <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-3">
        {aboutCards.map((card) => (
          <AboutCard key={card.id} title={card.title} subtitle={card.subtitle} description={card.description} />
        ))}
      </div>
    </main>
  )
}
```

### الـ Responsive في الصفحة دي (Grid واحد بيخدم الكل)

| الشاشة | السلوك |
| --- | --- |
| موبايل (`< 640px`) | `grid` عمود واحد → الكروت فوق بعض مع `gap-6` |
| تابلت (`≥ 640px`) | `sm:grid-cols-3` → تلاتة جنب بعض |
| لاب توب / ديسكتوب | نفس الـ 3 أعمدة، بس الخط/title أكبر (`lg:text-2xl`) |
| شاشة كبيرة | `max-w-6xl` بيفضل بيوسّط المحتوى بدل ما يتمدد لأبعد حد |

- `max-w-3xl` على الفقرة عشان النص يفضل مريح في القراءة ومش يمتد لآخر الشاشة.
- `mx-auto` + `max-w-6xl` + `px-5 sm:px-8` = نفس(container) المستخدم في Navbar و Hero، فالصفحة كلها متناسقة.
- مفيش أي `overflow-x` ولا scroll أفقي، ومفيش نص بيتقص.

---

## البرومبت 4 — الموقع كله صفحة واحدة تتقرا بالـ scroll

### المطلوب

لما أعمل scroll أشوف كل الأقسام، من غير ما أضطر أدوس على لينك عشان أوصل لكل قسم.

### الفكرة

التحويل من "صفحة لكل قسم" (Routing) إلى **Single Page**: الصفحة الواحدة فيها كل الأقسام فوق بعض،
والتنقل بيصير بـ **anchors** (`href="#about"`) بتتنقّل/guide الـ scroll لنفس الصفحة.

### التغييرات

| قبل | بعد |
| --- | --- |
| `src/pages/About` … `Contact` صفحات منفصلة | أقسام (sections) في `src/components/…` |
| `Hero` + صفحة لكل قسم | `Home` واحدة ترتّب كل الأقسام |
| `<NavLink to="/about">` | `<a href="#about">` |
| بيانات فيها `path` | بيانات فيها `id` (أسماء الأقسام) |

**1) كومبوننت `Section` عشان نتفادى تكرار نفس الكود 4 مرات** — `src/components/Section/Section.tsx`

```tsx
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      // `scroll-mt-navbar` سيب مكان للنافبار الـ sticky، فما يحصلش إن
      // عنوان القسم يتخبى تحت الشريط لما أحد يعمل jump عليه.
      className="mx-auto w-full max-w-6xl scroll-mt-navbar px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <h2 id={`${id}-title`} className="font-heading text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  )
}
```

- `scroll-mt-navbar` شغّال لأن `--spacing-navbar` متسجّل في مساحة `spacing` في Tailwind v4،
  فـ Tailwind ولّد الـ utility ده لوحده من نفس التوكين اللي بيحكم ارتفاع النافبار.
- `aria-labelledby` بيربط القسم بعنواه (مفيد لقارئات الشاشة).
- `py-16 sm:py-20 lg:py-24` = المسافة بين الأقسام بتكبر مع الشاشة.
- بعد ما القسم ده بقى section، العنوان بقى `h2` (لأن `Hero` هو الـ `h1` الوحيد في الصفحة) — وده اللي بيخلي
  ترتيب العناوين (heading order) صحيح.

**2) الصفحة الواحدة** — `src/pages/Home/Home.tsx`

```tsx
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
```

الترتيب هنا = ترتيب القراءة على الموقع. مفيش أي state ولا منطق، مجرد ترتيب أقسام.

**3) التنقل اتحول لـ anchors** — `src/data/navigation.ts`

```ts
export type NavigationItem = { label: string; id: string }
export const navigationItems: NavigationItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]
```

الـ `id` لازم يبقى **متطابق** مع الـ `id` في الـ section المقابل، عشان الـ anchor يلاقي الهدف.
والتمرير الناعم (smooth) شغّال أصلاً من `index.css`:

```css
html { scroll-behavior: smooth; }
```

**4) تتبّع القسم الحالي (Scroll Spy)** — `src/components/Navbar/Navbar.tsx`

من غير ده، الـ underline اللي تحت لينك نشط مش هيعرف مكاننا في الصفحة. الحل بـ `IntersectionObserver`
(سلوك جاهز في المتصفح، من غير أي مكتبة):

```tsx
const [activeSectionId, setActiveSectionId] = useState('home')

useEffect(() => {
  const sections = navigationItems
    .map((item) => document.getElementById(item.id))
    .filter((section) => section !== null)

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)
      if (visibleSection) setActiveSectionId(visibleSection.target.id)
    },
    // الشريط الرقيق اللي في نص الشاشة بس هو اللي يتحسب "ظاهر"،
    // فالنشط بيتطابق مع القسم اللي انت فعلاً بقراه.
    { rootMargin: '-45% 0px -45% 0px' },
  )

  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()   // تنظيف: نلغي المراقبة لما الكومبوننت يتشال
}, [])
```

- `IntersectionObserver` بيقول "عنصر ظاهر ولا لأ" من غير ما نحسب مواضع بإيدينا في كل scroll event.
- `rootMargin: '-45% 0px -45% 0px'` بيقصر منطقة الكشف على شريط في نص الشاشة.
- `aria-current` بيقول لقارئات الشاشة إن ده القسم الحالي (مكمّل للـ underline، لأن اللون لوحده مش كافي).
- الـ `return () => observer.disconnect()` مهم: من غيره المراقبة بتفضل شغالة بعد ما الكومبوننت يتمسح.

**5) `Button` بقى anchor بسيط** — `src/components/Button/Button.tsx`

```tsx
<a href={href} download={download} className={buttonStyles}>{children}</a>
```

اتشال الـ `to` و `Link` من `react-router` لأن مفيش تنقل بين صفحات بقى.
الزرار في الهيرو بقى:

```tsx
<Button href="#projects">View Projects</Button>
<Button href="#contact" variant="secondary">Contact Me</Button>
```

**6) المسارات** — `src/routes/routes.tsx`

```tsx
<Route element={<Layout />}>
  <Route path="*" element={<Home />} />
</Route>
```

`path="*"` = أي رابط (حتى `/about` القديم) بيفتح نفس الصفحة، فمفيش روابط ميتة.

### النتيجة

- تعمل scroll/down تلاقي: Hero → About → Skills → Projects → Contact.
- الـ navbar لسه شغّال، لكن كـ anchor سريع + indication للقسم الحالي.
- مفيش صفحة فاضية لو حد فتح لينك قديم.

---

## البرومبت 5 — قسم المهارات (Skills) + تغيير خط العناوين

### المطلوب

قسم SKILLS فيه 10 مهارات في شكل كروت بالأيقونات، **5 في الصف** على الديسكتوب و**3 في الصف** على الموبايل
(مع توسيط الكارت الأخير)، وكمان **تغيير خط العناوين** لحد تاني أنيق.

### 1) تغيير خط العناوين

المشروع أصلاً بيحمّل الخطوط من Google Fonts عن طريق `<link>` في `index.html` (مش مكتبة npm)،
فالتغيير تم في نفس المكان — **من غير أي dependency جديدة**:

```html
<!-- index.html -->
family=Sora:wght@600;700;800   <!-- كان Syne -->
```

```css
/* src/index.css */
--font-heading: 'Sora', 'Inter', system-ui, sans-serif;  /* كان Syne */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;  /* زي ما هو */
```

- **ليه Sora؟** خط هندسي حديث، بيتقرا جداً في العناوين الكبيرة بالأحرف الكبيرة (UPPERCASE) زي `SKILLS`،
  وشكله احترافي يناسب بورتفوليو مطور. وطلبت الأوزان `600 / 700 / 800` عشان كل الأوزان المستخدمة
  (`font-bold` / `font-extrabold`) تبقى موجودة فعلاً.
- خط النصوص (`Inter`) ما اتغيّرش، والتوكين لسه مكانه واحد، فالتغيير بيترد على الموقع كله من سطرين.

### 2) بيانات المهارات — `src/data/skills.ts`

```ts
export type Skill = {
  name: string
  icon: IconType
}

export const skills: Skill[] = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  // ...
  { name: 'Sass', icon: FaSass },
]
```

- الأيقونات من `react-icons` (المكتبة الموجودة بالفعل): `fa6` للعلامات العامة
  (HTML5 / CSS3 / JavaScript / React / Git / Sass) و `si` (Simple Icons) للتقنيات اللي مالهاش نسخة في Font Awesome
  (Tailwind / TypeScript / Redux / Axios).
- الترتيب في الملف هو ترتيب العرض، وكل الأيقونات بنفس الحجم داخل الكارت عشان تبقى متناسقة.

### 3) كارت المهارة — `src/components/SkillCard/SkillCard.tsx`

- `<li>` لأنه جزء من قائمة، والاسم مكتوب **نص** جنب الأيقونة (مش صور الأيقونة بس) عشان يفضل واضح لكل المستخدمين.
- الأيقونة جوّه مربع ثابت `h-12 w-12` → كل الكروت ليها نفس منطقة الأيقونة والارتفاع.
- `aria-hidden` على الأيقونة لأنها زخرفة، والاسم هو اللي بيقول المعلومة.
- هوفر بسيط: `hover:-translate-y-1 hover:border-accent/40` مع `transition duration-300`. مفيش glow ولا أنيميشن زيادة.
- بياخد `className` زي ما `Button` بيعمل، عشان الشبكة تتحكم في مكانه.

### 4) الشبكة والتوسيط — `src/components/Skills/Skills.tsx`

```tsx
<ul className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-5">
  {skills.map((skill, index) => (
    <SkillCard
      key={skill.name}
      name={skill.name}
      icon={skill.icon}
      className={index === skills.length - 1 ? 'col-start-2 sm:col-start-auto' : ''}
    />
  ))}
</ul>
```

| الشاشة | الأعمدة | الشكل |
| --- | --- | --- |
| موبايل | 3 | 3 + 3 + 3 + **1 في النص** |
| تابلت / لاب توب / ديسكتوب | 5 | 5 + 5 (صفين كاملين) |

- **توسيط الكارت الأخير:** 10 كروت في شبكة 3 أعمدة معناها إن الأخير يفضل لوحده في العمود الأول.
  `col-start-2` بينقله للعمود الأوسط بس على الموبايل، و`sm:col-start-auto` بيرجّعه لآخر عمود
  في شبكة الـ 5 (اللي هي 2 صف كاملين أصلاً). من غير كارت فاضي في الـ markup.
- `gap-4` على الموبايل و`sm:gap-5` على الشاشات الأكبر، و`p-4` → `sm:p-5` جوه الكارت
  عشان المحتوى ميتزحلقش في الشاشات الصغيرة.
- مفيش أي `overflow` أفقي، والعناوين بتلتف جوه الكارت بدل ما تتقص.

---

## البرومبت 6 — قسم المشاريع (Projects)

### المطلوب

قسم PROJECTS فيه **3 كروت** (صورة + عنوان + وصف + pills للتقنيات)، 3 أعمدة على الديسكتوب
وقائمة على الموبايل، بنفس هوية الموقع ومن غير أي مكتبة جديدة.

### 1) بيانات المشاريع — `src/data/projects.ts`

```ts
import card1Image from '@/assets/images/card1.png'
// card2 / card3

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
}

export const projects: Project[] = [ /* 3 مشاريع */ ]
```

- استيراد صورة في Vite بيرجّع **رابط** (string) بعد ما ينسخ الملف ويعمله hash، عشان كده `image`
  نوعه `string` مش component. ده نفس النمط المستخدم في `Hero` مع صورة البروفايل.
- كل مشروع ليه التقنيات الخاصة بيه بس (من غير تكرار ولا تقنية مش مطلوبة).
- `alt` مش متخزّن في البيانات — بيتولّد من `title` جوه الكارت، عشان نتفادى تكرار نفس النص في مكانين.

### 2) كارت المشروع — `src/components/ProjectCard/ProjectCard.tsx`

- `<article>` لكل مشروع، و`<h3>` للعنوان لأن عنوان القسم فوقه `h2` (ترتيب العناوين صح).
- الصورة: `aspect-16/9 w-full object-cover`
  - `aspect-16/9` = مساحة الصورة **ثابتة النسبة** في الكروت الثلاثة، فالتصميم متوازن مهما اختلفت أبعاد الصور.
  - `object-cover` = الصورة بتتقص (crop) بدل ما تتمدد أو تتشوّه — وده اللي بيمنع أي distortion.
- الـ pills: `<li>` جوه `<ul className="flex flex-wrap gap-2">`
  - `flex-wrap` = الـ pills بتلتف لوحدها لو الصف ضاق، من غير أي كود زيادة.
  - الشكل: `rounded-full` + `border-accent/25 bg-accent/5` + نص `text-accent` = لون مميّز خفيف ومقروء.
- الهوفر: `hover:-translate-y-1 hover:border-accent/40` مع `transition duration-300` بس.
- `h-full` على الكارت و`flex-1` على المحتوى = الكروت في نفس الصف ليها نفس الارتفاع.

### 3) الشبكة — `src/components/Projects/Projects.tsx`

```tsx
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      technologies={project.technologies}
    />
  ))}
</div>
```

| الشاشة | الأعمدة |
| --- | --- |
| موبايل | 1 (الكروت فوق بعض) |
| تابلت (`sm`) | 2 |
| لاب توب / ديسكتوب (`lg`) | 3 (صف واحد) |

`gap-6` بين الكروت في كل المقاسات، ومفيش `overflow-x`، والـ pills متلفّة بالكامل.

---

## البرومبت 7 — قسم التواصل (Contact)

### المطلوب

قسم CONTACT فيه مقدمة + 4 كروت تواصل (2×2) + فورم، كلهم في عمودين على الديسكتوب
وقائمة على الموبايل، بنفس هوية الموقع ومن غير backend.

### الملفات

```
src/data/contactLinks.ts                       بيانات التواصل
src/components/ContactInfoCard/ContactInfoCard.tsx  كارت تواصل واحد
src/components/ContactForm/ContactForm.tsx     الفورم
src/components/Contact/Contact.tsx             القسم وتخطيطه
src/components/Button/Button.tsx               تعديل صغير: يدعم زرار الإرسال
src/components/Section/Section.tsx             تعديل صغير: `title` بقى اختياري
```

### 1) بيانات التواصل — `src/data/contactLinks.ts`

```ts
export type ContactLink = {
  label: string
  value: string
  href: string
  icon: IconType
  opensInNewTab: boolean
}
```

- **رابط واتساب:** الرقم المحلي `01095517990` بيتحوّل للرابط العالمي `https://wa.me/201095517990`
  (كود مصر `20` + الرقم من غير الصفر الأول) وده الشكل اللي wa.me بيفهمه.
- لينكات الـ LinkedIn والـ GitHub **placeholders** (نفس فكرة الـ TODO الموجودة في `socialLinks.ts`)
  عشان متخترعش بروفايل حقيقي لحد.
- الأيقونات كلّها من `fa6` (المكتبة الموجودة): `FaEnvelope` / `FaWhatsapp` / `FaLinkedinIn` / `FaGithub`.

### 2) كارت التواصل — `ContactInfoCard`

- الكارت نفسه `<a>` قابل للضغط (mailto / wa.me / روابط خارجية).
- `aria-hidden` على الأيقونة، والاسم والقيمة **نص** — فالمعلومة مش معتمدة على الأيقونة.
- `min-w-0` + `break-words` على النص: الإيميل طويل، فبيلتف جوه الكارت بدل ما يخرجه بره الشاشة.
- `target="_blank"` بس للروابط الخارجية، مع `rel="noreferrer"`؛ وحقل `mailto:` بيفتح في نفس التاب.

### 3) الفورم — `ContactForm`

- **بدون أي مكتبة فورم** و**بدون backend**: `<form>` + `onSubmit` بيمنع تحميل الصفحة بس
  (`event.preventDefault()`)، وده كل اللي هو مطلوب في المرحلة دي.
- كل حقل `<label htmlFor>` + `id` متطابق، والأنواع الصح: `text` / `email` / `tel` / `textarea`،
  و`autoComplete` لكل حقل عشان المتصفح يملاه بسرعة.
- الحقول الإلزامية (`required`) = تحقق HTML مدمج، من غير أي JavaScript.
- ستايل الحقول في ثابت واحد `fieldStyles` جوّه الملف، فالتلات input والـ textarea متطابقين 100%.
  سهم التركيز (focus ring) بييجي من القاعدة العامة `:focus-visible` في `index.css`، والـ border
  بيتلوّن `focus:border-accent` كإشارة بسيطة.
- زرار الإرسال بيستخدم `Button` نفسه عشان يطلع بنفس ألوان الموقع.

### 4) تعديلين صغيرين في كومبوننتات مشتركة

- **`Button` بقى بي `<button>` كمان:** زرار الفورم لازم `type="submit"` جوه `<form>`، و`Button` كان
  بيرندر `<a>` بس. بقى لو `href` موجود بيرندر `<a>`، ولو مفيش بيرندر `<button type="submit">`:
  نفس الاستايل في الحالتين، ومفيش تكرار.
- **`Section` بقى `title` اختياري:** قسم Contact عنوانه مش تاع القسم القياسي (label صغير + عنوان كبير)،
  فخلّينا `title` اختياري و`aria-labelledby` بيشتغل بس لما العنوان موجود. الحاوية والـ `id` والـ
  `scroll-mt-navbar` زي ما هما.

### 5) التخطيط — `Contact.tsx`

```tsx
<div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
  {/* طرق التواصل */}
  <div> ... <ul className="mt-5 grid gap-4 sm:grid-cols-2"> ... </ul> </div>
  {/* الفورم */}
  <ContactForm />
</div>
```

| الشاشة | التخطيط |
| --- | --- |
| موبايل | كل حاجة فوق بعض (النص ← الكروت ← الفورم) |
| تابلت | الكروت 2×2، والفورم تحت في عمود واحد |
| لاب توب / ديسكتوب (`lg`) | عمودين: معلومات على الشمال، الفورم على اليمين |

عنوان القسم: label صغير بلون الـ accent + عنوان كبير بخط `font-heading` (Sora) على سطرين
عشان يبان أقوى من عناوين باقي الأقسام.

---

## البرومبت 8 — الفوتر (Footer)

### المطلوب

فوتر بسيط: `MK` على الشمال، ونص حقوق النشر في النص، ولينكات التواصل على اليمين، وكله في عمود على الموبايل.
ومش كل section فيه فوتر — لازم **كومبوننت واحد مشترك** يبان في كل مكان، والروابط **نفس بيانات** قسم Contact.

### 1) الفوتر كـ shared component — `src/components/Footer/Footer.tsx`

الفوتر متركّب مرة واحدة في `Layout.tsx` (مش جوه أي section):

```tsx
<>
  <Navbar />
  <Outlet />   {/* الصفحة الحالية */}
  <Footer />   {/* بيبان مع أي صفحة تلقائيًا */}
</>
```

- `Layout` هو المكان اللي فيه الـ Navbar والـ Outlet، فإضافة `Footer` جنبه = فوتر واحد لكل الصفحات.
- لو كان محتاج فوتر جوه كل section، كان هيتكرر 5 مرات — وده اللي تمنعاه الـ Shared Component.

### 2) نفس بيانات قسم Contact (من غير تكرار)

ضيفنا حقل صغير في `src/data/contactLinks.ts`:

```ts
export type ContactLink = {
  // ...
  /** Whether the footer also shows this link next to the copyright. */
  showInFooter: boolean
}
```

وفي الفوتر:

```tsx
const footerLinks = contactLinks.filter((contactLink) => contactLink.showInFooter)
```

- **ليه حقل في الداتا أحسن من `filter` بالاسم؟** لأن الفلتر بالاسم بيبقى شريط نص صعب يتغير، وب-prone إنك تنسى
  تضيف رابط جديد للفوتر. الحقل في الداتا واضح ومقصود.
- النتيجة: **الروابط متكتبش في أكتر من مكان** — الـ `mailto` بتاع الإيميل والروابط الخارجية
  موجودة في مكان واحد بس، والفوتر بياخدها من هناك. لو غيّرت رابط، هيتحدّث في القسم والفوتر مع بعض.
- واتساب `showInFooter: false` لأنه مطلوب في كروت التواصل بس، مش في الفوتر.

### 3) التخطيط

```tsx
<footer className="border-t border-white/10">
  <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 py-8
                  text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
```

| الشاشة | الشكل |
| --- | --- |
| موبايل | عمود في النص: `MK` ← copyright ← اللينكات (الأساس `flex-col items-center text-center`) |
| `sm` وفوق | صف واحد: `MK` شمال / copyright في النص / اللينكات يمين (`sm:justify-between`) |

- نفس عرض الحاوية بتاع باقي الأقسام (`max-w-6xl` + `px-5 sm:px-8`) عشان حدود الفوتر متوازية مع المحتوى.
- `py-8` بسيط عشان الفوتر يفضل compact.
- `MK` بنفس ستايل لوجو النافبار (`font-heading text-2xl font-extrabold tracking-tight`) بس بلون الـ accent.
- اللينكات: `<a>` حقيقي + `text-muted` وبتتحوّل `hover:text-accent`، و`py-1` عشان مساحة اللمس مريحة على الموبايل.
  والروابط الخارجية بـ `target="_blank"` + `rel="noreferrer"`، والإيميل `mailto:` بيفتح في نفس التاب.
- مفيش glow ولا جراديان ولا أنيميشن — غير `transition-colors` البسيط على الهوفر.
- `<footer>` دلالي، والتركيز على اللينكات بياخد نفس `:focus-visible` العام في `index.css`.

---

## 9. ملاحظات وتعلّمات من الشغل ده

1. **الريسبونسيف بـ Tailwind مش بكود مكرر:** نفس الـ JSX بيتغير شكله بـ breakpoint prefixes (`sm:` / `md:` / `lg:`) وبـ `order` و `flex-col → flex-row`.
2. **`clamp()` و `min()` في الـ `lg:`** هم الحل الذكي للشاشات القصيرة — بيخلوا المقاسات مرتبطة بارتفاع الشاشة بدل ما نعمل media queries كتير.
3. **التوكِنز (Design Tokens):** لو لزم تغيّر لون أو خط، بتغيره من `index.css` بس وكل الموقع بيتحدث.
4. **`svh` أفضل من `vh`** لما تحسب ارتفاع الشاشة على الموبايل، عشان بتفادي شريط المتصفح.
5. **المحتوى التابت مكانه `data/`** والـ UI في `components/` والصفحات بتعمل `.map()`.
6. **الـ `id` هو عقد الصفحة:** لما أتحول من routing لـ anchors، الـ `id` في الـ section والـ `id` في بيانات التنقل لازم يبقوا متطابقين.
7. **تغيير خط واحد من مكان واحد:** ضايف اسم الخط في `index.html` وبحدّث الـ token في `index.css`، فيتغير كل العناوين.
8. **الصور في Vite روابط:** استيراد صورة بيرجّع `string` (رابط بعد النسخ)، وعشان كده البيانات بتحتفظ بالرابط.
9. **فورم من غير مكتبة:** `label` + `htmlFor` + أنواع inputs الصح + `required` + `preventDefault` = فورم متاح و متوافق كويس.
10. **الـ Shared Component بيتحط في `Layout`:** أي حاجة لازم تظهر في كل صفحة (فوتر، نافبار) بتتحط هناك مرة واحدة.
11. **البيانات المشتركة بمصفوفة واحدة:** لو عنصر بيظهر في أكتر من مكان، حطّ فلاج في البيانات (مثل `showInFooter`) بدل ما تكرر الروابط.
12. **قبل ما تسلّم أي تعديل:** `npm run lint` و `npm run build` (الـ build بيعمل type-check بـ `tsc` كمان).

## 10. الخطوات الجاية

- [x] بناء قسم Skills
- [x] بناء قسم Projects
- [x] بناء قسم Contact
- [x] الفوتر
- [ ] ربط الفورم بخدمة إرسال (إيميل أو API) بدل `preventDefault`
- [ ] ضغط صور المشاريع (`card1..3.png` كل واحدة حوالي 600KB)
- [ ] لينكات الـ LinkedIn والـ GitHub الحقيقية في `data/contactLinks.ts` و `data/socialLinks.ts`
