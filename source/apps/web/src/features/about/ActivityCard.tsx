import { ArrowIcon } from "@/components/shared/ArrowIcon";
import Link from "next/link";
import type { SupportedLocale } from "@kavian/config";

type Activity = { title: string; text: string; link: string; path: string };

export function ActivityCard({ activity, locale, index }: { activity: Activity; locale: SupportedLocale; index: number }) {
  return <article className="about-activity"><span className="about-activity-number" aria-hidden="true">0{index + 1}</span><h3>{activity.title}</h3><p>{activity.text}</p><Link href={`/${locale}${activity.path}`}>{activity.link}<ArrowIcon /></Link></article>;
}
