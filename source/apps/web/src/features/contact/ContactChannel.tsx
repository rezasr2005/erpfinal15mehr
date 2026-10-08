import type { ReactNode } from "react";

export function ContactChannel({ title, text, pending, children }: { title: string; text: string; pending: string; children?: ReactNode }) {
  return <article className="contact-channel"><h3>{title}</h3><div className="contact-channel-value">{children ?? <p className="contact-placeholder">{pending}</p>}</div><p>{text}</p></article>;
}
