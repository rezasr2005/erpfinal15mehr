export const pendingContent = {
  fa: {
    label: "در حال آماده‌سازی", home: "بازگشت به خانه", related: "مسیر مرتبط", brand: "هلدینگ فولاد کاویان سپنتا",
    pages: {
      inventory: { title: "موجودی روز", description: "اطلاعات موجودی تأییدشده هنوز منتشر نشده است. تا آماده‌شدن این بخش، می‌توانید با گروه‌های محصولات آشنا شوید.", path: "/products", link: "معرفی محصولات" },
      prices: { title: "قیمت روز", description: "هنوز قیمت تأییدشده‌ای در این بخش منتشر نشده است. بخش بازار، چارچوب نمایش نرخ‌ها و اطلاعات مورد نیاز هر نرخ را معرفی می‌کند.", path: "/market#rates", link: "بخش نرخ‌های بازار" },
      inquiry: { title: "استعلام قیمت", description: "ثبت و ارسال درخواست آنلاین هنوز فعال نیست. برای آماده‌کردن مشخصات نیاز خود، راهنماهای صفحه تماس را ببینید. اطلاعات تماس رسمی نیز پس از تکمیل منتشر می‌شود.", path: "/contact", link: "راهنمای تماس و آماده‌سازی درخواست" },
      clients: { title: "مشتریان و پروژه‌ها", description: "معرفی مشتریان و پروژه‌ها پس از تأیید اطلاعات و مجوز انتشار تکمیل می‌شود. فعلاً می‌توانید معرفی هلدینگ را مطالعه کنید.", path: "/about", link: "درباره هلدینگ" },
    },
  },
  en: {
    label: "In preparation", home: "Back to home", related: "Related section", brand: "Kavian Sepanta Steel Holding",
    pages: {
      inventory: { title: "Daily inventory", description: "Verified inventory information has not been published yet. You can explore the product groups while this section is being prepared.", path: "/products", link: "Explore products" },
      prices: { title: "Daily prices", description: "No verified prices have been published in this section yet. The market section introduces the framework and details needed for each rate.", path: "/market#rates", link: "Market rates section" },
      inquiry: { title: "Request a quote", description: "Online request submission is not active yet. Visit the contact page for guides to preparing your requirements. Official contact details will be published once confirmed.", path: "/contact", link: "Contact and requirements guides" },
      clients: { title: "Clients & projects", description: "Client and project introductions will be added once information and publication permissions are confirmed. You can read the holding introduction in the meantime.", path: "/about", link: "About the holding" },
    },
  },
};

export type PendingPageKey = keyof typeof pendingContent.fa.pages;
