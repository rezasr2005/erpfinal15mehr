type ProductGroup = { title: string; text: string; label: string; details: string };

export function ProductGroupCard({ group, index }: { group: ProductGroup; index: number }) {
  return <article className="product-group-card">
    <span className="product-group-number" aria-hidden="true">0{index + 1}</span>
    <h3>{group.title}</h3><p>{group.text}</p>
    <dl><dt>{group.label}</dt><dd>{group.details}</dd></dl>
  </article>;
}
