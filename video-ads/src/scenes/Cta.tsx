import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Scena 4: offerta + rassicurazione COD + call to action pulsante.
export const Cta: React.FC<{ prezzo: string; prezzoBarrato: string; cta: string; accento: string; sfondo: string }> = ({ prezzo, prezzoBarrato, cta, accento, sfondo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 10 } });
  const pulsa = 1 + Math.sin((frame / fps) * Math.PI * 2) * 0.04;
  return (
    <AbsoluteFill style={{ backgroundColor: sfondo, alignItems: "center", justifyContent: "center", padding: "100px 80px", gap: 50, fontFamily: "Arial, sans-serif" }}>
      <div style={{ fontSize: 64, color: "rgba(255,255,255,0.7)", textDecoration: "line-through", fontWeight: 700 }}>{prezzoBarrato}</div>
      <div style={{ fontSize: 200, fontWeight: 900, color: "white", scale: pop, lineHeight: 1 }}>{prezzo}</div>
      <div
        style={{
          fontSize: 50,
          fontWeight: 800,
          color: "#111",
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: 20,
          textAlign: "center",
          opacity: interpolate(frame, [0.4 * fps, 0.7 * fps], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        💶 Paghi alla consegna
        <br />
        🚚 Spedizione gratuita
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "white",
          backgroundColor: accento,
          padding: "36px 70px",
          borderRadius: 100,
          textAlign: "center",
          scale: frame > 0.8 * fps ? pulsa : 0,
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        }}
      >
        {cta}
      </div>
    </AbsoluteFill>
  );
};
