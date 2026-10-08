> کار جاری: افزودن لوگوی ۱۲ مشتری. چیدمان آماده است ولی دانلود فایل‌ها توسط سیاست شبکه مسدود است؛ هیچ لوگویی فعال نشده. ابتدا CLIENT_LOGO_RESEARCH_FA.md را بخوانید. صاحب پروژه ماشین‌سازی تبریز را تأیید کرد و نام در هر دو زبان اصلاح شد.

> وضعیت جاری ۲۰۲۶/۱۰/۰۹: کانال‌های شرکت، انبار و شمش و هشت نرخ خرید تاریخ‌دار خاورشهر درج شدند. ابتدا CHANNELS_AND_PURCHASE_RATES_FA.md و SITE_COMPLETION_PLAN_FA.md را بخوانید. متن مراحل قدیمی زیر، وضعیت تاریخی است.

> آخرین مرحله: صفحات موجودی و قیمت و مزایدهٔ آزمایشی محلی؛ ابتدا MARKET_PAGES_FA.md و SITE_COMPLETION_PLAN_FA.md را بخوانید.

> آخرین مرحله: تکمیل نسخهٔ محلی؛ ابتدا LOCAL_PREVIEW_FA.md را بخوانید. انتشار آنلاین طبق دستور کاربر آخرین مرحله است.

> آخرین مرحله: آماده‌سازی انتشار و انتقال سورس به گیت. ابتدا RELEASE_PREPARATION_FA.md و README_FA.md ریشه را بخوانید.

> آخرین وضعیت: لوگوی اصلی در سربرگ، پاورقی و آیکن مرورگر درج شده است. ابتدا LOGO_UPDATE_FA.md و سپس COMPANY_DRAFT_FA.md را بخوانید.

> وضعیت فعلی: اطلاعات موقت شرکت، تماس، تاریخچه، مشتریان و تجهیزات از اسناد ارسالی کاربر تکمیل شده‌اند. اول `COMPANY_DRAFT_FA.md` را بخوانید. اصل فایل لوگو و ساعات پاسخ‌گویی هنوز لازم‌اند. اطلاعات کاتالوگ طبق دستور کاربر قدیمی و قابل جایگزینی هستند.

> به‌روزرسانی ۲۰۲۶/۱۰/۰۸: مرحلهٔ بررسی واکنش‌گرایی انجام شد. گزارش فعلی و فایل‌های تغییرکرده در `RESPONSIVE_REVIEW_FA.md` ثبت شده‌اند. متن زیر وضعیت تاریخی پیش از این مرحله است.

# وضعیت و راهنمای ادامه پروژه

## هدف
وب‌سایت عمومی fooladkavian.com برای «هلدینگ فولاد کاویان سپنتا». ورود مخاطب از بازار فولاد و ضایعات (مزایدات، نرخ‌ها، تحلیل و چشم‌انداز) و فرصت معرفی ERP اختصاصی برای مشاغل مختلف. عنوان قطعی معرفی ERP: «سامانه مدیریت یکپارچه کاویان». معادل انگلیسی: Kavian Integrated Management System.

## ساختار و فناوری
- ریشه سابق: E:\reza-projects\kavian-platform-foundation-v2\kavian-platform
- سایت: apps/web؛ package: @kavian/web؛ Next.js 16.3.3، React 19.3.0، TypeScript، ESLint 9.
- monorepo pnpm + turbo؛ بسته‌های config، types، validation، ui به صورت workspace.
- apps/api پایه NestJS/Prisma و infrastructure موجودند؛ در مراحل سایت تغییر نکرده‌اند و برای صفحات فعلی لازم نیستند.
- محیط قبلی Git repository شناخته نمی‌شد؛ سابقه commit یا diff کامل در این بسته نیست.
- routes: src/app/[locale]/(public)، layout عمومی: src/app/[locale]/layout.tsx.
- فارسی lang=fa dir=rtl؛ انگلیسی lang=en dir=ltr. اعتبارسنجی locale با @kavian/config.

## پوسته مشترک
Header، MainNav، MobileNav، LanguageSwitcher، Footer و PublicLayout ساخته شده‌اند. ترجمه ساده در components/navigation/messages.ts است؛ پکیج i18n اضافه نشده. LanguageSwitcher suffix مسیر، query و hash را حفظ می‌کند. منوی موبایل با Escape، کلیک بیرون و تغییر اندازه بسته می‌شود. جای لوگو موقت K است. اطلاعات تماس و شبکه‌های اجتماعی placeholder هستند.
رنگ‌های سرمه‌ای، خاکستری فولادی، سفید و طلایی محدود؛ طراحی رسمی، صنعتی و خلوت. از glow، gradient زیاد و ظاهر شلوغ پرهیز شود.

## وضعیت مسیرها — هر دو زبان /fa و /en
- /: Home با ورودی بازار، معرفی ERP، گروه‌های فعالیت و لینک‌های مرتبط.
- /products: راهنمای گروه‌های عمومی محصول؛ ادعای موجودی واقعی ندارد.
- /scrap: معرفی گروه‌های عمومی ضایعات.
- /sell-scrap: راهنمای آماده‌کردن اطلاعات محموله برای عرضه؛ بدون فرم.
- /contact: راهنما + اطلاعات تماس placeholder.
- /about: معرفی عمومی مجموعه؛ بدون آمار، تاریخچه و ادعاهای تأییدنشده.
- /khavarshahr: معرفی انبار با جزئیات عملیاتی placeholder؛ بدون آدرس/نقشه جعلی.
- /market: سه بخش مزایدات و مناقصات، نرخ فولاد و ضایعات، تحلیل و چشم‌انداز. فعلاً empty state؛ هیچ نرخ زنده، آگهی واقعی یا پیش‌بینی منتشر نشده. داده‌های آینده باید منبع، تاریخ، واحد، شرایط و اعتبار روشن داشته باشند. نرخ پیشنهادی/معامله‌شده/برآوردی از هم تفکیک شوند.
- /erp: معرفی سامانه برای مشاغل مختلف، حوزه‌های طراحی، مراحل همکاری، سناریوی توضیحی خرید تا تحویل و شش FAQ. سناریو نمونه‌کار اجراشده یا فهرست قابلیت‌های آماده نیست. دموی عملی و قابلیت واقعی باید از صاحب پروژه دریافت شود.
- /inquiry: آخرین مرحله تکمیل‌شده؛ راهنمای مشخصات، مقدار، محل و زمان، شرایط تجاری و الگوی متنی درخواست. ارسال/ذخیره‌سازی/فرم ندارد. robots noindex,follow حفظ شده.
- /inventory، /prices، /clients: صفحات موقت «در حال آماده‌سازی»، لینک مرتبط؛ robots noindex,follow؛ خارج از sitemap.
- /admin: پوسته قبلی؛ تغییر نکند.

## فایل‌های کلیدی
components/layout/: Header.tsx, Footer.tsx, PublicLayout.tsx, public-shell.css
components/navigation/: MainNav.tsx, MobileNav.tsx, LanguageSwitcher.tsx, messages.ts
features/home/: HomePage.tsx, HomeLink.tsx, SteelArtwork.tsx, content.ts, home.css
features/erp/: ErpPage.tsx, content.ts, WorkflowExample.tsx, ErpFaq.tsx, erp.css
features/market/: MarketPage.tsx, MarketCards.tsx, content.ts, market.css
features/inquiry/: InquiryPage.tsx, content.ts, inquiry.css
features/pending/: PendingPage.tsx, content.ts
سایر features: products, scrap, warehouse, contact, about.
app/sitemap.ts و robots.ts موجودند؛ fallback دامنه localhost است؛ در انتشار دامنه واقعی تنظیم شود. فایل pending/content.ts هنوز entry قدیمی inquiry را دارد اما Route استعلام اکنون InquiryPage را استفاده می‌کند.

## محدودیت‌های معتبر کار
- تغییرات فقط در محدوده سایت عمومی و مرحله مورد توافق.
- backend، database، admin تغییر نکند؛ proxy.ts فقط در ضرورت مستقیم و مستند.
- پکیج جدید بدون ضرورت نصب نشود. فایل سالم بدون دلیل بازنویسی نشود.
- reusable components و ساختار فعلی حفظ شود. @kavian/ui پیش از انتخاب component بررسی شود؛ Button مشترک قبلاً مشکل declaration داشت، برای منوی ساده از native button استفاده شده است.
- تماس، آمار، مشتری، موجودی، قیمت، پیش‌بینی و قابلیت ERP ساختگی اضافه نشود.
- هر مرحله گزارش کوتاه: ساخته‌شده‌ها، فایل‌های جدید/تغییر، تست‌ها، باقی‌مانده و فقط یک مرحله پیشنهادی.
- تأییدهای «ok» در گفتگو برای مرحله پیشنهادی بعدی استفاده شده‌اند. آخرین دستور کاربر توقف تا فردا بود؛ سپس فقط تهیه این بسته را خواست. شروع توسعه جدید نیاز به درخواست ادامه دارد.

## تست‌های انجام‌شده قبل از بسته
TypeScript، ESLint و Build آخرین مرحله راهنمای inquiry موفق بودند. هر دو inquiry پاسخ HTTP 200 و محتوای outline + noindex داشتند. فارسی در مرورگر مشاهده شد.
بررسی Responsive آخرین inquiry تکمیل نشد: ابزار مرورگر در تست اندازه‌ها timeout شد و بازیابی تب نیز شکست خورد. درباره این مرحله ادعای بررسی کامل موبایل یا Console نکنید.
مراحل قبل: Home/market/ERP در عرض‌های 320،768،1100،1440 بدون overflow؛ FAQ و workflow در 320/768/1440 فارسی/انگلیسی؛ Enter/Space و کلیک FAQ موفق؛ console بدون خطا در همان مراحل. هشت صفحه placeholder در 320/768/1440 موفق. آخرین بررسی عمومی HTTP قبل از تکمیل inquiry: 26 مسیر منو FA/EN پاسخ 200 داشتند.
این نتایج مربوط به محیط سابق‌اند؛ نصب و اجرا در محیط تازه را جداگانه تأیید کنید.

## دستورها
از ریشه: pnpm --filter @kavian/web dev / typecheck / lint / build
در apps/web برای پرهیز از wrapper pnpm در محیط قبلی:
node node_modules/typescript/bin/tsc --noEmit --incremental false
node node_modules/eslint/bin/eslint.js . --no-cache
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start --hostname 127.0.0.1
pnpm قبلاً تلاش به نصب مجدد و پاکسازی node_modules داشت و به علت noTTY متوقف شد؛ آن کار انجام نشد. در محیط تازه نصب وابستگی‌های lockfile لازم است.

## نقطه ادامه
مرحله پیشنهادی که هنوز اجرا نشده: بررسی کامل Responsive و بصری همه صفحات عمومی FA/EN، ابتدا inquiry که تست بصری آن ناقص ماند. عرض‌های موبایل 320/375، تبلت768، desktop1100/1440، overflow، RTL/LTR، menu، زبان، focus/keyboard، metadata و console/import را بررسی کنید. فقط ایرادهای واقعی را اصلاح کنید؛ صفحه تجاری جدید یا اتصال داده زنده ایجاد نکنید.
