import type { SupportedLocale } from "@kavian/config";
import { companyContact, telephoneHref } from "@/config/company";

export function WarehouseChannels({ locale, contacts = false }: { locale: SupportedLocale; contacts?: boolean }) {
  return <div className="warehouse-channels">
    <ul>{companyContact.warehouseChannels.map(channel => <li key={channel.href}><a href={channel.href} target="_blank" rel="noopener noreferrer">{channel.name[locale]} <span>({locale === "fa" ? "تب جدید" : "new tab"})</span><bdi dir="ltr">{channel.handle}</bdi></a></li>)}</ul>
    {contacts && <dl className="warehouse-contact-roles">{companyContact.warehouseContacts.map(contact => <div key={contact.number}><dt>{contact.role[locale]}</dt><dd><a href={telephoneHref(contact.number)}><bdi dir="ltr">{contact.number}</bdi></a></dd></div>)}</dl>}
  </div>;
}
