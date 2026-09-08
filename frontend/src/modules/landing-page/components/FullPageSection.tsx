import { type ReactNode } from "react";
import AuroraBackdrop from "./AuroraBackdrop";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

type FullPageSectionProps = {
  id: string;
  backgroundColor: string;
  children: ReactNode;
  contentClassName?: string;
  /** Renders the decorative aurora/grid backdrop behind the section. */
  aurora?: boolean;
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function FullPageSection({
  id,
  backgroundColor,
  children,
  contentClassName = "",
  aurora = false,
}: FullPageSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full h-dvh min-h-dvh shrink-0 overflow-hidden"
      style={{ backgroundColor }}
    >
      {aurora && <AuroraBackdrop />}
      <div className="relative h-full overflow-y-auto overscroll-contain">
        <div
          className={`min-h-full flex items-center justify-center py-20 sm:py-24 ${contentClassName}`}
        >
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
