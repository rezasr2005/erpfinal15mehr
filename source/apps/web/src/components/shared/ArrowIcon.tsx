export function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <span className={`link-arrow${down ? " link-arrow-down" : ""}`} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        <path d={down ? "M12 5v14m-6-6 6 6 6-6" : "M7 17 17 7M7 7h10v10"} />
      </svg>
    </span>
  );
}
