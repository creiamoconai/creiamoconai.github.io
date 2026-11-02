import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Scena 1: hook. Deve fermare lo scroll nei primi 1-2 secondi.
export const Hook: React.FC<{ testo: string; accento: string; sfondo: string }> = ({ testo, accento, sfondo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const parole = testo.split(" ");
  return (
    <AbsoluteFill style={{ backgroundColor: sfondo, justifyContent: "center", padding: "0 80px" }}>
      <div style={{ fontFamily: "Arial Black, Arial, sans-serif", fontWeight: 900, fontSize: 110, lineHeight: 1.05, color: "white", textAlign: "center" }}>
        {parole.map((p, i) => {
          const start = i * 0.12 * fps;
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight: 24,
                color: i === parole.length - 1 ? accento : "white",
                opacity: interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                scale: interpolate(frame, [start, start + 8], [1.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) }),
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
