import type { SupportedLocale } from "@kavian/config";
import "./erp.css";

const content = {
  fa: {
    title: "پرسش‌های متداول", intro: "پیش از شروع طراحی سامانه، این موارد را با هم روشن می‌کنیم.",
    items: [
      { question: "آیا سامانه فقط برای فولاد و ضایعات است؟", answer: "خیر. طراحی سامانه از شناخت فرایند کسب‌وکار آغاز می‌شود و می‌تواند برای مشاغل مختلف بررسی شود. مراحل کار، اصطلاحات و گزارش‌های مورد نیاز هر مجموعه در تعریف راهکار لحاظ می‌شوند." },
      { question: "برای شروع چه اطلاعاتی لازم است؟", answer: "شرح فعالیت مجموعه، مراحل فعلی کار، کاربران درگیر، ابزارهای مورد استفاده و مسئله‌هایی که می‌خواهید حل شوند، نقطه‌ی شروع گفت‌وگو هستند. یک نمونه از مسیر واقعی انجام کار نیز به شناخت نیاز کمک می‌کند." },
      { question: "امکانات سامانه چگونه مشخص می‌شوند؟", answer: "پس از بررسی نیاز، امکانات، اولویت‌ها و معیارهای پذیرش در دامنه‌ی توافق‌شده مشخص می‌شوند. حوزه‌های معرفی‌شده در این صفحه برای توضیح رویکرد طراحی هستند؛ امکانات هر پروژه باید جداگانه تعریف شوند." },
      { question: "آیا می‌توان توسعه را مرحله‌ای انجام داد؟", answer: "می‌توان در تعریف پروژه، فرایندهای اولویت‌دار را برای مرحله‌ی نخست مشخص کرد و مراحل بعدی را بر اساس نیاز و نتیجه‌ی بررسی کاربران برنامه‌ریزی کرد. دامنه‌ی هر مرحله باید روشن و مورد توافق باشد." },
      { question: "زمان و هزینه‌ی اجرا چگونه تعیین می‌شوند؟", answer: "زمان و هزینه به دامنه، پیچیدگی فرایندها، تعداد کاربران و نیازهای اتصال یا انتقال اطلاعات وابسته‌اند. برآورد پس از بررسی نیاز و تعریف دامنه انجام می‌شود؛ در این صفحه زمان یا قیمت ثابت اعلام نشده است." },
      { question: "آیا انتقال اطلاعات و اتصال به نرم‌افزارهای دیگر ممکن است؟", answer: "این نیاز باید در بررسی اولیه مطرح شود. امکان و دامنه‌ی اتصال یا انتقال اطلاعات به ساختار داده، دسترسی‌های مجاز و امکانات نرم‌افزارهای موجود بستگی دارد و پیش از تعهد به اجرا بررسی می‌شود." },
    ],
  },
  en: {
    title: "Frequently asked questions", intro: "These points help define the project before system design begins.",
    items: [
      { question: "Is the system only for steel and scrap businesses?", answer: "No. System design starts with understanding business workflows and can be explored across different industries. Each organization’s working stages, terminology and reporting needs inform the solution." },
      { question: "What information is needed to get started?", answer: "Your business activities, current workflows, users, existing tools and the problems you want to solve are the starting points. An example of how work is actually completed also helps clarify requirements." },
      { question: "How are system features defined?", answer: "Requirements discovery informs the agreed features, priorities and acceptance criteria. The areas shown on this page explain the design approach; each project’s features must be defined separately." },
      { question: "Can development be delivered in stages?", answer: "Priority workflows can be identified for an initial stage, with later stages planned around requirements and user feedback. The scope of each stage should be clear and agreed." },
      { question: "How are implementation time and cost determined?", answer: "Time and cost depend on scope, workflow complexity, users and integration or data migration needs. Estimates follow requirements discovery and scope definition; this page does not offer fixed pricing or delivery times." },
      { question: "Can existing data be migrated or other software connected?", answer: "These requirements should be raised during initial discovery. Feasibility and scope depend on data structures, authorized access and the capabilities of existing software, and are assessed before implementation commitments are made." },
    ],
  },
};

export function ErpFaq({ locale }: { locale: SupportedLocale }) {
  const text = content[locale];
  return <section className="container home-section erp-faq" aria-labelledby="erp-faq-title"><div className="home-section-heading"><h2 id="erp-faq-title">{text.title}</h2><p>{text.intro}</p></div><div className="erp-faq-list">{text.items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>;
}
