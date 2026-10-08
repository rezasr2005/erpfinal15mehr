import type { SupportedLocale } from "@kavian/config";
import { CatalogNotice } from "@/components/shared/CatalogNotice";
import { HomeLink } from "../home/HomeLink";
import { clientsContent } from "./content";
import "../home/home.css";
import "../market/market.css";
import "./clients.css";

export function ClientsPage({ locale }: { locale: SupportedLocale }) {
  const text = clientsContent[locale];
  return <main className="home-page">
    <section className="container market-hero"><p className="home-eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.intro}</p><CatalogNotice locale={locale} /></section>
    <section className="container home-section" aria-labelledby="client-groups"><h2 id="client-groups">{text.groupsTitle}</h2><div className="clients-groups">{text.groups.map((group) => <article className="sector-card" key={group.title}><h3>{group.title}</h3><p>{group.text}</p></article>)}</div></section>
    <section className="home-tools" aria-labelledby="client-names"><div className="container"><h2 id="client-names">{text.namesTitle}</h2><p className="clients-intro">{text.namesIntro}</p><ul className="clients-list">{text.names.map((name) => <li key={name}>{name}</li>)}</ul></div></section>
    <section className="container home-section"><h2>{text.ctaTitle}</h2><p className="clients-intro">{text.ctaText}</p><div className="home-actions"><HomeLink href={`/${locale}/contact`}>{text.contact}</HomeLink><HomeLink secondary href={`/${locale}/about`}>{text.about}</HomeLink></div></section>
  </main>;
}
