/**
 * Shared footer for project grid cards that open the detail dialog.
 */
export function ProjectCardFooter({ title }: { title: string }) {
  return (
    <div className="mt-auto pt-3">
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-xs font-medium text-white/30">
        Click to view details ↗
      </div>
    </div>
  );
}
