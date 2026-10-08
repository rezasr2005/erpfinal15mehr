type ScrapGroup = { title: string; text: string; details: string };

export function ScrapGroupCard({ group, index, detailLabel }: { group: ScrapGroup; index: number; detailLabel: string }) {
  return <article className="scrap-group-card"><span className="scrap-group-number" aria-hidden="true">0{index + 1}</span><h3>{group.title}</h3><p>{group.text}</p><dl><dt>{detailLabel}</dt><dd>{group.details}</dd></dl></article>;
}
