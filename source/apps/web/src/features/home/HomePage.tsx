import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";
import { homeContent } from "./content";
import { HomeLink } from "./HomeLink";
import { SteelArtwork } from "./SteelArtwork";
import { MarketCards } from "../market/MarketCards";
import { marketContent } from "../market/content";
import "../market/market.css";
import "./home.css";

export function HomePage({ locale }: { locale: SupportedLocale }) {
  const text = homeContent[locale];
  const market = marketContent[locale];
  const href = (path: string) => `/${locale}${path}`;
  return <main className="home-page">
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-copy"><p className="home-eyebrow">{text.eyebrow}</p><h1 id="home-title">{text.title}</h1><p className="hero-description">{text.heroText}</p><div className="home-actions"><HomeLink href={href("/market")}>{text.marketLink}</HomeLink><HomeLink secondary href={href("/erp")}>{text.erpLink}</HomeLink></div><a href="#home-market" className="hero-explore">{market.heading}<ArrowIcon down /></a></div>
        <SteelArtwork caption={text.visualCaption} />
      </div>
    </section>
    <section id="home-market" className="container home-section" aria-labelledby="market-title"><p className="home-eyebrow">{market.title}</p><div className="home-section-heading"><h2 id="market-title">{market.heading}</h2><p>{market.intro}</p></div><MarketCards locale={locale} /></section>
    <section className="home-erp"><div className="container home-section home-about"><div><p className="home-eyebrow">{market.erpLabel}</p><h2>{market.erpTitle}</h2></div><div><p className="about-description">{market.erpText}</p><HomeLink href={href("/erp")}>{market.erpLink}</HomeLink></div></div></section>
    <section id="home-sectors" className="container home-section" aria-labelledby="sectors-title">
      <p className="home-eyebrow">{text.sectorLabel}</p><div className="home-section-heading"><h2 id="sectors-title">{text.sectorTitle}</h2><p>{text.sectorText}</p></div>
      <div className="sector-grid">{text.sectors.map((sector, index) => <article className="sector-card" key={sector.path}><span className="sector-number" aria-hidden="true">0{index + 1}</span><h3>{sector.title}</h3><p>{sector.text}</p><Link href={href(sector.path)} className="sector-link">{sector.link}<ArrowIcon /></Link></article>)}</div>
    </section>
    <section className="home-tools" aria-labelledby="tools-title"><div className="container"><p className="home-eyebrow">{text.toolsLabel}</p><h2 id="tools-title">{text.toolsTitle}</h2><div className="tools-grid">{text.tools.map((tool) => <Link href={href(tool.path)} className="tool-link" key={tool.path}><div><h3>{tool.title}</h3><p>{tool.text}</p></div><ArrowIcon /></Link>)}</div></div></section>
    <section className="container home-section home-about" aria-labelledby="about-title"><div><p className="home-eyebrow">{text.aboutLabel}</p><h2 id="about-title">{text.aboutTitle}</h2></div><div><p className="about-description">{text.aboutText}</p><div className="home-actions"><HomeLink href={href("/about")}>{text.aboutLink}</HomeLink><HomeLink secondary href={href("/clients")}>{text.clientsLink}</HomeLink></div></div></section>
    <section className="home-cta" aria-labelledby="cta-title"><div className="container cta-grid"><div><p className="home-eyebrow">{text.ctaLabel}</p><h2 id="cta-title">{text.ctaTitle}</h2><p>{text.ctaText}</p></div><div className="home-actions"><HomeLink href={href("/inquiry")}>{text.quote}</HomeLink><HomeLink secondary href={href("/contact")}>{text.contactLink}</HomeLink></div></div></section>
  </main>;
}
