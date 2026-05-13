export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 text-[11px] font-semibold rounded-full uppercase tracking-widest border border-orange-100">
      {children}
    </span>
  );
}
