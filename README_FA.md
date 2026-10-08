# سایت کاویان — آماده‌سازی انتشار

سورس جاری سایت در `source/` است. بسته‌های ZIP قدیمی برای حفظ سابقه باقی مانده‌اند؛ برای ادامه از `source` استفاده کنید. سایت عمومی فارسی و انگلیسی در `source/apps/web` قرار دارد. راهنمای وضعیت و مراحل قبلی در `handoff/` است.

## اجرای محلی در ویندوز

Node.js نسخهٔ 22.12 یا جدیدتر نصب کنید؛ این نسخه با Node.js 24.19.0 و pnpm 11.19.0 بررسی شده است. سپس PowerShell یا CMD را در پوشهٔ `source` باز کنید:

```powershell
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
Copy-Item apps/web/.env.example apps/web/.env.local
pnpm --filter @kavian/web dev
```

در CMD به‌جای Copy-Item از `copy apps\web\.env.example apps\web\.env.local` استفاده کنید.

آدرس‌ها: http://localhost:3000/fa و http://localhost:3000/en.

برای اجرای نسخهٔ تولیدی، سرور توسعه را با Ctrl+C متوقف کنید و از همان `source` اجرا کنید:

```powershell
pnpm --filter @kavian/web build
pnpm --filter @kavian/web start
```

برای سایت عمومی نیازی به اجرای API، PostgreSQL یا Docker ندارید. وابستگی‌ها داخل ZIP نیستند و نصب اولیه اینترنت لازم دارد. اگر نصب با نسخه‌های lockfile شکست خورد، متن خطا را نگه دارید؛ نسخه‌ها را خودسرانه تغییر ندهید.

## تنظیمات انتشار

در `source/apps/web/.env.local` یا پنل محیط میزبان، پیش از build مقدار زیر را تنظیم کنید:

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.fooladkavian.com
```

این دامنه از اطلاعات موجود شرکت گرفته شده است؛ هنگام اتصال هاست باید دامنهٔ اصلی www یا بدون www تعیین و دامنهٔ دیگر به آن redirect شود. متغیر فقط origin است: بدون مسیر، query یا hash. برای اجرای محلی مقدار نمونهٔ localhost صحیح است. اگر متغیر تنظیم نشود، دامنهٔ وب‌سایت ثبت‌شدهٔ شرکت استفاده می‌شود. تغییر مقدار نیازمند build دوباره است.

مسیر پروژه برای میزبان Node.js: `source`؛ دستور نصب: `pnpm install --frozen-lockfile`؛ دستور ساخت: `pnpm --filter @kavian/web build`؛ دستور اجرا: `pnpm --filter @kavian/web start`. تنظیم PORT در پنل میزبان توسط Next.js خوانده می‌شود. HTTPS و اتصال DNS باید روی میزبان تنظیم شوند. این برنامه static export نیست و برای انتشار به میزبان سازگار با Next.js/Node.js نیاز دارد.

## وضعیت تحویل

اطلاعات تماس و لوگو موجودند. اطلاعات تاریخی کاتالوگ همچنان موقت و برچسب‌گذاری‌شده‌اند. قیمت و موجودی زنده، مزایدهٔ واقعی و ارسال فرم هنوز پیاده‌سازی نشده‌اند. صفحات inquiry/inventory/prices/clients همچنان noindex هستند. ساعات پاسخ‌گویی و تصاویر واقعی انبار هنوز در انتظار تکمیل‌اند.

در این مرحله سایت روی اینترنت منتشر نشده است. قدم بعد، انتخاب/معرفی میزبان و اجرای آزمایشی آن است؛ سپس اتصال دامنه و بررسی HTTPS و مسیرهای فارسی/انگلیسی.
