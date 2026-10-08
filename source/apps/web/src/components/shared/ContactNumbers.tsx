import type { SupportedLocale } from "@kavian/config";
import { companyContact, telephoneHref } from "@/config/company";

export function ContactNumbers({ locale }: { locale: SupportedLocale }) {
  return <div className="contact-numbers">
    <p>{locale === "fa" ? "دفتر مرکزی" : "Head office"}</p>
    <ul>{companyContact.officePhones.map((number) => <li key={number}><a href={telephoneHref(number)}><bdi dir="ltr">{number}</bdi></a></li>)}</ul>
    <p>{locale === "fa" ? "مدیرعامل و مؤسس" : "CEO & founder"}</p>
    <a href={telephoneHref(companyContact.founderPhone)}><bdi dir="ltr">{companyContact.founderPhone}</bdi></a>
  </div>;
}
