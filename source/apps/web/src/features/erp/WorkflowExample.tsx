import type { SupportedLocale } from "@kavian/config";
import "./erp.css";

const examples = {
  fa: {
    label: "یک سناریوی توضیحی", title: "از خرید تا تحویل، در یک مسیر مشخص",
    intro: "فرض کنید یک مجموعه بازرگانی کالا می‌خرد، در انبار نگهداری می‌کند و به مشتری تحویل می‌دهد. این نمونه نشان می‌دهد چه ارتباط‌هایی می‌تواند در طراحی سامانه بررسی شود؛ نمونه‌کار اجراشده یا فهرست امکانات آماده نیست.",
    stages: [
      { title: "خرید و توافق", text: "مشخصات کالا، تأمین‌کننده و شرایط توافق به سفارش خرید مرتبط می‌شوند.", question: "چه چیزی، از چه کسی و با چه شرایطی خریداری شده؟" },
      { title: "دریافت و موجودی", text: "دریافت کالا با سفارش مقایسه می‌شود و محل نگهداری و مقدار قابل عرضه مشخص می‌شوند.", question: "چه مقدار دریافت شده و در کدام محل قرار دارد؟" },
      { title: "فروش و تحویل", text: "سفارش مشتری به کالای قابل عرضه و روند آماده‌سازی و تحویل مرتبط می‌شود.", question: "کدام سفارش در انتظار آماده‌سازی یا تحویل است؟" },
      { title: "پیگیری و گزارش", text: "وضعیت سفارش‌ها و اسناد مرتبط، مبنای تعریف گزارش‌های مورد نیاز مدیران می‌شوند.", question: "کدام مرحله نیاز به پیگیری دارد؟" },
    ],
    adaptationTitle: "همین نگاه، متناسب با شغل شما", adaptationText: "در تولید، مسیر مواد اولیه تا محصول بررسی می‌شود؛ در خدمات، درخواست تا انجام کار؛ و در توزیع، سفارش تا تحویل. واژه‌ها، مراحل و گزارش‌ها باید با فرایند واقعی هر کسب‌وکار تعریف شوند.",
  },
  en: {
    label: "An illustrative scenario", title: "From purchasing to delivery, in one clear workflow",
    intro: "Imagine a trading business that purchases goods, stores them and delivers them to customers. This example illustrates connections to explore during system design; it is not a completed case study or a list of ready-made features.",
    stages: [
      { title: "Purchase & agreement", text: "Product specifications, supplier details and agreed terms are connected to the purchase order.", question: "What was purchased, from whom and on what terms?" },
      { title: "Receipt & inventory", text: "Received goods are compared with the order, with storage locations and available quantities identified.", question: "How much was received and where is it stored?" },
      { title: "Sales & delivery", text: "The customer order is connected to available goods and the preparation and delivery workflow.", question: "Which orders are awaiting preparation or delivery?" },
      { title: "Follow-up & reporting", text: "Order status and related records inform the management reports that need to be defined.", question: "Which stage needs attention?" },
    ],
    adaptationTitle: "The same approach, shaped around your industry", adaptationText: "In manufacturing, explore raw materials through finished products; in services, requests through completed work; in distribution, orders through delivery. Terminology, stages and reports should reflect each business’s actual processes.",
  },
};

export function WorkflowExample({ locale }: { locale: SupportedLocale }) {
  const text = examples[locale];
  return <section className="erp-workflow" aria-labelledby="erp-workflow-title"><div className="container home-section">
    <p className="home-eyebrow">{text.label}</p><div className="home-section-heading"><h2 id="erp-workflow-title">{text.title}</h2><p>{text.intro}</p></div>
    <ol className="erp-workflow-grid">{text.stages.map((stage, index) => <li key={stage.title}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p><p className="erp-workflow-question">{stage.question}</p></li>)}</ol>
    <div className="erp-adaptation"><h3>{text.adaptationTitle}</h3><p>{text.adaptationText}</p></div>
  </div></section>;
}
