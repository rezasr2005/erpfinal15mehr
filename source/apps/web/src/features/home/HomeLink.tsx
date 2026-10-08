import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export function HomeLink({ href, children, secondary = false }: PropsWithChildren<{ href: string; secondary?: boolean }>) {
  return <Link href={href} className={`home-link${secondary ? " home-link-secondary" : ""}`}>{children}<ArrowIcon /></Link>;
}
