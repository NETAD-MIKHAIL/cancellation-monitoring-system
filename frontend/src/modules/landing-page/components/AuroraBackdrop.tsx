/* ------------------------------------------------------------------ */
/*  AuroraBackdrop                                                    */
/*  ------------------------------------------------------------------ */
/*  A decorative, non-interactive background layer evoking the "Hangar"
 *  AI-agent homepage style: soft teal "aurora" orbs over a faint dotted
 *  grid. Designed for light cream/teal sections (preserves the brand
 *  palette — #92C7CF / #AAD7D9 / cream) without the dark theme.
 *  Rendered behind content; always pointer-events-none.                */
/* ------------------------------------------------------------------ */

interface AuroraBackdropProps {
  className?: string;
}

export default function AuroraBackdrop({ className = "" }: AuroraBackdropProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Faint dotted grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(146, 199, 207, 0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Aurora orbs */}
      <div
        className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(170, 215, 217, 0.55) 0%, rgba(170, 215, 217, 0) 70%)",
        }}
      />
      <div
        className="absolute -right-28 top-1/3 h-[26rem] w-[26rem] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(146, 199, 207, 0.40) 0%, rgba(146, 199, 207, 0) 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 left-1/4 h-[30rem] w-[30rem] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(229, 225, 218, 0.55) 0%, rgba(229, 225, 218, 0) 70%)",
        }}
      />
    </div>
  );
}