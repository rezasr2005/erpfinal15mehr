import Image from "next/image";

export function CompanyLogo({ className, sizes = "(max-width: 599px) 40px, 48px" }: { className: string; sizes?: string }) {
  return <span className={className} aria-hidden="true"><Image src="/kavian-logo.jpg" alt="" width={64} height={64} sizes={sizes} loading="eager" /></span>;
}
