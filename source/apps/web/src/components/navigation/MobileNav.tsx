"use client";

import { useEffect, useRef, useState } from "react";
import type { SupportedLocale } from "@kavian/config";
import { MainNav } from "./MainNav";
import { messages } from "./messages";

export function MobileNav({ locale }: { locale: SupportedLocale }) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <div className="mobile-navigation" ref={container}>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? messages[locale].closeMenu : messages[locale].openMenu} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      <div id="mobile-menu" className="mobile-panel" hidden={!open}>
        <MainNav locale={locale} onNavigate={() => setOpen(false)} />
      </div>
    </div>
  );
}
