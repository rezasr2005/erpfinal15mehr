# گزارش ادامهٔ طراحی سایت فولاد کاویان

تاریخ: ۲۰۲۶/۱۰/۰۸ — منطقهٔ زمانی تهران

مرحلهٔ تعیین‌شده در بستهٔ انتقال اجرا شد: بررسی واکنش‌گرایی و ظاهر صفحات عمومی، از صفحهٔ استعلام، و اصلاح ایرادهای واقعی. ساختار سایت، محتوا و رنگ‌های سرمه‌ای، فولادی و طلایی حفظ شدند.

## اصلاحات

۱. پیکان‌های متنی لینک‌ها در Chromium این محیط به شکل مربع نمایش داده می‌شدند. کامپوننت مشترک `ArrowIcon` با SVG جایگزین آن‌ها شد؛ پیکان در فارسی به سمت چپ و در انگلیسی به سمت راست است. پیکان پیمایش پایین صفحهٔ خانه نیز مستقل از فونت شد. پکیج جدیدی به پروژه اضافه نشد.

۲. تغییر زبان قبلاً query و hash را فقط هنگام کلیک معمولی نگه می‌داشت. مقصد واقعی لینک اکنون بعد از آماده‌شدن صفحه، تغییر مسیر و رویدادهای hashchange/popstate به‌روز می‌شود؛ باز کردن یا کپی مقصد لینک نیز query و hash را حفظ می‌کند. نمونهٔ بررسی‌شده: `/fa/inquiry?source=review#inquiry-details` به `/en/inquiry?source=review#inquiry-details`.

۳. تنها خطای کنسول اولیه، درخواست ناموفق آیکن تب مرورگر بود. آیکن SVG موقت بر پایهٔ نشان K موجود اضافه شد و صفحات عمومی آن را در metadata معرفی می‌کنند. این نشان جایگزین لوگوی رسمی نیست.

## بررسی‌های موفق

- نصب قبلی وابستگی‌ها از lockfile حفظ شد؛ ESLint، TypeScript و build تولیدی پس از تغییرات موفق بودند.
- ۲۶ مسیر عمومی، در عرض‌های ۳۲۰، ۳۷۵، ۷۶۸، ۱۱۰۰ و ۱۴۴۰ پیکسل: مجموعاً ۱۳۰ حالت روی نسخهٔ تولیدی. پاسخ ۲۰۰، یک عنوان اصلی، زبان و جهت صحیح، و نبود بیرون‌زدگی افقی بررسی شدند.
- در اجرای نهایی، خطای JavaScript، خطای کنسول و درخواست ناموفق منابع مشاهده نشد.
- تصاویر کامل همهٔ صفحات در موبایل و دسکتاپ ثبت و نمای کلی آن‌ها بررسی شد؛ صفحهٔ استعلام در هر پنج اندازهٔ هر دو زبان تصویر دارد.
- منوی موبایل با Enter و Space باز شد؛ Escape آن را بست و فوکوس را برگرداند. کلیک واقعی بیرون، عبور به عرض دسکتاپ و انتخاب لینک نیز منو را بستند. ۱۳ لینک و دسترسی Tab به اولین لینک بررسی شدند.
- لینک پرش به محتوای اصلی با صفحه‌کلید، تغییر زبان با query/hash، باز کردن مقصد زبان در یک تب مستقل، و به‌روزرسانی مقصد پس از تغییر hash موفق بودند.
- هر شش پرسش متداول ERP، برای هر دو زبان و عرض‌های ۳۲۰، ۷۶۸ و ۱۴۴۰، با Enter، Space و کلیک آزمایش شدند؛ نشانگر فوکوس نیز بررسی شد.
- عنوان و توضیح metadata برای همهٔ صفحات، noindex صفحات استعلام/موجودی/قیمت/مشتریان، ۱۸ ورودی sitemap، دسترسی به آیکن و مقصد تمام لینک‌ها و anchorهای داخلی بررسی شدند.

این بررسی‌ها با Chromium روی لینوکس و تغییر اندازهٔ viewport انجام شدند؛ آزمون روی دستگاه فیزیکی، Safari و Firefox انجام نشده است. همهٔ ملاحظات دسترس‌پذیری یا همهٔ حالات تعامل ممکن، صرفاً با این بررسی‌ها اثبات نمی‌شوند.

## فایل‌های سورس

فایل‌های جدید:

- `apps/web/src/components/shared/ArrowIcon.tsx`
- `apps/web/public/kavian-mark.svg`

فایل‌های تغییرکرده:

- `apps/web/src/components/navigation/LanguageSwitcher.tsx`
- `apps/web/src/components/layout/Header.tsx`
- `apps/web/src/components/layout/public-shell.css`
- `apps/web/src/app/[locale]/layout.tsx`
- `apps/web/src/features/home/HomeLink.tsx`
- `apps/web/src/features/home/HomePage.tsx`
- `apps/web/src/features/home/home.css`
- `apps/web/src/features/market/MarketCards.tsx`
- `apps/web/src/features/about/AboutPage.tsx`
- `apps/web/src/features/about/ActivityCard.tsx`
- `apps/web/src/features/contact/ContactPage.tsx`
- `apps/web/src/features/products/ProductsPage.tsx`
- `apps/web/src/features/scrap/ScrapPage.tsx`
- `apps/web/src/features/scrap/SellScrapPage.tsx`
- `apps/web/src/features/warehouse/WarehousePage.tsx`

تغییرات پیکان‌ها در فایل‌های صفحات فقط استفاده از کامپوننت مشترک است. API، دیتابیس، admin، proxy، dependency declarations و lockfile تغییر نکردند. فایل ZIP اصلی در checkout گیت نیز دست‌نخورده باقی ماند؛ سورس قابل توسعه در `/workspace/onboarding/kavian-site-handoff-2026-10-07/source` است.

## تحویل و اجرای مجدد

بستهٔ `kavian-site-reviewed-2026-10-08.zip` شامل سورس کامل به‌روز، راهنمای انتقال، manifest جدید با SHA256، این گزارش و شواهد اجرای بررسی‌هاست. وابستگی‌ها، فایل‌های env واقعی و خروجی‌های build داخل بسته نیستند. `changes.patch` تفاوت سورس با ZIP اولیه را ثبت می‌کند.

پس از استخراج، از پوشهٔ `source` با Node.js 22.12+ و pnpm 11.19.0، `pnpm install --frozen-lockfile` اجرا کنید. برای سایت عمومی نیازی به API یا PostgreSQL نیست. سپس در `source/apps/web`:

```bash
node node_modules/next/dist/bin/next dev --hostname 127.0.0.1
```

دستورهای بررسی از همان پوشه:

```bash
node node_modules/eslint/bin/eslint.js . --no-cache
node node_modules/next/dist/bin/next build
node node_modules/typescript/bin/tsc --noEmit --incremental false
```

## باقی‌مانده و مرحلهٔ بعد

اطلاعات تماس، لوگوی رسمی، تصاویر واقعی انبار و داده‌های تجاری هنوز همان وضعیت موقت بستهٔ قبلی را دارند. سایت در این مرحله روی اینترنت منتشر نشده و قابلیت ارسال یا ذخیرهٔ درخواست اضافه نشده است.

مرحلهٔ بعد پیشنهادی: تکمیل هویت بصری و اطلاعات تماس با لوگو و مشخصات رسمی تأییدشدهٔ مجموعه.
