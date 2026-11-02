import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

// Scena 3: prodotto + benefici che entrano uno alla volta.
export const Prodotto: React.FC<{ nome: string; benefici: string[]; immagine: string; accento: string }> = ({ nome, benefici, immagine, accento }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrata = spring({ frame, fps, config: { damping: 14 } });
  return (
    <AbsoluteFill style={{ backgroundColor: "#f5f5f5", alignItems: "center", justifyContent: "center", padding: "100px 80px", gap: 40 }}>
      <div style={{ fontFamily: "Arial Black, Arial, sans-serif", fontWeight: 900, fontSize: 84, color: "#111", textAlign: "center", opacity: entrata }}>
        {nome}
      </div>
      <Img
        src={immagine.startsWith("http") ? immagine : staticFile(immagine)}
        style={{
          width: 620,
          height: 620,
          objectFit: "contain",
          scale: interpolate(entrata, [0, 1], [0.6, 1]),
          rotate: `${interpolate(frame, [0, 4 * fps], [-4, 4])}deg`,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 22, width: "100%" }}>
        {benefici.map((b, i) => {
          const start = 0.6 * fps + i * 0.5 * fps;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: 52,
                color: "#111",
                opacity: interpolate(frame, [start, start + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                translate: `${interpolate(frame, [start, start + 10], [-80, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px 0`,
              }}
            >
              <span style={{ backgroundColor: accento, color: "white", borderRadius: 40, width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
              {b}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
